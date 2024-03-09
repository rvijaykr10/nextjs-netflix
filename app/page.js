import Home from "@/components/Home";

async function getData() {
  try {
    const { BASE_URL, ACCESS_TOKEN } = process.env;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };

    const res = await fetch(
      `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
      options
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function page() {
  const data = await getData();
  // console.log(data);
  return <Home data={data} />;
}
