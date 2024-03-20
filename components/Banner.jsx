import Image from "next/image";

export default function Banner({ bannerImgPath, randomBanner }) {
  return (
    <div className="relative bg-black h-96">
      <Image
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        src={bannerImgPath}
        alt="Banner Image"
        width={0}
        height={0}
        sizes="100vw"
        priority={true}
      />
      <div className="absolute inset-0 bg-black opacity-75">
        <div className="pl-2 pt-2">
          <div className="text-white font-medium font-sans text-3xl">
            {randomBanner.name ||
              randomBanner.original_title ||
              randomBanner.title ||
              randomBanner.original_name}
          </div>
          <div className="font-sans text-white w-1/2">
            {randomBanner.overview}
          </div>
        </div>
      </div>
    </div>
  );
}
