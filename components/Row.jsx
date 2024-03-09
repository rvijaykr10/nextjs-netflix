import Image from "next/image";
export default function Row({ data }) {
  const { BASE_IMAGE_URL } = process.env;
  return (
    <>
      <Image
        src={`${BASE_IMAGE_URL}/w220_and_h330_face${data.poster_path}`}
        width={220}
        height={330}
      />
    </>
  );
}
