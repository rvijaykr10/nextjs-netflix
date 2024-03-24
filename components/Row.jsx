import Image from "next/image";
export default function Row({ data }) {
  const { BASE_IMAGE_URL } = process.env;
  // src={`${BASE_IMAGE_URL}/w220_and_h330_face${data.poster_path}`}
  // src={`${BASE_IMAGE_URL}/w355_and_h200_multi_faces${data.poster_path}`}
  return (
    <>
      <Image
        src={`${BASE_IMAGE_URL}/w220_and_h330_face${data.poster_path}`}
        width={220}
        height={330}
        alt={
          data.name || data.original_title || data.title || data.original_name
        }
        priority
      />
    </>
  );
}
