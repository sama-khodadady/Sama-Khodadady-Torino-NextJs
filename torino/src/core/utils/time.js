import { p2e } from "./numbers";
import { toGregorian } from "jalaali-js";

//function for get days difference
function timeInterval(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const differenceInTime = end - start;
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  return differenceInDays;
}

//persian date format
const persianDateFormat = (date) => {
  const simpleFormat = new Date(date).toLocaleDateString("Fa-IR");
  const month = new Date(date).toLocaleDateString("Fa-IR", { month: "long" });
  const longFormat = new Date(date).toLocaleDateString("Fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const year = new Date(date).toLocaleDateString("Fa-IR", {
    year: "numeric",
  });
  const weekday = new Date(date).toLocaleDateString("Fa-IR", {
    weekday: "long",
  });
  const day = new Date(date).toLocaleDateString("Fa-IR", {
    day: "numeric",
  });
  const customFormat = `${weekday} ${day} ${month} ${year} `;
  return { simpleFormat, longFormat, month, customFormat };
};

//function for conver a date to IOS format
const convertIOSFormat = (date) =>
  date?.map((i) => {
    if (!i?.isValid) return;
    const setUTC = new Date(i).setUTCHours(0, 0, 0, 0);
    return new Date(setUTC).toISOString(); //2024-11-28T00:00:00.000Z
  });

//milladi birthdate 2024-09-01 format
const formatBirthDate = (e) => {
  const [year, month, day] = p2e(e.toString()).split("/"); //1403,09,12
  const { gy, gm, gd } = toGregorian(
    parseInt(year),
    parseInt(month),
    parseInt(day)
  );
  return `${gy}-${gm}-${gd}`;
};

//format tour createdAt date in persian
const formatCreated = (date) => {
  const newDate = new Date(date).toLocaleDateString("fa-IR");
  const time = new Date(date).toLocaleTimeString("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${time} - ${newDate}`;
};

const tourStatus = (startDate, endDate) => {
  if (!startDate || !endDate) return;
  const today = new Date(Date.now()).toISOString();
  const start = new Date(startDate).toISOString();
  const end = new Date(endDate).toISOString();
  if (end > today && start > today) return { status: "به زودی ..." };
  if (end > today && today > start) return { status: "در حال برگزاری" };
  if (end < today && start < today) return { status: "به اتمام رسیده" };
};

export {
  timeInterval,
  convertIOSFormat,
  formatBirthDate,
  formatCreated,
  persianDateFormat,
  tourStatus,
};
