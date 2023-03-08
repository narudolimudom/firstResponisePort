import React from "react";
import g1 from "../assets/g1.svg";
import g2 from "../assets/g2.svg";
import g3 from "../assets/g3.svg";
import g4 from "../assets/g4.svg";
import g5 from "../assets/g5.svg";
import g6 from "../assets/g6.svg";
import woman from "../assets/woman.svg";
import ButtonBlack from "./ButtonBlack";

type Props = {};

const Contents = (props: Props) => {
  const textPosition =
    "absolute bottom-[24px] left-[24px] text-2xl font-bold text-white";

  const graphicPosition = "absolute top-[24px] right-[24px]";

  return (
    <div>
      <div className="flex flex-col items-center mobile:pt-8 tablet:pt-[66px] desktop:pt-16">
        <div className="mobile:max-w-[343px] tablet:max-w-[690px] desktop:max-w-[752px]">
          <h1 className=" text-center font-bold text-black mobile:text-4xl tablet:text-[44px] desktop:text-[56px]">
            Design solutions made easy
          </h1>
          <h3 className="text-center text-mediumBrown mobile:mx-[29px] mobile:pt-4 mobile:text-base tablet:mx-[58.5px] tablet:pt-[27px] tablet:text-lg desktop:mx-[11px] desktop:pt-[23px]">
            With over ten years of experience in various design disciplines, I’m
            your one-stop shop for your design needs.
          </h3>
        </div>
        <div className="gap-6 mobile:block mobile:pt-8 tablet:flex tablet:pt-16 desktop:flex desktop:pt-20">
          <div className="relative h-[364px] rounded-lg bg-galacticBlue mobile:w-[343px] tablet:w-[333px] desktop:w-[354px] ">
            <img src={g1} className={graphicPosition} alt="image" />
            <p className={textPosition}>Graphic Design</p>
          </div>
          <div>
            <div className="mb-[24px] flex gap-[25px] rounded-lg  mobile:pt-[24px] tablet:pt-0 desktop:pt-0 ">
              <div className=" relative h-[182px]  rounded-lg bg-summerYellow mobile:w-[159px] tablet:w-[155px] desktop:w-[164px]">
                <img src={g2} className={graphicPosition} alt="image" />
                <p className={textPosition}>UI/UX</p>
              </div>
              <div className=" relative h-[182px]  rounded-lg bg-[#F39E9E] mobile:w-[159px] tablet:w-[155px] desktop:w-[164px]">
                <img src={g3} className={graphicPosition} alt="image" />
                <p className={textPosition}>Apps</p>
              </div>
            </div>
            <div className="relative h-[158px] w-full  rounded-lg bg-lightRed">
              <img src={g4} className={graphicPosition} alt="image" />
              <p className={textPosition}>Illustrations</p>
            </div>
          </div>
          <div className=" flex-col gap-[24px] mobile:hidden tablet:hidden desktop:flex">
            <div className=" relative h-[182px]  rounded-lg bg-cyan mobile:w-[343px] tablet:w-[333px] desktop:w-[354px]">
              <img src={g5} className={graphicPosition} alt="image" />
              <p className={textPosition}>Photography</p>
            </div>
            <div className=" relative w-[354px]  rounded-lg bg-[#552049] mobile:h-[182px] mobile:w-[343px] tablet:h-[182px] tablet:w-[333px] desktop:h-[158px] desktop:w-[354px]">
              <img src={g6} className={graphicPosition} alt="image" />
              <p className={textPosition}>Motion Graphics</p>
            </div>
          </div>
        </div>
        <div className=" flex-row gap-[24px] pt-[24px] mobile:block tablet:flex desktop:hidden">
          <div className=" relative h-[182px]  rounded-lg bg-cyan mobile:w-[343px] tablet:w-[333px] desktop:w-[354px]">
            <img src={g5} className={graphicPosition} alt="image" />
            <p className={textPosition}>Photography</p>
          </div>
          <div className=" relative w-[354px]  rounded-lg bg-[#552049] mobile:mt-[24px] mobile:h-[182px] mobile:w-[343px] tablet:mt-0 tablet:h-[182px] tablet:w-[333px] desktop:mt-0 desktop:h-[158px] desktop:w-[354px]">
            <img src={g6} className={graphicPosition} alt="image" />
            <p className={textPosition}>Motion Graphics</p>
          </div>
        </div>
      </div>
      <div className=" mobile:block mobile:w-[343px]  mobile:pt-[100px] tablet:flex tablet:w-[727px]  tablet:pt-[120px] desktop:flex desktop:w-[1110px]  desktop:pt-[136px]">
        <div className="relative tablet:w-1/2">
          <div className="flex justify-center">
            <img
              src={woman}
              className=" rounded-full mobile:static mobile:h-[300px] mobile:w-[300px] tablet:absolute tablet:left-[-44px]  tablet:bottom-0 tablet:h-[364px] tablet:w-[364px] desktop:static desktop:h-[445px] desktop:w-[445px]"
              alt="profile"
            />
          </div>
        </div>
        <div className="tablet :pt-[70px] mobile:mt-[40px] mobile:w-auto mobile:text-center tablet:mt-0 tablet:w-1/2 tablet:text-left desktop:mt-0 desktop:w-1/2 desktop:pt-[70px] desktop:text-left">
          <h1 className=" font-bold text-black mobile:w-[343px] mobile:text-[26px] tablet:w-[339px] tablet:text-[32px] desktop:w-[540px] desktop:text-[40px]">
            I’m Amy, and I’d love to work on your next project
          </h1>
          <h2 className=" text-mediumBrown mobile:pt-[24px] mobile:text-base tablet:pt-[24px] tablet:text-lg desktop:pt-[34px] desktop:text-lg">
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </h2>
          <div className=" flex mobile:justify-center mobile:pt-[24px] tablet:justify-start tablet:pt-[24px] desktop:justify-start desktop:pt-[32px]">
            <ButtonBlack />
          </div>
        </div>
      </div>

      {/* <div className="bg-black text-white mobile:mt-[100px] mobile:h-[352px] tablet:mt-[120px] tablet:h-[352px] desktop:mt-[88px] desktop:h-[320px]">
        <div className="flex items-center text-center mobile:flex-col">
          <h1>Book a call with me</h1>
          <p className=" mobile:pt-[20px]">
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
          <div className=" mobile:pt-[24px]">
            <Button />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Contents;
