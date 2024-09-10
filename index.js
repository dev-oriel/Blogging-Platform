const date = new Date();

const renderCalender = () => {
  date.setDate(1);

  const yea = date.getFullYear();

  const monthDays = document.querySelector(".days");

  const yea1 = document.querySelector(".year p");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastday = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstdayIndex = date.getDay();
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".month .hea").innerHTML = months[date.getMonth()];
  document.querySelector(".year p").innerHTML = yea;
  document.querySelector(".day p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstdayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastday - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }
  for (let j = 1; j < nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev1").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalender();
});
document.querySelector(".next1").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalender();
});
document.querySelector(".prev2").addEventListener("click", () => {
  date.setFullYear(date.getFullYear() - 1);
  renderCalender();
});
document.querySelector(".next2").addEventListener("click", () => {
  date.setFullYear(date.getFullYear() + 1);
  renderCalender();
});

renderCalender();
