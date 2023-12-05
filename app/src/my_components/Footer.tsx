import {
  GlobeIcon,
  ChevronDownIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import DownloadApp from "./DownloadApp";
import { AppleNormalIcon, GooglePlayIcon } from "./Icons";

type Props = {};

export default function Footer({}: Props) {
  const bottomParag = "text-[#95A1BB] font-semibold text-sm";
  const footerSec = "text-center md:text-start";
  const icons = [
    {
      Icon: LinkedInLogoIcon,
      link: "",
    },
    {
      Icon: TwitterLogoIcon,
      link: "",
    },
    {
      Icon: InstagramLogoIcon,
      link: "",
    },
    {
      Icon: GitHubLogoIcon,
      link: "",
    },
  ];
  return (
    <div className={"py-4 bg-[#F4F5F6] dark:bg-[#111238]"}>
      <div className="container py-8">
        <h2 className="pb-6 text-3xl font-semibold">Sweetdeli</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
          <div className={footerSec}>
            <h3 className="foot-head">Contact us</h3>
            <ul className="foot-list">
              <li className="foot-item">Sweetdeli@gmail.com</li>
              <li className="foot-item">+1-2345-6789</li>
              <li className="foot-item">123 Ave, New York, USA</li>
              <li className="flex items-center justify-center gap-4 foot-item md:justify-start">
                {icons.map(({ Icon, link }) => (
                  <Link href={link} target="_self">
                    <Icon className="w-7 h-7 fill-[red] text-inherit" />
                  </Link>
                ))}
              </li>
            </ul>
          </div>
          <div className={footerSec}>
            <h3 className="foot-head">Products</h3>
            <ul className="foot-list">
              <li className="foot-item">Auctor volutpat</li>
              <li className="foot-item">Fermentum turpis</li>
              <li className="foot-item">Mi consequat</li>
              <li className="foot-item">Amet venenatis</li>
              <li className="foot-item">Convallis porttitor</li>
            </ul>
          </div>
          <div className={footerSec}>
            <h3 className="foot-head">About</h3>
            <ul className="foot-list">
              <li className="foot-item">Egestea vitae</li>
              <li className="foot-item">Viverra lorem ac</li>
              <li className="foot-item">Eget ac tellus</li>
              <li className="foot-item">Erat nulla</li>
              <li className="foot-item">Vulputate proin</li>
            </ul>
          </div>
          <div className={footerSec}>
            <h3 className="foot-head">Download</h3>
            <ul className="foot-list">
              <li className="flex justify-center md:justify-start foot-item">
                <DownloadApp
                  icon={
                    <GooglePlayIcon className="w-10 h-10 fill-white w-17rem" />
                  }
                  getText="Get it on"
                  from="Google Play"
                  classname="w-[16.2rem]"
                />
              </li>
              <li className="flex justify-center foot-item md:justify-start">
                <DownloadApp
                  icon={<AppleNormalIcon className="w-10 h-10" />}
                  getText="Download on the"
                  from="App Store"
                  classname="w-[16.2rem]"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container flex-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <GlobeIcon className="w-5 h-5" />
          <div className="flex items-center gap-2">
            <p className={bottomParag}>English</p>
            <ChevronDownIcon className={bottomParag} />
          </div>
        </div>
        <p className={bottomParag}>
          Copyright &copy; {new Date(Date.now()).getFullYear()}. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
