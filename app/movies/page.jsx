import Movies from "@/components/Movies";

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
    const apiUrl1 = `${BASE_URL}/movie/now_playing?language=en-US&page=1`;
    const apiUrl2 = `${BASE_URL}/movie/popular?language=en-US&page=1`;
    const apiUrl3 = `${BASE_URL}/movie/top_rated?language=en-US&page=1`;
    const apiUrl4 = `${BASE_URL}/movie/upcoming?language=en-US&page=1`;

    const apiResults = await Promise.all([
      fetchData(apiUrl1, options),
      fetchData(apiUrl2, options),
      fetchData(apiUrl3, options),
      fetchData(apiUrl4, options),
    ]);

    return [
      { ...apiResults[0], title: "Now Playing" },
      { ...apiResults[1], title: "Popular" },
      { ...apiResults[2], title: "Top Rated" },
      { ...apiResults[3], title: "Upcoming" },
    ];
  } catch (error) {
    // Handle errors from any of the API calls
    console.error("Error during API calls:", error);
  }
};

export default async function page() {
  const data = await performMultipleAPICalls();
  return <Movies data={data} />;
}
