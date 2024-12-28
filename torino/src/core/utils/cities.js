let cities = [];

//get tours origin & destination in formated data
const getCities = (data) => {
  const origins = data?.map((tour) => tour?.origin);
  const destinations = data?.map((tour) => tour.destination);
  if (origins || destinations) cities = [...origins, ...destinations];

  const newCities = [
    ...new Map(cities.map((item) => [item.id, item])).values(),
  ];
  return newCities;
};

export { getCities };
