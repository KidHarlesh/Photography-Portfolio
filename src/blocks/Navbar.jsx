import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Mobilelogo from "../assets/Mobile.logo.svg";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <section className=" bg-black text-[#AFB0B6]">
      <nav className=" fixed top-0 w-full bg-black border-solid border-x-0 border-[#2F2F37] border-t-0 border-b    z-50   ">
        <div className="  container flex justify-between  items-center border-x border-[#2F2F37] pt-8  pl-10 lg:pr-10  ">
          {/* <div className=" flex justify-between  items-center pt-[40px]  lg:pt-[0px] "> */}
          {/* <div> */}
          <Link>
            <img srcSet={Mobilelogo} />
          </Link>
          {/* </div> */}
          {/* <div className="md:block  border border-[#2F2F37] border-e-0 lg:hidden p-[20px] rounded-tl-xl  border-b-0   ">
              <img srcSet={Menu} alt="menu" />
            </div> */}
          {/* </div> */}
          <ul className=" hidden  lg:flex justify-between  text-[14px]  font-normal  items-center ">
            <li className=" py-[20px] border-[#2F2F37]  border  border-e-0   border-b-0   rounded-tl-lg   transition delay-150 duration-300 ease-in-out">
              <NavLink className="px-[29px] py-[21px]" to="/">
                Home
              </NavLink>
            </li>
            <li className=" py-[20px] border-[#2F2F37]  border  border-e-0  border-b-0  transition delay-150 duration-300 ease-in-out">
              <NavLink className="px-[36px] py-[20px]" to="/about">
                About Me
              </NavLink>
            </li>
            <li className=" py-[20px] border-[#2F2F37] border border-e-0   border-b-0  transition delay-150 duration-300 ease-in-out">
              <NavLink className="px-[36px] py-[20px]" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="  py-[20px] border-[#2F2F37] border   border-b-0  rounded-tr-lg transition delay-150 duration-300 ease-in-out ">
              <NavLink className="px-[36px] py-[20px]" to="/service">
                Service
              </NavLink>
            </li>
          </ul>
          <div
            className="p-5 border  border-r-0  border-[#2F2F37] rounded-tl-lg lg:hidden "
            onClick={handleNav}
          >
            <FaBars className=" text-dark text-3xl" />
          </div>

          <div className="text-white  hidden lg:block">
            <button className=" bg-[#1C1C21]  py-[10px] px-[15px] rounded-lg text-[10px] transition delay-150 duration-300 ease-in-out  ">
              Contact Me
            </button>
          </div>
        </div>
      </nav>
      <div
        style={{
          transition: "all 0.3s ease",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
        }}
        className={
          nav
            ? "bg-black fixed z-[9999] top-0 left-0 w-full max-w-[300px] h-screen"
            : "hidden"
        }
      >
        <div className="flex justify-between items-center px-[15px] py-[20px]">
          <Link>
            <img src={Mobilelogo} alt="" />
          </Link>
          <IoClose className="text-3xl text-primary" onClick={handleNav} />
        </div>
        <ul>
          <li className="text-xl px-[15px] py-[20px] font-normal text-tertiary leading-[24px] border-y border-gray ">
            <Link to="/" className="leading-4" onClick={handleNav}>
              Home
            </Link>
          </li>
          <li className="text-xl px-[15px] py-[20px] font-normal text-tertiary leading-[24px] border-b border-gray ">
            <Link to="/about" className="leading-4" onClick={handleNav}>
              About Us
            </Link>
          </li>
          <li className="text-xl px-[15px] py-[20px] font-normal text-tertiary leading-[24px] border-b border-gray">
            <Link to="/portfolio" onClick={handleNav}>
              Portfolio
            </Link>
          </li>
          <li className="text-xl px-[15px] py-[20px] font-normal text-tertiary leading-[24px] border-b border-gray">
            <Link to="/service" onClick={handleNav}>
              Service
            </Link>
          </li>
        </ul>
              
      </div>
    </section>
  );
};

export default Navbar;
