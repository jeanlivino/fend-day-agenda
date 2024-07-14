export type TalkCategory = 'Convida' | 'Frontend' | 'Comunidades';

export interface Agenda extends Record<TalkCategory, Palestra[]>{
  [type: string]: Palestra[]
}

export interface Palestra {
  speaker: Speaker
  keynote?: boolean
  room: string
  hour: string
  id: number
  title: string
  tags: string[]
}

export interface Speaker {
  role: string
  company: string
  bio: string
  social_link: string
  id: number
  title: string
  image: string
}

