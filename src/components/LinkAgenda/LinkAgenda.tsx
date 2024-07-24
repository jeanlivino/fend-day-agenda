import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const linkCN = cn("text-white underline text-nowrap");

export const LinkAgenda = ({ isMyAgenda }: { isMyAgenda?: boolean }) => {
  return (
    <div className="flex flex-wrap gap-8 justify-center items-center">
      {/* <Link className={linkCN} to='/lives'>
        Acontecendo agora
      </Link> */}
      {isMyAgenda ? (
        <Link className={linkCN} to="/">
          Agenda completa
        </Link>
      ) : (
        <Link className={linkCN} to="/minha-lista">
          Ver minha agenda &gt;
        </Link>
      )}
    </div>
  );
};
