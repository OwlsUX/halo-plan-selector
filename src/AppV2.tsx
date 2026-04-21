import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group';
import { Label } from './components/ui/label';
import { Input } from './components/ui/input';
import { Checkbox } from './components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { Minus, Plus, Check, Shield, RefreshCcw, Sparkles, CreditCard, Lock, ChevronDown, ChevronUp, X } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import imgHaloCollars from "figma:asset/70789ca931e331830275c01e475d2645453f4ce1.png";

type BillingFrequency = 'monthly' | 'annual' | 'two-year';
type PlanType = 'bronze' | 'silver' | 'gold';

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

export default function AppV2() {
  const [collarCount, setCollarCount] = useState(1);
  const [billingFrequency, setBillingFrequency] = useState<BillingFrequency>('two-year');
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('silver');
  const [haloCareEnabled, setHaloCareEnabled] = useState(false);
  const [isCartExpanded, setIsCartExpanded] = useState(false);

  // PRICE FORMATTING
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
    let monthlyRate = selectedPlan === 'bronze' ? 3.99 : 4.99;
    
    switch (billingFrequency) {
      case 'monthly': return monthlyRate;
      case 'annual': return monthlyRate * 12 * 0.85;
      case 'two-year': return monthlyRate * 24 * 0.80;
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

  const calculateGrandTotal = (): number => {
    const planTotal = calculatePlanTotal();
    const haloCareTotal = haloCareEnabled ? getCurrentHaloCarePrice() * collarCount : 0;
    return planTotal + haloCareTotal;
  };

  const getBillingCycleText = (): string => {
    switch (billingFrequency) {
      case 'monthly': return 'per month';
      case 'annual': return 'per year';
      case 'two-year': return 'every 2 years';
      default: return 'per month';
    }
  };

  const getMonthlyBillingDiscount = (): number => {
    if (billingFrequency === 'monthly') return 0;
    
    const monthlyPlanPrice = planPrices[selectedPlan]?.monthly || 0;
    const monthlyAdditionalCollarPrice = selectedPlan === 'bronze' ? 3.99 : 4.99;
    const additionalCollars = Math.max(0, collarCount - 1);
    
    const monthlyTotal = monthlyPlanPrice + (monthlyAdditionalCollarPrice * additionalCollars);
    const currentPlanTotal = calculatePlanTotal();
    
    if (billingFrequency === 'annual') {
      return (monthlyTotal * 12) - currentPlanTotal;
    } else if (billingFrequency === 'two-year') {
      return (monthlyTotal * 24) - currentPlanTotal;
    }
    
    return 0;
  };

  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById('checkout-section');
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-6 lg:py-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-3 lg:mb-4">Select a Pack Membership Plan</h1>
          <p className="text-base lg:text-xl text-gray-600 text-center max-w-2xl mx-auto">
            All plans provide unlimited cellular data on all major carriers to enable real-time tracking of your dog's location anywhere in the world.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
        
        {/* Plan Cards */}
        <div className="mb-8 lg:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 md:items-stretch">
            {/* Bronze Plan */}
            <Card 
              className={`transition-all duration-200 hover:shadow-md cursor-pointer flex flex-col h-full ${
                selectedPlan === 'bronze' ? 'ring-2 ring-[#2F93F3] shadow-md' : 'hover:ring-1 hover:ring-gray-200'
              } bg-white shadow-sm border border-gray-100 rounded-2xl`}
              onClick={() => setSelectedPlan('bronze')}
            >
              <CardHeader className="pt-6 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100 rounded-2xl px-3 py-1.5">
                    <span className="pt-0.5">Basic Protection</span>
                  </Badge>
                  {billingFrequency !== 'monthly' && (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 rounded-2xl px-3 py-1.5">
                      {billingFrequency === 'annual' ? 'Save $17' : 'Save $48'}
                    </Badge>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div className="w-full">
                    <CardTitle className="text-xl lg:text-2xl font-bold">Bronze</CardTitle>
                    <p className="text-lg lg:text-xl font-semibold text-gray-900 mt-1">
                      {displayPrice(getMonthlyEquivalentPrice('bronze'))}/mo
                    </p>
                    {billingFrequency !== 'monthly' && (
                      <p className="text-sm text-green-600 font-medium mt-1">
                        {billingFrequency === 'annual' ? '1 month free' : '3 months free'}
                      </p>
                    )}
                    <p className="text-gray-600 mt-2 text-base">Additional collars: $3.99/mo</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 flex-1 flex flex-col">
                <ul className="space-y-3 flex-1 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base font-bold">5 virtual fences</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base">Unlimited cellular data and global coverage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base">Live video support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base">$150 off collar upgrades and replacements<sup className="text-xs">*</sup></span>
                  </li>
                </ul>
                <Button 
                  className={`w-full h-12 lg:h-14 rounded-2xl ${
                    selectedPlan === 'bronze' 
                      ? 'bg-[#FCD62D] hover:bg-[#FCD62D]/90 text-black shadow-lg' 
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
            <Card 
              className={`transition-all duration-200 hover:shadow-md cursor-pointer flex flex-col h-full ${
                selectedPlan === 'silver' ? 'ring-2 ring-[#2F93F3] shadow-md' : 'hover:ring-1 hover:ring-gray-200'
              } bg-white shadow-sm border border-gray-100 md:scale-105 md:z-10 rounded-2xl`}
              onClick={() => setSelectedPlan('silver')}
            >
              <CardHeader className="pt-6 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge className="text-white hover:bg-[#2F93F3] rounded-2xl px-3 py-1.5" style={{ backgroundColor: '#2F93F3' }}>
                    <span className="pt-0.5">Most Popular</span>
                  </Badge>
                  {billingFrequency !== 'monthly' && (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 rounded-2xl px-3 py-1.5">
                      {billingFrequency === 'annual' ? 'Save $27' : 'Save $72'}
                    </Badge>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div className="w-full">
                    <CardTitle className="text-xl lg:text-2xl font-bold">Silver</CardTitle>
                    <p className="text-lg lg:text-xl font-semibold text-gray-900 mt-1">
                      {displayPrice(getMonthlyEquivalentPrice('silver'))}/mo
                    </p>
                    {billingFrequency !== 'monthly' && (
                      <p className="text-sm text-green-600 font-medium mt-1">
                        {billingFrequency === 'annual' ? '1 month free' : '3 months free'}
                      </p>
                    )}
                    <p className="text-gray-600 mt-2 text-base">Additional collars: $4.99/mo</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 flex-1 flex flex-col">
                <ul className="space-y-3 flex-1 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base font-bold">20 virtual fences</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base">Unlimited cellular data and global coverage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base">Live video support & 1-on-1 setup session</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base">$175 off upgrades and replacements<sup className="text-xs">*</sup></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base">25% off all accessories</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base">Activity reports</span>
                  </li>
                </ul>
                <Button 
                  className={`w-full h-12 lg:h-14 rounded-2xl ${
                    selectedPlan === 'silver' 
                      ? 'bg-[#FCD62D] hover:bg-[#FCD62D]/90 text-black shadow-lg' 
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
            <Card 
              className={`transition-all duration-200 hover:shadow-md cursor-pointer flex flex-col h-full ${
                selectedPlan === 'gold' ? 'ring-2 ring-[#2F93F3] shadow-md' : 'hover:ring-1 hover:ring-gray-200'
              } bg-white shadow-sm border border-gray-100 rounded-2xl`}
              onClick={() => setSelectedPlan('gold')}
            >
              <CardHeader className="pt-6 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge className="text-black rounded-2xl px-3 py-1.5" style={{ backgroundColor: '#FCD62D' }}>
                    <span className="pt-0.5">Best Value</span>
                  </Badge>
                  {billingFrequency !== 'monthly' && (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 rounded-2xl px-3 py-1.5">
                      {billingFrequency === 'annual' ? 'Save $36' : 'Save $96'}
                    </Badge>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div className="w-full">
                    <CardTitle className="text-xl lg:text-2xl font-bold">Gold</CardTitle>
                    <p className="text-lg lg:text-xl font-semibold text-gray-900 mt-1">
                      {displayPrice(getMonthlyEquivalentPrice('gold'))}/mo
                    </p>
                    {billingFrequency !== 'monthly' && (
                      <p className="text-sm text-green-600 font-medium mt-1">
                        {billingFrequency === 'annual' ? '1 month free' : '3 months free'}
                      </p>
                    )}
                    <p className="text-gray-600 mt-2 text-base">Additional collars: $4.99/mo</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 flex-1 flex flex-col">
                <ul className="space-y-3 flex-1 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base font-bold">Unlimited virtual fences</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base">Unlimited cellular data and global coverage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base">Concierge support & 1-on-1 setup session</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base">$200 off upgrades and replacements<sup className="text-xs">*</sup></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base">50% off all accessories</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2F93F3]" />
                    </div>
                    <span className="text-gray-700 text-base">Advanced activity & health tracking</span>
                  </li>
                </ul>
                <Button 
                  className={`w-full h-12 lg:h-14 rounded-2xl ${
                    selectedPlan === 'gold' 
                      ? 'bg-[#FCD62D] hover:bg-[#FCD62D]/90 text-black shadow-lg' 
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
        </div>

        {/* Halo Care Section */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-xl lg:text-2xl font-bold mb-6">Add Halo Care Protection</h2>
          <Card className="border-2 rounded-2xl">
            <CardContent className="p-6 lg:p-8">
              <div className="space-y-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-3">Halo Care</h3>
                    {billingFrequency === 'monthly' ? (
                      <p className="text-lg font-semibold text-gray-900">
                        {displayPrice(haloCarePrices.monthly)}/mo per collar
                      </p>
                    ) : (
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm text-gray-500 line-through">
                            {displayPrice(haloCarePrices.monthly)}/mo
                          </p>
                          <p className="text-xl font-bold text-gray-900">
                            {displayPrice(getCurrentHaloCarePrice() / (billingFrequency === 'annual' ? 12 : 24))}/mo per collar
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 rounded-2xl px-3 py-1.5">
                            {billingFrequency === 'annual' 
                              ? `Save ${displayPrice(haloCarePrices.monthly * 12 - haloCarePrices.annual)}` 
                              : `Save ${displayPrice(haloCarePrices.monthly * 24 - haloCarePrices.twoYear)}`
                            }
                          </Badge>
                          <p className="text-sm text-green-600 font-semibold">
                            {billingFrequency === 'annual' ? '1 month free!' : '3 months free!'}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#2F93F3] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-base">Collar Replacement Coverage</p>
                      <p className="text-sm text-gray-600">Replace your collar for just $199 (retail value $599)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#2F93F3] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <RefreshCcw className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-base">Free Upgrade Program</p>
                      <p className="text-sm text-gray-600">Get the latest collar model when available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#2F93F3] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-base">Priority Support</p>
                      <p className="text-sm text-gray-600">Get help when you need it most</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <Checkbox 
                    id="halocare-v2"
                    checked={haloCareEnabled}
                    onCheckedChange={(checked) => setHaloCareEnabled(checked as boolean)}
                    className="border-2 w-6 h-6"
                  />
                  <Label htmlFor="halocare-v2" className="flex-grow cursor-pointer">
                    <span className="font-semibold text-base lg:text-lg">
                      Add Halo Care - {displayPrice(getCurrentHaloCarePrice())}/{billingFrequency === 'monthly' ? 'mo' : billingFrequency === 'annual' ? 'year' : '2 years'}
                    </span>
                    {collarCount > 1 && (
                      <span className="text-sm text-gray-600 block mt-1">Per collar ({collarCount} collars)</span>
                    )}
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Checkout Section */}
        <div id="checkout-section" className="mb-12">
          <h2 className="text-xl lg:text-2xl font-bold mb-6">Order Summary</h2>
          <Card className="border-2 rounded-2xl">
            <CardContent className="p-6 lg:p-8">
              <div className="space-y-6">
                {/* Collar Quantity Selector */}
                <div className="pb-6 border-b">
                  <Label htmlFor="collar-count" className="text-base font-semibold mb-3 block">Number of Collars</Label>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCollarCount(Math.max(1, collarCount - 1))}
                      disabled={collarCount <= 1}
                      className="h-10 w-10 rounded-xl border-2"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-2xl font-bold min-w-[3rem] text-center">{collarCount}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCollarCount(Math.min(10, collarCount + 1))}
                      disabled={collarCount >= 10}
                      className="h-10 w-10 rounded-xl border-2"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <span className="text-sm text-gray-600">collar{collarCount > 1 ? 's' : ''}</span>
                  </div>
                </div>

                {/* Billing Frequency Selector */}
                <div className="pb-6 border-b">
                  <Label className="text-base font-semibold mb-3 block">Billing Frequency</Label>
                  <div className="flex gap-2 p-1 bg-gray-50 rounded-2xl">
                    <Button
                      variant={billingFrequency === 'monthly' ? 'default' : 'ghost'}
                      onClick={() => setBillingFrequency('monthly')}
                      className={`flex-1 h-12 rounded-xl font-medium text-sm transition-all ${
                        billingFrequency === 'monthly' 
                          ? 'bg-[#FCD62D] hover:bg-[#FCD62D]/90 text-black shadow-sm' 
                          : 'text-gray-700 hover:text-gray-900 hover:bg-white'
                      }`}
                    >
                      Monthly
                    </Button>
                    <Button
                      variant={billingFrequency === 'annual' ? 'default' : 'ghost'}
                      onClick={() => setBillingFrequency('annual')}
                      className={`flex-1 h-12 rounded-xl font-medium text-sm transition-all ${
                        billingFrequency === 'annual' 
                          ? 'bg-[#FCD62D] hover:bg-[#FCD62D]/90 text-black shadow-sm' 
                          : 'text-gray-700 hover:text-gray-900 hover:bg-white'
                      }`}
                    >
                      <span className="flex flex-col lg:flex-row items-center gap-0.5 lg:gap-1">
                        <span>Annual</span>
                        <span className={`text-xs font-semibold ${billingFrequency === 'annual' ? 'text-black' : 'text-green-600'}`}>
                          1 Free Mo
                        </span>
                      </span>
                    </Button>
                    <Button
                      variant={billingFrequency === 'two-year' ? 'default' : 'ghost'}
                      onClick={() => setBillingFrequency('two-year')}
                      className={`flex-1 h-12 rounded-xl font-medium text-sm transition-all ${
                        billingFrequency === 'two-year' 
                          ? 'bg-[#FCD62D] hover:bg-[#FCD62D]/90 text-black shadow-sm' 
                          : 'text-gray-700 hover:text-gray-900 hover:bg-white'
                      }`}
                    >
                      <span className="flex flex-col lg:flex-row items-center gap-0.5 lg:gap-1">
                        <span>2-Year</span>
                        <span className={`text-xs font-semibold ${billingFrequency === 'two-year' ? 'text-black' : 'text-green-600'}`}>
                          3 Free Mos
                        </span>
                      </span>
                    </Button>
                  </div>
                </div>

                {/* Plan Breakdown */}
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <p className="font-semibold capitalize text-base">{selectedPlan} Plan</p>
                    <p className="text-sm text-gray-600">1 collar</p>
                  </div>
                  <p className="font-semibold text-base">{displayPrice(getCurrentPlanPrice())}</p>
                </div>

                {/* Additional Collars */}
                {collarCount > 1 && (
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <p className="font-semibold text-base">Additional Collars</p>
                      <p className="text-sm text-gray-600">{collarCount - 1} × {displayPrice(getAdditionalCollarPrice())}</p>
                    </div>
                    <p className="font-semibold text-base">{displayPrice(getAdditionalCollarPrice() * (collarCount - 1))}</p>
                  </div>
                )}

                {/* Halo Care */}
                {haloCareEnabled && (
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <p className="font-semibold text-base">Halo Care Protection</p>
                      <p className="text-sm text-gray-600">{collarCount} collar{collarCount > 1 ? 's' : ''} × {displayPrice(getCurrentHaloCarePrice())}</p>
                    </div>
                    <p className="font-semibold text-base">{displayPrice(getCurrentHaloCarePrice() * collarCount)}</p>
                  </div>
                )}

                {/* Applied Discounts */}
                {billingFrequency !== 'monthly' && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <p className="font-semibold text-green-800 text-base">
                          {billingFrequency === 'annual' ? 'Annual Billing Discount' : '2-Year Billing Discount'}
                        </p>
                      </div>
                      <p className="font-bold text-green-800 text-base">-{displayPrice(getMonthlyBillingDiscount())}</p>
                    </div>
                    <p className="text-sm text-green-700 ml-8">
                      {billingFrequency === 'annual' ? '1 month free!' : '3 months free!'}
                    </p>
                  </div>
                )}

                {/* Total */}
                <div className="flex justify-between items-center pt-2">
                  <div>
                    <p className="text-2xl font-bold">Total</p>
                    <p className="text-sm text-gray-600">Billed {getBillingCycleText()}</p>
                  </div>
                  <p className="text-3xl font-bold text-[#2F93F3]">{displayPrice(calculateGrandTotal())}</p>
                </div>

                {/* Next Step CTA */}
                <div className="pt-2">
                  <Button className="w-full h-14 bg-[#2F93F3] hover:bg-[#2580d9] text-white rounded-2xl font-semibold text-lg">
                    Continue to Payment
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-3 flex items-center justify-center gap-1">
                    <Lock className="h-3 w-3" />
                    Secure checkout - Payment details collected on next step
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-xl lg:text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 rounded-2xl px-6 border-gray-200">
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                Can I change my plan later?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-5">
                Yes! You can upgrade or downgrade your plan at any time from your account settings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-2 rounded-2xl px-6 border-gray-200">
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                What's included with Halo Care?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-5">
                Halo Care includes collar replacement coverage, free upgrade program, and priority support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-2 rounded-2xl px-6 border-gray-200">
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                How does billing work for multiple collars?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-5">
                Additional collars are discounted! Bronze plans are +$3.99/mo per collar, while Silver and Gold are +$4.99/mo per collar.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}