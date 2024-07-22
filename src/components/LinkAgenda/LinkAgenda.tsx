import { Link } from "react-router-dom";

export const LinkAgenda = () => {
  return (
      <div className="flex flex-wrap gap-8 sm:justify-between justify-center items-center">
        <Link className="text-white underline text-nowrap" to="/lives">
          Acontecendo agora
        </Link>
        <Link className="text-white underline text-nowrap" to="/agenda"> 
          Ver minha  agenda &gt;
        </Link>
      </div>
  );
};
