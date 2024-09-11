export type TalkCategory = "Convida" | "Frontend" | "Comunidades";

export type Room = "fendce" | "w3c" | "firebank" | "convida";

export interface Agenda extends Record<Room, Palestra[]> {}

export interface Palestra {
  speaker: Speaker;
  room: string;
  hour: string;
  id: number;
  title: string;
  tags: string[];
}

export interface PalestraWithRoom extends Palestra {
  room: string;
}

export interface Speaker {
  role: string;
  company: string;
  bio: string;
  keynote?: boolean;
  social_link: string;
  id: number;
  title: string;
  image: string;
}
