import { ButtonTalk } from "../ButtonTalk";
import { useState } from "react";

type mode = "frontend" | "convida" | "firebanking" | "firebanking2";
type props = {
  onChange?: (mode: mode) => void;
}
export const ButtonGroup = (props: props) => {
  const [mode, setMode] = useState<mode>("frontend");
  const handleChange = (mode: mode) => {
    return () => {
      setMode(mode);
      if (props.onChange) {
        props.onChange(mode);
      }
    }

  }
  return (
    <div className="flex justify-center
    gap-4 flex-wrap w-full
    background-slate-200 h-50">
      <ButtonTalk children="Front-End CE" active={mode == "frontend"} onModeChange={handleChange("frontend")} />
      <ButtonTalk children="Convida" active={mode == "convida"} onModeChange={handleChange("convida")} />
      <ButtonTalk children="Fire Banking" active={mode == "firebanking"} onModeChange={handleChange("firebanking")} />
      <ButtonTalk children="Fire Banking" active={mode == "firebanking2"} onModeChange={handleChange("firebanking2")} />
    </div>
  );
};