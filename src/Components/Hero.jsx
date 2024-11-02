import React from "react";
import Vector from "../assets/Vector-img.svg";
import Button from "../assets/Blue-Button.svg";
import Heroimage from "../assets/Hero-image.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" bg-black  border-solid border border-[#2F2F37] border-x-0 ">
      <div className="gap-[20px] grid container lg:flex  justify-between items-center ">
        <div className="pt-[40px] lg:pt-0">
          <h1 className=" text-[14px] font-normal lg:text-[16px] lg:font-medium text-[#62646C]">
            STUNNINGPHOTOGRAPHYBY <br />
            <span className=" text-[40px] lg:text-[45px] text-[#E4E4E6] font-semibold ">
              DAMIEN BRAUN
            </span>
          </h1>
        </div>
        <div className="hidden lg:block ">
          <img className=" max-w-[90%]" src={Vector} alt="" />
        </div>
        <div>
          <h1 className=" text-[39px] text-[#FFFFFF] font-semibold ">
            <span className="flex gap-3 items-center">
              Let’s
              <Link>
                <img className="max-w-20 animate-bounce " src={Button} />
              </Link>
            </span>
            Work Together
          </h1>
        </div>
      </div>
      {/* for hero section image */}
      <div>
        <img className="xl:block m-auto" src={Heroimage} />
      </div>
    </section>
  );
};

export default Hero;