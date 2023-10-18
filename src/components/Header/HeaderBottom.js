import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNavContent from "./SideNavContent";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const HeaderBottom = () => {
  const ref = useRef();
  const userInfo = useSelector((state) => state.amazon.userInfo);
  const [sideBar, setSideBar] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSideBar(false);
      }
    });
  }, [ref, sideBar]);
  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
      {/* ====== ListItems Start here ====== */}
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSideBar(true)}
          className="headerHover flex items-center gap-1"
        >
          <MenuIcon />
          All
        </li>
        <li className="headerHover hidden md:inline-flex">Amazon miniTV</li>
        <li className="headerHover hidden md:inline-flex">Sell</li>
        <li className="headerHover hidden md:inline-flex">Today's Deals</li>
        <li className="headerHover hidden md:inline-flex">Best Sellers</li>
        <li className="headerHover hidden md:inline-flex">Mobiles</li>
        <li className="headerHover hidden md:inline-flex">Electronics</li>
      </ul>
      {/* ====== ListItems End here ====== */}
      {/* ====== SideNav Start here ====== */}
      {sideBar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[80%] md:w-[350px] h-full bg-white border border-black"
            >
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                {userInfo ? (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={userInfo.image}
                    alt="UserImg"
                  />
                ) : (
                  <AccountCircleIcon />
                )}

                {userInfo ? (
                  <h3 className="font-titleFont font-bold text-lg tracking-wide ">
                    {userInfo.userName}
                  </h3>
                ) : (
                  <h3 className="font-titleFont font-bold text-lg tracking-wide">
                    Hello, Sign In
                  </h3>
                )}
              </div>
              <SideNavContent
                title="Digital Content And Devices"
                one="Echo & Alexa"
                two="Fire TV"
                three="Kindle E-Reader & Books"
              />
              <SideNavContent
                title="Shop By Category"
                one="Mobiles, Computers"
                two="Tv,Appliances, Electronics"
                three="Men's Fashion"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards & Mobile Recharge"
                two="Amazon Launchpad"
                three="Handloom and Handicarfts"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact us"
              />
              <span
                onClick={() => setSideBar(false)}
                className="cursor-pointer absolute top-0 left-[82%] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"
              >
                <CloseIcon />
              </span>
            </motion.div>
          </div>
        </div>
      )}
      {/* ====== SideNav End here ====== */}
    </div>
  );
};

export default HeaderBottom;
