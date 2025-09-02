import React from "react";
import { Routes, Route } from "react-router-dom";
import NamePage from "./pages/NamePage";
import LovePage from "./pages/LovePage";
import NotePage from "./pages/NotePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NamePage />} />
      <Route path="/love" element={<LovePage />} />
      <Route path="/note" element={<NotePage />} />
    </Routes>
  );
}
