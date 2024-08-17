'use client'
import apex from "@/assets/Logo (1).png"
import echo from "@/assets/Logo (2).png"
import pulse from "@/assets/Logo (3).png"
import celestial from "@/assets/Logo (4).png"
import Image from 'next/image';
import { motion } from "framer-motion"
export const Trusted = () => {
  return (
    <div className="py-8 md:py-20  bg-black">
      <div className="container">
     <div className="flex gap-9 flex-col">
     <h1 className="font-bold text-base flex justify-center items-center  text-white">Trusted by the world leaders</h1>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] ">
          <motion.div 
          animate={{
            translateX:"-50%"
          }}
          transition={{
            duration:7,
            ease:'linear',
            repeat:Infinity,
            repeatType:'loop',
          }}
          className="flex gap-14 flex-none pr-14">
            <Image src={apex} className=" ticker"  alt="ewj ticker"/>
            <Image src={echo} className="ede ticker"  alt=" ticker"/>
            <Image src={apex} className="ede ticker"  alt=" ticker"/>
            <Image src={pulse} className="ede ticker"  alt=" ticker"/>
            <Image src={celestial} className="ede ticker"  alt=" ticker"/>
            <Image src={echo} className="ede ticker"  alt=" ticker"/>
            <Image src={apex} className="ede ticker"  alt=" ticker"/>
            <Image src={pulse} className="ede ticker"  alt=" ticker"/>

          </motion.div>

        </div>
     </div>
      </div>

    </div>
  )
};
