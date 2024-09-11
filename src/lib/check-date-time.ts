import { addMinutes, isAfter, isSameDay } from "date-fns";

const eventDate = new Date("2024-09-14T10:00:00.000Z");

export const hasTimePassed = (hour: string) => {
  const now = new Date();

  if(eventDate > now) {
    return false;
  }

//   convert to UTC
  now.setTime(now.getTime() + (now.getTimezoneOffset() * 60 * 1000));

  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  const hourNumber = parseInt(hour) + 3;
  const minuteNumber = parseInt(hour.split(":")[1]);


  return currentHour > hourNumber || (currentHour === hourNumber && currentMinute > minuteNumber);
};

const defaultTalkMinutes = 40;

export const isTalkLive = (hour: string): boolean => {
  const now = new Date();

  if(!isSameDay(eventDate, now)) {
    return false;
  }

  // Convert to UTC
  now.setTime(now.getTime() + (now.getTimezoneOffset() * 60 * 1000));

  // Extract the hour and minute from the string
  const startHour = parseInt(hour.split(":")[0]) + 3;
  const startMinute = parseInt(hour.split(":")[1]);

  // Create a Date object for the start time
  const startTime = eventDate.setHours(startHour, startMinute, 0, 0);

  const endTime = addMinutes(startTime, defaultTalkMinutes);

  // Check if the current time is between startTime and endTime
  return isAfter(now, startTime) && !isAfter(now, endTime);
};

