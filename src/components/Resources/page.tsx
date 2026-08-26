import LearningResources from "./LearningResources";
import Download from "./Download";
import Events from "./Events";
import FAQ from "../Home/Faq";
import ContentSection from "../Shared/ContentCard";
import { blogPosts } from "./Blog/blog.data";
import { resourcesFaqData } from "@/src/data/faq/faq";
export default function ProgramsPage() {
  return (
    <>
      <main className="bg-[#F8F8F8]">
        <ContentSection
          label="BLOG"
          title="Latest articles and updates"
          items={blogPosts}
          columns={3}
        />
        <LearningResources />
        <Download />
        <Events />
        <FAQ label="FAQ" title="Common questions" items={resourcesFaqData} />
      </main>
    </>
  );
}
