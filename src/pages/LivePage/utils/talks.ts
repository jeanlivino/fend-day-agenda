import { Palestra } from "@/api/types";
import { format, isAfter, isBefore } from "date-fns";

export const getLiveTalk = (talks: Palestra[], now: Date) => {
  return talks.find((talk) => {
    const startTime = new Date(`${format(now, "yyyy-MM-dd")}T${talk.hour}`);
    const endTime = new Date(startTime.getTime() + 60 * 20 * 1000);
    return isAfter(now, startTime) && isBefore(now, endTime);
  });
};

export const getNextTalk = (talks: Palestra[], now: Date) => {
  const sortedTalks = [...talks].sort(
    (a, b) =>
      new Date(`${format(now, "yyyy-MM-dd")}T${a.hour}`).getTime() -
      new Date(`${format(now, "yyyy-MM-dd")}T${b.hour}`).getTime()
  );

  return sortedTalks.find((talk) => {
    const startTime = new Date(`${format(now, "yyyy-MM-dd")}T${talk.hour}`);
    return isAfter(startTime, now);
  });
};
