import React from "react";
import Image from "next/image";
import Arrow from "@/assets/arrow.png";
import DeleteIcon from "@/assets/delete.png";
import UnionIcon from "@/assets/Union.png";
import CrossIcon from "@/assets/cross.png";

const CreateInvoicecomp = () => {
  return (
    <div className="px-7 xs:px-0">
      <div className="text-sm grid grid-cols-2 gap-5 mt-10 xs:text-[8.05px] xs:gap-2">
        <div className="space-y-1">
          <label>Select Person</label>
          <div className=" flex items-center 2xl:w-[340px] lg:w-full md:w-[340px]  border border-[#4C4D4F] bg-white rounded-[7px] overflow-hidden xs:w-full">
            <input
              className="2xl:w-[320px] xl:w-[310px] lg:w-[150px] md:w-[320px] h-[43px] pl-3 outline-none xs:w-[140px] xs:h-[24.73px]"
              placeholder="Select the person to whom you will send this"
            />
            <Image src={Arrow} className="w-[10px] h-[5px]" alt="" />
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <label>Invoice Number</label>
          <input
            className="2xl:w-[340px] lg:w-full md:w-[340px] h-[43px] border border-[#4C4D4F] rounded-[7px] pl-3 outline-none xs:w-full xs:h-[24.73px]"
            placeholder=""
          />
        </div>
        <div className="space-y-1">
          <label>Add a Treatment</label>
          <div className=" flex items-center 2xl:w-[340px] lg:w-full md:w-[340px] border border-[#4C4D4F] bg-white rounded-[7px] overflow-hidden xs:w-full">
            <input
              className="2xl:w-[320px] xl:w-[310px] lg:w-[150px] md:w-[320px] h-[43px] pl-3 outline-none xs:w-[140px] xs:h-[24.73px] "
              placeholder="Select a treatment"
            />
            <Image src={Arrow} className="w-[10px] h-[5px]" alt="" />
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <label>Select Date</label>
          <input
            // type="date"
            className="2xl:w-[340px] lg:w-full md:w-[340px] h-[43px] border border-[#4C4D4F] rounded-[7px] pl-3 outline-none xs:w-full xs:h-[24.73px]"
            placeholder="dd/mm/yyyy"
          />
        </div>
      </div>
      <div className="bg-[#F8F8F8] rounded-[14px] border border-[#4C4D4F33]/20 text-base px-6 mt-5 space-y-2 py-3 lg:block hidden">
        <div className="text-black/50 flex space-x-[158px]">
          <p>Treatments</p>
          <p>Amount</p>
        </div>
        <hr />
        <div className=" flex 2xl:space-x-[83.5px] xl:space-x-[73px] lg:space-x-20 items-center">
          <p>Anti wrinkle treatment</p>
          <p>$1480</p>
          <div className="space-x-2 xl:block lg:hidden">
            <button className="w-[144px] h-[38px] bg-black text-white text-xs rounded-[12px]">
              Add
            </button>
            <button className="w-[144px] h-[38px] border border-[#E23943] text-[#E23943] text-xs rounded-[12px]">
              Remove
            </button>
          </div>
        </div>
        <div className="space-x-2 xl:hidden lg:block">
          <button className="w-[144px] h-[38px] bg-black text-white text-xs rounded-[12px]">
            Add
          </button>
          <button className="w-[144px] h-[38px] border border-[#E23943] text-[#E23943] text-xs rounded-[12px]">
            Remove
          </button>
        </div>
      </div>
      <div className="bg-[#F8F8F8] rounded-[14px] border border-[#4C4D4F33]/20 text-sm px-6 mt-2 py-3 lg:block hidden">
        <div className="text-black/50 flex">
          <p>Treatments</p>
          <p className="xl:ml-32 lg:ml-8">Rate/per section</p>
          <p className="xl:ml-14 lg:ml-2">no. of section</p>
          <p className="xl:ml-16 lg:ml-2">Total</p>
        </div>
        <hr className="mt-2" />
        <div className=" flex items-center text-base mt-2">
          <div className="bg-white xl:w-[171px] h-[40px] pl-2 flex items-center rounded-lg border xl:pr-0 lg:pr-2">
            Hair Care Session
          </div>
          <div className="bg-white xl:w-[120px] h-[40px] pl-2 flex items-center rounded-lg border xl:ml-6 xl:pr-0 lg:pr-2 lg:ml-2">
            $145
          </div>
          <div className="bg-white xl:w-[62px] h-[40px] pl-2 flex items-center rounded-lg border xl:ml-8 xl:pr-0 lg:pr-2 lg:ml-6">
            8
          </div>
          <div className="bg-white xl:w-[119px] h-[40px] pl-2 flex items-center rounded-lg border xl:ml-20 xl:pr-0 lg:pr-2 lg:ml-6">
            $1160
          </div>
        </div>
        <div className=" flex justify-end space-x-2 mt-5">
          <button className="w-[144px] h-[38px] bg-black text-white text-xs rounded-[12px]">
            Add
          </button>
          <button className="w-[144px] h-[38px] border border-[#E23943] text-[#E23943] text-xs rounded-[12px]">
            Remove
          </button>
        </div>
      </div>
      <div className="bg-[#F8F8F8] rounded-[14px] border border-[#4C4D4F33]/20 text-sm px-6 lg:mt-2 py-3 mt-8 lg:hidden xs:text-[9.2px]">
        <div className="text-black/50 flex xs:text-[8.05px]">
          <p>Treatment Names</p>
          <p className="md:ml-[228px] sm:ml-32 xs:ml-20">Rate</p>
          <p className="md:ml-24 sm:ml-20 xs:ml-10">Qty</p>
          <p className="md:ml-14 sm:ml-8 xs:ml-6">Amount</p>
        </div>
        <div className=" flex items-center text-base mt-2 space-x-2">
          <div className="bg-white w-[296px] h-[40px] pl-2 flex items-center rounded-lg border xs:w-[170.27px] xs:h-[24.73px] xs:text-[9.2px]">
            Anti wrinkle
          </div>
          <div className="bg-white w-[120px] h-[40px] pl-2 flex items-center rounded-lg border  xs:w-[69.03px] xs:h-[24.73px] xs:text-[9.2px]">
            $425
          </div>
          <div className="bg-white w-[72px] h-[40px] pl-2 flex items-center rounded-lg border xs:w-[41.42px] xs:h-[24.73px] xs:text-[9.2px]">
            2
          </div>
          <div className="bg-white w-[120px] h-[40px] pl-2 flex items-center rounded-lg border xs:w-[69.03px] xs:h-[24.73px] xs:text-[9.2px]">
            $850
          </div>
          <Image src={DeleteIcon} className="lg:block hidden" alt="" />
          <Image src={CrossIcon} className="lg:hidden " alt="" />
        </div>
        <div className=" flex items-center text-base mt-2 space-x-2">
          <div className="bg-white w-[296px] h-[40px] pl-2 flex items-center rounded-lg border xs:w-[170.27px] xs:h-[24.73px] xs:text-[9.2px]">
            Profhilo
          </div>
          <div className="bg-white w-[120px] h-[40px] pl-2 flex items-center rounded-lg border xs:w-[69.03px] xs:h-[24.73px] xs:text-[9.2px]">
            $595
          </div>
          <div className="bg-white w-[72px] h-[40px] pl-2 flex items-center rounded-lg border xs:w-[41.42px] xs:h-[24.73px] xs:text-[9.2px]">
            2
          </div>
          <div className="bg-white w-[120px] h-[40px] pl-2 flex items-center rounded-lg border xs:w-[69.03px] xs:h-[24.73px] xs:text-[9.2px]">
            $1190
          </div>
          <Image src={DeleteIcon} className="lg:block hidden" alt="" />
          <Image src={CrossIcon} className="lg:hidden " alt="" />
        </div>
        <div className=" flex lg:justify-end lg:space-x-2 mt-5">
          <button className="w-[144px] h-[38px] bg-black text-white text-xs rounded-full lg:hidden xs:w-[105.84.px] xs:h-[27.61px] xs:text-[8.05px]">
            Add Item
          </button>
          <button className="w-[144px] h-[38px] bg-black text-white text-xs rounded-[12px] lg:block hidden">
            Add
          </button>
          <button className="w-[144px] h-[38px] border border-[#E23943] text-[#E23943] text-xs rounded-[12px] lg:block hidden">
            Remove
          </button>
        </div>
      </div>
      <div className="bg-[#F8F8F8] rounded-[14px] border border-[#4C4D4F33]/20 text-sm px-6 lg:mt-2 py-3 mt-2 ">
        <div className="text-black/50 flex xs:text-[8.05px]">
          <p>Skincare Items</p>
          <p className="xl:ml-[228px] lg:ml-14 md:ml-[228px] sm:ml-[148px] xs:ml-20">
            Rate
          </p>
          <p className="xl:ml-24 lg:ml-9 md:ml-24 sm:ml-20 xs:ml-10">Qty</p>
          <p className="xl:ml-14 lg:ml-5 md:ml-14 sm:ml-8 xs:ml-6">Amount</p>
        </div>
        <div className=" flex items-center text-base mt-2 space-x-2">
          <div className="bg-white w-[296px] h-[40px] pl-2 flex items-center rounded-lg border xs:w-[170.27px] xs:h-[24.73px] xs:text-[9.2px]">
            Vitamin A Night Serum
          </div>
          <div className="bg-white w-[120px] h-[40px] pl-2 flex items-center rounded-lg border xs:w-[69.03px] xs:h-[24.73px] xs:text-[9.2px]">
            $90
          </div>
          <div className="bg-white w-[72px] h-[40px] pl-2 flex items-center rounded-lg border xs:w-[41.42px] xs:h-[24.73px] xs:text-[9.2px]">
            2
          </div>
          <div className="bg-white w-[120px] h-[40px] pl-2 flex items-center rounded-lg border xs:w-[69.03px] xs:h-[24.73px] xs:text-[9.2px]">
            $180
          </div>
          <Image src={DeleteIcon} className="lg:block hidden" alt="" />
          <Image src={CrossIcon} className="lg:hidden " alt="" />
        </div>
        <div className=" flex items-center text-base mt-2 space-x-2">
          <div className="bg-white w-[296px] h-[40px] pl-2 flex items-center rounded-lg border xs:w-[170.27px] xs:h-[24.73px] xs:text-[9.2px]">
            Vitamin A Night Serum
          </div>
          <div className="bg-white w-[120px] h-[40px] pl-2 flex items-center rounded-lg border xs:w-[69.03px] xs:h-[24.73px] xs:text-[9.2px]">
            $90
          </div>
          <div className="bg-white w-[72px] h-[40px] pl-2 flex items-center rounded-lg border xs:w-[41.42px] xs:h-[24.73px] xs:text-[9.2px]">
            2
          </div>
          <div className="bg-white w-[120px] h-[40px] pl-2 flex items-center rounded-lg border xs:w-[69.03px] xs:h-[24.73px] xs:text-[9.2px]">
            $180
          </div>
          <Image src={DeleteIcon} className="lg:block hidden" alt="" />
          <Image src={CrossIcon} className="lg:hidden " alt="" />
        </div>
        <div className=" flex lg:justify-end lg:space-x-2 mt-5">
          <button className="w-[144px] h-[38px] bg-black text-white text-xs rounded-full lg:hidden xs:w-[105.84.px] xs:h-[27.61px] xs:text-[8.05px]">
            Add Item
          </button>
          <button className="w-[144px] h-[38px] bg-black text-white text-xs rounded-[12px] lg:block hidden">
            Add
          </button>
          <button className="w-[144px] h-[38px] border border-[#E23943] text-[#E23943] text-xs rounded-[12px] lg:block hidden">
            Remove
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between xl:justify-between xl:flex-row lg:flex-col mt-5">
        <div className="space-y-1 text-black/50 text-sm xs:text-[8.05px]">
          <label>Add Notes/ Terms</label>
          <div className=" flex items-center w-[340px] border border-[#4C4D4F] bg-white rounded-[7px] overflow-hidden pl-2 xs:w-[180px]">
            <Image src={UnionIcon} className="" alt="" />
            <input
              className="w-[320px] h-[48px] pl-3 outline-none bg-transparent xs:w-[200px] xs:h-[27.61px]"
              placeholder=""
            />
          </div>
        </div>

        <table className="text-sm mt-5 xs:text-[8.05px]">
          <thead>
            <tr>
              <th>Subtotal</th>
              <th className="text-right">$540.00</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-right">
              <td>Transaction Fee 5%</td>
              <td className="xl:pl-2 lg:pl-0 pl-2">
                <div className="border border-[#4C4D4F] text-right py-2 xl:pl-24 lg:ml-10 md:pl-24 pr-3 rounded-[7px] bg-white xs:pl-8 xs:py-[2px]">
                  $00.00
                </div>
              </td>
            </tr>
            <tr className="text-right">
              <td>Discount 10%</td>
              <td className="xl:pl-2 lg:pl-0 pl-2">
                <div className="border border-[#4C4D4F] text-right py-2 xl:pl-24 lg:ml-10 md:pl-24 pr-3 rounded-[7px] bg-white xs:pl-8 xs:py-[2px]">
                  $00.00
                </div>
              </td>
            </tr>
            <tr className="text-base font-medium text-right xs:text-[9.2px]">
              <td className="pt-5 xs:pt-0">Total</td>
              <td className="pt-5 xs:pt-0">$540.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateInvoicecomp;
