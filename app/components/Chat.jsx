import Image from 'next/image'
import React from 'react'
import chatIcon from "../../public/icons/Vector-7.svg";

function Chat() {
  return (
    <div className=''>
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
  )
}

export default Chat