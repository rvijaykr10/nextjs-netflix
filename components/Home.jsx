import Navbar from "@/components/Navbar";
import Rows from "@/components/Rows";
export default function Home({ data }) {
  return (
    <div>
      <Navbar />
      {data?.map((result, i) => (
        <Rows key={i} data={result} />
      ))}
    </div>
  );
}
