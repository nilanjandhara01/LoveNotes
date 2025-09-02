import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
import lovePhoto from "../assets/love-me.png";


// Small floating hearts behind the form
const FloatingHearts = () => {
  const hearts = ["💖", "💕", "💞", "💓"];
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {Array.from({ length: 15 }).map((_, i) => {
        const heart = hearts[Math.floor(Math.random() * hearts.length)];
        return (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              bottom: "-30px",
              fontSize: 20 + Math.random() * 20,
            }}
            animate={{ y: [-30, -700], opacity: [1, 0.2, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 5 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2, ease: "easeInOut" }}
          >
            {heart}
          </motion.div>
        );
      })}
    </div>
  );
};

export default function NamePage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      localStorage.setItem("gfName", name);
      navigate("/love");
    }
  };

  return (
    <PageWrapper>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fbcfe8 0%, #f9a8d4 100%)",
          position: "relative",
          overflow: "hidden",
          padding: "20px",
        }}
      >
        {/* Floating hearts */}
        <FloatingHearts />

        {/* Greeting */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ fontSize: "2.5rem", marginBottom: "25px", color: "#ec4899", textShadow: "2px 2px #fff", textAlign: "center" }}
        >
          Heyyy Babygirl 💖
        </motion.h1>

        {/* Input form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Enter your name..."
            style={{
              padding: "12px 16px",
              borderRadius: "12px",
              border: "2px solid #fff",
              outline: "none",
              fontSize: "1rem",
              width: "220px",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => (e.target.style.borderColor = "#ff69b4")}
            onBlur={(e) => (e.target.style.borderColor = "#fff")}
          />
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#f43f5e" }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "#ec4899",
              color: "white",
              padding: "12px 28px",
              borderRadius: "12px",
              border: "none",
              fontSize: "1.1rem",
              cursor: "pointer",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
          >
            visit for a surprize 
          </motion.button>
        </motion.form>
        <motion.img
  src={lovePhoto} // imported from assets
  alt="cute love"
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1, delay: 0.5 }}
  style={{
    width: "180px",
    marginTop: "25px",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  }}
/>

      </div>
    </PageWrapper>
  );
}
