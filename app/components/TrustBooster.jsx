import React from "react";
import Image from "next/image";
import tickIcon from "../../public/icons/Vector-11.svg";
import chatIcon from "../../public/icons/Vector-7.svg";
import calendarIcon from "../../public/icons/CalendarBlank.svg";
import shieldIcon from "../../public/icons/ShieldCheckered.svg";

function TrustBooster() {
  return (
    <div className="">
      <h2 className="font-semibold text-lg pt-6 pb-2 lg:pb-4 lg:text-2xl">
        {"The Tickete promise"}
      </h2>
      <div className="mb-6 flex flex-col lg:flex-row lg:gap-6">
        <div className="flex lg:flex-col gap-4 lg:gap-0 items-start py-2 lg:border lg:rounded-lg lg:pl-4 lg:justify-between lg:flex-1">
          <Image className="lg:flex-1 lg:w-8 lg:pb-10 lg:pt-1" src={tickIcon} alt="" height={25} width={25} />
          <div className="lg:flex-1">
            <div className="font-semibold">{"Official Tickets"}</div>
            <div className="font-normal text-sm">
              {"Authorised reseller to top attraction"}
            </div>
          </div>
        </div>
        <div className="flex lg:flex-col gap-4 lg:gap-0 items-start py-2 lg:border lg:rounded-lg lg:pl-4 lg:justify-between lg:flex-1">
          <Image className="lg:flex-1 lg:w-8 lg:pb-10 lg:pt-1" src={chatIcon} alt="" height={25} width={25} />
          <div className="lg:flex-1">
            <div className="font-semibold">{"24/7 dedicated support"}</div>
            <div className="font-normal text-sm">
              {"We're here to help, talk to an expert"}
            </div>
          </div>
        </div>
        <div className="flex lg:flex-col gap-4 lg:gap-0 items-start py-2 lg:border lg:rounded-lg lg:pl-4 lg:justify-between lg:flex-1">
          <Image className="lg:flex-1 lg:w-8 lg:pb-10 lg:pt-1" src={calendarIcon} alt="" height={25} width={25} />
          <div className="lg:flex-1">
            <div className="font-semibold">{"Flexible bookings"}</div>
            <div className="font-normal text-sm">
              {"Book stress-free with easy cancellation"}
            </div>
          </div>
        </div>
        <div className="flex lg:flex-col gap-4 lg:gap-0 items-start py-2 lg:border lg:rounded-lg lg:pl-4 lg:justify-between lg:flex-1">
          <Image className="lg:flex-1 lg:w-8 lg:pb-10 lg:pt-1" src={shieldIcon} alt="" height={25} width={25} />
          <div className="lg:flex-1">
            <div className="font-semibold">{"100% secure payments"}</div>
            <div className="font-normal text-sm">
              {"Internationally recognized encrypted payment process"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustBooster;
