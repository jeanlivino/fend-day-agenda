import { Palestra } from "@/api/types";

export interface SpeakerSectionProps {
  liveTalk?: Palestra | undefined;
  savedCardIds: number[];
  handleCardModeChange: (cardId: number, newMode: boolean) => void;
}