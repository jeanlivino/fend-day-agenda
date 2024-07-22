export type Mode = "Frontend" | "Invite" | "FireBanking" | "Communities";

export interface Props {
  onChange?: (mode: Mode) => void;
}
