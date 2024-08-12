import React, { useEffect, useState } from 'react';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const countdown = () => {
      const countDate = new Date('August 17, 2024 00:00:00').getTime();
      const now = new Date().getTime();
      const gap = countDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const textDay = Math.floor(gap / day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      const textSecond = Math.floor((gap % minute) / second);

      setTimeLeft({ textDay, textHour, textMinute, textSecond });
    };

    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container p-8">
      <h1 className="font-bold p-5 text-2xl">Countdown to August 16, 2024</h1>
      <div className='flex font-bold gap-10'>
        <div className='text-[20px] '>{timeLeft.textDay} Days</div>
        <div className='text-[20px] '>{timeLeft.textHour} Hours</div>
        <div className='text-[20px] '>{timeLeft.textMinute} Minutes</div>
        <div className='text-[20px] '>{timeLeft.textSecond} Seconds</div>
      </div>
    </div>
  );
}

export default Countdown;
