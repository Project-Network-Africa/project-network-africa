import Image from "next/image";

interface BlogPostImageProps {
  src: string;
  alt: string;
}

export default function BlogPostImage({ src, alt }: BlogPostImageProps) {
  return (
    <section className="w-full bg-[#F8F8F8] px-5 py-6 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="relative h-[300px] w-full overflow-hidden rounded-2xl sm:h-[400px] lg:h-[450px]">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1280px"
          />
        </div>
      </div>
    </section>
  );
}
