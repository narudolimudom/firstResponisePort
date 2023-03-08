import React from "react";
import Button from "./Button";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="mt-[34px] flex w-full max-w-[1111px] items-center justify-between mobile:px-4 tablet:px-10">
      <div className="flex items-center justify-center bg-black mobile:h-12 mobile:w-12 tablet:h-16 tablet:w-16 desktop:h-16 desktop:w-16">
        <div className="relative mobile:h-6 mobile:w-6 tablet:h-8 tablet:w-8 desktop:h-8 desktop:w-8">
          <div className="absolute inset-0 rounded-full border-white mobile:border-[3px] tablet:border-4  desktop:border-4"></div>
        </div>
      </div>
      <Button />
    </div>
  );
};

export default NavBar;
