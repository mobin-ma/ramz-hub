import { ArticlesResponse } from "@/types/articlesTypings";
import axiosInstance from "@/lib/axios";

export const getArticlesService = async (): Promise<ArticlesResponse> => {
  try {
    const response = await axiosInstance.get("/articles");
    return response.data;
  } catch (error) {
    throw new Error("خطا در سرور اتفاق افتاده است");
  }
};
