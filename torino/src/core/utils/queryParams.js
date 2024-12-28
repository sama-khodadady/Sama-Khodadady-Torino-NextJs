//set & delete query string in URL
const setQuery = (search, searchParams) => {
  const params = new URLSearchParams(searchParams);

  search.originId
    ? params.set("originId", search.originId)
    : params.delete("originId");
  search.destinationId
    ? params.set("destinationId", search.destinationId)
    : params.delete("destinationId");
  search.date?.length ? params.set("date", search.date) : params.delete("date");

  return params;
};
export { setQuery };
