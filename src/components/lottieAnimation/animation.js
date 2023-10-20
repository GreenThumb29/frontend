'use client'
import Lottie from "lottie-react";
// import { useLottie } from "lottie-react";
import greenEnergyAnimation from "@/assets/lottie.json";

const Animation = () =>{
    return <Lottie animationData={greenEnergyAnimation} style= {{"width": "400px", height: "300px"}}/>
}

export default Animation