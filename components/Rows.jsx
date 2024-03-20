import Row from "@/components/Row";
export default function Rows({ data }) {
  return (
    <div className="flex flex-col h-fit mb-7 w-auto">
      <div className="text-white font-sans font-medium text-sm mb-2">
        {data.title}
      </div>
      <div className="flex flex-nowrap scroll-m-0 h-fit overflow-x-auto w-auto">
        {data?.results?.map((obj, i) => (
          <Row key={i} data={obj} />
        ))}
      </div>
    </div>
  );
}
