import { Agenda, Palestra, PalestraWithRoom } from "@/api/types";

export const splitTalksToMidDay = (talks: PalestraWithRoom[] | Palestra[]) => {
  const talksBeforeMidDay = talks.filter(
    (item) => item.hour.split(":")[0] < "12",
  );
  const talksAfterMidDay = talks.filter(
    (item) => item.hour.split(":")[0] >= "12",
  );

  return { talksBeforeMidDay, talksAfterMidDay };
};

export const agendaResponseToTalks = (data: Agenda): PalestraWithRoom[] => {
  return Object.entries(data).reduce((acc, [key, value]) => {
    return acc.concat(value.map((talk) => ({ ...talk, room: key })));
  }, [] as PalestraWithRoom[]);
};
