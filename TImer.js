const Newyear = "1 Jan 2023";

function countdown() {
  const newyearDate = new Date(Newyear);
  const currentDate = new Date();

  const totalsec = (newyearDate - currentDate) / 1000;

  const day = Math.floor(totalsec / 3600 / 24);
  const hour = Math.floor(totalsec / 3600) % 24;
  const min = Math.floor(totalsec / 60) % 60;
  const sec = Math.floor(totalsec) % 60;

  document.getElementById("day").innerHTML = day;
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = min;
  document.getElementById("second").innerHTML = sec;
}

setInterval(countdown, 1000);
