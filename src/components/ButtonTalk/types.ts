import React from "react";
import { Mode } from "../ButtonGroup/types";

export interface Props {
  children: string | React.ReactNode;
  active: boolean | void;
  mode: Mode;
  onModeChange?: (newMode: Mode) => void;
}
