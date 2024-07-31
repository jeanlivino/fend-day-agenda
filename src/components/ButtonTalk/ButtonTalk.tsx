import { Button } from "../ui/button";
import { Props } from "./types";

export const ButtonTalk = ({ children, active = false, mode, onModeChange }: Props) => {
  const handleClick = () => {
    if (onModeChange) {
      onModeChange(mode);
    }
  };

  const buttonColor = active
    ? "bg-[#A855F7] border-[0.5px] border-[#A855F7] hover:bg-[#A855F7]/[.50] rounded-[5px] w-full"
    : "bg-[#832BD8]/[.20] border-[0.5px] border-[#A855F7] hover:bg-[#A855F7]/[.50] rounded-[5px] w-full";

  return (
    <Button className={buttonColor} onClick={handleClick}>
      {children}
    </Button>
  );
};
