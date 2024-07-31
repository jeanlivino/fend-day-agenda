export const roomKeysMap = {
  fendce: {
    label: "Frontend",
  },
  w3c: {
    label: "W3C / NiC.br",
  },
  firebank: {
    label: "Fire Banking",
  },
  convida: {
    label: "Convida",
  },
} as const;

export type RoomKeys = keyof typeof roomKeysMap;

export const roomKeys = Object.keys(roomKeysMap) as RoomKeys[];
