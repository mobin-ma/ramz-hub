import { ArticlesResponse } from "@/types/articles";
import api from "./api";

export const getArticlesService = async (): Promise<ArticlesResponse> => {
  try {
    const response = await api.get("/articles");
    return response.data;
  } catch (error) {
    throw new Error("خطا در سرور اتفاق افتاده است");
  }
};
