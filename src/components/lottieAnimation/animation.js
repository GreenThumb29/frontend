"use client";
import Lottie from "lottie-react";
// import { useLottie } from "lottie-react";
import greenEnergyAnimation from "@/assets/lottie.json";

const Animation = () => {
  return (
    <Lottie
      animationData={greenEnergyAnimation}
      style={{ width: "380px", height: "300px" }}
      // className=" w-48"
    />
  );
};

export default Animation;
