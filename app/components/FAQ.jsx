import React from "react";
import plusIcon from "../../public/icons/Plus.svg";
import Image from "next/image";

const faqList = [
  "Are my tickets transferable",
  "How long will it take to receive my ticket?",
  "Is my payment secure?",
  "What type of payment options do you offer?",
  "When will I be charged for my booking?",
  "Why am I being charged in USD?",
  "Will I get a complete refund if I cancel this ticket?",
  "How long does it take for a refund to reflect in my account?",
];

function FAQ() {
  return (
    <div className="max-w-xs mx-auto">
      <h2 className="font-semibold text-lg pt-6 pb-2">
        {"Frequently asked questions"}
      </h2>
      {faqList.map((question) => (
        <div className="flex justify-between py-4 border-b" key={question}>
          <p className="font-semibold pr-6">{question}</p>
          <Image className="cursor-pointer" src={plusIcon} alt="" />
        </div>
      ))}
    </div>
  );
}

export default FAQ;
