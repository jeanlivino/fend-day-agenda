import { Palestra } from "@/api/types";

export interface SpeakerCardProps {
  talk: Palestra;
  isSaved: boolean;
  showRoom?: boolean;
  onChangeMode: (mode: boolean) => void;
}
