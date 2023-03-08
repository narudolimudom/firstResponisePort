import React from "react";

type Props = {};

const Button = (props: Props) => {
  return (
    <div className=" m-1 flex h-14 items-center justify-center rounded-[28px] bg-black text-white hover:bg-galacticBlue mobile:w-[176px]  tablet:w-[228px]">
      <div>Free Consultation</div>
    </div>
  );
};

export default Button;
