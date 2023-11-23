import React from "react";
import Logo from "./Logo";

type Props = {};

export default function HelloSignSection({}: Props) {
  return (
    <section
      className={
        "bg-[#353945] md:min-h-screen flex md:justify-between flex-col p-4 col-span-2 md:col-span-1 gap-8 md:gap-0"
      }
    >
      <Logo />
      <div className={"text-center text-white"}>
        <h1 className={"text-[1.5rem] md:text-[2.5rem] font-bold mb-2"}>
          Welcome to Sweetdeli!
        </h1>
        <p className={"max-w-[80%] mx-auto text-[0.875rem]"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate ut
          laoreet velit ma.
        </p>
      </div>
      <div className={"center"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="224"
          height="224"
          viewBox="0 0 224 224"
          fill="none"
        >
          <path
            d="M203 35H21C17.1281 35 14 38.1281 14 42V182C14 185.872 17.1281 189 21 189H203C206.872 189 210 185.872 210 182V42C210 38.1281 206.872 35 203 35ZM73.9375 66.5C81.6594 66.5 87.9375 72.7781 87.9375 80.5C87.9375 88.2219 81.6594 94.5 73.9375 94.5C66.2156 94.5 59.9375 88.2219 59.9375 80.5C59.9375 72.7781 66.2156 66.5 73.9375 66.5ZM186.353 162.116C186.034 162.383 185.632 162.53 185.216 162.531H38.7625C37.8 162.531 37.0125 161.744 37.0125 160.781C37.0125 160.366 37.1656 159.972 37.4281 159.644L74.6812 115.456C75.2937 114.712 76.4094 114.625 77.1531 115.237C77.2188 115.303 77.3063 115.369 77.3719 115.456L99.1156 141.269L133.7 100.253C134.312 99.5094 135.428 99.4219 136.172 100.034C136.238 100.1 136.325 100.166 136.391 100.253L186.616 159.666C187.184 160.388 187.097 161.503 186.353 162.116Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
