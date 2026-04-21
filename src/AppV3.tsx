import React, { useState, useRef, useEffect } from 'react';
import { Check, Shield, ChevronDown, ArrowRight, Plus, Minus } from 'lucide-react';

type BillingFrequency = 'monthly' | 'annual' | 'two-year';
type PlanType = 'bronze' | 'silver' | 'gold';

const plans: Record<PlanType, {
  label: string;
  badge: string;
  monthly: number;
  annual: number;
  twoYear: number;
  collarExtra: number;
  fences: string;
  support: string;
  discount: string;
  accessories: string;
  extras: string[];
}> = {
  bronze: {
    label: 'Bronze',
    badge: 'Basic',
    monthly: 9.99,
    annual: 101.89,
    twoYear: 191.81,
    collarExtra: 3.99,
    fences: '5 virtual fences',
    support: 'Live video support',
    discount: '$150 off upgrades & replacements',
    accessories: '',
    extras: [],
  },
  silver: {
    label: 'Silver',
    badge: 'Popular',
    monthly: 14.99,
    annual: 152.84,
    twoYear: 287.81,
    collarExtra: 4.99,
    fences: '20 virtual fences',
    support: 'Video support + 1-on-1 setup',
    discount: '$175 off upgrades & replacements',
    accessories: '25% off accessories',
    extras: ['Activity reports'],
  },
  gold: {
    label: 'Gold',
    badge: 'Best Value',
    monthly: 19.99,
    annual: 203.90,
    twoYear: 383.81,
    collarExtra: 4.99,
    fences: 'Unlimited fences',
    support: 'Concierge + 1-on-1 setup',
    discount: '$200 off upgrades & replacements',
    accessories: '50% off accessories',
    extras: ['Advanced health tracking', 'Expert trainer sessions'],
  },
};

const haloCarePrices = { monthly: 9.99, annual: 101.89, twoYear: 191.81 };

