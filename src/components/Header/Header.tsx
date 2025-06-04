import logoFrontEnd from "@/assets/frontend-day.svg";
import { Separator } from "@/components/ui/separator";
import { HeaderProps } from "./types";

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <a href="https://frontendday.com.br/" target="_blank">
        <img src={logoFrontEnd} alt="Logo do Frontend Day 2025" className="w-40" />
      </a>
      <p className="text-2xl text-white font-bold">{label}</p>
      <Separator className="w-20 h-1 rounded-2xl bg-[#ffb015]" />
    </div>
  );
};
