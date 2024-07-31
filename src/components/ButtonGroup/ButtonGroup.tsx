import { ButtonTalk } from "../ButtonTalk";
import { useState } from "react";
import { Props } from "./types";
import { roomKeys, RoomKeys, roomKeysMap } from "@/constants/rooms";

export const ButtonGroup = (props: Props) => {
  const [talk, setTalk] = useState<RoomKeys>();
  const handleChange = (newMode: RoomKeys) => {
    setTalk(newMode);
    if (props.onChange) {
      props.onChange(newMode);
    }
  };
  return (
    <div className="grid grid-cols-2 items-center justify-center gap-3 w-full background-slate-200 max-w-[500px]">
      {roomKeys.map((roomKey) => (
        <ButtonTalk
          key={roomKey}
          mode={roomKey}
          children={roomKeysMap[roomKey].label}
          active={talk == roomKey}
          onModeChange={handleChange}
        />
      ))}
    </div>
  );
};
