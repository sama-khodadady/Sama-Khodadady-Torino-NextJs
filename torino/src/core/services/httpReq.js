import axios from "axios";

//get all tours data in server side component
const getTours = (query) => {
  const startDate = query?.date?.split(",")[0] || "";
  const endDate = query?.date?.split(",")[1] || "";
  return axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}tour?destinationId=${
      query?.destinationId || ""
    }&originId=${
      query?.originId || ""
    }&startDate=${startDate}&endDate=${endDate}`
  );
};

//get each tour data in server side component
const getTour = (tourId) =>
  axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}tour/${tourId}`);

export { getTours, getTour };
