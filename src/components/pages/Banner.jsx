import React from "react";

function Banner() {
  return (
    <section
      id="banner"
      className="xl:h-[720px] h-auto flex justify-center items-center text-3xl"
    >
      <div className="w-[1110px] h-full flex flex-col justify-between py-4 xl-px-0 px-4 ">
        <div className="flex gap-8">
          <img
            className="w-[20px] h-[20px] cursor-pointer"
            src="/icons/youtube.png"
            alt=""
          />
          <img
            className="w-[18px] h-[18px] cursor-pointer"
            src="/icons/instagram-svgrepo-com.png"
            alt=""
          />
          <img
            className="w-[18px] h-[18px] cursor-pointer"
            src="/icons/github.png"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-2 xl:mb-[10rem] mb-0 max-xl:py-8">
          <p className="text-white xl:text-5xl sm:text-3xl text-xl">
            Hello, I am
          </p>
          <p className="text-gray-300 xl:text-9xl sm:text-7xl text-4xl font-bold">
            Jessada Photiya
          </p>
          <p className="text-white xl:text-xl sm:text-[16px] text-[12px] tracking-[.20em]">
            Frond end Developer | Web Programmer
          </p>
          <button className="flex justify-center items-center gap-2 xl:w-[140px] w-[120px] xl:py-0.5 py-0 px-2 xl:mt-8 mt-2 bg-[#f85c70] hover:bg-[#ce3549] text-white shadow-xl xl:text-[14px] text-[12px] rounded-full">
            <img className="w-[25px]" src="/icons/print.png" alt="" />
            Print Resume
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
