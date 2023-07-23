import React from "react";
import Image from "next/image";
import BackButton from "../../public/icons/Vector-4.svg";
import logo from "../../public/icons/LogoBlack.svg";
import questionLogo from "../../public/icons/Question.svg";
import Link from 'next/link';

function Header() {
  return (
    <div className="my-6">
      <button className="lg:hidden">
        <Image src={BackButton} alt="back-button" height={30} width={30} />
      </button>
    <div className="hidden pb-8 lg:block">
      <div className="flex justify-between">
        <Image src={logo} alt="" height={50} width={100}/>
        <Link href="#" className="flex items-center gap-2">
          <Image src={questionLogo} alt="" height={20} width={20}/>
          <span>{"Help"}</span>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Header;
