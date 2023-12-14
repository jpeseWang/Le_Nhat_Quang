"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSquareFacebook } from "react-icons/fa6";
import bg1 from "../images/loginBg1.png";
import bg2 from "../images/loginBg2.png";
import bg3 from "../images/loginBg3.png";

import Footer from "@/components/Footer/Footer";
import "./style.scss";

export default function LoginPage() {
  return (
    <>
      <div className="mt-10 flex justify-center ">
        {/* Form */}
        <div className="mt-6 block w-1/2 bg-[#121212]">
          <form action="" className="mx-26">
            <img
              src="https://giphy.com/static/img/be-animated.gif"
              alt="Be Animated"
              className="mx-auto w-[320px]"
            />
          </form>
        </div>
        {/* Images */}
        <div className="w-1/2 ">
          <video autoPlay={true} playsInline={true} muted>
            <source
              src="https://media.giphy.com/login-join-backgrounds/science-logo.mp4"
              type="video/mp4"
            />
            <source
              src="https://media.giphy.com/login-join-backgrounds/science-logo.webm"
              type="video/webm"
            />
          </video>
        </div>
      </div>
    </>
  );
}
