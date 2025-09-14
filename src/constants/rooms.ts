export const roomKeysMap = {
  fendce: {
    label: "Principal",
  },
  conexao: {
    label: "Conexão",
  },
  workshop: {
    label: "Workshop",
  },
} as const;

export type RoomKeys = keyof typeof roomKeysMap;

export const roomKeys = Object.keys(roomKeysMap) as RoomKeys[];
