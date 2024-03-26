import { getApiResponse } from "@lib/requests";

export const fetchTrending = async () => {
  const data = await getApiResponse("/trending/all/week");

  const trending = data.results;

  return trending;
};
