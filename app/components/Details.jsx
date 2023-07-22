"use client";
import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./customPhoneInput.css"

function Details() {
  return (
    <div className="max-w-xs mx-auto">
      <h2 className="font-semibold text-lg pt-6 pb-2">
        {"Enter your details"}
      </h2>
      <p className="text-sm ">
        {
          "We'll be sending your tickets to the details below. Booking for a friend? Add their details."
        }
      </p>
      <div className="inputContainer">
        <span className="hoverText">{"<Full Name>"}</span>
        <input className="inputBox" type="text" placeholder="Full Name" />
        <span className={`${false ? "inputErrorMessage" : "hidden"}`}>
          {"<error message>"}
        </span>
      </div>
      <div className={`${true ? "errorInputContainer" : "inputContainer"}`}>
        <span className="hoverText">{"<Email>"}</span>
        <input className="inputBox" type="email" placeholder="Email" />
        <span className={`${true ? "inputErrorMessage" : "hidden"}`}>
          {"<error message>"}
        </span>
      </div>
      <div className="inputContainer">
        <span className="hoverText">{"<Confirm Email>"}</span>
        <input className="inputBox" type="Email" placeholder="Confirm Email" />
        <span className={`${false ? "inputErrorMessage" : "hidden"}`}>
          {"<error message>"}
        </span>
      </div>
      <div className="inputContainer">
        <span className="hoverText">{"<Phone Number>"}</span>
        <PhoneInput
          className="inputBox focus:outline-none"
          international
          countryCallingCodeEditable={false}
          defaultCountry="HK"
          placeholder="Phone"
        />
        {/* <input type="text" placeholder="Full Name" /> */}
        <span className={`${false ? "inputErrorMessage" : "hidden"}`}>
          {"<error message>"}
        </span>
      </div>
    </div>
  );
}

export default Details;
