import SlickCarousel from "@/components/SlickCarousel";
import Rows from "@/components/Rows";
export default function Home({ data }) {
  return (
    <div>
      {data?.map((result, i) => (
        <Rows key={i} data={result} />
      ))}
    </div>
  );
}