export default function AppV3() {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('silver');
  const [billing, setBilling] = useState<BillingFrequency>('two-year');
  const [haloCare, setHaloCare] = useState(true);
  const [collarCount, setCollarCount] = useState(1);
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  const plan = plans[selectedPlan];

  // Price helpers
  const monthlyPrice = (p: typeof plan) => {
    if (billing === 'monthly') return p.monthly;
    if (billing === 'annual') return p.annual / 12;
    return p.twoYear / 24;
  };

  const periodPrice = (p: typeof plan) => {
    if (billing === 'monthly') return p.monthly;
    if (billing === 'annual') return p.annual;
    return p.twoYear;
  };

  const totalSavings = (p: typeof plan) => {
    if (billing === 'monthly') return 0;
    const months = billing === 'annual' ? 12 : 24;
    return (p.monthly * months) - periodPrice(p);
  };

  const haloCareMonthly = () => {
    if (billing === 'monthly') return haloCarePrices.monthly;
    if (billing === 'annual') return haloCarePrices.annual / 12;
    return haloCarePrices.twoYear / 24;
  };

  const haloCarePeriod = () => {
    if (billing === 'monthly') return haloCarePrices.monthly;
    if (billing === 'annual') return haloCarePrices.annual;
    return haloCarePrices.twoYear;
  };

  const additionalCollarPeriod = () => {
    if (billing === 'monthly') return plan.collarExtra;
    if (billing === 'annual') return plan.collarExtra * 12 * 0.85;
    return plan.collarExtra * 24 * 0.80;
  };

  const grandTotal = () => {
    const base = periodPrice(plan);
    const extra = additionalCollarPeriod() * Math.max(0, collarCount - 1);
    const care = haloCare ? haloCarePeriod() * collarCount : 0;
    return base + extra + care;
  };

  const grandTotalMonthly = () => {
    const months = billing === 'monthly' ? 1 : billing === 'annual' ? 12 : 24;
    return grandTotal() / months;
  };

  const billingLabel = () => {
    if (billing === 'monthly') return '/mo';
    if (billing === 'annual') return '/yr';
    return '/2yr';
  };

  const billingLabelLong = () => {
    if (billing === 'monthly') return 'per month';
    if (billing === 'annual') return 'per year';
    return 'every 2 years';
  };

  const freeMonths = () => {
    if (billing === 'annual') return '1 month free';
    if (billing === 'two-year') return '3 months free';
    return null;
  };

  const fmt = (n: number) => '$' + n.toFixed(2);

  useEffect(() => {
    if (showDetails && detailsRef.current) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    }
  }, [showDetails]);

  return (
    <div className="min-h-screen bg-[#fafafa] pb-40" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>

      {/* ── Header ── */}
      <div className="px-5 pt-8 pb-6">
        <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#999] text-center mb-2">Pack Membership</p>
        <h1 className="text-[22px] font-semibold text-[#1a1a1a] text-center tracking-[-0.02em] leading-tight">
          Choose your plan
        </h1>
      </div>

      <div className="px-4 space-y-4">

        {/* ── Billing Toggle ── */}
        <div className="flex gap-1 p-1 bg-[#f0f0f0] rounded-xl">
          {([
            { key: 'monthly' as const, label: 'Monthly', sub: null },
            { key: 'annual' as const, label: 'Annual', sub: 'Save 15%' },
            { key: 'two-year' as const, label: '2-Year', sub: 'Save 20%' },
          ]).map(({ key, label, sub }) => (
            <button
              key={key}
              onClick={() => setBilling(key)}
              className={`flex-1 py-2.5 rounded-lg text-[14px] font-medium transition-all duration-200 ${
                billing === key
                  ? 'bg-[#1a1a1a] text-white shadow-sm'
                  : 'text-[#888] hover:text-[#555]'
              }`}
            >
              {label}
              {sub && (
                <span className={`block text-[10px] mt-0.5 ${
                  billing === key ? 'text-[#4ADE80]' : 'text-[#16a34a]'
                }`}>
                  {sub}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Plan Selector ── */}
        <div className="flex gap-2">
          {(Object.keys(plans) as PlanType[]).map((key) => {
            const p = plans[key];
            const isSelected = selectedPlan === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedPlan(key)}
                className={`flex-1 rounded-xl p-3 text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-white shadow-[0_1px_8px_rgba(0,0,0,0.08)] ring-1 ring-[#1a1a1a]/10'
                    : 'bg-transparent'
                }`}
              >
                <span className={`text-[10px] font-medium uppercase tracking-[0.08em] ${
                  isSelected ? 'text-[#1a1a1a]' : 'text-[#bbb]'
                }`}>
                  {p.badge}
                </span>
                <span className={`block text-[16px] font-semibold mt-1 ${
                  isSelected ? 'text-[#1a1a1a]' : 'text-[#999]'
                }`}>{p.label}</span>
                <span className={`block text-[18px] font-semibold mt-0.5 ${
                  isSelected ? 'text-[#1a1a1a]' : 'text-[#bbb]'
                }`}>
                  {fmt(monthlyPrice(p))}
                  <span className={`text-[12px] font-normal ${isSelected ? 'text-[#999]' : 'text-[#ccc]'}`}>/mo</span>
                </span>
                {billing !== 'monthly' && (
                  <span className={`block text-[10px] font-medium mt-1 ${
                    isSelected ? 'text-[#16a34a]' : 'text-[#ccc]'
                  }`}>
                    Save {fmt(totalSavings(p))}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ── Selected Plan Features ── */}
        <div className="bg-white rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="p-5 space-y-3.5">
            {[
              { text: plan.fences, bold: true },
              { text: plan.support },
              { text: plan.discount },
              ...(plan.accessories ? [{ text: plan.accessories }] : []),
              ...plan.extras.map(e => ({ text: e })),
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-[18px] h-[18px] rounded-full bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
                  <Check className="h-2.5 w-2.5 text-[#1a1a1a]" />
                </div>
                <span className={`text-[14px] ${(item as any).bold ? 'font-semibold text-[#1a1a1a]' : 'text-[#666]'}`}>
                  {item.text}
                </span>
              </div>
            ))}
            {/* Shared — dimmed */}
            <div className="flex items-center gap-3">
              <div className="w-[18px] h-[18px] rounded-full bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
                <Check className="h-2.5 w-2.5 text-[#ccc]" />
              </div>
              <span className="text-[14px] text-[#bbb]">Unlimited cellular data & global coverage</span>
            </div>
          </div>

          {/* Savings strip */}
          {billing !== 'monthly' && (
            <div className="px-5 py-3 bg-[#f8faf8] border-t border-[#eee] flex items-center justify-between">
              <span className="text-[13px] text-[#16a34a] font-medium">
                {freeMonths()} — you save {fmt(totalSavings(plan))}
              </span>
              <span className="text-[10px] font-semibold text-[#16a34a] bg-[#dcfce7] px-2 py-0.5 rounded">
                {billing === 'annual' ? '−15%' : '−20%'}
              </span>
            </div>
          )}
        </div>

        {/* ── Halo Care ── */}
        <div
          className={`rounded-xl transition-all duration-200 overflow-hidden ${
            haloCare
              ? 'bg-white shadow-[0_1px_8px_rgba(0,0,0,0.08)] ring-1 ring-[#1a1a1a]/10'
              : 'bg-white shadow-[0_1px_4px_rgba(0,0,0,0.04)]'
          }`}
        >
          <button
            onClick={() => setHaloCare(!haloCare)}
            className="w-full px-5 py-4 flex items-center gap-3.5"
          >
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
              haloCare ? 'bg-[#1a1a1a]' : 'bg-[#f0f0f0]'
            }`}>
              <Shield className={`h-[18px] w-[18px] ${haloCare ? 'text-white' : 'text-[#999]'}`} />
            </div>
            <div className="flex-1 text-left min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-semibold text-[#1a1a1a]">Halo Care</span>
                {billing !== 'monthly' && (
                  <span className="text-[10px] font-medium text-[#16a34a] bg-[#dcfce7] px-1.5 py-0.5 rounded">
                    Save {fmt(haloCarePrices.monthly * (billing === 'annual' ? 12 : 24) - haloCarePeriod())}
                  </span>
                )}
              </div>
              <span className="text-[13px] text-[#999]">
                +{fmt(haloCareMonthly())}/mo per collar
              </span>
            </div>
            {/* Toggle */}
            <div className={`w-11 h-[26px] rounded-full p-[3px] transition-colors duration-200 flex-shrink-0 ${
              haloCare ? 'bg-[#1a1a1a]' : 'bg-[#ddd]'
            }`}>
              <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                haloCare ? 'translate-x-[18px]' : 'translate-x-0'
              }`} />
            </div>
          </button>

          {haloCare && (
            <div className="px-5 pb-4 space-y-2.5">
              <div className="h-px bg-[#f0f0f0]" />
              {[
                'Replace collar for $199 (retail $599)',
                'Free upgrades to latest model',
                'Priority support',
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <Check className="h-3 w-3 text-[#999] flex-shrink-0" />
                  <span className="text-[13px] text-[#777]">{text}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Collar Count ── */}
        <div className="flex items-center justify-between bg-white rounded-xl px-5 py-3.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
          <span className="text-[14px] font-medium text-[#666]">Number of collars</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCollarCount(Math.max(1, collarCount - 1))}
              disabled={collarCount <= 1}
              className="w-7 h-7 rounded-lg border border-[#e0e0e0] flex items-center justify-center disabled:opacity-20 transition-opacity"
            >
              <Minus className="h-3 w-3 text-[#666]" />
            </button>
            <span className="text-[15px] font-semibold text-[#1a1a1a] w-5 text-center tabular-nums">{collarCount}</span>
            <button
              onClick={() => setCollarCount(Math.min(10, collarCount + 1))}
              disabled={collarCount >= 10}
              className="w-7 h-7 rounded-lg border border-[#e0e0e0] flex items-center justify-center disabled:opacity-20 transition-opacity"
            >
              <Plus className="h-3 w-3 text-[#666]" />
            </button>
          </div>
        </div>

        {/* ── Order Breakdown ── */}
        <div className="bg-white rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.04)] overflow-hidden">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full px-5 py-3.5 flex items-center justify-between"
          >
            <span className="text-[14px] font-medium text-[#666]">Order breakdown</span>
            <ChevronDown className={`h-4 w-4 text-[#bbb] transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`} />
          </button>

          {showDetails && (
            <div ref={detailsRef} className="px-5 pb-5 space-y-3 text-[14px]">
              <div className="h-px bg-[#f0f0f0]" />

              <div className="flex justify-between">
                <span className="text-[#888]">{plan.label} Plan</span>
                <span className="font-medium text-[#1a1a1a]">{fmt(periodPrice(plan))}{billingLabel()}</span>
              </div>

              {collarCount > 1 && (
                <div className="flex justify-between">
                  <span className="text-[#888]">+{collarCount - 1} extra collar{collarCount > 2 ? 's' : ''}</span>
                  <span className="font-medium text-[#1a1a1a]">{fmt(additionalCollarPeriod() * (collarCount - 1))}{billingLabel()}</span>
                </div>
              )}

              {haloCare && (
                <div className="flex justify-between">
                  <span className="text-[#888]">Halo Care x{collarCount}</span>
                  <span className="font-medium text-[#1a1a1a]">{fmt(haloCarePeriod() * collarCount)}{billingLabel()}</span>
                </div>
              )}

              {billing !== 'monthly' && (
                <div className="flex justify-between">
                  <span className="text-[#16a34a]">{billing === 'annual' ? 'Annual' : '2-Year'} savings</span>
                  <span className="font-medium text-[#16a34a]">-{fmt(totalSavings(plan))}</span>
                </div>
              )}

              <div className="h-px bg-[#f0f0f0]" />
              <div className="flex justify-between text-[14px]">
                <span className="font-semibold text-[#1a1a1a]">Total</span>
                <span className="font-semibold text-[#1a1a1a]">{fmt(grandTotal())} {billingLabelLong()}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Sticky Bottom Bar ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-[#eee] px-5 pt-4 pb-6 safe-area-bottom">
        <div className="mb-3.5">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[26px] font-semibold text-[#1a1a1a] tracking-[-0.02em] tabular-nums">{fmt(grandTotalMonthly())}</span>
            <span className="text-[14px] text-[#999] font-normal">/mo</span>
          </div>
          {billing !== 'monthly' && (
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-[12px] text-[#bbb]">
                {fmt(grandTotal())} billed {billingLabelLong()}
              </span>
              {totalSavings(plan) > 0 && (
                <>
                  <span className="text-[12px] text-[#bbb]">&middot;</span>
                  <span className="text-[12px] font-medium text-[#16a34a]">
                    Save {fmt(totalSavings(plan))} vs monthly
                  </span>
                </>
              )}
            </div>
          )}
        </div>
        <button className="w-full h-[52px] bg-[#1a1a1a] hover:bg-[#333] active:bg-[#000] text-white rounded-xl font-medium text-[15px] tracking-[-0.01em] transition-colors duration-150 flex items-center justify-center gap-2">
          Continue to payment
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
