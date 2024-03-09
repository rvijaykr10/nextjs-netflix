import Row from "@/components/Row";
export default function Rows({ data }) {
  return (
    <div className="flex flex-nowrap scroll-m-0 w-screen h-fit overflow-x-auto">
      {data.results.map((obj, i) => (
        <Row key={i} data={obj} />
      ))}
    </div>
  );
}
