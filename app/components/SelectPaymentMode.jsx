import React from "react";
import Link from "next/link";
import Image from "next/image";
import cardIcon from "../../public/icons/Vector-5.svg";
import shieldIcon from "../../public/icons/Vector.svg";
import visaIcon from "../../public/icons/Visa.svg";
import klarnaIcon from "../../public/icons/Klarna.svg";

function SelectPaymentMode() {
  return (
    <div className="max-w-xs mx-auto">
      <h2 className="font-semibold text-lg pb-2">
        {"Select your mode of payment"}
      </h2>
      <p className="text-sm ">
        {"Payments with Tickete are secure and encrypted."}
      </p>

      <div className="border-b">
        <div className="border-b">
          <div className="flex justify-between items-center py-4">
            <div>
              <Image
                className="inline-block p-1 bg-gray-100 rounded-sm cursor-pointer"
                src={cardIcon}
                alt=""
                height={30}
                width={30}
              />
              <label
                className="px-4 font-semibold cursor-pointer"
                htmlFor="credit-debit-card"
              >
                {"Credit & debit card"}
              </label>
            </div>
            <input
              className="accent-black"
              type="radio"
              name="credit-debit-card"
              id="credit-debit-card"
            />
          </div>
          <div className="inputContainer my-2">
            <span className="hoverText">{"Name on Card"}</span>
            <input
              className="inputBox"
              type="text"
              placeholder="<name on card>"
            />
            <span className={`${false ? "inputErrorMessage" : "hidden"}`}>
              {"<error message>"}
            </span>
          </div>
          <div className="inputContainer">
            <span className="hoverText">{"Card Number"}</span>
            <Image
              className="absolute mx-2 right-0 top-1/2 -translate-y-1/2"
              src={visaIcon}
              alt=""
              height={40}
              width={40}
            />
            <input
              className="inputBox"
              type="text"
              placeholder="<Card Number>"
            />
            <span className={`${false ? "inputErrorMessage" : "hidden"}`}>
              {"<error message>"}
            </span>
          </div>
          <div className="inputContainer">
            <span className="hoverText">{"Expiry Date"}</span>
            <input className="inputBox" type="text" placeholder="MM/YY" />
            <span className={`${false ? "inputErrorMessage" : "hidden"}`}>
              {"<error message>"}
            </span>
          </div>
          <div className="inputContainer my-8">
            <span className="hoverText">{"CVV/CVC"}</span>
            <input
              className="inputBox"
              type="password"
              placeholder="<CVV/CVC>"
            />
            <span className={`${false ? "inputErrorMessage" : "hidden"}`}>
              {"<error message>"}
            </span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg py-2">{"Total: <price>"}</h3>
          <p className="text-xs underline decoration-[#474747]/70 pb-4">
            {"You will pay in <currency>"}
          </p>
        </div>
        <div className="bg-[#F5F5F5] p-4 flex gap-3 rounded-lg space-y-1">
          <input
            className="accent-black"
            type="radio"
            name="newsletter"
            id="newsletter"
          />
          <label
            htmlFor="newsletter"
            className="text-xs font-semibold cursor-pointer"
          >
            {"Receive travel tips, suggestions and offers in <city> by email"}
          </label>
        </div>
        <p className="text-xs pt-6 pb-2">
          With payment, you agree to the general{" "}
          <Link className="text-blue-600" href="#">
            terms and conditions of Tickete
          </Link>{" "}
          & the{" "}
          <Link className="text-blue-600" href="#">
            activity provider
          </Link>
          .
        </p>
        <button className="w-full bg-[#0A0A0A] mb-2 py-4 rounded-xl">
          <span className="font-semibold text-base text-[#F6F6F7] px-2">
            Confirm and pay
          </span>
          <Image
            className="inline-block"
            src={shieldIcon}
            alt=""
            height={20}
            width={20}
          />
        </button>
        <div className="bg-[#F5F5F5] my-4 p-4 rounded-lg space-y-1">
          <p className="text-xs font-semibold">{"Free cancellation"}</p>
          <p className="text-xs">
            {"Tickets can be cancelled by 13th December, 2022."}
          </p>
        </div>
      </div>
      <div className="flex justify-between py-6 border-b">
        <div>
          <Image className="inline-block" src={klarnaIcon} alt="" />
          <label className="px-4 font-semibold cursor-pointer" htmlFor="klarna">
            {"Klarna"}
          </label>
        </div>
        <input className="accent-black" type="radio" name="" id="klarna" />
      </div>
      <div>
        <h3 className="font-semibold text-lg py-2">{"Total: <price>"}</h3>
        <p className="text-xs underline decoration-[#474747]/70 pb-4">
          {"You will pay in <currency>"}
        </p>
      </div>
      <div className="bg-[#F5F5F5] my-4 p-4 rounded-lg space-y-1">
        <p className="text-xs font-semibold">{"Free cancellation"}</p>
        <p className="text-xs">
          {"Tickets can be cancelled by 13th December, 2022."}
        </p>
      </div>
    </div>
  );
}

export default SelectPaymentMode;
