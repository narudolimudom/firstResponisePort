import React from "react";

type Props = {};
import Button from "./Button";
const Footer = (props: Props) => {
  return (
    <div>
      {" "}
      <div className="bg-black text-white mobile:mt-[100px] mobile:h-[352px] mobile:pt-[49px] tablet:mt-[120px] tablet:h-[352px] tablet:pt-[56px] desktop:mt-[88px] desktop:h-[320px] desktop:pt-[81px]">
        <div className="flex items-center text-center mobile:flex-col mobile:px-[24px] tablet:px-[75px] desktop:px-[65px]">
          <h1 className="font-bold mobile:text-[26px] tablet:text-[32px] desktop:text-[40px]">
            Book a call with me
          </h1>
          <p className="font-normal mobile:pt-[20px] mobile:text-[16px] tablet:text-[18px] desktop:text-[18px] ">
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
          <div className=" mobile:pt-[24px]">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
