import React from "react";
import { motion } from "framer-motion";
import Hearts from "../components/Hearts";
import cuteBear from "../assets/cute-bear.png";


function NotePage() {
  const gfName = localStorage.getItem("gfName") || "Love";

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-300 text-center relative overflow-hidden">
      <Hearts />
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl mb-4"
      >
        I Love You Babygirlll 💞
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="text-lg w-11/12 md:w-2/3 lg:w-1/2 mx-auto text-center"
      >
        Sorry for made you upset 😔💕, I just wanted to remind you how much you mean to me. 
        Every moment with you feels like heaven ✨. Your smile Hayeee,
         your laugh is like melody(not that toffee), and your hugs are my safe heaven 💖. 
         I’m so grateful for every little thing you do and for the beautiful heart you have. No matter what, 
         I promise to always cherish you, support you, and make you feel loved every single dayy 😘💞. 
         You’re my pretty little baby, today and always,   I LOVE YOU 💓💋.
      </motion.p>

      <motion.img
  src={cuteBear}
  alt="love cartoon"
  className="w-60 mt-6"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1, delay: 1 }}
/>
    </div>
  );
}

export default NotePage;
