import React from "react";
import Image from "next/image";
import SearchIcon from "@/assets/search.png";
import ArrowIcon from "@/assets/arrow.png";
import Icon from "@/assets/icon.png";
import MainComponent from "@/components/maincomponent";

const Home = () => {
  return (
    <MainComponent
      para="Invoice list"
      firstcomp={
        <div className="xl:w-full lg:bg-white lg:w-[425px] w-full  rounded-[10px] py-5">
          <div className="flex items-center justify-between px-7 xs:px-0">
            <div className="rounded-lg bg-[#F8F8F8] xl:w-[310px] lg:w-[180px] w-[310px] flex items-center space-x-3 xs:w-[178.32px] xs:space-x-2">
              <input
                type="text"
                placeholder="Search by patient name"
                className="outline-none h-[35px] bg-transparent xl:w-[255px] lg:w-[130px] w-[255px] text-[10px] pl-5 xs:text-[5.75px] xs:w-[140px] xs:h-[20.13px] xs:pl-3"
              />
              <div className="border-[1px] h-[16px] xs:h-[9.2px]"></div>

              <Image className="w-[10px] h-[10px]" src={SearchIcon} alt="" />
            </div>
            <div className="bg-[#F8F8F8] sm:w-[159px] h-[35px] rounded-lg flex items-center justify-center xs:px-2 ">
              <p className="text-[10px] xs:text-[5.75px]">Select Date:</p>
              <div className="border-[1px] h-[16px] ml-3 mr-2"></div>

              <p className="text-[10px] xs:text-[5.75px] flex items-center gap-2">
                20 Aug{" "}
                <span className="cursor-pointer xs:w-[5.75px] xs:h-[2.88px]">
                  {" "}
                  <Image src={ArrowIcon} alt="" />
                </span>
              </p>
            </div>
          </div>
          <hr className="mt-3 h-[2px] bg-[#4C4D4F33]/20" />
          <div className="lg:border-[1px] border-[#4C4D4F33]/20 rounded-[14px] mt-10 mx-7 overflow-hidden xs:mt-5 xs:mx-0">
            <table className="border-collapse   overflow-hidden w-full text-[10px] xs:text-[5.75px]">
              <thead className=" text-left">
                <tr className="bg-white">
                  <th className=" pl-5 py-3">Patient</th>
                  <th className=" pl-5 py-3">Time</th>
                  <th className=" pl-5 py-3">Date</th>
                  <th className=" pl-5 py-3">Total</th>
                  <th className=" text-right pr-[65px] py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="lg:bg-[#F8F8F8]">
                  <td className=" pl-5 py-3">John Doe</td>
                  <td className=" pl-5 py-3">09:00 - 10:30</td>
                  <td className=" pl-5 py-3">22/08/2023</td>
                  <td className=" pl-5 py-3">$180</td>
                  <td className="flex flex-col items-end  pr-5 py-3">
                    <p className="bg-[#F1B34A] text-white text-center w-[75px] rounded-full py-1 ">
                      In Progress
                    </p>
                  </td>
                </tr>
                <tr className="lg:bg-[#F8F8F8] border-t-[2px]">
                  <td className=" pl-5 py-3">John Doe</td>
                  <td className=" pl-5 py-3">09:00 - 10:30</td>
                  <td className=" pl-5 py-3">22/08/2023</td>
                  <td className=" pl-5 py-3">$180</td>
                  <td className="flex flex-col items-end  pr-5 py-3">
                    <p className="bg-[#36C490] text-white text-center w-[75px] rounded-full py-1 ">
                      Complete
                    </p>
                  </td>
                </tr>
                <tr className="lg:bg-[#F8F8F8] border-t-[2px]">
                  <td className=" pl-5 py-3">John Doe</td>
                  <td className=" pl-5 py-3">09:00 - 10:30</td>
                  <td className=" pl-5 py-3">22/08/2023</td>
                  <td className=" pl-5 py-3">$180</td>
                  <td className="flex flex-col items-end  pr-5 py-3">
                    <p className="bg-[#FFF9F1] text-center w-[75px] rounded-full py-1 ">
                      Cenceled
                    </p>
                  </td>
                </tr>
                <tr className="lg:bg-[#F8F8F8] border-t-[2px]">
                  <td className=" pl-5 py-3">John Doe</td>
                  <td className=" pl-5 py-3">09:00 - 10:30</td>
                  <td className=" pl-5 py-3">22/08/2023</td>
                  <td className=" pl-5 py-3">$180</td>
                  <td className="flex flex-col items-end  pr-5 py-3">
                    <p className="bg-[#36C490] text-white text-center w-[75px] rounded-full py-1 ">
                      Complete
                    </p>
                  </td>
                </tr>
                <tr className="lg:bg-[#F8F8F8] border-t-[2px]">
                  <td className=" pl-5 py-3">John Doe</td>
                  <td className=" pl-5 py-3">09:00 - 10:30</td>
                  <td className=" pl-5 py-3">22/08/2023</td>
                  <td className=" pl-5 py-3">$180</td>
                  <td className="flex flex-col items-end  pr-5 py-3">
                    <p className="bg-[#36C490] text-white text-center w-[75px] rounded-full py-1 ">
                      Complete
                    </p>
                  </td>
                </tr>{" "}
                <tr className="bg-white border-t-[2px]">
                  <td className=" pl-5 py-3">John Doe</td>
                  <td className=" pl-5 py-3">09:00 - 10:30</td>
                  <td className=" pl-5 py-3">22/08/2023</td>
                  <td className=" pl-5 py-3">$180</td>
                  <td className="flex flex-col items-end  pr-5 py-3">
                    <p className="bg-[#36C490] text-white text-center w-[75px] rounded-full py-1 ">
                      Complete
                    </p>
                  </td>
                </tr>{" "}
                <tr className="lg:bg-[#F8F8F8] border-t-[2px]">
                  <td className=" pl-5 py-3">John Doe</td>
                  <td className=" pl-5 py-3">09:00 - 10:30</td>
                  <td className=" pl-5 py-3">22/08/2023</td>
                  <td className=" pl-5 py-3">$180</td>
                  <td className="flex flex-col items-end  pr-5 py-3">
                    <p className="bg-[#36C490] text-white text-center w-[75px] rounded-full py-1 ">
                      Complete
                    </p>
                  </td>
                </tr>{" "}
                <tr className="lg:bg-[#F8F8F8] border-t-[2px]">
                  <td className=" pl-5 py-3">John Doe</td>
                  <td className=" pl-5 py-3">09:00 - 10:30</td>
                  <td className=" pl-5 py-3">22/08/2023</td>
                  <td className=" pl-5 py-3">$180</td>
                  <td className="flex flex-col items-end  pr-5 py-3">
                    <p className="bg-[#36C490] text-white text-center w-[75px] rounded-full py-1 ">
                      Complete
                    </p>
                  </td>
                </tr>{" "}
                <tr className="lg:bg-[#F8F8F8] border-t-[2px]">
                  <td className=" pl-5 py-3">John Doe</td>
                  <td className=" pl-5 py-3">09:00 - 10:30</td>
                  <td className=" pl-5 py-3">22/08/2023</td>
                  <td className=" pl-5 py-3">$180</td>
                  <td className="flex flex-col items-end  pr-5 py-3">
                    <p className="bg-[#36C490] text-white text-center w-[75px] rounded-full py-1 ">
                      Complete
                    </p>
                  </td>
                </tr>{" "}
                <tr className="lg:bg-[#F8F8F8] border-t-[2px] border-b-[2px]">
                  <td className=" pl-5 py-3">John Doe</td>
                  <td className=" pl-5 py-3">09:00 - 10:30</td>
                  <td className=" pl-5 py-3">22/08/2023</td>
                  <td className=" pl-5 py-3">$180</td>
                  <td className="flex flex-col items-end  pr-5 py-3">
                    <p className="bg-[#36C490] text-white text-center w-[75px] rounded-full py-1 ">
                      Complete
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-center lg:bg-[#F8F8F8] pt-2 pb-4 text-sm text-[#4C4D4F] underline xs:text-[8.05px]">
              View &nbsp; more
            </div>
          </div>
        </div>
      }
      secondcomp={
        <div className="bg-white lg:w-[377px] md:w-[690px] w-full rounded-[10px] px-4 pt-4 lg:pb-[72px] pb-60">
          <div className="flex items-center justify-between">
            <p className="lg:text-sm md:text-[27.74px] xs:text-[14.97px]">
              Preview Invoice
            </p>
            <div className="lg:w-[38px] lg:h-[38px] bg-[#F8F8F8] flex items-center justify-center rounded-lg md:w-[75.29px] md:h-[75.29px] xs:w-[40.62px] xs:h-[42.62px]">
              <Image src={Icon} alt="" />
            </div>
          </div>
          <div className="border border-[#4C4D4F33]/20 mt-5 rounded-[10px] p-4">
            <Image
              width={90.67}
              height={16}
              className="lg:w-[90.67px] lg:h-[16px] md:w-[179.65px] md:h-[31.7px] xs:w-[96.92px] xs:h-[17.1px]"
              src="/logo.png"
              alt=""
            />
            <div className="flex lg:text-[10px] items-center gap-1 mt-5 md:text-[19.81px] xs:text-[10.69px]">
              SUMMERY <hr className="w-full" />
            </div>
            <div className="lg:text-xs flex space-x-14 mt-6 md:text-[23.78px] xs:text-[12.83px]">
              <p>Dr. Vihang</p>
              <p>Jane Doe</p>
            </div>
            <div className="border-[1px] border-[#4C4D4F33]/20 rounded-[5px] overflow-hidden mt-7 lg:w-[305px]">
              {" "}
              <table className="border-collapse   overflow-hidden w-full lg:text-[10px] md:text-[19.81px] xs:text-[10.69px]">
                <thead className=" text-left bg-black text-white">
                  <tr className="">
                    <th className=" pl-3 py-4">item</th>
                    <th className="  py-4">Rate</th>
                    <th className="  py-4">Qty</th>
                    <th className="  py-4">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className=" pl-2 py-3">Vitamin A Night Serum</td>
                    <td className="  py-2">$90</td>
                    <td className="  py-2">2</td>
                    <td className="  py-2">$180</td>
                  </tr>
                  <tr className="">
                    <td className=" pl-3 py-2">Vitamin A Night Serum</td>
                    <td className="  py-2">$90</td>
                    <td className="  py-2">2</td>
                    <td className="  py-2">$180</td>
                  </tr>
                  <tr className="">
                    <td className=" pl-3 py-2">Vitamin A Night Serum</td>
                    <td className="  py-2">$90</td>
                    <td className="  py-2">2</td>
                    <td className="  py-2">$180</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex lg:text-[10px] md:text-[19.81px] space-x-10 mt-2 justify-end px-2 xs:text-[10.69px]">
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
            <hr className="mt-2 " />
            <div className="lg:text-[10px] md:text-[19.81px] flex space-x-10 justify-end mt-3 px-2 xs:text-[10.69px]">
              <p className="font-semibold">total</p>
              <p className="font-semibold">$540.00</p>
            </div>
            <div className="bg-[#F8F8F8] lg:text-[10px] md:text-[19.81px] p-4 mt-4 xs:text-[10.69px]">
              <h5>Notes/Terms</h5>
              <p className="text-[#00000080]/30">
                Lorem ipsum dolor sit amet. Sit eaque assumenda qui.
              </p>
            </div>
          </div>
          <button className="text-white bg-black text-sm rounded-full text-center lg:flex hidden justify-center items-center mt-10 w-[184px] h-[48px] mx-auto">
            Create New Invoice
          </button>
        </div>
      }
    />
  );
};

export default Home;
