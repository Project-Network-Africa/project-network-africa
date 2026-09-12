import api from "./api";

export interface CreateBlogPayload {
  title: string;
  description: string;
  content: string;
  images?: File[];
  videos?: File[];
}

export const createBlog = async (data: CreateBlogPayload) => {
  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("content", data.content);

  data.images?.forEach((image) => {
    formData.append("images", image);
  });

  data.videos?.forEach((video) => {
    formData.append("videos", video);
  });

  const response = await api.post("/api/blogs", formData);

  return response.data;
};

export const getBlogs = async () => {
  const response = await api.get("/api/blogs");

  return response.data;
};

export const getBlogById = async (id: string) => {
  const response = await api.get(`/api/blogs/${id}`);

  return response.data;
};

// export const updateBlog = async (id: string, data: CreateBlogPayload) => {
export const updateBlog = async (id: string, data: CreateBlogPayload) => {
  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("content", data.content);

  data.images?.forEach((image) => {
    formData.append("images", image);
  });

  data.videos?.forEach((video) => {
    formData.append("videos", video);
  });

  const response = await api.patch(`/api/blogs/${id}`, formData);

  return response.data;
};

export const deleteBlog = async (id: string) => {
  const response = await api.delete(`/api/blogs/${id}`);

  return response.data;
};
// src/services/publicBlogs.ts

export const getPublicBlogs = async () => {
  const response = await api.get("/api/publicblogs");
  return response.data;
};

export const getPublicBlogById = async (id: string) => {
  const response = await api.get(`/api/publicblogs/${id}`);
  return response.data;
};
