import Row from "@/components/Row";
export default function Rows({ data }) {
  return (
    <div className="flex flex-col w-screen h-fit my-7">
      <div className="text-white font-sans font-medium text-sm mb-2">
        {data.title}
      </div>
      <div className="flex flex-nowrap scroll-m-0 w-screen h-fit overflow-x-auto overflow-hidden">
        {data.results.map((obj, i) => (
          <Row key={i} data={obj} />
        ))}
      </div>
    </div>
  );
}
