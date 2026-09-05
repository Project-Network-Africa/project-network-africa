import {
  ContentItem,
  ContentEditorMode,
  ContentType,
  ContentStatus,
} from "../content.types";

export interface ContentEditorProps {
  mode: ContentEditorMode;
  content?: ContentItem;
}

export interface ContentDetailsProps {
  title: string;
  slug: string;
  contentType: ContentType | "";
  category: string;
  author: string;
  excerpt: string;

  readOnly?: boolean;

  onTitleChange: (value: string) => void;
  onSlugChange: (value: string) => void;
  onContentTypeChange: (value: ContentType) => void;
  onCategoryChange: (value: string) => void;
  onExcerptChange: (value: string) => void;
}

export interface ContentEditorHeaderProps {
  mode: ContentEditorMode;
  status?: string;
  onSave?: () => void;
  onPublish?: () => void;
  onPreview?: () => void;
}

export interface ContentEditorStepsProps {
  activeStep?: number;
}

export interface PublishingPanelProps {
  status: ContentStatus;

  visibility: string;

  publishDate: string;

  readOnly?: boolean;

  onStatusChange?: (value: ContentStatus) => void;

  onVisibilityChange?: (value: string) => void;

  onPublishDateChange?: (value: string) => void;
}

export interface FeaturedImageProps {
  image?: string;
  imageName?: string;
  imageSize?: string;
  altText?: string;

  readOnly?: boolean;

  onAltTextChange?: (value: string) => void;
}

export interface SeoSharingProps {
  searchTitle: string;
  metaDescription: string;
  previewUrl?: string;

  readOnly?: boolean;

  onSearchTitleChange?: (value: string) => void;
  onMetaDescriptionChange?: (value: string) => void;
}

export interface VersionHistoryProps {
  versions?: ContentItem["versions"];
}
