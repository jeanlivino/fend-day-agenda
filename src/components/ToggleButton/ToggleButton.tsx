import { CircleMinus, CirclePlus } from "lucide-react";

type ToggleButtonProps = {
  isSaved: boolean;
  onToggle: (isSaved: boolean) => void;
};

export const ToggleButton = ({ isSaved, onToggle }: ToggleButtonProps) => {
  return (
    <div data-testid="toggleButton" onClick={() => onToggle(!isSaved)}>
      {isSaved ? ( <CircleMinus color="#ffffff" /> ) : ( <CirclePlus color="#ffffff" /> )}
    </div>
  );
};
