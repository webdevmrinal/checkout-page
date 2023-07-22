"use client";
import React, { useState } from "react";
import plusIcon from "../../public/icons/Plus.svg";
import minusIcon from "../../public/icons/Minus.svg";
import chatIcon from "../../public/icons/Vector-7.svg";
import Image from "next/image";

function FAQ() {
  const [faqList, setFaqList] = useState([
    {
      title: "Are my tickets transferable",
      detail: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
        omnis dignissimos saepe molestiae. Quo, placeat? Voluptatibus
        dolores adipisci excepturi provident hic perferendis accusamus
        ratione pariatur.`,
      hidden: true,
    },
    {
      title: "How long will it take to receive my ticket?",
      detail: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
        omnis dignissimos saepe molestiae. Quo, placeat? Voluptatibus
        dolores adipisci excepturi provident hic perferendis accusamus
        ratione pariatur.`,
      hidden: true,
    },
    {
      title: "Is my payment secure?",
      detail: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          omnis dignissimos saepe molestiae. Quo, placeat? Voluptatibus
          dolores adipisci excepturi provident hic perferendis accusamus
          ratione pariatur.`,
      hidden: true,
    },
    {
      title: "What type of payment options do you offer?",
      detail: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          omnis dignissimos saepe molestiae. Quo, placeat? Voluptatibus
          dolores adipisci excepturi provident hic perferendis accusamus
          ratione pariatur.`,
      hidden: true,
    },
    {
      title: "When will I be charged for my booking?",
      detail: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          omnis dignissimos saepe molestiae. Quo, placeat? Voluptatibus
          dolores adipisci excepturi provident hic perferendis accusamus
          ratione pariatur.`,
      hidden: true,
    },
    {
      title: "Why am I being charged in USD?",
      detail: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          omnis dignissimos saepe molestiae. Quo, placeat? Voluptatibus
          dolores adipisci excepturi provident hic perferendis accusamus
          ratione pariatur.`,
      hidden: true,
    },
    {
      title: "Will I get a complete refund if I cancel this ticket?",
      detail: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          omnis dignissimos saepe molestiae. Quo, placeat? Voluptatibus
          dolores adipisci excepturi provident hic perferendis accusamus
          ratione pariatur.`,
      hidden: true,
    },
    {
      title: "How long does it take for a refund to reflect in my account?",
      detail: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          omnis dignissimos saepe molestiae. Quo, placeat? Voluptatibus
          dolores adipisci excepturi provident hic perferendis accusamus
          ratione pariatur.`,
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
    <div className="max-w-xs mx-auto">
      <h2 className="font-semibold text-lg pt-6 pb-2">
        {"Frequently asked questions"}
      </h2>
      {faqList.map((entry, index) => (
        <div className="py-4 border-b" key={entry.title}>
          <div className="flex justify-between">
            <p className="font-semibold pr-6">{entry.title}</p>
            <Image
              className="cursor-pointer"
              src={entry.hidden?plusIcon:minusIcon}
              alt=""
              onClick={() => {
                toggleAnswer(index);
              }}
            />
          </div>
          <div className={entry.hidden ? "hidden" : "" + "text-xs py-4"}>
            {entry.detail}
          </div>
        </div>
      ))}
      <div className="border-b">
          <div className="bg-[#FFF7ED] my-4 p-4 rounded-lg space-y-1">
            <div className=" flex justify-between items-start">
              <div className="pb-4">
                <p className=" text-[#7F2D0F] text-lg font-semibold">
                  {"Need help?"}
                </p>
                <p className="text-[#7F2D0F] text-sm">
                  {"We're here to help you, talk to us."}
                </p>
              </div>
              <Image src={chatIcon} alt="" height={30} width={30} />
            </div>
            <button className="text-[#7F2D0F] font-semibold px-6 py-2 border border-[#7F2D0F] rounded-lg">
              {"Chat with us"}
            </button>
          </div>
      </div>
    </div>
  );
}

export default FAQ;
