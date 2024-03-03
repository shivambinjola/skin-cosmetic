import React from "react";
import Image from "next/image";
import SearchIcon from "@/assets/search.png";
import ArrowIcon from "@/assets/arrow.png";
import Icon from "@/assets/icon.png";

const MainComponent = ({ para, firstcomp, secondcomp }: any) => {
  return (
    <div className="px-5 space-y-8 pt-20 pb-6 text-[#4C4D4F] xs:space-y-2">
      <div className="space-y-2">
        <h1 className="text-[30px]">Invoice</h1>
        <p className="text-[20px] text-[#4C4D4FD9]/85 font-extralight">
          {para}
        </p>
      </div>
      <div className="flex lg:space-x-6 lg:flex-row lg:items-start flex-col items-center">
        {/* firstcomp */}
        {firstcomp}
        {/* secondcomp */}
        {secondcomp}
      </div>
    </div>
  );
};

export default MainComponent;
