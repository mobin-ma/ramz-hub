"use client"
import { useDispatch, useSelector } from 'react-redux'
import ArticleCard from './ArticleCard'
import { AppDispatch, RootState } from '@/store'
import { useEffect } from 'react';
import { fetchArticles } from '@/store/articles/articlesThunk';

function ArticlesContainer() {
    const dispatch = useDispatch<AppDispatch>();
    const { articles, loading, error } = useSelector((state: RootState) => state.articles);
    console.log(articles);

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    if (loading) {
        return <p className="text-center text-gray-500">در حال بارگذاری اخبار...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {
                articles.map((article) => {
                    return <ArticleCard article={article} />
                })
            }
        </div>
    )
}

export default ArticlesContainer;