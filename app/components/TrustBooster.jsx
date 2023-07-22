import React from "react";
import Image from "next/image";
import tickIcon from "../../public/icons/Vector-11.svg";
import chatIcon from "../../public/icons/Vector-7.svg";
import calendarIcon from "../../public/icons/CalendarBlank.svg";
import shieldIcon from "../../public/icons/ShieldCheckered.svg";

function TrustBooster() {
  return (
    <div className="max-w-xs mx-auto">
      <h2 className="font-semibold text-lg pt-6 pb-2">
        {"The Tickete promise"}
      </h2>
      <div className="flex gap-4 items-start py-2">
        <Image src={tickIcon} alt="" height={25} width={25} />
        <div>
          <div className="font-semibold">{"Official Tickets"}</div>
          <div className="font-normal text-sm">
            {"Authorised reseller to top attraction"}
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-start py-2">
        <Image src={chatIcon} alt="" height={25} width={25} />
        <div>
          <div className="font-semibold">{"24/7 dedicated support"}</div>
          <div className="font-normal text-sm">
            {"We're here to help, talk to an expert"}
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-start py-2">
        <Image src={calendarIcon} alt="" height={25} width={25} />
        <div>
          <div className="font-semibold">{"Flexible bookings"}</div>
          <div className="font-normal text-sm">
            {"Book stress-free with easy cancellation"}
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-start py-2">
        <Image src={shieldIcon} alt="" height={25} width={25} />
        <div>
          <div className="font-semibold">{"100% secure payments"}</div>
          <div className="font-normal text-sm">
            {"Internationally recognized encrypted payment process"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustBooster;
