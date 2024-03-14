import React from "react";

const page = () => {
  return (
    <div className="relative">
      <div className="h-[20%] opacity-15">
        <img src="vercel.svg " alt="logo" />
      </div>
      <div className="border border-gray-600 p-5 absolute inset-0 grid justify-center items-center gap-5">
        <div className="text-red-500 grid grid-cols-5 gap-5">
          <div className="border border-black px-4 py-2 rounded-lg">
            <p>fligt</p>
          </div>
          <div>
            <p>fligt</p>
          </div>
          <div>
            <p>fligt</p>
          </div>
          <div>
            <p>fligt</p>
          </div>
          <div>
            <p>fligt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
