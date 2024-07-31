import { Speaker } from "@/api/types";

export interface SpeakerCardProps {
  speaker?: Speaker;
  label: string;
  tags: string[];
  hour: string;
  isSaved: boolean;
  showRoom?: boolean;
  room?: string;
  onChangeMode: (mode: boolean) => void;
}
