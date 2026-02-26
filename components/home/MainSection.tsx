import { MdArrowDownward, MdArrowUpward, MdTrendingUp, MdTune } from "react-icons/md"
import ArticlesContainer from "../articles/ArticlesContainer"

function MainSection() {
    return (
        <main className="flex-1 flex flex-col min-w-0 bg-background">
            <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border px-6 py-4 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold text-white tracking-tight">
                        هوش بازار
                    </h1>
                    <div className="flex items-center gap-2 text-text-secondary text-sm">
                        <span className="w-2 h-2 bg-bullish rounded-full animate-pulse"></span>
                        به‌روزرسانی‌های زنده
                    </div>
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-background text-xs font-bold whitespace-nowrap transition-transform active:scale-95">
                        همه اخبار
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:bg-border text-text-secondary hover:text-white text-xs font-medium whitespace-nowrap transition-colors">
                        <span className="material-symbols-outlined text-[16px]">
                            <MdTrendingUp />
                        </span>
                        در حال افزایش
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:border-bullish/50 hover:bg-bullish/10 text-text-secondary hover:text-bullish text-xs font-medium whitespace-nowrap transition-colors">
                        <span className="material-symbols-outlined text-[16px]">
                            <MdArrowUpward />
                        </span>
                        صعودی
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:border-bearish/50 hover:bg-bearish/10 text-text-secondary hover:text-bearish text-xs font-medium whitespace-nowrap transition-colors">
                        <span className="material-symbols-outlined text-[16px]">
                            <MdArrowDownward />
                        </span>
                        نزولی
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:bg-border-dark text-text-secondary hover:text-white text-xs font-medium whitespace-nowrap transition-colors ml-auto">
                        <span className="material-symbols-outlined text-[16px]">
                            <MdTune />
                        </span>
                        فیلترها
                    </button>
                </div>
            </div>
            <ArticlesContainer />
        </main>
    )
}

export default MainSection