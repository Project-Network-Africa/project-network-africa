import { BlogAuthor as BlogAuthorType } from "../../blog.types";

interface BlogAuthorProps {
  author: BlogAuthorType;
}

export default function BlogAuthor({ author }: BlogAuthorProps) {
  return (
    <section className="w-full bg-[#F8F8F8] px-5 py-8 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
            style={{
              backgroundColor: author.avatarBg,
            }}
          >
            {author.initials}
          </div>

          <div>
            <p className="text-xs font-semibold text-[#1F1F25]">
              Written by {author.name}
            </p>

            <p className="mt-1 text-[11px] text-[#5D5D61]">{author.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
