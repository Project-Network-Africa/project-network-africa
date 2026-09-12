"use client";
import { updateBlog } from "@/src/services/blogs";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  ContentEditorMode,
  ContentItem,
  ContentType,
  ContentStatus,
} from "../content.types";

import ContentEditorHeader from "./ContentEditorHeader";
import ContentEditorSteps from "./ContentEditorSteps";
import ContentDetails from "./ContentDetails";
import ContentBodyEditor from "./ContentBodyEditor";
import PublishingPanel from "./PublishingPanel";
import FeaturedImage from "./FeaturedImage";
import SeoSharing from "./SeoSharing";
import VersionHistory from "./VersionHistory";
import { toast } from "sonner";

interface ContentEditorProps {
  mode: ContentEditorMode;
  content?: ContentItem;
}

export default function ContentEditor({ mode, content }: ContentEditorProps) {
  const router = useRouter();

  //  READ ONLY

  const readOnly = mode === "view" || mode === "review";

  //  CONTENT DETAILS

  const [title, setTitle] = useState(content?.title ?? "");

  const [slug, setSlug] = useState(content?.slug ?? "");

  const [contentType, setContentType] = useState<ContentType | "">(
    content?.type ?? "",
  );

  const [category, setCategory] = useState(content?.category ?? "");

  const [author] = useState(content?.author ?? "Current Admin");

  const [excerpt, setExcerpt] = useState(content?.excerpt ?? "");

  const [body, setBody] = useState(content?.body ?? "");

  //  PUBLISHING

  const [status, setStatus] = useState<ContentStatus>(
    content?.status ?? "Draft",
  );

  const [visibility, setVisibility] = useState(content?.visibility ?? "Public");

  const [publishDate, setPublishDate] = useState(
    content?.publishDate ?? "Immediately",
  );

  //  FEATURED IMAGE

  const [altText, setAltText] = useState(content?.altText ?? "");

  //  SEO

  const [searchTitle, setSearchTitle] = useState(content?.searchTitle ?? title);

  const [metaDescription, setMetaDescription] = useState(
    content?.metaDescription ?? excerpt,
  );

  //  CONTENT TYPE CHANGE

  const handleContentTypeChange = (value: ContentType) => {
    setContentType(value);

    // Reset category because the old
    // category may not belong to the
    // newly selected content type.
    setCategory("");
  };

  //  SAVE

  // const handleSave = async () => {
  //   if (!content?.id) {
  //     console.error("Blog ID is missing.");
  //     return;
  //   }

  //   try {
  //     const response = await updateBlog(content.id, {
  //       title,
  //       description: excerpt,
  //       content: body,
  //     });

  //     console.log("BLOG UPDATED:", response);

  //     alert("Blog updated successfully.");

  //     router.push("/admin/content-management");
  //   } catch (error) {
  //     console.error("FAILED TO UPDATE BLOG:", error);
  //     alert("Failed to update blog. Please try again.");
  //   }
  // };

  const handleSave = async () => {
    if (!content?.id) {
      console.error("Blog ID is missing.");
      return;
    }

    try {
      const response = await updateBlog(content.id, {
        title,
        description: excerpt,
        content: body,
      });

      console.log("BLOG UPDATED:", response);

      alert("Blog updated successfully.");

      router.push("/admin/content-management");
    } catch (error) {
      console.error("FAILED TO UPDATE BLOG:", error);
      alert("Failed to update blog. Please try again.");
    }
  };

  //  PUBLISH

  // const handlePublish = () => {
  //   console.log("Publishing content:", {
  //     title,
  //     slug,
  //     contentType,
  //     category,
  //     author,
  //     excerpt,
  //     body,
  //     status,
  //     visibility,
  //     publishDate,
  //     altText,
  //     searchTitle,
  //     metaDescription,
  //   });
  // };
  const handlePublish = async () => {
    if (!content?.id) {
      console.error("Blog ID is missing.");
      return;
    }

    try {
      const response = await updateBlog(content.id, {
        title,
        description: excerpt,
        content: body,
      });

      console.log("BLOG UPDATED:", response);

      toast.success("Blog updated successfully.");

      router.push("/admin/content-management");
    } catch (error) {
      console.error("FAILED TO UPDATE BLOG:", error);
      alert("Failed to update blog. Please try again.");
    }
  };

  //  PREVIEW / EDIT

  const handlePreview = () => {
    if (mode === "view" && content) {
      router.push(`/admin/content-management/${content.id}?mode=edit`);

      return;
    }

    console.log("Preview content");
  };

  //  RENDER

  return (
    <main className="min-h-screen w-full bg-[#F8F8F8] font-body">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* HEADER */}

        <ContentEditorHeader
          mode={mode}
          status={status}
          onSave={handleSave}
          onPublish={handlePublish}
          onPreview={handlePreview}
        />

        {/* STEPS */}

        <ContentEditorSteps activeStep={1} />

        {/* MAIN CONTENT */}

        <div className="mt-3 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,2fr)_352px]">
          {/* LEFT COLUMN */}

          <div className="space-y-4">
            <ContentDetails
              title={title}
              slug={slug}
              contentType={contentType}
              category={category}
              author={author}
              excerpt={excerpt}
              readOnly={readOnly}
              onTitleChange={setTitle}
              onSlugChange={setSlug}
              onContentTypeChange={handleContentTypeChange}
              onCategoryChange={setCategory}
              onExcerptChange={setExcerpt}
            />

            <ContentBodyEditor
              body={body}
              readOnly={readOnly}
              onChange={setBody}
            />
          </div>

          {/* RIGHT COLUMN */}

          <div className="space-y-4">
            {/* PUBLISHING */}

            <PublishingPanel
              status={status}
              visibility={visibility}
              publishDate={publishDate}
              readOnly={readOnly}
              onStatusChange={setStatus}
              onVisibilityChange={setVisibility}
              onPublishDateChange={setPublishDate}
            />

            {/* FEATURED IMAGE */}

            <FeaturedImage
              image={content?.featuredImage}
              imageName={content?.featuredImageName}
              imageSize={content?.featuredImageSize}
              altText={altText}
              readOnly={readOnly}
              onAltTextChange={setAltText}
            />

            {/* SEO */}

            <SeoSharing
              searchTitle={searchTitle}
              metaDescription={metaDescription}
              previewUrl={content?.previewUrl}
              readOnly={readOnly}
              onSearchTitleChange={setSearchTitle}
              onMetaDescriptionChange={setMetaDescription}
            />

            {/* VERSION HISTORY */}

            <VersionHistory versions={content?.versions} />
          </div>
        </div>
      </div>
    </main>
  );
}
