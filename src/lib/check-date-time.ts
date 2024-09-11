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