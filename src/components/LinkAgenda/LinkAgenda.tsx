// import React from "react";
// import { Link } from "react-router-dom";
// import { Link } from "lucide-react";


//substituir a => Link

export const LinkAgenda = () => {
  return (
    <div>  
      <div className="flex flex-row justify-between items-center p-2 md:p-1 space-x-4 md:space-x-6">
        <a 
          className="underline text-xs md:text-sm flex-1 text-center" 
          /*to="/acontecendo-agora"*/ >
          Acontecendo agora
        </a>
        <a 
          className="underline text-xs md:text-sm flex-1 text-center" 
          /*to="/agenda"*/ >
          Ver minha agenda &gt;
        </a>
      </div>
    </div>
  );
};
