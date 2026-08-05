import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import LearningResources from "./LearningResources";
import Download from "./Download";
import Events from "./Events";
import FAQ from "../Home/Faq";
import { resourcesFaq } from "./FAQ/resources-faq.data";
import ContentSection from "../Shared/ContentCard";
import { blogPosts } from "./Blog/blog.data";
export default function ProgramsPage() {
  return (
    <>
      <Navbar />

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
        <FAQ label="FAQ" title="Common questions" items={resourcesFaq} />
      </main>

      <Footer />
    </>
  );
}
