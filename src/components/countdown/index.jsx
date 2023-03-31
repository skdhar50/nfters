import { useState, useEffect } from "react";
import getRemainingTime from "../../utilities/countDown";

function Countdown({ date }) {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime(date));

  //   calling the date function every one second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(getRemainingTime(date));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [date]);

  return (
    <>
      <span className="font-bold">{remainingTime.hours}</span>h{" "}
      <span className="font-bold">{remainingTime.minutes}</span>m{" "}
      <span className="font-bold">{remainingTime.seconds}</span>s
    </>
  );
}

export default Countdown;
