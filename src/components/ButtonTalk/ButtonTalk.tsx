import { Button } from "../ui/button";
import { Props } from "./types";

export const ButtonTalk = ({ children, active = false, mode, onModeChange }: Props) => {
  const handleClick = () => {
    if (onModeChange) {
      onModeChange(mode);
    }
  };

  const buttonColor = active
    ? "bg-[#dc9200] border-[0.5px] border-[#ffb015] hover:bg-[#ffb015]/[.50] rounded-[5px] w-full"
    : "bg-[#bd7e00]/[.20] border-[0.5px] border-[#ffb015] hover:bg-[#ffb015]/[.50] rounded-[5px] w-full";

  return (
    <Button className={buttonColor} onClick={handleClick}>
      {children}
    </Button>
  );
};
