'use client'
import React from "react";

function AdditionalInfo() {
  return (
    <div className="lg:max-w-3xl lg:flex-1">
      <h2 className="font-semibold text-lg pb-2 lg:text-2xl">{"Additional information"}</h2>
      <p className="text-sm ">
        {"We need a few more details to complete your reservation."}
      </p>
      <div className="lg:flex lg:space-x-6">
        <div className="inputContainer">
          <span className="hoverText">{"<Full Name>"}</span>
          <input className="inputBox" type="text" placeholder="Full Name" onChange={()=>{}}/>
          <span className={`${false ? "inputErrorMessage" : "hidden"}`}>
            {"<error message>"}
          </span>
        </div>
        <div className="inputContainer">
          <span className="hoverText">{"<dropdown>"}</span>
          {/* <input className="inputBox" type="Email" placeholder="Confirm Email" /> */}
          <select className="inputBox" name="dropdown" id="" onChange={()=>{}}>
            <option value="dropdown" disabled selected>{"<dropdown>"}</option>
            <option value="Option1">Option 1</option>
            <option value="Option2">Option 2</option>
          </select>
          <span className={`${false ? "inputErrorMessage" : "hidden"}`}>
            {"<error message>"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AdditionalInfo;
