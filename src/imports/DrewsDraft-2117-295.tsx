import svgPaths from "./svg-nff97zdoou";
import imgContainer from "figma:asset/70789ca931e331830275c01e475d2645453f4ce1.png";

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[72.766px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 w-[90px]">Step 2 of 3</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[30.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 w-[31px]">67%</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container1() {
  return <div className="bg-[#fcd62d] h-[8px] rounded-[3.35544e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container2() {
  return (
    <div className="bg-[#f3f4f6] h-[8px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[341.344px] py-0 relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function ProgressIndicator() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[40px] items-start relative shrink-0 w-full" data-name="ProgressIndicator">
      <Container />
      <Container2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[32px] relative rounded-[16px] shrink-0 w-[66px]" data-name="Button">
      <Icon />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[42.5px] not-italic text-[#4a5565] text-[14px] text-center text-nowrap top-[6px] translate-x-[-50%]">Back</p>
    </div>
  );
}

function HaloCareStep() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[16px] pb-0 pt-[2px] px-0 top-[8px] w-[108.953px]" data-name="HaloCareStep">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white">Save up to 70% off</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#2f93f3] border border-[rgba(0,0,0,0)] border-solid h-[36px] left-[440.52px] overflow-clip rounded-[16px] top-0 w-[142.953px]" data-name="Badge">
      <HaloCareStep />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[48px] left-0 top-[52px] w-[1024px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-[512.86px] not-italic text-[#0a0a0a] text-[48px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Protect Your Investment</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[56px] left-[176px] top-[116px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[336px] not-italic text-[#4a5565] text-[20px] text-center top-0 translate-x-[-50%] w-[612px]">Get complete peace of mind with Halo Care — upgrades and replacements for a fraction of the cost.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[172px] left-0 top-[56px] w-[1024px]" data-name="Container">
      <Badge />
      <Heading />
      <Paragraph />
    </div>
  );
}

function ImageWithFallback() {
  return <div className="h-[556px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container4() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-white inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-contain rounded-[16px] size-full" src={imgContainer} />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <ImageWithFallback />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p296ad200} id="Vector" stroke="var(--stroke-0, #FCD62D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20 3V7" id="Vector_2" stroke="var(--stroke-0, #FCD62D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M22 5H18" id="Vector_3" stroke="var(--stroke-0, #FCD62D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4 17V19" id="Vector_4" stroke="var(--stroke-0, #FCD62D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5 18H3" id="Vector_5" stroke="var(--stroke-0, #FCD62D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#fefce8] relative rounded-[3.35544e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[20px] text-nowrap top-0">Unlimited Upgrades</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#4a5565] text-[18px] top-0 w-[370px]">Upgrade to the newest Halo Collar model upon release for only $179. Always have access to the latest technology.</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 grow h-[120px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[16px] h-[120px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white h-[170px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3f3d8e00} id="Vector" stroke="var(--stroke-0, #2F93F3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[3.35544e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[20px] text-nowrap top-0">Unlimited Replacements</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#4a5565] text-[18px] top-0 w-[334px]">{`Get a replacement collar for just $179 if yours is lost, damaged, or worn out — that's 70% off the $599 retail value.`}</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 grow h-[120px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading2 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[16px] h-[120px] items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white h-[170px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p8b48b40} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 3V8H8" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p11dec1c0} id="Vector_3" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 16H21V21" id="Vector_4" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[3.35544e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[20px] text-nowrap top-0">No Questions Asked</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#4a5565] text-[18px] top-0 w-[351px]">{`Whether it's lost, damaged, or you just want the latest model, you can order a new collar in just a few clicks`}</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 grow h-[120px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading3 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[16px] h-[120px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white h-[170px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[24px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container8 />
      <Container12 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="gap-[48px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[558px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return <div className="bg-[#e5e7eb] h-px shrink-0 w-full" data-name="Container" />;
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.pae2ff80} id="Vector" stroke="var(--stroke-0, #2F93F3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex items-center justify-center left-[176px] rounded-[3.35544e+07px] size-[64px] top-0" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-0 top-[80px] w-[416px]" data-name="Heading 3">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#0a0a0a] text-[30px] text-center">Add Protection</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start left-[104.78px] top-[-2px] w-[104.266px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[#101828] text-[30px] text-center text-nowrap">$9.99</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex h-[22.013px] items-start relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4a5565] text-[18px] text-center text-nowrap">/mo per collar</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center left-[195px] top-[6px]">
      <Text3 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[41px] left-0 top-[128px] w-[416px]" data-name="Container">
      <Text2 />
      <Frame1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p32ddfd00} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[127px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[-0.37px] not-italic text-[#364153] text-[18px] top-0 w-[127px]">$179 upgrades</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center justify-center relative shrink-0 w-[338px]" data-name="List Item">
      <Icon5 />
      <Text4 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p32ddfd00} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[164px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[0.16px] not-italic text-[#364153] text-[18px] top-0 w-[164px]">$179 replacements</p>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center justify-center relative shrink-0 w-[376px]" data-name="List Item">
      <Icon6 />
      <Text5 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p32ddfd00} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[28px] relative shrink-0 w-[208.797px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[0.4px] not-italic text-[#364153] text-[18px] top-0 w-[217px]">Complete peace of mind</p>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center justify-center relative shrink-0 w-full" data-name="List Item">
      <Icon7 />
      <Text6 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[108px] items-start left-0 top-[185px] w-[416px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function HaloCareStep1() {
  return (
    <div className="h-[293px] relative shrink-0 w-[416px]" data-name="HaloCareStep">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container20 />
        <Heading4 />
        <Container21 />
        <List />
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#2f93f3] h-[51px] relative rounded-[12px] shrink-0 w-[416px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[51px] justify-center leading-[0] left-[208px] not-italic text-[18px] text-center text-white top-[25.5px] translate-x-[-50%] translate-y-[-50%] w-[416px]">
          <p className="leading-[16px]">Protect My Collar Purchase</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Card() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[449px] relative rounded-[20px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col items-start justify-between pl-[42px] pr-[2px] py-[42px] relative size-full">
        <HaloCareStep1 />
        <Badge1 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[36px] relative shrink-0 w-[22.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[36px] not-italic relative shrink-0 text-[#99a1af] text-[30px] text-center text-nowrap">✕</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex items-center justify-center left-[176px] rounded-[3.35544e+07px] size-[64px] top-0" data-name="Container">
      <Text7 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-0 top-[80px] w-[416px]" data-name="Heading 3">
      <div className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#0a0a0a] text-[30px] text-center">
        <p className="mb-0">{`Decline `}</p>
        <p>Protection</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[12.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1px]">✕</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[28px] relative shrink-0 w-[225.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#6a7282] text-[18px] text-nowrap top-0">Pay more for upgrades</p>
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[12.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1px]">✕</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[28px] relative shrink-0 w-[230.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#6a7282] text-[18px] top-0 w-[231px]">Pay more for replacements</p>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[12.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1px]">✕</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[28px] relative shrink-0 w-[200.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#6a7282] text-[18px] text-nowrap top-0">Limited coverage</p>
      </div>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text12 />
      <Text13 />
    </div>
  );
}

function List1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[108px] items-start left-0 top-[185px] w-[416px]" data-name="List">
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function HaloCareStep2() {
  return (
    <div className="h-[293px] relative shrink-0 w-[416px]" data-name="HaloCareStep">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container22 />
        <Heading5 />
        <List1 />
      </div>
    </div>
  );
}

function HaloCareStep3() {
  return (
    <div className="absolute content-stretch flex h-[51px] items-center justify-between left-0 pb-0 pt-[2px] px-0 top-0 w-[416px]" data-name="HaloCareStep">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[49px] justify-center leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] text-center w-[415px]">
        <p className="leading-[16px]">Decline Protection</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#f9fafb] h-[51px] relative rounded-[12px] shrink-0 w-[416px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <HaloCareStep3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Card1() {
  return (
    <div className="[grid-area:1_/_2] bg-white h-[449px] relative rounded-[20px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col items-start justify-between pl-[42px] pr-[2px] py-[42px] relative size-full">
        <HaloCareStep2 />
        <Badge2 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[449px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e5e7eb] h-[64px] opacity-50 relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[512px]" data-name="Button">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[256px] not-italic text-[#9ca3af] text-[20px] text-center text-nowrap top-[18px] translate-x-[-50%]">Continue to Order Summary →</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[1088px] items-center left-0 top-[276px] w-[1024px]">
      <Container18 />
      <Container19 />
      <Container23 />
      <Button1 />
    </div>
  );
}

function Container24() {
  return <div className="bg-[#e5e7eb] h-px shrink-0 w-full" data-name="Container" />;
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[675.56px] top-[2px] w-[138.984px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] not-italic relative shrink-0 text-[#2f93f3] text-[14px] text-center text-nowrap">terms and conditions</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-[440.39px] not-italic text-[#6a7282] text-[14px] text-center text-nowrap top-0 translate-x-[-50%]">* Halo Care must be active for 60+ days if you buy a replacement. See</p>
      <Link />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-[816.55px] not-italic text-[#6a7282] text-[14px] text-center text-nowrap top-0 translate-x-[-50%]">.</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[39.75px] items-start left-0 top-[1508px] w-[1024px]" data-name="Container">
      <Container24 />
      <Paragraph4 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[1666.75px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Frame />
      <Container25 />
    </div>
  );
}

function HaloCareStep4() {
  return (
    <div className="bg-[#f9fafb] h-[1802.75px] relative shrink-0 w-full" data-name="HaloCareStep">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-0 pt-[32px] px-[438px] relative size-full">
        <ProgressIndicator />
        <Button />
        <Container26 />
      </div>
    </div>
  );
}

export default function DrewsDraft() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Drew\'s draft">
      <HaloCareStep4 />
    </div>
  );
}