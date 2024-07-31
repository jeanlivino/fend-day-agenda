import { RoomKeys } from "@/constants/rooms";
import React from "react";

export interface Props {
  children: string | React.ReactNode;
  active: boolean | void;
  mode: RoomKeys;
  onModeChange?: (newMode: RoomKeys) => void;
}
