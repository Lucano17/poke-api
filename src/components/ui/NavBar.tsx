"use client"

import { useEffect, useState } from "react";
import { OpenMenuButton } from "./OpenMenuButton"
import { SideBar } from "./SideBar"


export const NavBar = () => {
     const [windowDimention, setWindowDimention] = useState({
        width: 0,
        height: 0,
      });
    
      useEffect(() => {
        setWindowDimention({
          width: window.innerWidth,
          height: window.innerHeight,
        });
    
        const detectDimention = () => {
          setWindowDimention({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        window.addEventListener("resize", detectDimention);
        return () => {
          window.removeEventListener("resize", detectDimention);
        };
      }, []);
  return (
    <>
    {
        windowDimention.width < 640
        ? (<OpenMenuButton/>)
        : (<SideBar/>)
    }
    </>
  )
}
