import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from 'react';

type ToggleButtonProps = {
  initialMode?: boolean;
  onModeChange?: (newMode: boolean) => void;
};

export const Togglebutton = ({ initialMode = true, onModeChange }: ToggleButtonProps) => {
  const [mode, setMode] = useState(initialMode);

  const handleChange = () => {
    const newMode = !mode;
    setMode(newMode);
    if (onModeChange) {
      onModeChange(newMode);
    }
  };

  if (mode) {
    return (
      <div data-testid="true" onClick={handleChange}>
        <CirclePlus color="#ffffff" />
      </div>
    );
  } else {
    return (
      <div data-testid="false" onClick={handleChange}>
        <CircleMinus color="#ffffff" />
      </div>
    );
  }
};