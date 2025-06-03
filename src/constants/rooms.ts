export const roomKeysMap = {
  fendce: {
    label: "Palco Principal",
  },
  conexao: {
    label: "Palco Conexão",
  },
} as const;

export type RoomKeys = keyof typeof roomKeysMap;

export const roomKeys = Object.keys(roomKeysMap) as RoomKeys[];
