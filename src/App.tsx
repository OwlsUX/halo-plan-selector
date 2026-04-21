import React, { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group';
import { Label } from './components/ui/label';
import { Input } from './components/ui/input';
import { Checkbox } from './components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { Minus, Plus, Check, ChevronLeft, Shield, RefreshCcw, Sparkles, CreditCard, Lock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import imgHaloCollars from "figma:asset/70789ca931e331830275c01e475d2645453f4ce1.png";
import VersionSelector from './VersionSelector';
import AppV4 from './AppV4';

type BillingFrequency = 'monthly' | 'annual' | 'two-year';
type PlanType = 'bronze' | 'silver' | 'gold';
type Step = 'plans' | 'halocare' | 'summary' | 'checkout';

const planPrices = {
  bronze: { monthly: 9.99, annual: 101.89, twoYear: 191.81 },
  silver: { monthly: 14.99, annual: 152.84, twoYear: 287.81 },
  gold: { monthly: 19.99, annual: 203.90, twoYear: 383.81 }
};

const haloCarePrices = {
  monthly: 9.99,
  annual: 101.89,
  twoYear: 191.81
};

export default function App() {
  // Version selection state
  const [selectedVersion, setSelectedVersion] = useState<1 | 2 | null>(null);

  // If no version selected, show version selector
  if (selectedVersion === null) {
    return <VersionSelector onSelectVersion={setSelectedVersion} />;
  }

  if (selectedVersion === 2) {
    return <AppV4 />;
  }

  // Otherwise, render Version 1 (multi-step) below
  return <AppV1MultiStep />;
}

// Version 1 Multi-Step Component
function AppV1MultiStep() {
  const [currentStep, setCurrentStep] = useState<Step>('plans');
  const [collarCount, setCollarCount] = useState(1);
  const [billingFrequency, setBillingFrequency] = useState<BillingFrequency>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('silver');
  const [haloCareEnabled, setHaloCareEnabled] = useState<boolean | null>(null);
  const [showHaloCareError, setShowHaloCareError] = useState(false);

  // Force scroll to top when step changes (Safari mobile fix)
  useEffect(() => {
    // Multiple approaches for Safari compatibility
    const scrollToTop = () => {
      try {
        // Method 1: Immediate scroll
        window.scrollTo(0, 0);
        
        // Method 2: Document element scroll
        if (document.documentElement) {
          document.documentElement.scrollTop = 0;
        }
        
        // Method 3: Body scroll
        if (document.body) {
          document.body.scrollTop = 0;
        }
        
        // Method 4: For iOS Safari specifically
        if (window.pageYOffset !== undefined) {
          window.pageYOffset = 0;
        }
      } catch (error) {
        console.warn('Scroll to top failed:', error);
      }
    };

    // Immediate scroll
    scrollToTop();
    
    // Delayed scroll for Safari (after DOM updates)
    const timeoutId = setTimeout(scrollToTop, 50);
    
    return () => clearTimeout(timeoutId);
  }, [currentStep]);

  // PRICE FORMATTING SYSTEM - Added safety check
  const displayPrice = (price: number | undefined): string => {
    if (typeof price !== 'number' || isNaN(price)) {
      return '$0.00';
    }
    return '$' + price.toFixed(2);
  };

  const getMonthlyEquivalentPrice = (plan: PlanType): number => {
    const basePrice = planPrices[plan];
    if (!basePrice) return 0;
    
    switch (billingFrequency) {
      case 'monthly': return basePrice.monthly || 0;
      case 'annual': return (basePrice.annual || 0) / 12;
      case 'two-year': return (basePrice.twoYear || 0) / 24;
      default: return basePrice.monthly || 0;
    }
  };

  const getBillingLabel = (frequency: BillingFrequency): string => {
    switch (frequency) {
      case 'monthly': return 'mo';
      case 'annual': return 'year';
      case 'two-year': return '2 years';
      default: return 'mo';
    }
  };

  const getCurrentPlanPrice = (): number => {
    const basePrice = planPrices[selectedPlan];
    if (!basePrice) return 0;
    
    switch (billingFrequency) {
      case 'monthly': return basePrice.monthly || 0;
      case 'annual': return basePrice.annual || 0;
      case 'two-year': return basePrice.twoYear || 0;
      default: return basePrice.monthly || 0;
    }
  };

  const getAdditionalCollarPrice = (): number => {
    // Bronze: +$3.99/mo, Silver/Gold: +$4.99/mo for monthly
    // For annual and 2-year, we need to calculate the equivalent rates
    let monthlyRate: number;
    
    if (selectedPlan === 'bronze') {
      monthlyRate = 3.99;
    } else if (selectedPlan === 'silver' || selectedPlan === 'gold') {
      monthlyRate = 4.99;
    } else {
      monthlyRate = 4.99; // Default to higher rate
    }
    
    switch (billingFrequency) {
      case 'monthly': return monthlyRate;
      case 'annual': return monthlyRate * 12 * 0.85; // Apply 15% discount
      case 'two-year': return monthlyRate * 24 * 0.80; // Apply 20% discount
      default: return monthlyRate;
    }
  };

  const calculatePlanTotal = (): number => {
    const basePrice = getCurrentPlanPrice();
    const additionalCollarPrice = getAdditionalCollarPrice();
    const additionalCollars = Math.max(0, collarCount - 1);
    
    return (basePrice || 0) + ((additionalCollarPrice || 0) * additionalCollars);
  };

  const getCurrentHaloCarePrice = (): number => {
    switch (billingFrequency) {
      case 'monthly': return haloCarePrices.monthly || 0;
      case 'annual': return haloCarePrices.annual || 0;
      case 'two-year': return haloCarePrices.twoYear || 0;
      default: return haloCarePrices.monthly || 0;
    }
  };

  const getHaloCareTierDiscount = () => {
    switch (selectedPlan) {
      case 'bronze': return { percentage: '67%', savings: '$400' };
      case 'silver': return { percentage: '70%', savings: '$420' };
      case 'gold': return { percentage: '75%', savings: '$450' };
      default: return { percentage: '67%', savings: '$400' };
    }
  };

  const getHaloCarePricing = () => {
    switch (selectedPlan) {
      case 'bronze': return { replacementCost: '$199', upgradeCost: '$199', originalValue: '$599', discountPercent: '67%' };
      case 'silver': return { replacementCost: '$179', upgradeCost: '$179', originalValue: '$599', discountPercent: '70%' };
      case 'gold': return { replacementCost: '$149', upgradeCost: '$149', originalValue: '$599', discountPercent: '75%' };
      default: return { replacementCost: '$199', upgradeCost: '$199', originalValue: '$599', discountPercent: '67%' };
    }
  };

  const getHaloCareMonthlyEquivalent = (): number => {
    switch (billingFrequency) {
      case 'monthly': return haloCarePrices.monthly || 0;
      case 'annual': return (haloCarePrices.annual || 0) / 12;
      case 'two-year': return (haloCarePrices.twoYear || 0) / 24;
      default: return haloCarePrices.monthly || 0;
    }
  };

  const calculateTotal = (): number => {
    const planTotal = calculatePlanTotal();
    const haloCareTotal = haloCareEnabled ? (getCurrentHaloCarePrice() * collarCount) : 0;
    return (planTotal || 0) + (haloCareTotal || 0);
  };

  const calculateSavings = (): number => {
    if (billingFrequency === 'monthly') return 0;
    
    const monthlyPlanPrice = planPrices[selectedPlan]?.monthly || 0;
    const monthlyAdditionalCollarPrice = selectedPlan === 'bronze' ? 3.99 : 4.99;
    const additionalCollars = Math.max(0, collarCount - 1);
    
    const monthlyTotal = monthlyPlanPrice + (monthlyAdditionalCollarPrice * additionalCollars);
    const currentTotal = calculatePlanTotal();
    
    if (billingFrequency === 'annual') {
      return (monthlyTotal * 12) - currentTotal;
    } else if (billingFrequency === 'two-year') {
      return (monthlyTotal * 24) - currentTotal;
    }
    
    return 0;
  };

  const getSavingsText = (): string | null => {
    const savings = calculateSavings();
    if (savings <= 0) return null;
    
    if (billingFrequency === 'annual') {
      return `You're saving ${displayPrice(savings)} with annual billing!`;
    } else if (billingFrequency === 'two-year') {
      return `You're saving ${displayPrice(savings)} with 2-year billing!`;
    }
    
    return null;
  };

  const getStepNumber = (step: Step): number => {
    switch (step) {
      case 'plans': return 1;
      case 'halocare': return 2;
      case 'summary': return 3;
      case 'checkout': return 4;
      default: return 1;
    }
  };



  // Handler for payment flow (to be implemented)
  const handleProceedToPayment = () => {
    setCurrentStep('checkout');
  };

  const ProgressIndicator = () => {
    const currentStepNum = getStepNumber(currentStep);
    const totalSteps = 4; // 4 steps in flow
    
    const handleBack = () => {
      if (currentStep === 'halocare') {
        setCurrentStep('plans');
      } else if (currentStep === 'summary') {
        setCurrentStep('halocare');
      } else if (currentStep === 'checkout') {
        setCurrentStep('summary');
      }
    };
    
    return (
      <div className="px-6 py-6 lg:px-8 lg:py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              {currentStep !== 'plans' && (
                <button 
                  onClick={handleBack}
                  className="p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  aria-label="Go back"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}
              <span className="text-sm text-gray-600">Step {currentStepNum} of {totalSteps}</span>
            </div>
            <span className="text-sm text-gray-600">{Math.round((currentStepNum / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-primary h-full rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${(currentStepNum / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>
    );
  };

  const BackButton = () => {
    return null;
  };

  const PlansStep = () => (
    <div className="min-h-screen bg-gray-50">
      <ProgressIndicator />
      <div className="px-6 pb-8 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <BackButton />

          {/* Main Headline */}
          <div className="text-center mb-6 lg:mb-8">
            <h1 className="mb-3 lg:mb-4 text-3xl lg:text-4xl font-bold px-4">Select a Pack Membership&nbsp;Plan</h1>
            <p className="text-base lg:text-xl text-gray-600 max-w-2xl mx-auto">
              All plans provide unlimited cellular data on all major carriers to enable real-time tracking of your dog's location anywhere in the world.
            </p>
          </div>

          {/* Billing Frequency Toggle */}
          <div className="mb-6 lg:mb-8">
            <div className="flex gap-2 p-1 bg-white shadow-sm border border-gray-100 max-w-2xl mx-auto halo-container">
              <Button
                variant={billingFrequency === 'monthly' ? 'default' : 'ghost'}
                onClick={() => setBillingFrequency('monthly')}
                className={`flex-1 h-12 lg:h-14 rounded-2xl font-medium lg:text-base transition-all duration-300 ${
                  billingFrequency === 'monthly' 
                    ? 'bg-primary text-black shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Monthly
              </Button>
              <Button
                variant={billingFrequency === 'annual' ? 'default' : 'ghost'}
                onClick={() => setBillingFrequency('annual')}
                className={`flex-1 h-12 lg:h-14 rounded-2xl font-medium lg:text-base transition-all duration-300 flex flex-col lg:flex-row gap-0.5 lg:gap-1 items-center justify-center ${
                  billingFrequency === 'annual' 
                    ? 'bg-primary text-black shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span>Annual</span>
                <span className={`font-semibold text-xs lg:text-base ${billingFrequency === 'annual' ? 'text-black' : 'text-green-600'}`}>
                  <span className="hidden lg:inline">• </span>1 Free Month
                </span>
              </Button>
              <Button
                variant={billingFrequency === 'two-year' ? 'default' : 'ghost'}
                onClick={() => setBillingFrequency('two-year')}
                className={`flex-1 h-12 lg:h-14 rounded-2xl font-medium lg:text-base transition-all duration-300 flex flex-col lg:flex-row gap-0.5 lg:gap-1 items-center justify-center ${
                  billingFrequency === 'two-year' 
                    ? 'bg-primary text-black shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span>2-Year</span>
                <span className={`font-semibold text-xs lg:text-base ${billingFrequency === 'two-year' ? 'text-black' : 'text-green-600'}`}>
                  <span className="hidden lg:inline">• </span>3 Free Months
                </span>
              </Button>
            </div>
          </div>

          {/* Plan Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12 md:items-stretch">
            {/* Bronze Plan */}
            <Card className={`transition-all duration-200 hover:shadow-md cursor-pointer flex flex-col h-full ${
              selectedPlan === 'bronze' ? 'ring-2 ring-[#2F93F3] shadow-md' : 'hover:ring-1 hover:ring-gray-200'
            } bg-white shadow-sm border border-gray-100 halo-container`}
            onClick={() => setSelectedPlan('bronze')}>
              <CardHeader className="pt-6 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100 rounded-2xl px-3 py-1.5">
                    <span className="pt-0.5">Basic Protection</span>
                  </Badge>
                </div>
                <div className="flex justify-between items-start">
                  <div className="w-full">
                    <CardTitle className="text-xl lg:text-2xl font-bold">Bronze</CardTitle>
                    <p className="text-lg lg:text-xl font-semibold text-gray-900 mt-1">{displayPrice(getMonthlyEquivalentPrice('bronze'))}/mo</p>
                    <p className="text-gray-600 mt-1 text-base lg:text-base">Additional collars: $3.99/mo</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 flex-1 flex flex-col">
                <ul className="space-y-3 flex-1 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base lg:text-base font-bold">5 virtual fences</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base lg:text-base">Unlimited cellular data and global coverage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base lg:text-base">Live video support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base lg:text-base">$150 off collar upgrades and replacements<sup className="text-xs">*</sup></span>
                  </li>
                </ul>
                <Button 
                  className={`w-full h-12 lg:h-14 halo-button-card ${
                    selectedPlan === 'bronze' 
                      ? 'bg-primary hover:bg-primary/90 text-black shadow-lg' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:shadow-md'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlan('bronze');
                  }}
                >
                  {selectedPlan === 'bronze' ? '✓ Selected' : 'Select Bronze'}
                </Button>
              </CardContent>
            </Card>

            {/* Silver Plan */}
            <Card className={`transition-all duration-200 hover:shadow-md cursor-pointer flex flex-col h-full ${
              selectedPlan === 'silver' ? 'ring-2 ring-[#2F93F3] shadow-md' : 'hover:ring-1 hover:ring-gray-200'
            } bg-white shadow-sm border border-gray-100 md:scale-105 md:z-10 halo-container`}
            onClick={() => setSelectedPlan('silver')}>
              <CardHeader className="pt-6 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge className="text-white hover:bg-[#2F93F3] rounded-2xl px-3 py-1.5" style={{ backgroundColor: '#2F93F3' }}>
                    <span className="pt-0.5">Most Popular</span>
                  </Badge>
                </div>
                <div className="flex justify-between items-start">
                  <div className="w-full">
                    <CardTitle className="text-xl lg:text-2xl font-bold">Silver</CardTitle>
                    <p className="text-lg lg:text-xl font-semibold text-gray-900 mt-1">{displayPrice(getMonthlyEquivalentPrice('silver'))}/mo</p>
                    <p className="text-gray-600 mt-1 text-base lg:text-base">Additional collars: $4.99/mo</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 flex-1 flex flex-col">
                <ul className="space-y-3 flex-1 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base lg:text-base font-bold">20 virtual fences</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base lg:text-base">Unlimited cellular data and global coverage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base lg:text-base">Live video support & 1-on-1 setup session</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base lg:text-base">$175 off upgrades and replacements<sup className="text-xs">*</sup></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base lg:text-base">25% off all accessories</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base lg:text-base">Activity reports</span>
                  </li>
                </ul>
                <Button 
                  className={`w-full h-12 lg:h-14 halo-button-card ${
                    selectedPlan === 'silver' 
                      ? 'bg-primary hover:bg-primary/90 text-black shadow-lg' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:shadow-md'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlan('silver');
                  }}
                >
                  {selectedPlan === 'silver' ? '✓ Selected' : 'Select Silver'}
                </Button>
              </CardContent>
            </Card>

            {/* Gold Plan */}
            <Card className={`transition-all duration-200 hover:shadow-md cursor-pointer flex flex-col h-full ${
              selectedPlan === 'gold' ? 'ring-2 ring-[#2F93F3] shadow-md' : 'hover:ring-1 hover:ring-gray-200'
            } bg-white shadow-sm border border-gray-100 halo-container`}
            onClick={() => setSelectedPlan('gold')}>
              <CardHeader className="pt-6 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge className="text-black rounded-2xl px-3 py-1.5" style={{ backgroundColor: '#FCD62D' }}>
                    <span className="pt-0.5">Best Value</span>
                  </Badge>
                </div>
                <div className="flex justify-between items-start">
                  <div className="w-full">
                    <CardTitle className="text-xl lg:text-2xl font-bold">Gold</CardTitle>
                    <p className="text-lg lg:text-xl font-semibold text-gray-900 mt-1">{displayPrice(getMonthlyEquivalentPrice('gold'))}/mo</p>
                    <p className="text-gray-600 mt-1 text-base lg:text-base">Additional collars: $4.99/mo</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 flex-1 flex flex-col">
                <ul className="space-y-3 flex-1 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base lg:text-base font-bold">Unlimited virtual fences</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base lg:text-base">Unlimited cellular data and global coverage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base lg:text-base">Concierge support & 1-on-1 setup session</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base lg:text-base">$200 off upgrades and replacements<sup className="text-xs">*</sup></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base lg:text-base">50% off all accessories</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base lg:text-base">Advanced activity reports</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base lg:text-base">Live sessions with expert trainers</span>
                  </li>
                </ul>
                <Button 
                  className={`w-full h-12 lg:h-14 halo-button-card ${
                    selectedPlan === 'gold' 
                      ? 'bg-primary hover:bg-primary/90 text-black shadow-lg' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:shadow-md'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlan('gold');
                  }}
                >
                  {selectedPlan === 'gold' ? '✓ Selected' : 'Select Gold'}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Unified Cart-style Selector */}
          <div className="max-w-md mx-auto lg:max-w-lg mb-8 lg:mb-12">
            <div className="bg-white shadow-sm border border-gray-100 p-6 lg:p-8 halo-container">
              
              {/* Header */}
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-4">Your Order</h3>
                
                <div className="flex justify-between items-start">
                  {/* Plan details */}
                  <div className="space-y-1">
                    <p className="font-medium text-gray-900 text-base lg:text-base">
                      {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan
                    </p>
                    <p className="text-gray-600 text-base lg:text-base">
                      {billingFrequency === 'two-year' ? '2-Year' : billingFrequency.charAt(0).toUpperCase() + billingFrequency.slice(1)} Billing
                    </p>
                  </div>

                  {/* Number of Collars */}
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">Number of Collars</label>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCollarCount(Math.max(1, collarCount - 1))}
                        disabled={collarCount <= 1}
                        className="h-8 w-8 rounded-full border border-gray-300 hover:border-primary hover:bg-primary/5 disabled:opacity-50"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <div className="bg-gray-50 px-3 py-1.5 min-w-[40px] text-center halo-container">
                        <span className="font-semibold">
                          {collarCount}
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCollarCount(collarCount + 1)}
                        className="h-8 w-8 rounded-full border border-gray-300 hover:border-primary hover:bg-primary/5"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cart Items */}
              <div className="space-y-3 mb-6">
                {/* First collar (full price) */}
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-700 text-base lg:text-base">Collar 1 × {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan</span>
                  <span className="font-semibold">{displayPrice(getMonthlyEquivalentPrice(selectedPlan))}/mo</span>
                </div>

                {/* Additional collars (discounted price) */}
                {collarCount > 1 && Array.from({ length: collarCount - 1 }, (_, index) => (
                  <div key={index + 2} className="flex items-start justify-between py-3">
                    <span className="text-gray-700 text-base lg:text-base">Collar {index + 2} × {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan</span>
                    <div className="text-right">
                      <div className="font-semibold">{displayPrice(getAdditionalCollarPrice() / (billingFrequency === 'monthly' ? 1 : billingFrequency === 'annual' ? 12 : 24))}/mo</div>
                      <div className="text-xs font-medium text-green-600">Multi-dog discount</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-start">
                  <span className="text-lg font-semibold">Total</span>
                  <div className="text-right">
                    <div className="text-xl font-bold text-gray-900">{displayPrice(calculatePlanTotal() / (billingFrequency === 'monthly' ? 1 : billingFrequency === 'annual' ? 12 : 24))}/mo</div>
                    <p className="text-sm text-gray-600 mt-1">
                      {displayPrice(calculatePlanTotal())} billed {billingFrequency === 'monthly' ? 'monthly' : billingFrequency === 'annual' ? 'annually' : 'every 2 years'}
                    </p>
                  </div>
                </div>
                {getSavingsText() && (
                  <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm font-medium text-green-800 text-center">
                      💰 {getSavingsText()}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto lg:max-w-lg">
            <Button 
              className="w-full h-14 lg:h-16 halo-button-modern bg-primary hover:bg-primary/90 text-black font-semibold text-lg lg:text-xl shadow-lg hover:shadow-xl mb-4"
              onClick={() => {
                setCurrentStep('halocare');
              }}
            >
              Continue <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-center text-base lg:text-base text-gray-600 mb-10">
              100% Satisfaction Guarantee<sup className="text-xs">*</sup>
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="w-full h-px bg-gray-200 mb-4"></div>
            <p className="text-center text-xs lg:text-sm text-gray-500 leading-relaxed mb-4">
              * If you are not completely satisfied with your purchase for any reason (excluding animal-induced or customer-induced damage) during your first 90 days after you receive your Halo Collar (purchased from halocollar.com), you may return it to us for a refund of your purchase price (less $25 shipping, handling and taxes, where applicable) according to our <a href="https://www.halocollar.com/unified-terms-and-conditions/#ReturnPolicy" target="_blank" rel="noopener noreferrer" className="text-[#2F93F3] hover:underline">Terms and Conditions</a>.
            </p>
            <p className="text-center text-xs lg:text-sm text-gray-500 leading-relaxed">
              * Dollar off calculated based upon the full retail price of the latest Halo Collar model
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const HaloCareStep = () => {
    const pricing = getHaloCarePricing();
    const tierDiscount = getHaloCareTierDiscount();
    
    // Get billing frequency discount text
    const getBillingDiscountText = () => {
      if (billingFrequency === 'annual') return '1 Month Free with Annual Billing!';
      if (billingFrequency === 'two-year') return '2 Months Free with 2-Year Billing!';
      return null;
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <ProgressIndicator />
        <div className="px-6 pb-8 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <BackButton />

            {/* Hero Section */}
            <div className="text-center mb-8 lg:mb-10">
              <Badge className="mb-4 text-white rounded-2xl px-4 py-2" style={{ backgroundColor: '#2F93F3' }}>
                <span className="pt-0.5">Save up to 70% off</span>
              </Badge>
              <h1 className="mb-3 lg:mb-4 text-3xl lg:text-4xl font-bold">Protect Your Investment.</h1>
              <p className="text-base lg:text-lg text-gray-600 max-w-lg mx-auto">
                <span className="lg:hidden">Get complete peace of mind with Halo Care</span>
                <span className="hidden lg:inline">Get complete peace of mind with Halo Care — upgrades and replacements for a fraction of the cost.</span>
              </p>
            </div>

            {/* Benefits — single card, stacked rows */}
            <div className="bg-white halo-container shadow-sm border border-gray-100 p-6 lg:p-8 mb-8 max-w-xl mx-auto lg:max-w-5xl">
              <div className="space-y-5 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                <div className="flex items-start gap-4 lg:flex-col lg:text-center lg:items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center">
                    <Sparkles className="h-5 w-5" style={{ color: '#FCD62D' }} />
                  </div>
                  <div>
                    <p className="font-bold text-base text-gray-900">Unlimited Upgrades</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Upgrade for <span className="font-semibold text-gray-900">{pricing.upgradeCost}</span> instead of {pricing.originalValue} — {pricing.discountPercent} off with {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 lg:flex-col lg:text-center lg:items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-[#2F93F3]" />
                  </div>
                  <div>
                    <p className="font-bold text-base text-gray-900">Unlimited Replacements</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Replace your collar for <span className="font-semibold text-gray-900">{pricing.replacementCost}</span> instead of {pricing.originalValue}. Covers loss, damage & wear.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 lg:flex-col lg:text-center lg:items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                    <RefreshCcw className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-base text-gray-900">No Questions Asked</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Whatever the reason — lost, damaged, or worn out — order a new collar in a few clicks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Choice Cards - Stacked on all screens */}
            <div className="max-w-xl mx-auto space-y-6 mb-8">
              {/* Add Protection Card */}
              <Card 
                className={`cursor-pointer transition-all duration-200 ${
                  haloCareEnabled === true 
                    ? 'ring-2 ring-[#2F93F3] shadow-lg' 
                    : 'hover:shadow-md border-2 border-gray-200'
                } bg-white halo-container`}
                onClick={() => {
                  setHaloCareEnabled(true);
                  setShowHaloCareError(false);
                }}
              >
                <CardContent className="px-6 py-6 lg:!px-12 lg:!py-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                      <Shield className="h-8 w-8 text-[#2F93F3]" />
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="font-bold text-2xl text-center mb-2">Add Protection</h3>

                  {/* Pricing — show monthly vs annual comparison */}
                  <div className="text-center mb-5">
                    {billingFrequency === 'monthly' ? (
                      <>
                        <div>
                          <span className="text-3xl font-bold text-gray-900">{displayPrice(haloCarePrices.monthly)}</span>
                          <span className="text-gray-600 text-lg">/mo per collar</span>
                        </div>
                        <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-xl">
                          <p className="text-sm font-semibold text-green-800">
                            Switch to annual billing and pay just {displayPrice(haloCarePrices.annual / 12)}/mo
                          </p>
                          <p className="text-xs text-green-700 mt-1">
                            Save {displayPrice(haloCarePrices.monthly * 12 - haloCarePrices.annual)} per year on Halo Care alone
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-3xl font-bold text-gray-900">{displayPrice(getHaloCareMonthlyEquivalent())}</span>
                          <span className="text-gray-600 text-lg">/mo per collar</span>
                        </div>
                        <p className="text-sm text-gray-400 line-through mt-1">
                          {displayPrice(haloCarePrices.monthly)}/mo without {billingFrequency === 'annual' ? 'annual' : '2-year'} billing
                        </p>
                        <div className="mt-3 inline-flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-full px-4 py-1.5">
                          <Check className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-semibold text-green-800">
                            You're saving {displayPrice(
                              billingFrequency === 'annual'
                                ? haloCarePrices.monthly * 12 - haloCarePrices.annual
                                : haloCarePrices.monthly * 24 - haloCarePrices.twoYear
                            )} on Halo Care with {billingFrequency === 'annual' ? 'annual' : '2-year'} billing
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="flex justify-center mb-6">
                    <ul className="space-y-4 inline-block">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-gray-900 text-base font-semibold">Collar replacements for {pricing.replacementCost}</span>
                          <span className="block text-sm text-gray-500">Retail value {pricing.originalValue} — you save {pricing.discountPercent}</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-gray-900 text-base font-semibold">Collar upgrades for {pricing.upgradeCost}</span>
                          <span className="block text-sm text-gray-500">Retail value {pricing.originalValue} — you save {pricing.discountPercent}</span>
                        </div>
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 text-base font-medium">No questions asked — any reason</span>
                      </li>
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full h-12 font-medium text-lg shadow-sm"
                    style={{ backgroundColor: '#2F93F3', color: 'white' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setHaloCareEnabled(true);
                      setShowHaloCareError(false);
                    }}
                  >
                    Protect My Collar Purchase
                  </Button>
                </CardContent>
              </Card>

              {/* Decline Protection Card - Simplified */}
              <Card 
                className={`cursor-pointer transition-all duration-200 ${
                  haloCareEnabled === false 
                    ? 'ring-2 ring-gray-400 shadow-lg' 
                    : 'hover:shadow-md border-2 border-gray-200'
                } bg-white halo-container`}
                onClick={() => {
                  setHaloCareEnabled(false);
                  setShowHaloCareError(false);
                }}
              >
                <CardContent className="px-6 py-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      {/* Heading */}
                      <h3 className="font-bold text-xl mb-2">Decline Protection</h3>
                      
                      {/* Text */}
                      <p className="text-gray-600 text-base">No, I do not wish to protect my collars</p>
                    </div>

                    {/* CTA Link */}
                    <div className="flex-shrink-0">
                      <button 
                        className="text-gray-700 text-base font-medium underline hover:text-gray-900 transition-colors whitespace-nowrap"
                        onClick={(e) => {
                          e.stopPropagation();
                          setHaloCareEnabled(false);
                          setShowHaloCareError(false);
                        }}
                      >
                        Decline Protection
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Error Message */}
            {showHaloCareError && (
              <div className="mb-8 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                <p className="font-medium text-red-800 text-center text-base lg:text-lg">
                  Please select whether you want Halo Care protection before continuing.
                </p>
              </div>
            )}

            {/* CTA Button */}
            <div className="max-w-xl mx-auto">
              <Button 
                className="w-full h-14 lg:h-16 halo-button-modern font-semibold text-lg lg:text-xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 mb-4"
                onClick={() => {
                  if (haloCareEnabled === null) {
                    setShowHaloCareError(true);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    return;
                  }
                  setShowHaloCareError(false);
                  setCurrentStep('summary');
                }}
                disabled={haloCareEnabled === null}
                style={{
                  backgroundColor: haloCareEnabled === null ? '#e5e7eb' : '#FCD62D',
                  color: haloCareEnabled === null ? '#9ca3af' : '#000000'
                }}
              >
                Continue to Order Summary →
              </Button>
            </div>

            {/* Fine Print */}
            <div className="max-w-5xl mx-auto mt-8 lg:mt-12">
              <div className="w-full h-px bg-gray-200 mb-4"></div>
              <p className="text-center text-xs lg:text-sm text-gray-500 leading-relaxed">
                * Halo Care must be active for 60+ days if you buy a replacement. See <a href="https://www.halocollar.com/unified-terms-and-conditions/#Halo-Care-Terms-Conditions" target="_blank" rel="noopener noreferrer" className="text-[#2F93F3] hover:underline">terms and conditions</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SummaryStep = () => (
    <div className="min-h-screen bg-gray-50">
      <ProgressIndicator />
      <div className="px-6 pb-8 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <BackButton />

          <div className="space-y-8">
            {/* Order Summary */}
            <Card className="bg-white shadow-sm border border-gray-100 halo-container">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl lg:text-3xl font-bold">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 lg:space-y-5">
                {/* Plan breakdown with individual collar pricing */}
                <div className="space-y-3">
                  {/* First collar (full price) */}
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700 text-base lg:text-lg">Collar 1 × {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan</span>
                    <span className="font-semibold text-lg">{displayPrice(getMonthlyEquivalentPrice(selectedPlan))}/mo</span>
                  </div>

                  {/* Additional collars (discounted price) */}
                  {collarCount > 1 && Array.from({ length: collarCount - 1 }, (_, index) => (
                    <div key={index + 2} className="flex justify-between items-start py-2">
                      <span className="text-gray-700 text-base lg:text-lg">Collar {index + 2} × {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan</span>
                      <div className="text-right">
                        <div className="font-semibold text-lg">{displayPrice(getAdditionalCollarPrice() / (billingFrequency === 'monthly' ? 1 : billingFrequency === 'annual' ? 12 : 24))}/mo</div>
                        <div className="text-xs font-medium text-green-600">Multi-dog discount</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Halo Care - Consolidated */}
                {haloCareEnabled && (
                  <div className="pt-2">
                    <div className="flex justify-between items-start py-2">
                      <span className="text-gray-700 text-base lg:text-lg">
                        Halo Care x {collarCount} Collar{collarCount > 1 ? 's' : ''}
                        <br className="lg:hidden" />
                        <span className="lg:inline"> @ </span>{displayPrice(getHaloCareMonthlyEquivalent())}/mo ea
                      </span>
                      <span className="font-semibold text-lg">{displayPrice(getHaloCareMonthlyEquivalent() * collarCount)}/mo</span>
                    </div>
                  </div>
                )}

                {/* Annual/2-year savings callout */}
                {getSavingsText() && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm font-medium text-green-800 text-center">
                      💰 {getSavingsText()}
                    </p>
                  </div>
                )}

                {/* Total */}
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold text-xl lg:text-2xl">
                    <span>Total</span>
                    <div className="text-right">
                      <div>{displayPrice((calculatePlanTotal() + (haloCareEnabled ? getCurrentHaloCarePrice() * collarCount : 0)) / (billingFrequency === 'monthly' ? 1 : billingFrequency === 'annual' ? 12 : 24))}/mo</div>
                      <p className="text-sm text-gray-600 font-normal mt-1">
                        {displayPrice(calculateTotal())} billed {billingFrequency === 'monthly' ? 'monthly' : billingFrequency === 'annual' ? 'annually' : 'every 2 years'}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Button */}
            <div className="max-w-md mx-auto lg:max-w-lg">
              <Button 
                className="w-full h-14 lg:h-16 halo-button-modern bg-primary hover:bg-primary/90 text-black font-semibold text-lg lg:text-xl shadow-lg hover:shadow-xl mb-4"
                onClick={handleProceedToPayment}
              >
                Complete Secure Payment
              </Button>
            </div>
          </div>
          
          {/* Footer Subcopy */}
          <div className="max-w-5xl mx-auto mt-8 lg:mt-12">
            <div className="w-full h-px bg-gray-200 mb-4"></div>
            <p className="text-center text-xs lg:text-sm text-gray-500 leading-relaxed mb-4">
              * If you are not completely satisfied with your purchase for any reason (excluding animal-induced or customer-induced damage) during your first 90 days after you receive your Halo Collar (purchased from halocollar.com), you may return it to us for a refund of your purchase price (less $25 shipping, handling and taxes, where applicable) according to our <a href="https://www.halocollar.com/unified-terms-and-conditions/#ReturnPolicy" target="_blank" rel="noopener noreferrer" className="text-[#2F93F3] hover:underline">Terms and Conditions</a>.
            </p>
            <p className="text-center text-xs lg:text-sm text-gray-500 leading-relaxed">
              * Dollar off calculated based upon the full retail price of the latest Halo Collar model
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const CheckoutStep = () => {
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const handlePayment = () => {
      if (!agreedToTerms) {
        alert('Please agree to the Terms & Conditions');
        return;
      }
      // TODO: Implement actual payment processing
      alert('Payment processing would happen here!');
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <ProgressIndicator />
        <div className="px-6 pb-8 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <BackButton />

            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold">Secure Checkout</h1>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Payment Form */}
              <div className="space-y-6">
                <Card className="bg-white shadow-sm border border-gray-100 halo-container">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Payment Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Cardholder Name */}
                    <div>
                      <Label htmlFor="cardholderName">Cardholder Name</Label>
                      <Input 
                        id="cardholderName" 
                        placeholder="John Doe" 
                        className="mt-2 h-12 halo-container"
                      />
                    </div>

                    {/* Card Number */}
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input 
                        id="cardNumber" 
                        placeholder="1234 5678 9012 3456" 
                        className="mt-2 h-12 halo-container"
                      />
                    </div>

                    {/* Expiry and CVV */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input 
                          id="expiry" 
                          placeholder="MM/YY" 
                          className="mt-2 h-12 halo-container"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input 
                          id="cvv" 
                          placeholder="123" 
                          type="password"
                          maxLength={4}
                          className="mt-2 h-12 halo-container"
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input 
                        id="address" 
                        placeholder="123 Main Street" 
                        className="mt-2 h-12 halo-container"
                      />
                    </div>

                    {/* Address Line 2 */}
                    <div>
                      <Label htmlFor="address2">Address Line 2 (Optional)</Label>
                      <Input 
                        id="address2" 
                        placeholder="Apt 4B" 
                        className="mt-2 h-12 halo-container"
                      />
                    </div>

                    {/* City */}
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city" 
                        placeholder="San Francisco" 
                        className="mt-2 h-12 halo-container"
                      />
                    </div>

                    {/* State and ZIP */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="state">State/Province</Label>
                        <select 
                          id="state" 
                          className="mt-2 h-12 w-full border border-gray-200 halo-container px-3 bg-white"
                        >
                          <option value="">Select State</option>
                          <option value="CA">California</option>
                          <option value="NY">New York</option>
                          <option value="TX">Texas</option>
                          <option value="FL">Florida</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input 
                          id="zip" 
                          placeholder="94102" 
                          className="mt-2 h-12 halo-container"
                        />
                      </div>
                    </div>

                    {/* Country */}
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <select 
                        id="country" 
                        className="mt-2 h-12 w-full border border-gray-200 halo-container px-3 bg-white"
                      >
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="GB">United Kingdom</option>
                        <option value="AU">Australia</option>
                      </select>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <Card className="bg-white shadow-sm border border-gray-100 halo-container">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Collars on Plan */}
                    <div className="pb-4 border-b">
                      <p className="text-sm text-gray-600 mb-2">Collars on Plan:</p>
                      <p className="text-2xl font-bold">{collarCount}</p>
                    </div>

                    {/* Membership Level */}
                    <div className="space-y-2">
                      <p className="font-semibold">Membership Level</p>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-[#2F93F3]">{selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}</p>
                          <p className="text-sm text-gray-600">{displayPrice(getMonthlyEquivalentPrice(selectedPlan))}/mo × {collarCount} collar{collarCount > 1 ? 's' : ''}</p>
                        </div>
                        <p className="font-semibold">{displayPrice(calculatePlanTotal())}</p>
                      </div>
                    </div>

                    {/* Halo Care */}
                    <div className="space-y-2">
                      <p className="font-semibold">Halo Care</p>
                      <div className="flex justify-between">
                        <p className={haloCareEnabled ? "text-[#2F93F3]" : "text-gray-500"}>{haloCareEnabled ? 'Enabled' : 'Disabled'}</p>
                        <p className="font-semibold">{haloCareEnabled ? displayPrice(getCurrentHaloCarePrice() * collarCount) : '$0.00'}</p>
                      </div>
                    </div>

                    {/* Billing Interval */}
                    <div className="space-y-2">
                      <p className="font-semibold">Billing Interval</p>
                      <p className="text-gray-700 lowercase">{billingFrequency === 'two-year' ? '2-year' : billingFrequency}</p>
                    </div>

                    {/* Subtotal */}
                    <div className="pt-4 border-t space-y-2">
                      <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p className="font-semibold">{displayPrice(calculateTotal())}</p>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <p>Pack Membership credits</p>
                        <p>$0.00</p>
                      </div>
                    </div>

                    {/* Due Now */}
                    <div className="pt-4 border-t">
                      <div className="flex justify-between text-xl font-bold">
                        <p>Due now</p>
                        <div className="text-right">
                          <p>{displayPrice(calculateTotal())}</p>
                          <p className="text-xs text-gray-600 font-normal">+ tax</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Terms and Conditions */}
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg text-xs text-gray-600 leading-relaxed">
                  <p className="mb-3">
                    * If you are not completely satisfied with your purchase for any reason (excluding animal-induced or customer-induced damage) during your first 90 days after you receive your originally purchased collar, you may return it to us for a refund of your purchase price (less $25 shipping, handling and taxes, where applicable) according to our Terms and Conditions. ** Terms and Conditions apply.
                  </p>
                  <div className="flex items-start gap-2">
                    <Checkbox 
                      id="terms" 
                      checked={agreedToTerms}
                      onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                      className="mt-0.5"
                    />
                    <label htmlFor="terms" className="cursor-pointer">
                      I have read and agree to the <a href="https://www.halocollar.com/unified-terms-and-conditions/" target="_blank" rel="noopener noreferrer" className="text-[#2F93F3] hover:underline">Terms & Conditions</a>.
                    </label>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button 
                    className="w-full h-14 lg:h-16 halo-button-modern font-semibold text-lg lg:text-xl shadow-lg hover:shadow-xl disabled:opacity-50"
                    onClick={handlePayment}
                    disabled={!agreedToTerms}
                    style={{
                      backgroundColor: agreedToTerms ? '#FCD62D' : '#e5e7eb',
                      color: agreedToTerms ? '#000000' : '#9ca3af'
                    }}
                  >
                    <Lock className="h-5 w-5 mr-2" />
                    Agree & Pay
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full h-12 halo-container"
                    onClick={() => setCurrentStep('summary')}
                  >
                    Back
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'plans':
        return <PlansStep />;
      case 'halocare':
        return <HaloCareStep />;
      case 'summary':
        return <SummaryStep />;
      case 'checkout':
        return <CheckoutStep />;
      default:
        return <PlansStep />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderCurrentStep()}
    </div>
  );
}