export const roomKeysMap = {
  convida: {
    label: "Convida",
  },
  fendce: {
    label: "Frontend",
  },
  firebank: {
    label: "Fire Banking",
  },
  w3c: {
    label: "W3C / NiC.br",
  },
} as const;

export type RoomKeys = keyof typeof roomKeysMap;

export const roomKeys = Object.keys(roomKeysMap) as RoomKeys[];
