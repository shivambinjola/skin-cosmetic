"use client";

import React, { useState } from "react";

const sideitem = [
  { title: "Overview", subtittle: [] },
  { title: "Profile", subtittle: [] },
  { title: "Appointments", subtittle: [] },
  {
    title: "History",
    subtittle: [{ title: "Videos" }, { title: "Videos Library" }],
  },
  { title: "Messages", subtittle: [] },
  {
    title: "Support",
    subtittle: [{ title: "FAQ's" }, { title: "Procedure Information" }],
  },
  {
    title: "Aftercare",
    subtittle: [{ title: "Quizzes" }, { title: "Health & Skin Assesment" }],
  },
  { title: "Finances", subtittle: [] },
  { title: "Virtual Consultation", subtittle: [] },
];

const Sidebar = () => {
  const [index, setIndex] = useState(null);
  const [indexsec, setIndexsec] = useState(null);
  const [name, setName] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="pt-20 text-[#4C4D4F] space-y-2 px-3 lg:block hidden ">
      {sideitem.map((item, id: any) => (
        <div key={id} className="space-y-2">
          <p
            onClick={() => setIndex(id)}
            className={`text-lg cursor-pointer ${
              id == index && "bg-[#FFF9F1] rounded-[14px]"
            }  px-3 py-2 `}
          >
            {item?.title}
          </p>

          <div className={`pl-5 space-y-4 text-sm `}>
            {item?.subtittle?.map((subitem, id: any) => (
              <p
                key={id}
                onClick={() => {
                  setIndexsec(id);
                  setName(subitem?.title);
                }}
                className={`cursor-pointer ${
                  id == indexsec &&
                  subitem?.title == name &&
                  "bg-[#FFF9F1] rounded-[14px]"
                } px-3 py-2`}
              >
                {subitem?.title}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
