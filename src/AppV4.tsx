import React, { useState, useRef, useEffect } from 'react';
import { Check, ChevronDown, ArrowRight, Plus, Minus } from 'lucide-react';

const CollarIcon = ({ className }: { className?: string }) => (
  <svg width="20" height="22" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16.281 8.83937C15.7978 8.81095 15.3004 8.81094 14.7888 8.81094C14.2772 8.81094 13.7798 8.81095 13.2966 8.83937C5.96361 9.16623 0.591766 11.8664 0.591766 15.3765V19.9952C0.591766 22.4395 3.17821 24.4717 7.21419 25.6086C6.94418 25.0117 6.80207 24.2727 6.75944 23.4201C4.11615 22.5106 2.55291 21.2174 2.55291 19.9952V18.8014C3.66139 19.6825 5.18199 20.4073 7.02945 20.9473C7.25683 20.1941 7.62632 19.6115 8.12371 19.2136C6.37573 18.7588 4.96882 18.1477 4.00246 17.4656C6.60311 15.8739 10.5396 14.936 14.7888 14.936C19.0379 14.936 22.9744 15.8739 25.5751 17.4656C23.5855 18.8725 19.6916 19.9952 14.7888 19.9952C14.2914 19.9952 13.8082 19.9952 13.3392 19.9668L13.3677 19.9383C12.6429 19.0714 11.6765 18.6025 10.6391 18.6025C10.4544 18.6025 10.2696 18.6309 10.0991 18.6593C8.46478 18.9436 7.51263 20.521 7.51263 23.008C7.51263 25.4949 8.47899 27.0866 10.1275 27.3566C10.298 27.385 10.4686 27.4134 10.6533 27.4134C11.0939 27.4134 12.2023 27.314 12.9555 26.5181C13.5524 26.5466 14.1777 26.575 14.803 26.575C22.9034 26.575 29 23.747 29 19.9952V15.3765C29 11.8664 23.6424 9.15202 16.2952 8.83937H16.281ZM2.58134 15.5755C2.58134 15.5755 2.55291 15.4476 2.55291 15.3765C2.55291 13.188 7.58369 10.7579 14.7888 10.7579C21.9939 10.7579 27.0246 13.188 27.0246 15.3765C27.0246 15.4476 27.0104 15.5044 26.9962 15.5755C24.0119 13.6996 19.5495 12.5769 14.7888 12.5769C10.028 12.5769 5.55148 13.6996 2.58134 15.5755ZM14.7888 24.6138C12.8703 24.6138 11.1223 24.4433 9.55905 24.1449C9.48799 23.7469 9.45957 23.3348 9.45957 23.008C9.45957 22.5816 9.5022 22.0132 9.64431 21.5442C11.2218 21.8142 12.9555 21.9705 14.7888 21.9705C20.1464 21.9705 24.6087 20.7342 27.0246 18.8157V20.0094C27.0246 22.1979 21.9939 24.628 14.7888 24.628V24.6138Z" fill="currentColor"/>
    <path d="M4.00757 9.50729L5.13025 6.62241L8.02934 5.49971L5.13025 4.37703L4.00757 1.49216L2.88488 4.37703L0 5.49971L2.88488 6.62241L4.00757 9.50729Z" fill="currentColor"/>
    <path d="M9.16627 3.52438L9.66367 2.25958L10.9285 1.7622L9.66367 1.2648L9.16627 0L8.66888 1.2648L7.40408 1.7622L8.66888 2.25958L9.16627 3.52438Z" fill="currentColor"/>
    <path d="M23.9833 27.0439L23.5001 28.3087L22.2353 28.8061L23.5001 29.3035L23.9833 30.5683L24.4807 29.3035L25.7455 28.8061L24.4807 28.3087L23.9833 27.0439Z" fill="currentColor"/>
  </svg>
);
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';

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
    fences: '20 virtual fences — 4x Bronze',
    support: 'Video support + 1-on-1 setup',
    discount: '$175 off upgrades — $25 more than Bronze',
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
    fences: 'Unlimited fences — no limits',
    support: 'Concierge + 1-on-1 setup',
    discount: '$200 off upgrades — $50 more than Bronze',
    accessories: '50% off accessories — 2x Silver',
    extras: ['Advanced health tracking', 'Expert trainer sessions'],
  },
};

const haloCarePrices = { monthly: 9.99, annual: 101.89, twoYear: 191.81 };

