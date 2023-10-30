import React, { Suspense } from "react";
import SingInForm from "@/my_components/SingInForm";
type Props = {};

export default function SignIn({}: Props) {
  return (
    <div className={"grid grid-cols-2 min-w-full min-h-screen"}>
      <section
        className={
          "bg-[#353945] md:min-h-screen flex md:justify-between flex-col p-4 col-span-2 md:col-span-1 gap-8 md:gap-0"
        }
      >
        <div
          className={`
            bg-[#FCFCFD] max-w-fit flex-between gap-3 py-4 px-6 rounded-[90px]

            `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M7.38772 2.08514C7.61932 1.54844 8.38033 1.54844 8.61193 2.08514L10.0653 5.45307C10.1634 5.68032 10.3793 5.83454 10.626 5.85361L14.3531 6.14161C14.9511 6.18781 15.1887 6.93852 14.7262 7.32038L11.9233 9.63456C11.7256 9.79779 11.639 10.0599 11.7006 10.3088L12.5632 13.7944C12.7051 14.3676 12.0867 14.8286 11.5779 14.529L8.33804 12.6217C8.12931 12.4988 7.87034 12.4988 7.66161 12.6217L4.42179 14.529C3.91292 14.8286 3.29457 14.3676 3.43643 13.7944L4.29905 10.3088C4.36065 10.0599 4.27406 9.79779 4.07636 9.63456L1.27344 7.32038C0.810929 6.93852 1.04853 6.18781 1.64652 6.14161L5.37362 5.85361C5.6204 5.83454 5.8363 5.68032 5.93437 5.45307L7.38772 2.08514Z"
              fill="#23262F"
            />
          </svg>
          <p>Logo</p>
        </div>
        <div className={"text-center text-white"}>
          <h1 className={"text-[1.5rem] md:text-[2.5rem] font-bold mb-2"}>
            Welcome to Sweetdeli!
          </h1>
          <p className={"max-w-[80%] mx-auto text-[0.875rem]"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
            ut laoreet velit ma.
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
      <section
        className={
          "h-full md:min-h-screen flex-col col-span-2 md:col-span-1 p-12 flex justify-center max-w-[40rem] mx-auto min-w-[35rem]"
        }
      >
        <div className={"mb-8"}>
          <h1 className={"text-[1.75rem] font-bold w-full"}>Welcome back!</h1>
          <p className={"text-[0.85rem] px-1"}>Meet the good taste today</p>
        </div>
        <div>
          <Suspense fallback={"Loading"}>
            <SingInForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
