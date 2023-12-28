"use client"

import Footer from "@/components/user_components/Footer";
import Header from "@/components/user_components/Header";
import "../assets/styles/globals.css";
import HeroSection from "@/components/user_components/HeroSection";
import { useEffect, useState } from "react";
import { getUser } from "@/Structure/ApiHandler";

function Home() {
  const [data,setData] = useState('')

  useEffect(()=>{
    async function getUserData(){
        const newData = await getUser()
        setData(newData)
        console.log(newData)
    }getUserData()
  },[])
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
}

export default Home;
