import Navbar from "@/components/Navbar";
import Rows from "@/components/Rows";
export default function Home({ data }) {
  return (
    <div>
      <Navbar />
      {data?.map((result) => (
        <Rows data={result} />
      ))}
    </div>
  );
}
