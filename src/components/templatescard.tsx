import React from "react";
import Image from "next/image";

const TemplatesCard = () => {
  return (
    <div className="border border-[#4C4D4F33]/20 mt-5 rounded-[10px] p-2 lg:w-[160px] md:w-[233.33px] bg-white xs:w-[108px]">
      <Image
        width={50.67}
        height={10}
        className="w-[50.67px] h-[10px] "
        src="/logo.png"
        alt=""
      />
      <div className="flex text-[8.05px] items-center gap-1 mt-2 xs:mt-1 ">
        SUMMERY <hr className="w-full" />
      </div>
      <div className="text-[8.05px] flex space-x-5 mt-3 xs:mt-1 xs:text-[4px]">
        <p>Dr. Vihang</p>
        <p>Jane Doe</p>
      </div>
      <div className="border-[1px] border-[#4C4D4F33]/20 rounded-[5px] overflow-hidden mt-3 w-full xs:mt-1">
        {" "}
        <table className="border-collapse   overflow-hidden w-full text-[6.05px] xs:text-[3px]">
          <thead className=" text-left bg-black text-white">
            <tr className="">
              <th className=" pl-2 py-2  xs:py-[2px]">item</th>
              <th className="  py-2  xs:py-[2px]">Rate</th>
              <th className="  py-2  xs:py-[2px]">Qty</th>
              <th className="  py-2  xs:py-[2px]">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className=" pl-2 py-1  xs:py-[2px]">Vitamin A Night Serum</td>
              <td className="  py-1  xs:py-[2px]">$90</td>
              <td className="  py-1  xs:py-[2px]">2</td>
              <td className="  py-1  xs:py-[2px]">$180</td>
            </tr>
            <tr className="">
              <td className=" pl-2 py-1  xs:py-[2px]">Vitamin A Night Serum</td>
              <td className="  py-1  xs:py-[2px]">$90</td>
              <td className="  py-1  xs:py-[2px]">2</td>
              <td className="  py-1  xs:py-[2px]">$180</td>
            </tr>
            <tr className="">
              <td className=" pl-2 py-1 xs:py-[2px]">Vitamin A Night Serum</td>
              <td className="  py-1  xs:py-[2px]">$90</td>
              <td className="  py-1  xs:py-[2px]">2</td>
              <td className="  py-1  xs:py-[2px]">$180</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex text-[6.05px]  space-x-10 mt-2 xs:mt-1 justify-end px-2 xs:text-[3px]">
        <div>
          <p className="font-medium">Subtotal</p>
          <p className="text-[#4C4D4F80]/40">tax 5%</p>
          <p className="text-[#4C4D4F80]/40">Discount 10%</p>
        </div>
        <div>
          <p className="font-medium">$540.00</p>
          <p className="text-[#4C4D4F80]/40">$00.00</p>
          <p className="text-[#4C4D4F80]/40">$00.00</p>
        </div>
      </div>
      <hr className="mt-2 xs:mt-1" />
      <div className="text-[6.05px] xs:text-[3px] flex space-x-10 justify-end mt-2 px-2 xs:mt-1">
        <p className="font-semibold">total</p>
        <p className="font-semibold">$540.00</p>
      </div>
      <div className="bg-[#F8F8F8] text-[6.05px] xs:text-[3px]  p-2 mt-2 xs:mt-1 ">
        <h5 className="text-[6.05px] ">Notes/Terms</h5>
        <p className="text-[#00000080]/30 text-[5.05px] xs:text-[3px]">
          Lorem ipsum dolor sit amet. Sit eaque assumenda qui.
        </p>
      </div>
    </div>
  );
};

export default TemplatesCard;
