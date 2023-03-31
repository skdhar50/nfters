import moment from "moment-timezone";

export default function getRemainingTime(date) {
  const now = moment.utc().tz("Asia/Dhaka");
  const targetDate = moment.utc(date).tz("Asia/Dhaka");
  const diff = targetDate.diff(now);

  const duration = moment.duration(diff);

  return {
    total: diff,
    hours: duration.hours().toString().padStart(2, "0"),
    minutes: duration.minutes().toString().padStart(2, "0"),
    seconds: duration.seconds().toString().padStart(2, "0"),
  };
}
