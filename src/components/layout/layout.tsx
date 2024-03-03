import React from "react";
import Navbar from "./navbar";
import Sidebar from "../sidebar";

const layout = ({ children }: any) => {
  return (
    <>
      <Navbar />

      <main className="grid lg:grid-cols-6 grid-cols-1">
        <Sidebar />
        <div className="bg-[#FFF9F1] lg:col-span-5 ">{children}</div>
      </main>
    </>
  );
};

export default layout;
