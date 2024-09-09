import Image from "next/image";

export default function Banner({ bannerImgPath, randomBanner }) {
  return (
    <div className="relative bg-black h-96 mb-7">
      <Image
        src={bannerImgPath}
        alt="Banner Image"
        width={0}
        height={0}
        fill
        sizes="100vw"
        style={{
          width: "100%",
        }}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50">
        <div className="pl-2 pt-2">
          <div className="text-white font-medium font-sans text-3xl">
            {randomBanner.name ||
              randomBanner.original_title ||
              randomBanner.title ||
              randomBanner.original_name}
          </div>
          <div className="text-xs sm:text-sm font-sans text-white w-1/2">
            {randomBanner.overview}
          </div>
        </div>
      </div>
    </div>
  );
}
