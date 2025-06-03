// src/components/ReturnButton/ReturnButton.tsx
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export const ReturnButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onReturnClick = () => {
    if (location.pathname === "/") {
      window.location.href = "https://frontendday.com.br/";
      return;
    }

    navigate(-1);
  };

  return (
    <>
      <a onClick={onReturnClick} className="self-start">
        <ChevronLeft size={28} className="text-[#ffb015] self-start absolute" />
      </a>
    </>
  );
};

export default ReturnButton;
