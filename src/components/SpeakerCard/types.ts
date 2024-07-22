import { ProfileCardProps } from "../ProfileCard/types";

export interface SpeakerCardProps extends ProfileCardProps {
  label: string;
  tags: string[];
  hour: string;
  isSaved: boolean;
  keynote?: boolean;
  showRoom?: boolean;
  room?: string;
  onChangeMode: (mode: boolean) => void;
}