export default function AppV4() {
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
        </div>

        {/* ── Billing Frequency ── */}
        <div className="space-y-2">
          <p className="text-xs font-medium tracking-[0.1em] uppercase text-[#999] px-1">Billing cycle</p>
          <div className="space-y-2">
            {([
              { key: 'monthly' as const, label: 'Monthly', desc: `${fmt(plan.monthly)}/mo`, savings: null, tag: null },
              { key: 'annual' as const, label: 'Annual', desc: `${fmt(plan.annual / 12)}/mo`, savings: totalSavings(plan), tag: '1 month free' },
              { key: 'two-year' as const, label: '2-Year', desc: `${fmt(plan.twoYear / 24)}/mo`, savings: totalSavings(plan), tag: '3 months free' },
            ]).map(({ key, label, desc, tag }) => {
              const isActive = billing === key;
              const savingsForKey = key === 'monthly' ? 0 : (() => {
                const months = key === 'annual' ? 12 : 24;
                const period = key === 'annual' ? plan.annual : plan.twoYear;
                return (plan.monthly * months) - period;
              })();
              const pricePerMonth = key === 'monthly' ? plan.monthly : key === 'annual' ? plan.annual / 12 : plan.twoYear / 24;

              return (
                <button
                  key={key}
                  onClick={() => setBilling(key)}
                  className={`w-full rounded-xl px-4 py-3.5 flex items-center gap-3.5 transition-all duration-200 ${
                    isActive
                      ? 'bg-white shadow-[0_1px_8px_rgba(0,0,0,0.08)] ring-1 ring-[#1a1a1a]/10'
                      : 'bg-white/50'
                  }`}
                >
                  {/* Radio dot */}
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                    isActive ? 'border-[#1a1a1a]' : 'border-[#ddd]'
                  }`}>
                    {isActive && <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]" />}
                  </div>

                  {/* Label + tag */}
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className={`text-[14px] font-medium ${isActive ? 'text-[#1a1a1a]' : 'text-[#888]'}`}>
                        {label}
                      </span>
                      {tag && (
                        <span className="text-[10px] font-medium text-[#16a34a] bg-[#dcfce7] px-1.5 py-0.5 rounded">
                          {tag}
                        </span>
                      )}
                    </div>
                    {savingsForKey > 0 && (
                      <span className={`text-[12px] ${isActive ? 'text-[#1a1a1a]' : 'text-[#bbb]'}`}>
                        Save {fmt(savingsForKey)} vs monthly
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <span className={`text-[15px] font-semibold tabular-nums ${isActive ? 'text-[#1a1a1a]' : 'text-[#bbb]'}`}>
                    {fmt(pricePerMonth)}
                    <span className={`text-[11px] font-normal ${isActive ? 'text-[#999]' : 'text-[#ccc]'}`}>/mo</span>
                  </span>
                </button>
              );
            })}
          </div>
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
              haloCare ? 'bg-[#FCD62D]' : 'bg-[#f0f0f0]'
            }`}>
              <CollarIcon className={`${haloCare ? 'text-white' : 'text-[#999]'}`} />
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

        {/* ── FAQ ── */}
        <div className="space-y-2">
          <p className="text-xs font-medium tracking-[0.1em] uppercase text-[#999] px-1">FAQ</p>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="item-1" className="bg-white rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.04)] border-none px-5">
              <AccordionTrigger className="text-[14px] text-left font-medium text-[#1a1a1a] hover:no-underline py-4 [&>svg]:text-[#bbb]">
                Can I change my plan later?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-[#777] pb-4">
                Yes! You can upgrade or downgrade your plan at any time from your account settings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.04)] border-none px-5">
              <AccordionTrigger className="text-[14px] text-left font-medium text-[#1a1a1a] hover:no-underline py-4 [&>svg]:text-[#bbb]">
                What's included with Halo Care?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-[#777] pb-4">
                Halo Care includes collar replacement coverage, free upgrade program, and priority support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.04)] border-none px-5">
              <AccordionTrigger className="text-[14px] text-left font-medium text-[#1a1a1a] hover:no-underline py-4 [&>svg]:text-[#bbb]">
                How does billing work for multiple collars?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-[#777] pb-4">
                Additional collars are discounted! Bronze plans are +$3.99/mo per collar, while Silver and Gold are +$4.99/mo per collar.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
