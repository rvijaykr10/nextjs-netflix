import Home from "@/components/Home";

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
    const apiUrl1 = `${BASE_URL}/trending/all/day?language=en-US`;
    const apiUrl2 = `${BASE_URL}/trending/movie/day?language=en-US`;
    const apiUrl3 = `${BASE_URL}/trending/tv/day?language=en-US`;

    const apiResults = await Promise.all([
      fetchData(apiUrl1, options),
      fetchData(apiUrl2, options),
      fetchData(apiUrl3, options),
    ]);

    return [apiResults[0], apiResults[1], apiResults[2]];
  } catch (error) {
    // Handle errors from any of the API calls
    console.error("Error during API calls:", error);
  }
};

export default async function page() {
  const data = await performMultipleAPICalls();
  // console.log(data);
  return <Home data={data} />;
}
