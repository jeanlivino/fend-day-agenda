import { HomePage } from "@/pages/HomePage";
import { LivePage } from "@/pages/LivePage";
import { MyAgenda } from "@/pages/MyAgenda";
import { Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/minha-lista" element={<MyAgenda />} />
      <Route path="/live" element={<LivePage />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};
