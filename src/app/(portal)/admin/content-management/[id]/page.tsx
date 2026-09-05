import { contentItems } from "@/src/components/portal/admin/(content-management)/content-data";
import { ContentEditorMode } from "@/src/components/portal/admin/(content-management)/content.types";
import ContentEditor from "@/src/components/portal/admin/(content-management)/ContentEditor/ContentEditor";
import { notFound } from "next/navigation";

// import ContentEditor from "@/src/components/portal/admin/ContentManagement/ContentEditor/ContentEditor";

// import {
//   contentItems,
// } from "@/src/components/portal/admin/ContentManagement/content.data";

// import {
//   ContentEditorMode,
// } from "@/src/components/portal/admin/ContentManagement/content.types";

interface ContentDetailsPageProps {
  params: Promise<{
    id: string;
  }>;

  searchParams: Promise<{
    mode?: string;
  }>;
}

export default async function ContentDetailsPage({
  params,
  searchParams,
}: ContentDetailsPageProps) {
  const { id } = await params;

  const { mode: requestedMode } = await searchParams;

  const content = contentItems.find((item) => item.id === Number(id));

  if (!content) {
    notFound();
  }

  const mode: ContentEditorMode =
    requestedMode === "view"
      ? "view"
      : requestedMode === "review"
        ? "review"
        : "edit";

  return <ContentEditor mode={mode} content={content} />;
}
