import React from "react";

type Props = {
  colorStart: string;
  colorEnd: string;
};

const Button = ({ colorStart, colorEnd }: Props) => {
  return (
    // <div className=" m-1 flex h-14 items-center justify-center rounded-[28px] bg-black text-white hover:bg-summerYellow mobile:w-[176px]  tablet:w-[228px]">
    <div
      className={` m-1 flex h-14 items-center justify-center rounded-[28px] bg-${colorStart} text-white hover:bg-${colorEnd} cursor-pointer  mobile:w-[176px] tablet:w-[228px]`}
    >
      <div>Free Consultation</div>
    </div>
  );
};

export default Button;
