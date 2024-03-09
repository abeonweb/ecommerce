import React from "react";
import FooterSocials from "./FooterSocials";
import Logo from "./FooterLogo";

export default function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto flex justify-center sm:px-4 pt-[42px] pb-[60px] border-t-[0.5px] border-lightgray-950">
      <div className="max-w-[1123px] w-full flex flex-col-reverse sm:flex-row gap-y-8 sm:justify-between items-center">
        {/* copyright */}
        <p className="font-poppins text-[14px] text-center mb-4 sm:mb-0">
          All rights reserved, 2024
        </p>
        {/* logo */}
        <Logo />
        {/* social media */}
        <FooterSocials />
      </div>
    </footer>
  );
}
