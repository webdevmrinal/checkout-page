import React from "react";
import Image from "next/image";
import BackButton from "../../public/icons/Vector-4.svg";

function HelloWorld() {
  return (
    <div className="max-w-xs mx-auto my-6">
      <button>
        <Image src={BackButton} alt="back-button" height={30} width={30} />
      </button>
    </div>
  );
}

export default HelloWorld;
