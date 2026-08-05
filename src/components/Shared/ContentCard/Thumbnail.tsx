import Image from "next/image";

interface ThumbnailProps {
  image?: string;
  gradient?: string;
  illustration?: React.ReactNode;
}

export default function Thumbnail({
  image,
  gradient,
  illustration,
}: ThumbnailProps) {
  if (image) {
    return (
      <div className="relative h-[180px] w-full overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, 33vw"
        />
      </div>
    );
  }

  if (illustration) {
    return <div className="overflow-hidden rounded-2xl">{illustration}</div>;
  }

  return (
    <div
      className="h-[180px] w-full rounded-2xl"
      style={{ background: gradient }}
    />
  );
}
