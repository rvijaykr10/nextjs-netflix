// import Navbar from "@/components/Navbar";
import Rows from "@/components/Rows";
export default function Movies({ data }) {
  return (
    <div>
      {data?.map((result, i) => (
        <Rows key={i} data={result} />
      ))}
    </div>
  );
}
