import { BlogContentBlock } from "../../blog.types";

interface BlogArticleProps {
  content: BlogContentBlock[];
}

export default function BlogArticle({ content }: BlogArticleProps) {
  return (
    <article className="w-full bg-white px-5 py-8 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-[1280px] text-[#1F1F25]">
          {content.map((block, index) => {
            if (block.type === "paragraph") {
              return (
                <p
                  key={index}
                  className="mb-5 text-[13px] leading-6 text-[#1F1F25]"
                >
                  {block.text}
                </p>
              );
            }

            if (block.type === "heading") {
              return (
                <h2
                  key={index}
                  className="mb-4 mt-7 text-[18px] font-bold text-[#1F1F25]"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "quote") {
              return (
                <blockquote
                  key={index}
                  className="my-6 border-l-2 border-[#00B6CE] px-4 py-2 text-[15px] font-semibold text-[#1F1F25]"
                >
                  {block.text}
                </blockquote>
              );
            }

            if (block.type === "checklist") {
              return (
                <div key={index} className="my-8">
                  <h3 className="mb-3 text-[13px] font-bold text-[#1F1F25]">
                    {block.title}
                  </h3>

                  <ul className="space-y-2">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[12px] text-[#5D5D61]"
                      >
                        <span className="font-bold text-[#00B6CE]">✓</span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </article>
  );
}
