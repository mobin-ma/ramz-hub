import { createAsyncThunk } from "@reduxjs/toolkit";
import { getArticlesService } from "@/services/articles.service";
import { ArticlesResponse } from "@/types/articlesTypings";

export const fetchArticles = createAsyncThunk<
  ArticlesResponse,
  void,
  { rejectValue: string }
>("articles/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const response = await getArticlesService();
    return response;
  } catch (error) {
    return rejectWithValue("خطا در دریافت اخبار ");
  }
});
