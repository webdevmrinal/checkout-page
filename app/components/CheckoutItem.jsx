import React from "react";
import Image from "next/image";
import variant from "../../public/icons/Ticket.svg";
import date from "../../public/icons/CalendarBlank.svg";
import time from "../../public/icons/Clock.svg";
import discount from "../../public/icons/Vector-3.svg";

function CheckoutItem() {
  return (
    <div className="max-w-xs mx-auto">
      <h1 className="font-semibold text-4xl my-6">{"Confirm and pay"}</h1>
      <Image
        className="my-4 rounded-lg"
        src={"https://source.unsplash.com/random/500x300"}
        alt="product-image"
        height={300}
        width={500}
      />
      <p className="font-semibold text-lg my-4">
        {
          "Amsterdam opeg boat canal cruise - Live Ggide - from Anne Frgnk House"
        }
      </p>
      <div className="space-y-2 pb-6 border-b">
        <div className="flex gap-4">
          <Image src={variant} alt="variant-icon" height={25} width={25} />
          <p className="text-sm font-semibold">{"<variant name>"}</p>
        </div>
        <div className="flex gap-4">
          <Image src={date} alt="date-icon" height={25} width={25} />
          <p className="text-sm font-semibold">{"<date>"}</p>
        </div>
        <div className="flex gap-4">
          <Image src={time} alt="time-icon" height={25} width={25} />
          <p className="text-sm font-semibold">{"<time>"}</p>
        </div>
      </div>
      <div className="py-4 space-y-1 border-b">
        <h className="font-semibold text-lg py-2">{"Tickets overview"}</h>
        <div className="flex justify-between">
          <span className="font-normal text-sm">{"<tax type> (x)"}</span>
          <span className="font-normal text-sm">{"<price>"}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-normal text-sm">{"<tax type> (x)"}</span>
          <span className="font-normal text-sm">{"<price>"}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-normal text-sm">{"<fee>"}</span>
          <span className="font-normal text-sm">{"<price>"}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-normal text-sm text-[#006642]">
            {"<discount applied>"}
          </span>
          <span className="font-normal text-sm text-[#006642]">
            {"< -price>"}
          </span>
        </div>
      </div>
      <div className="flex justify-between py-4 border-b">
        <div>
          <Image
            className="inline-block"
            src={discount}
            alt="discount-icon"
            height={20}
            width={20}
          />
          <span className="px-2 font-semibold text-sm text-[#006642] underline decoration-[#006642]/30">
            {"‘TICKETE10’ applied"}
          </span>
        </div>
        <button className="font-normal text-sm underline decoration-[#474747]/30">
          {"Remove"}
        </button>
      </div>
      <div className="py-4">
        <div className="flex justify-between pt-4">
          <span className="text-sm font-semibold">{"Total"}</span>
          <span className="text-sm font-semibold">{"<price>"}</span>
        </div>
        <p className="text-xs underline decoration-[#474747]/70 pb-4">
          {"You will pay in <currency>"}
        </p>
        <div className="bg-[#F5F5F5] p-4 rounded-lg space-y-1">
          <p className="text-xs font-semibold">{"Free cancellation"}</p>
          <p className="text-xs">
            {"Tickets can be cancelled by 13th December, 2022."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItem;
