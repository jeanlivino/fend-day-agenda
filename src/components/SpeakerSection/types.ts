import { Palestra } from "@/api/types";

export interface SpeakerSectionProps {
  liveTalk: Palestra | undefined;
  savedCardIds: number[];
  sectionTitle: string;
  handleCardModeChange: (cardId: number, newMode: boolean) => void;
}