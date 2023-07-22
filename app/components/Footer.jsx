import React from "react";
import Image from "next/image";
import logo from "../../public/icons/Logo.svg";
import instaLogo from "../../public/icons/Vector-8.svg";
import fbLogo from "../../public/icons/Vector-9.svg";
import twitterLogo from "../../public/icons/Vector-10.svg";
import Link  from 'next/link';

function Footer() {
  return (
    <div className="max-w-xs mx-auto">
      <Image className="py-6" src={logo} alt="" height={50} width={100} />
      <div className="flex gap-6 py-6">
        <Image src={instaLogo} alt="" height={30} width={30}/>
        <Image src={fbLogo} alt="" height={30} width={30}/>
        <Image src={twitterLogo} alt="" height={30} width={30}/>
      </div>
      <div className="flex justify-between py-6">
        <Link href="#" className="text-sm text-[#EBEBEB] underline">{"© Tickete Inc."}</Link>
        <Link href="#" className="text-sm text-[#EBEBEB]">{"•"}</Link>
        <Link href="#" className="text-sm text-[#EBEBEB] underline">{"Privacy"}</Link>
        <Link href="#" className="text-sm text-[#EBEBEB]">{"•"}</Link>
        <Link href="#" className="text-sm text-[#EBEBEB] underline">{"Terms"}</Link>
        <Link href="#" className="text-sm text-[#EBEBEB]">{"•"}</Link>
        <Link href="#" className="text-sm text-[#EBEBEB] underline">{"Cancellation"}</Link>
      </div>
    </div>
  );
}

export default Footer;
