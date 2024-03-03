import React, { useState, useEffect } from 'react';
import '../Assets/css/DateTimeDisplay.css';

function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  const formattedDateTime = currentDateTime.toLocaleDateString(undefined, options);

  return (
    <div className="datetime-container">
      <p className="datetime-text">{formattedDateTime}</p>
    </div>
  );
}

export default DateTimeDisplay;
