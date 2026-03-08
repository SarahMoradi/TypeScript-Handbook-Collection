import { useEffect, useRef, useState } from "react";

export const TimerComponent = () => {
  const [time, setTime] = useState(0);

  const timeRef = useRef<number | undefined>(undefined);

  const stop = () => {
    clearInterval(timeRef.current);
  };

  useEffect(() => {
    timeRef.current = setInterval(() => {
      setTime((old) => old + 1);
    }, 1000);
  }, []);

  return (
    <div>
      {time}
      <button onClick={stop}>Stop Timer</button>
    </div>
  );
};
