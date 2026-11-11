'use client'
import Image from "next/image";
import {useEffect, useRef , useState } from "react";
import Add from "@/components/Add";
import Clear from "@/components/Clear";
import Display from "@/components/Display";



 function Home() {
  

  return (
    <div >
      <main>
     
   
     
       <div> 
     
      <Add />
      <Display />
      <Clear/>
       </div>
       

      </main>
    </div>
  );
}
export default Home;
