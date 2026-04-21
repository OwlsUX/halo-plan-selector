import svgPaths from "./svg-p9ds2uxpnf";

function Text() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-[72.738px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.05px] w-[73px]">Step 2 of 3</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-[30.35px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.05px] w-[31px]">67%</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Text />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return <div className="bg-[#fcd62d] h-[7.993px] rounded-[3.51733e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container2() {
  return (
    <div className="bg-[#f3f4f6] h-[7.993px] relative rounded-[3.51733e+07px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[109.804px] py-0 relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function ProgressIndicator() {
  return (
    <div className="content-stretch flex flex-col gap-[11.989px] h-[39.981px] items-start relative shrink-0 w-full" data-name="ProgressIndicator">
      <Container />
      <Container2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[9.99px] size-[15.986px] top-[7.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9857 15.9857">
        <g id="Icon">
          <path d={svgPaths.p21f19a00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33215" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[31.988px] left-0 rounded-[16px] top-0 w-[79.012px]" data-name="Button">
      <Icon />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[53.47px] not-italic text-[#4a5565] text-[14px] text-center text-nowrap top-[6.04px] translate-x-[-50%]">Back</p>
    </div>
  );
}

function HaloCareStep() {
  return (
    <div className="absolute h-[18px] left-[15.99px] top-[7.99px] w-[108.887px]" data-name="HaloCareStep">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[54px] not-italic text-[12px] text-center text-nowrap text-white top-[2px] translate-x-[-50%]">Save up to 70% off</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#2f93f3] border-[1.048px] border-[rgba(0,0,0,0)] border-solid h-[36.083px] left-[93.21px] overflow-clip rounded-[16px] top-0 w-[142.954px]" data-name="Badge">
      <HaloCareStep />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[72.001px] left-0 top-[52.07px] w-[329.378px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-[calc(50%-0.18px)] not-italic text-[#0a0a0a] text-[30px] text-center top-[-1.02px] translate-x-[-50%] w-[221px]">Protect Your Investment.</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[71.985px] left-0 top-[136.06px] w-[329.378px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[165.07px] not-italic text-[#4a5565] text-[16px] text-center top-[-1.95px] translate-x-[-50%] w-[330px]">{`Get complete peace of mind with Halo Care `}</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[208.044px] left-0 top-[55.98px] w-[329.378px]" data-name="Container">
      <Badge />
      <Heading />
      <Paragraph />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[23.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.995 23.995">
        <g id="Icon">
          <path d={svgPaths.p3051d800} id="Vector" stroke="var(--stroke-0, #FCD62D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
          <path d="M19.9958 2.99937V6.99937" id="Vector_2" stroke="var(--stroke-0, #FCD62D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
          <path d="M21.9962 4.99896H17.9962" id="Vector_3" stroke="var(--stroke-0, #FCD62D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
          <path d="M3.99916 16.9965V18.9965" id="Vector_4" stroke="var(--stroke-0, #FCD62D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
          <path d="M4.99937 17.9962H2.99937" id="Vector_5" stroke="var(--stroke-0, #FCD62D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#fefce8] relative rounded-[3.51733e+07px] shrink-0 size-[47.99px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27.991px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[18px] text-nowrap top-[-0.9px]">Unlimited upgrades</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[95.98px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#4a5565] text-[16px] top-[-1.95px] w-[211px]">Upgrade to the newest model upon release for only $179.</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 grow h-[131.964px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.993px] items-start relative size-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[15.986px] items-start relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white h-[157px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[1.048px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-[1.048px] pt-[25.043px] px-[25.043px] relative size-full">
        <Container6 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[23.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.995 23.995">
        <g id="Icon">
          <path d={svgPaths.p3616eac0} id="Vector" stroke="var(--stroke-0, #2F93F3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[3.51733e+07px] shrink-0 size-[47.99px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[27.991px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[18px] text-nowrap top-[-0.9px]">Unlimited Replacements</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[-0.01px] not-italic text-[#4a5565] text-[16px] top-[-2.03px] w-[224px]">{`Replace your collar for just $179, a 70% savings. Covers loss, damage & excess use.`}</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 grow h-[100px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.993px] items-start relative size-full">
        <Heading2 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[15.986px] h-[106px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white h-[166px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[1.048px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-[1.048px] pt-[25.043px] px-[25.043px] relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[23.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.995 23.995">
        <g id="Icon">
          <path d={svgPaths.p274d2200} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
          <path d={svgPaths.p146cc0e0} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
          <path d={svgPaths.p3a2849c0} id="Vector_3" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
          <path d={svgPaths.p2227d7c0} id="Vector_4" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[3.51733e+07px] shrink-0 size-[47.99px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[27.991px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[18px] text-nowrap top-[-0.9px]">No Questions Asked</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#4a5565] text-[16px] top-[-1.95px] w-[208px]">Whatever the reason, you can order a new collar in just a few clicks.</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="basis-0 grow h-[100px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.993px] items-start relative size-full">
        <Heading3 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[15.986px] h-[100px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white h-[163px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[1.048px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-[1.048px] pt-[25.043px] px-[25.043px] relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[23.995px] h-[556px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container11 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return <div className="bg-[#e5e7eb] h-[0.999px] shrink-0 w-full" data-name="Container" />;
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[31.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9879 31.9879">
        <g id="Icon">
          <path d={svgPaths.p21f9e200} id="Vector" stroke="var(--stroke-0, #2F93F3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66566" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex items-center justify-center left-[99.65px] rounded-[3.51733e+07px] size-[63.992px] top-0" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[31.988px] left-0 top-[79.98px] w-[263.306px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[132.01px] not-italic text-[#0a0a0a] text-[24px] text-center text-nowrap top-[-0.95px] translate-x-[-50%]">Add Protection</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[36.689px] items-start relative shrink-0 w-[86.857px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[#101828] text-[30px] text-center text-nowrap">$9.99</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex h-[22.013px] items-start relative shrink-0 w-[118.141px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4a5565] text-[18px] text-center text-nowrap">/mo per collar</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-center left-[29.15px] top-[-1.05px]">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[36.377px] left-0 top-[123.96px] w-[263.306px]" data-name="Container">
      {[...Array(2).keys()].map((_, i) => (
        <Frame2 key={i} />
      ))}
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[19.999px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9986 19.9986">
        <g id="Icon">
          <path d={svgPaths.pcb35900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[47.99px] relative shrink-0 w-[231.318px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[0.01px] not-italic text-[#364153] text-[16px] top-[-2px] w-[224px]">$179 replacements</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex gap-[11.989px] h-[22px] items-start relative shrink-0 w-full" data-name="List Item">
      <Icon5 />
      <Text4 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[19.999px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9986 19.9986">
        <g id="Icon">
          <path d={svgPaths.pcb35900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[23.995px] relative shrink-0 w-[166.425px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-1.95px] w-[167px]">$179 upgrades</p>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex gap-[11.989px] h-[26px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon6 />
      <Text5 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[19.999px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9986 19.9986">
        <g id="Icon">
          <path d={svgPaths.pcb35900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[23.995px] relative shrink-0 w-[185.556px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-1.95px]">Complete peace of mind</p>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex gap-[11.989px] h-[23.995px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon7 />
      <Text6 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[118px] items-start left-[-0.05px] top-[175.95px] w-[263px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function HaloCareStep1() {
  return (
    <div className="h-[293px] relative shrink-0 w-[263px]" data-name="HaloCareStep">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container18 />
        <Heading4 />
        <Container19 />
        <List />
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#2f93f3] h-[51px] relative rounded-[12px] shrink-0 w-[280px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[50px] justify-center leading-[0] left-[139.96px] not-italic text-[18px] text-center text-white top-[24.95px] translate-x-[-50%] translate-y-[-50%] w-[280px]">
          <p className="leading-[16px]">Protect My Collar Purchase</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.048px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[25.048px] relative w-full">
        <HaloCareStep1 />
        <Badge1 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[36.001px] relative shrink-0 w-[22.865px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[36px] left-[11px] not-italic text-[#99a1af] text-[30px] text-center text-nowrap top-[-1.05px] translate-x-[-50%]">✕</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex items-center justify-center left-[99.65px] pl-0 pr-[0.016px] py-0 rounded-[3.51733e+07px] size-[63.992px] top-0" data-name="Container">
      <Text7 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[31.988px] left-0 top-[79.98px] w-[263.306px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[132.21px] not-italic text-[#0a0a0a] text-[24px] text-center text-nowrap top-[-0.95px] translate-x-[-50%]">Decline Protection</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[23.995px] relative shrink-0 w-[12.202px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1.95px]">✕</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[23.995px] relative shrink-0 w-[204.637px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[-0.23px] not-italic text-[#6a7282] text-[18px] top-[-1.46px] w-[243px]">Pay more for replacements</p>
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex gap-[11.989px] h-[23.995px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[23.995px] relative shrink-0 w-[12.202px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1.95px]">✕</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[23.995px] relative shrink-0 w-[200.1px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#6a7282] text-[18px] text-nowrap top-[-1.95px]">Pay more for upgrades</p>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex gap-[11.989px] h-[23.995px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[23.995px] relative shrink-0 w-[12.202px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1.95px]">✕</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[23.995px] relative shrink-0 w-[178.038px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#6a7282] text-[18px] text-nowrap top-[-1.95px]">Limited coverage</p>
      </div>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="content-stretch flex gap-[11.989px] h-[23.995px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text12 />
      <Text13 />
    </div>
  );
}

function List1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.989px] h-[95.964px] items-start left-0 top-[143.32px] w-[263.306px]" data-name="List">
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function HaloCareStep2() {
  return (
    <div className="h-[258px] relative shrink-0 w-[263px]" data-name="HaloCareStep">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container20 />
        <Heading5 />
        <List1 />
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#f9fafb] h-[51px] relative rounded-[12px] shrink-0 w-[280px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[50px] justify-center leading-[0] left-[139.96px] not-italic text-[#0a0a0a] text-[18px] text-center top-[24.57px] translate-x-[-50%] translate-y-[-50%] w-[280px]">
          <p className="leading-[16px]">Decline Protection</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.048px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[25.048px] relative w-full">
        <HaloCareStep2 />
        <Badge2 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[839px] items-start left-[0.01px] top-0 w-[329px]">
      <Card />
      <Card1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[756.702px] relative shrink-0 w-full" data-name="Container">
      <Frame1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-start left-0 top-[241.03px] w-[329.378px]">
      <Container16 />
      <Container17 />
      <Container21 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#e5e7eb] h-[55.999px] left-0 opacity-50 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[1742.86px] w-[329.378px]" data-name="Button">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[164.86px] not-italic text-[#9ca3af] text-[18px] text-center text-nowrap top-[13.1px] translate-x-[-50%]">Continue to Order Summary →</p>
    </div>
  );
}

function Container22() {
  return <div className="bg-[#e5e7eb] h-[0.999px] shrink-0 w-full" data-name="Container" />;
}

function Paragraph4() {
  return (
    <div className="h-[39.014px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-[164.76px] not-italic text-[#6a7282] text-[12px] text-center top-[0.1px] translate-x-[-50%] w-[297px]">* Halo Care must be active for 60+ days if you buy a replacement. See terms and conditions.</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.986px] h-[73px] items-start left-[0.01px] top-[1837.03px] w-[329px]" data-name="Container">
      <Container22 />
      <Paragraph4 />
    </div>
  );
}

function Container24() {
  return <div className="absolute bg-[#e5e7eb] h-[0.999px] left-0 top-[-0.17px] w-[329.378px]" data-name="Container" />;
}

function Container25() {
  return (
    <div className="h-[2068px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container3 />
      <Frame />
      <Button1 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function HaloCareStep3() {
  return (
    <div className="bg-[#f9fafb] h-[2002px] relative shrink-0 w-full" data-name="HaloCareStep">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[23.995px] items-start pb-0 pt-[23.995px] px-[23.995px] relative size-full">
          <ProgressIndicator />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

export default function DrewsDraft() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Drew\'s draft">
      <HaloCareStep3 />
    </div>
  );
}