// src/components/ReturnButton/ReturnButton.tsx
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export const ReturnButton = () => {
  return (
    <>
      <Link to="/" className="self-start">
        <ChevronLeft size={28} className="text-[#A855F7] self-start absolute" />
      </Link>
    </>
  );
}

export default ReturnButton;