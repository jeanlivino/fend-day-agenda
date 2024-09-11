import { Palestra } from "@/api/types";
import { hasTimePassed, isTalkLive } from "@/lib/check-date-time";
import { format } from "date-fns";

export const getLiveTalk = (talks: Palestra[]) => {
  return talks.find((talk) =>isTalkLive(talk.hour))
};

export const getNextTalk = (talks: Palestra[], now: Date) => {
  const sortedTalks = [...talks].sort(
    (a, b) =>
      new Date(`${format(now, "yyyy-MM-dd")}T${a.hour}`).getTime() -
      new Date(`${format(now, "yyyy-MM-dd")}T${b.hour}`).getTime()
  );

  return sortedTalks.find((talk) => !isTalkLive(talk.hour) && !hasTimePassed(talk.hour));
};
