import { MdExpandMore, MdOpenInNew, MdOutlineAccountBalance, MdOutlineAutoAwesome, MdSentimentVerySatisfied } from "react-icons/md"
import { NewsArticle } from "@/types/articlesTypings";
import ProtectedContent from "@/components/auth/ProtectedContent";

interface ArticleProp {
    article: NewsArticle;
}

function ArticleCard({ article }: ArticleProp) {
    const expandId = `expand-${article._id}`
    return (
        <article key={article._id} className="group rounded-3xl bg-surface border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
            <input className="peer hidden" id={article._id} type="checkbox" />
            <label className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-5 cursor-pointer select-none" htmlFor={article._id}>
                <div className="shrink-0 pt-1">
                    <div className="w-10 h-10 rounded-full bg-background-dark flex items-center justify-center text-text-secondary border border-border-dark shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">
                            <MdOutlineAccountBalance />
                        </span>
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-bold text-primary tracking-wide">کوین دسک</span>
                        <span className="text-xs text-text-secondary">•</span>
                        <span className="text-xs text-text-secondary">2 دقیقه پیش</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-bullish/10 text-bullish uppercase tracking-wide">Bullish</span>
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug mb-1 group-hover:text-primary transition-colors">
                        {article.contents.fa.title}
                    </h3>
                    <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed opacity-90">
                        {article.contents.fa.body}
                    </p>
                </div>
                <div className="shrink-0 pt-1 text-text-secondary group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined chevron-icon">
                        <MdExpandMore />
                    </span>
                </div>
            </label>
            <div className="expand-content bg-surface/50">
                <div className="overflow-hidden">
                    <div className="p-5 pt-0 border-t border-border/50 space-y-5">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-xs">
                            <div>
                                <span className="block text-text-secondary mb-1">Source URL</span>
                                <a className="text-primary hover:underline flex items-center gap-1" href={article.source_url}>
                                    {article.source_site}
                                    <span className="material-symbols-outlined text-[10px]">
                                        <MdOpenInNew />
                                    </span>
                                </a>
                            </div>
                            <div>
                                <span className="block text-text-secondary mb-1">Published (UTC)</span>
                                <span className="text-white">{article.article_published_date_at_source_site}</span>
                            </div>
                            <div>
                                <span className="block text-text-secondary mb-1">Published (Jalali)</span>
                                <span className="text-white">{article.article_published_date_at_source_site_jalali}</span>
                            </div>
                            <div>
                                <span className="block text-text-secondary mb-1">Sentiment Score</span>
                                <div className="flex items-center gap-1 text-bullish font-bold">
                                    <span className="material-symbols-outlined text-[14px]">
                                        <MdSentimentVerySatisfied />
                                    </span>
                                    8.5/10
                                </div>
                            </div>
                        </div>
                        <div className="bg-background/50 rounded-2xl p-4 border border-border/30">
                            <h4 className="text-sm font-bold text-white mb-2 font-fa text-right" dir="rtl">
                                تایید اولین ETF بیت‌کوین توسط SEC
                            </h4>
                            <p className="text-sm text-text-secondary leading-loose font-fa text-right" dir="rtl">
                                در اقدامی تاریخی، کمیسیون بورس و اوراق بهادار آمریکا چراغ
                                سبز را به اولین صندوق قابل معامله در بورس (ETF) اسپات
                                بیت‌کوین نشان داد. این تصمیم می‌تواند موج جدیدی از
                                سرمایه‌گذاری نهادی را به بازار کریپتو سرازیر کند و مشروعیت
                                بیت‌کوین را به عنوان یک کلاس دارایی تایید کند.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-background/50 rounded-2xl p-4 border border-border/30">
                                <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[16px] text-primary">
                                        <MdOutlineAutoAwesome />
                                    </span>
                                    خلاصه هوش مصنوعی
                                </h4>
                                <ProtectedContent>
                                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 marker:text-primary">
                                        <li>
                                            تصویب SEC نقطه عطفی برای تنظیم مقررات ارزهای دیجیتال است.
                                        </li>
                                        <li>
                                            صندوق بیت‌کوین iShares متعلق به شرکت BlackRock اولین صندوق مورد تایید است.
                                        </li>
                                        <li>
                                            انتظار می‌رود میلیاردها دلار سرمایه نهادی را آزاد کند.
                                        </li>
                                        <li>کوین‌بیس به عنوان متولی این امانت انتخاب شد.</li>
                                    </ul>
                                </ProtectedContent>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-background/50 rounded-2xl p-4 border border-border/30">
                                    <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">
                                        تأثیر بازار
                                    </h4>
                                    <ProtectedContent>
                                        <p className="text-sm text-white leading-relaxed">
                                            افزایش فوری قیمت بیت‌کوین به بالای ۴۶ هزار دلار. آلت‌کوین‌های با همبستگی بالا (ETH، SOL) نیز شاهد افزایش دو رقمی هستند. انتظار می‌رود نوسانات زیادی در ۲۴ ساعت آینده وجود داشته باشد.
                                        </p>
                                    </ProtectedContent>
                                </div>
                                <div className="bg-bullish/5 rounded-2xl p-4 border border-bullish/20">
                                    <h4 className="text-xs font-bold text-bullish uppercase tracking-wider mb-1">
                                        نکته کلیدی
                                    </h4>
                                    <ProtectedContent>
                                        <p className="text-sm text-white font-medium">
                                            دریچه‌های نهادی رسماً باز شده‌اند.
                                        </p>
                                    </ProtectedContent>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 pt-2">
                            {
                                article.tags.map((tag, i) => (
                                    <span key={i} className="text-[10px] font-medium px-3 py-1 rounded-full bg-surface text-text-secondary border border-border hover:border-primary/50 transition-colors cursor-pointer">#{tag}</span>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ArticleCard;
