import imgContainer from "figma:asset/70789ca931e331830275c01e475d2645453f4ce1.png";

function ImageWithFallback() {
  return <div className="h-[556px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-white inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-contain rounded-[16px] size-full" src={imgContainer} />
      </div>
      <ImageWithFallback />
    </div>
  );
}