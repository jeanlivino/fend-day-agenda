import { ButtonTalk } from "../ButtonTalk";
import { useState } from "react";
import { Mode, Props } from "./types";

export const ButtonGroup = (props: Props) => {
  const [mode, setMode] = useState<Mode>();
  const handleChange = (newMode: Mode) => {
    setMode(newMode);
    if (props.onChange) {
      props.onChange(newMode);
    }
  }
  return (
    <div className="grid grid-cols-2 items-center justify-center gap-6 w-full background-slate-200 max-w-[500px]">
      <ButtonTalk mode="Frontend" children="Front-End CE" active={mode == "Frontend"} onModeChange={handleChange} />
      <ButtonTalk mode="Invite" children="Convida" active={mode == "Invite"} onModeChange={handleChange} />
      <ButtonTalk mode="FireBanking" children="Fire Banking" active={mode == "FireBanking"} onModeChange={handleChange} />
      <ButtonTalk mode="Communities" children="Comunidades" active={mode == "Communities"} onModeChange={handleChange} />
    </div>
  );
};