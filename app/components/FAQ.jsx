"use client";
import React, { useState } from "react";
import plusIcon from "../../public/icons/Plus.svg";
import minusIcon from "../../public/icons/Minus.svg";
import Image from "next/image";

function FAQ() {
  const [faqList, setFaqList] = useState([
    {
      title: "Are my tickets transferable",
      detail: `No. The tickets can only be used by the person(s) whose details are indicated on the voucher. If you’re booking for friends and family, make sure to key in their details.`,
      hidden: true,
    },
    {
      title: "How long will it take to receive my ticket?",
      detail: `The tickets will hit your inbox as soon as you complete making the payment.`,
      hidden: true,
    },
    {
      title: "Is my payment secure?",
      detail: `We use a PCI compliant payment gateway that is internationally recognized and protects against fraud and unauthorized transactions. In short, your payment is a 100% secure and you have nothing to worry!`,
      hidden: true,
    },
    {
      title: "What type of payment options do you offer?",
      detail: `We accept payments via all major international debit cards, credit cards, Google Pay and Apple Pay. Please note that Tickete being an online marketplace does not accept cash payments.`,
      hidden: true,
    },
    {
      title: "When will I be charged for my booking?",
      detail: `Your account will be charged immediately upon booking. If the booking is cancelled from your end or by our local tour operator, we will refund the entire amount to your account at no extra cost.`,
      hidden: true,
    },
    {
      title: "Why am I being charged in USD?",
      detail: `All payments on Tickete are charged in USD. Your accounted will be debited with the spot rate for the conversion rate from your local currency to USD. We understand this is less than ideal but, we’re working on accepting payments in currencies across the world.`,
      hidden: true,
    },
    {
      title: "Will I get a complete refund if I cancel this ticket?",
      detail: `The cancellation and refund policy varies per ticket. While some can be canceled up to 24, 48, or 72 hours before they start, several others can’t be canceled once the reservation has been confirmed. For the ones that can cancelled within the permissible cancellation period, you will receive a full refund.`,
      hidden: true,
    },
    {
      title: "How long does it take for a refund to reflect in my account?",
      detail: `Depending on your bank, it typically takes anywhere between 2-7 working days for the refunded amount to reflect in your account.`,
      hidden: true,
    },
  ]);

  const toggleAnswer = (index) => {
    setFaqList(
      faqList.map((entry, i) => {
        if (i == index) return { ...entry, hidden: !entry.hidden };
        else return entry;
      })
    );
  };

  return (
    <div className="flex-[.9]">
      <h2 className="font-semibold text-lg pt-6 pb-2 lg:text-2xl">
        {"Frequently asked questions"}
      </h2>
      {faqList.map((entry, index) => (
        <div className="py-4 border-b" key={entry.title}>
          <div className="flex justify-between">
            <p className="font-semibold pr-6">{entry.title}</p>
            <Image
              className="cursor-pointer"
              src={entry.hidden ? plusIcon : minusIcon}
              alt=""
              onClick={() => {
                toggleAnswer(index);
              }}
            />
          </div>
          <div className={entry.hidden ? "hidden" : "" + "text-xs py-4 lg:pr-10"}>
            {entry.detail}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
