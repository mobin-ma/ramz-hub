import { createSlice } from "@reduxjs/toolkit";
import { fetchArticles } from "./articlesThunk";
import { NewsArticle } from "@/types/articles";

interface ArticlesState {
  articles: NewsArticle[];
  loading: boolean;
  error: string | null;
}

const initialState: ArticlesState = {
  articles: [],
  loading: false,
  error: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload.items;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "خطا در دریافت اخبار اتفاق افتاده است";
      });
  },
});

export default articlesSlice.reducer;
