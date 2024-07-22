import { ProfileCardProps } from "../ProfileCard/types";

export interface SpeakerCardProps extends ProfileCardProps {
  label: string;
  tags: string[];
  hour: string;
  isSaved: boolean;
  onChangeMode: (mode: boolean) => void;
}
