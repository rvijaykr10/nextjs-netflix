import TVShows from "@/components/TVShows";

const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle errors
    console.error("Error during API call:", error);
    throw error; // Re-throw the error to propagate it
  }
};

const performMultipleAPICalls = async () => {
  try {
    const { BASE_URL, ACCESS_TOKEN } = process.env;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };
    const apiUrl1 = `${BASE_URL}/tv/airing_today?language=en-US&page=1`;
    const apiUrl2 = `${BASE_URL}/tv/on_the_air?language=en-US&page=1`;
    const apiUrl3 = `${BASE_URL}/tv/popular?language=en-US&page=1`;
    const apiUrl4 = `${BASE_URL}/tv/top_rated?language=en-US&page=1`;

    const apiResults = await Promise.all([
      fetchData(apiUrl1, options),
      fetchData(apiUrl2, options),
      fetchData(apiUrl3, options),
      fetchData(apiUrl4, options),
    ]);

    return [
      { ...apiResults[0], title: "Airing Today" },
      { ...apiResults[1], title: "On The Air" },
      { ...apiResults[2], title: "Popular" },
      { ...apiResults[3], title: "Top Rated" },
    ];
  } catch (error) {
    // Handle errors from any of the API calls
    console.error("Error during API calls:", error);
  }
};

export default async function page() {
  const data = await performMultipleAPICalls();
  return <TVShows data={data} />;
}
