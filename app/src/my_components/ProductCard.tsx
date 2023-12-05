import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Image from "next/image";
import React from "react";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { CartIcon } from "./Icons";

type Props = {
  product: {
    title: string;
    price: number;
    selled: number;
    rate: number;
  };
};

export default function ProductCard({ product }: Props) {
  const { title, selled } = product;
  const price = product.price.toFixed(2);
  const rate = Math.round(product.rate);
  const rateStars = () => {
    const stars = [];
    for (let i = 0; i < 5; ++i) {
      if (i < rate) stars.push(StarFilledIcon);
      else stars.push(StarIcon);
    }
    return stars;
  };
  return (
    <Card className="rounded-xl min-w-[18rem] overflow-hidden">
      <CardHeader className="items-center justify-center bg-[#B1B5C3]">
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
      </CardHeader>
      <CardContent className="py-6">
        <CardTitle className="text-xl min-w-max">{title}</CardTitle>
        <p className=" font-extrabold text-3xl py-4">${price}</p>
      </CardContent>
      <CardFooter className="flex-between">
        <div className="flex items-center gap-2">
          <div className="flex">
            {rateStars().map((Star) => (
              <Star className="fill-yellow-400 w-6 h-6 text-yellow-300" />
            ))}
          </div>
          <p className="text-sm text-black/40">({selled})</p>
        </div>
        <div>
          <CartIcon className="w-10 h-10 cursor-pointer text-white bg-[#353945] p-2 rounded-[50%]" />
        </div>
      </CardFooter>
    </Card>
  );
}
