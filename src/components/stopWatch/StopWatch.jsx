import { useEffect, useState } from "react";
import Button from "../common/Button";
import styles from "./StopWatch.module.css";
import RapTime from "./RapTime";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isRap, setIsRap] = useState([]);

  const handleTimerController = () => {
    setIsRunning(!isRunning);
  };

  const handleTimerReset = () => {
    setTime(0);
    setIsRap([]);
  };

  const handleTimerRap = () => {
    if (isRunning) {
      setIsRap((prev) => [...prev, formatTime(time)]);
    }
  };

  const formatTime = (time) => {
    const getMilliseconds = time % 100;
    const getSeconds = Math.floor((time / 100) % 60);
    const getMinutes = Math.floor((time / 6000) % 60);
    const getHours = Math.floor(time / 360000);

    const formatNumber = (number) => (number < 10 ? `0${number}` : number);

    return `${formatNumber(getHours)}:${formatNumber(
      getMinutes
    )}:${formatNumber(getSeconds)}.${
      getMilliseconds < 10 ? `0${getMilliseconds}` : getMilliseconds
    }`;
  };

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10);
    } else if (!isRunning && time !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  return (
    <>
      <div className={styles.timeFlex}>
        <div>{formatTime(time)}</div>
      </div>

      <div className={styles.buttonFlex}>
        {isRunning ? (
          <>
            <Button
              type="button"
              text="rap"
              size={`${styles.buttonSize} ${styles.resetButton}`}
              onClick={handleTimerRap}
            />

            <Button
              type="button"
              text="stop"
              size={styles.buttonSize}
              onClick={handleTimerController}
            />
          </>
        ) : (
          <>
            <Button
              type="button"
              text="reset"
              size={`${styles.buttonSize} ${styles.resetButton}`}
              onClick={handleTimerReset}
            />
            <Button
              type="button"
              text="start"
              size={styles.buttonSize}
              onClick={handleTimerController}
            />
          </>
        )}
      </div>
      {isRap.map((item, index) => (
        <RapTime item={item} key={index} index={index} />
      ))}
    </>
  );
}
