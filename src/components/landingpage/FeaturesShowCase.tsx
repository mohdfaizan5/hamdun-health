import Image from "next/image";
import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const FeaturesShowCase = () => {
  return (
    <div id="benefits">
      <Image
        width={600}
        height={600}
        quality={100}
        className="mx-auto "
        src="/assets/features.svg"
        alt=""
      />
    </div>
  );
  // return (
  //   <div className="scale-90 relative md:size-[500px] flex items-center justify-center  mx-auto my-36 gap-5">
  //     <section className="flex flex-col gap-10">
  //       <div className="flex flex-row-reverse ">
  //         <Image
  //           width={40}
  //           height={40}
  //           className="rotate-[210deg]"
  //           src="/svgs/arrow.svg"
  //           alt=""
  //         />
  //         <div>
  //           <VscWorkspaceTrusted className="text-xl text-brand-primary " />
  //           <p className="w-32 text-xs text-balance">
  //             Guarentee sales in 3 months
  //           </p>
  //         </div>
  //       </div>
  //       <div className="flex flex-row-reverse gap-3">
  //         <Image
  //           width={40}
  //           height={40}
  //           className="rotate-[170deg]"
  //           src="/svgs/arrow.svg"
  //           alt=""
  //         />
  //         <div>
  //           <VscWorkspaceTrusted className="text-xl text-brand-primary" />
  //           <p className="w-32 text-xs text-balance">
  //             Guarentee sales in 3 months
  //           </p>
  //         </div>
  //       </div>
  //       <div className="flex flex-row-reverse gap-3">
  //         <Image
  //           width={40}
  //           height={40}
  //           className="rotate-[150deg]"
  //           src="/svgs/arrow.svg"
  //           alt=""
  //         />
  //         <div>
  //           <VscWorkspaceTrusted className="text-xl text-brand-primary" />
  //           <p className="w-32 text-xs text-balance">
  //             Guarentee sales in 3 months
  //           </p>
  //         </div>
  //       </div>
  //     </section>
  //     <section className=" rounded-full size-28 flex flex-col items-center justify-center border border-brand-primary">
  //       <Image
  //         width={80}
  //         height={80}
  //         className=""
  //         src="/assets/logo_hamdun.png"
  //         alt=""
  //       />
  //     </section>
  //     <section className="flex flex-col gap-10">
  //       <div className="flex flex-row-reverse gap-3">
  //         <div>
  //           <VscWorkspaceTrusted className="text-xl text-brand-primary" />
  //           <p className="w-32 text-xs text-balance">
  //             Guarentee sales in 3 months
  //           </p>
  //         </div>
  //         <Image
  //           width={40}
  //           height={40}
  //           className="-rotate-45"
  //           src="/svgs/arrow.svg"
  //           alt=""
  //         />
  //       </div>
  //       <div className="flex flex-row-reverse gap-3">
  //         <div className="flex flex-col items-baseline">
  //           <VscWorkspaceTrusted className="text-xl text-brand-primary" />
  //           <p className="w-32 text-xs text-balance">
  //             Guarentee sales in 3 months
  //           </p>
  //         </div>
  //         <Image
  //           width={40}
  //           height={40}
  //           className="rotate-12"
  //           src="/svgs/arrow.svg"
  //           alt=""
  //         />
  //       </div>
  //       <div className="flex flex-row-reverse gap-3">
  //         <div className="flex flex-col items-baseline">
  //           <VscWorkspaceTrusted className="text-xl text-brand-primary" />
  //           <p className="w-32 text-xs text-balance">
  //             Guarentee sales in 3 months
  //           </p>
  //         </div>
  //         <Image
  //           width={40}
  //           height={40}
  //           className="rotate-45"
  //           src="/svgs/arrow.svg"
  //           alt=""
  //         />
  //       </div>
  //     </section>
  //   </div>
  // );
};

export default FeaturesShowCase;
