import React from "react";

type Props = {};
import Button from "./Button";
const Footer = (props: Props) => {
  return (
    <div>
      <div className=" bg-black text-white mobile:mt-[100px] mobile:mb-[120px] mobile:h-[352px] mobile:w-[343px] mobile:pt-[49px] tablet:mt-[120px] tablet:mb-[176px] tablet:h-[352px] tablet:w-[690px] tablet:pt-[56px] desktop:mt-[88px] desktop:mb-[184px] desktop:h-[320px] desktop:w-[1110px] desktop:pt-[81px]">
        <div className="  text-center  mobile:px-[24px] tablet:px-[75px] desktop:px-[65px]">
          <div className="flex mobile:flex-col mobile:text-center tablet:flex-col tablet:text-center desktop:flex-row desktop:text-start">
            <div className=" mobile:w-[100%] tablet:w-[540px] desktop:w-[540px]">
              <h1 className="font-bold mobile:text-[26px] tablet:text-[32px] desktop:text-[40px]">
                Book a call with me
              </h1>
              <p className="font-normal mobile:pt-[20px] mobile:text-[16px] tablet:text-[18px] desktop:text-[18px] ">
                I’d love to have a chat to see how I can help you. The best
                first step is for us to discuss your project during a free
                consultation. Then we can move forward from there.
              </p>
            </div>
            <div className=" flex items-center  mobile:justify-center mobile:pt-[24px] tablet:justify-center tablet:pt-[26px] desktop:pl-[182px] desktop:pt-[0]">
              <Button colorEnd="summerYellow" colorStart="lightRed" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
