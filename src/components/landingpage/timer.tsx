"use client";
import React, { useState, useEffect } from "react";

function Timer() {
  const [milliseconds, setMilliseconds] = useState(3600000); // 1 hour in milliseconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMilliseconds((prevMilliseconds) => prevMilliseconds - 10);
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
  const remainingMilliseconds = milliseconds % 1000;

  return (
    <div className="flex gap-1">
      <span>{hours} :</span>
      <span>{minutes.toString().padStart(2, "0")} :</span>
      <span>{seconds.toString().padStart(2, "0")} :</span>
      <span>{remainingMilliseconds.toString().padStart(3, "0")}</span>
    </div>
  );
}

export default Timer;
