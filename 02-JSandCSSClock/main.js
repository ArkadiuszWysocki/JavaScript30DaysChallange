const hour = document.querySelector('.hour-hand');
const min = document.querySelector('.min-hand');
const sec = document.querySelector('.second-hand');



const runTime = () => {
  const timeNow = new Date();
  const secondsNow = timeNow.getSeconds();
  const secondsDeg = (secondsNow / 60) * 360 + 90;
  const minutesNow = timeNow.getMinutes();
  const minutesDeg = (minutesNow / 60) * 360 + 90;
  const hoursNow = timeNow.getHours();
  const hoursDeg = (hoursNow / 12) * 360 + 90;
  sec.style.transform = `rotate(${secondsDeg}deg)`;
  min.style.transform = `rotate(${minutesDeg}deg)`;
  hour.style.transform = `rotate(${hoursDeg}deg)`;
};

setInterval(runTime, 1000)