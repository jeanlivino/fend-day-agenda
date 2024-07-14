import { Button } from "../ui/button";
type Props = {
  children: string | React.ReactNode;
  active: boolean | void;
  onModeChange?: (newMode?: boolean) => void;
};

export const ButtonTalk = ({ children, active = false, onModeChange }: Props) => {
  const handleClick = () => {
    const newMode = !active;
    if (onModeChange) {
      onModeChange(newMode);
    }
  };

  const buttonColor = active
    ? "bg-[#A855F7] border-[0.5px] border-[#A855F7] hover:bg-[#A855F7] rounded-[5px] w-[154px]"
    : "bg-[#832BD8]/[.20] border-[0.5px] border-[#A855F7] hover:bg-[#A855F7] rounded-[5px] w-[154px]";

  return (
    <Button className={buttonColor} onClick={handleClick}>
      {children}
    </Button>
  );
};