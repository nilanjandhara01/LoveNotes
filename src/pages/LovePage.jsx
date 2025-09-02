import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import Hearts from "../components/Hearts";
import lovehug from "../assets/hug-me.png";

export default function LovePage() {
  const navigate = useNavigate();
  const [yesSize, setYesSize] = useState(1);
  const [noPos, setNoPos] = useState({ top: "65%", left: "60%" });

  // Move No button randomly
  const moveNo = () => {
    const minDistance = 150;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    let left, top;
    let attempt = 0;

    do {
      left = Math.random() * (window.innerWidth - 100) + 50;
      top = Math.random() * (window.innerHeight - 100) + 50;
      attempt++;
    } while (
      Math.abs(left - centerX) < minDistance &&
      Math.abs(top - centerY) < minDistance &&
      attempt < 100
    );

    setNoPos({ top, left });
    setYesSize((prev) => prev + 0.1); // grow Yes button slightly
  };

  useEffect(() => {
    const interval = setInterval(moveNo, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper>
      <div
        className="relative flex items-center justify-center h-screen w-screen overflow-hidden"
        style={{ backgroundColor: "#ffb6c1" }}
      >
        {/* Background image slightly smaller */}
        <img
          src={lovehug}
          alt="love background"
          style={{
            position: "absolute",
            top: "5%", // small margin from top
            left: "5%", // small margin from left
            width: "90%", // slightly smaller
            height: "90%", // slightly smaller
            objectFit: "cover",
            borderRadius: "20px",
            zIndex: 0,
          }}
        />

        {/* Overlay for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(255,182,193,0.25)",
            zIndex: 1,
          }}
        />

        {/* Floating hearts */}
        <Hearts />

        {/* Question + Yes button container */}
        <div className="relative z-20 flex flex-col items-center justify-center">
          {/* Question text */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              position: "relative",
              zIndex: 1,
              fontSize: "3rem",
              textAlign: "center",
              margin: 0,
              transform: "translateY(-50px)",
            }}
          >
            💖 Am I all yours? 💖
          </motion.h1>

          {/* Yes button */}
          <motion.button
            onClick={() => navigate("/note")}
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              background: "#ff69b4",
              color: "white",
              padding: "16px 32px",
              borderRadius: "20px",
              fontSize: "1.5rem",
              border: "none",
              cursor: "pointer",
              zIndex: 2,
            }}
            animate={{ scale: yesSize }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Yes Baby 💕
          </motion.button>
        </div>

        {/* No button */}
        <motion.button
          onMouseEnter={moveNo}
          style={{
            position: "absolute",
            top: noPos.top,
            left: noPos.left,
            transform: "translate(-50%, -50%)",
            padding: "12px 24px",
            borderRadius: "18px",
            background: "#f3f3f3",
            border: "2px solid #ff69b4",
            fontSize: "1.2rem",
            color: "#ec4899",
            cursor: "pointer",
            zIndex: 2,
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Nopee 😜
        </motion.button>
      </div>
    </PageWrapper>
  );
}
