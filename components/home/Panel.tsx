"use client"

import { useState } from "react"
import { FaAngleRight } from "react-icons/fa"

function Panel() {
    const [topMovers, setTopMovers] = useState<"glaners" | "losers">('glaners');
    return (
        <aside className="w-64 flex-col border-r border-border bg-surface overflow-y-auto shrink-0 hidden lg:flex">
            <div className="p-6 flex flex-col gap-6">
                <div>
                    <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-4">
                        آمار بازار جهانی
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-lg bg-background border border-border flex flex-col">
                            <span className="text-xs text-text-secondary mb-1">ارزش بازار</span>
                            <span className="text-sm font-bold text-white tabular-nums">$1.42T</span>
                            <span className="text-[10px] font-medium text-bullish mt-1">+2.1%</span>
                        </div>
                        <div className="p-3 rounded-lg bg-background border border-border flex flex-col">
                            <span className="text-xs text-text-secondary mb-1">جلد ۲۴ ساعته</span>
                            <span className="text-sm font-bold text-white tabular-nums">$45.2B</span>
                            <span className="text-[10px] font-medium text-bearish mt-1">-5.4%</span>
                        </div>
                        <div className="p-3 rounded-lg bg-background border border-border flex flex-col col-span-2">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-xs text-text-secondary">تسلط بیت کوین</span>
                                <span className="text-xs text-text-secondary">52.1%</span>
                            </div>
                            <div className="w-full bg-border rounded-full h-1.5 overflow-hidden">
                                <div className="bg-primary h-1.5 rounded-full" style={{ width: "52.1%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-px bg-border w-full"></div>
                <div className="flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                            برترین جابجایی‌ها (24h)
                        </h3>
                        <div className="flex gap-1 bg-background-dark rounded p-0.5 border border-border">
                            <button className={`px-2 py-0.5 text-[10px] font-medium rounded cursor-pointer ${topMovers === 'glaners' ? "bg-background text-white shadow-sm" : "text-text-secondary hover:text-white"}`} onClick={() => setTopMovers("glaners")}>
                                سود
                            </button>
                            <button className={`px-2 py-0.5 text-[10px] font-medium rounded cursor-pointer ${topMovers === 'losers' ? "bg-background text-white shadow-sm" : "text-text-secondary hover:text-white"} `} onClick={() => setTopMovers("losers")}>
                                زیان
                            </button>
                        </div>
                    </div>
                    {
                        topMovers === "glaners" ? (
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-text-secondary w-4">1</span>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-white">Pepe</span>
                                            <span className="text-[10px] text-text-secondary">PEPE</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-bullish bg-bullish/10 px-1.5 py-0.5 rounded tabular-nums">+12.4%</span>
                                </div>
                                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-text-secondary w-4">2</span>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-white">Injective</span>
                                            <span className="text-[10px] text-text-secondary">INJ</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-bullish bg-bullish/10 px-1.5 py-0.5 rounded tabular-nums">+8.1%</span>
                                </div>
                                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-text-secondary w-4">3</span>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-white">Celestia</span>
                                            <span className="text-[10px] text-text-secondary">TIA</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-bullish bg-bullish/10 px-1.5 py-0.5 rounded tabular-nums">+6.5%</span>
                                </div>
                                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-text-secondary w-4">4</span>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-white">Optimism</span>
                                            <span className="text-[10px] text-text-secondary">OP</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-bullish bg-bullish/10 px-1.5 py-0.5 rounded tabular-nums">+4.2%</span>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-text-secondary w-4">1</span>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-white">Bitcoin</span>
                                            <span className="text-[10px] text-text-secondary">BTC</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-bearish bg-bearish/10 px-1.5 py-0.5 rounded tabular-nums">-2.4%</span>
                                </div>
                                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-text-secondary w-4">2</span>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-white">Ethereum</span>
                                            <span className="text-[10px] text-text-secondary">ETH</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-bearish bg-bearish/10 px-1.5 py-0.5 rounded tabular-nums">-10.1%</span>
                                </div>
                                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-text-secondary w-4">3</span>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-white">Tether USDt</span>
                                            <span className="text-[10px] text-text-secondary">USDT</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-bearish bg-bearish/10 px-1.5 py-0.5 rounded tabular-nums">-1.5%</span>
                                </div>
                                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-text-secondary w-4">4</span>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-white">Solana</span>
                                            <span className="text-[10px] text-text-secondary">SOL</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-bearish bg-bearish/10 px-1.5 py-0.5 rounded tabular-nums">-2.2%</span>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="mt-auto pt-4">
                    <div className="rounded-lg bg-linear-to-br from-primary/20 to-surface-dark border border-primary/20 p-4 relative overflow-hidden group cursor-pointer">
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                        <span className="relative z-10 text-[10px] font-bold text-primary uppercase tracking-wider mb-2 block">حمایت‌شده</span>
                        <h4 className="relative z-10 text-sm font-bold text-white mb-1">
                            مجموعه نرم‌افزاری تحلیل‌های آماری
                        </h4>
                        <p className="relative z-10 text-xs text-text-secondary mb-3">
                            هشدارهای درون زنجیره‌ای و ردیابی نهنگ را به صورت آنی دریافت کنید.
                        </p>
                        <button className="relative z-10 text-xs font-semibold text-white bg-primary hover:bg-primary/90 px-3 py-1.5 rounded transition-colors w-full">
                            همین حالا ارتقا دهید
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export function MobilePanel() {
    const [openPanel, setOpenPanel] = useState<boolean>(false);
    const [topMovers, setTopMovers] = useState<"glaners" | "losers">('glaners');
    return (
        <>
            {/* Panel open and close button */}
            <button
                onClick={() => setOpenPanel(prev => !prev)}
                className={`lg:hidden fixed z-70 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background border border-border rounded-r-full transition-all duration-250 ease-out ${openPanel ? "left-64" : "left-0"}`}
            >
                <FaAngleRight className={`transition-transform duration-300 ${openPanel ? "rotate-180" : ""}`} />
            </button>

            {/* Panel */}
            <aside className={`fixed top-0 left-0 z-70 h-full w-64 bg-surface border-r border-border transform transition-transform duration-300 ease-out ${openPanel ? "translate-x-0" : "-translate-x-full"} lg:hidden`} >
                <div className="p-6 flex flex-col gap-6">
                <div>
                    <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-4">
                        آمار بازار جهانی
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-lg bg-background border border-border flex flex-col">
                            <span className="text-xs text-text-secondary mb-1">ارزش بازار</span>
                            <span className="text-sm font-bold text-white tabular-nums">$1.42T</span>
                            <span className="text-[10px] font-medium text-bullish mt-1">+2.1%</span>
                        </div>
                        <div className="p-3 rounded-lg bg-background border border-border flex flex-col">
                            <span className="text-xs text-text-secondary mb-1">جلد ۲۴ ساعته</span>
                            <span className="text-sm font-bold text-white tabular-nums">$45.2B</span>
                            <span className="text-[10px] font-medium text-bearish mt-1">-5.4%</span>
                        </div>
                        <div className="p-3 rounded-lg bg-background border border-border flex flex-col col-span-2">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-xs text-text-secondary">تسلط بیت کوین</span>
                                <span className="text-xs text-text-secondary">52.1%</span>
                            </div>
                            <div className="w-full bg-border rounded-full h-1.5 overflow-hidden">
                                <div className="bg-primary h-1.5 rounded-full" style={{ width: "52.1%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-px bg-border w-full"></div>
                <div className="flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                            برترین جابجایی‌ها (24h)
                        </h3>
                        <div className="flex gap-1 bg-background-dark rounded p-0.5 border border-border">
                            <button className={`px-2 py-0.5 text-[10px] font-medium rounded cursor-pointer ${topMovers === 'glaners' ? "bg-background text-white shadow-sm" : "text-text-secondary hover:text-white"}`} onClick={() => setTopMovers("glaners")}>
                                سود
                            </button>
                            <button className={`px-2 py-0.5 text-[10px] font-medium rounded cursor-pointer ${topMovers === 'losers' ? "bg-background text-white shadow-sm" : "text-text-secondary hover:text-white"} `} onClick={() => setTopMovers("losers")}>
                                زیان
                            </button>
                        </div>
                    </div>
                    {
                        topMovers === "glaners" ? (
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-text-secondary w-4">1</span>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-white">Pepe</span>
                                            <span className="text-[10px] text-text-secondary">PEPE</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-bullish bg-bullish/10 px-1.5 py-0.5 rounded tabular-nums">+12.4%</span>
                                </div>
                                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-text-secondary w-4">2</span>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-white">Injective</span>
                                            <span className="text-[10px] text-text-secondary">INJ</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-bullish bg-bullish/10 px-1.5 py-0.5 rounded tabular-nums">+8.1%</span>
                                </div>
                                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-text-secondary w-4">3</span>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-white">Celestia</span>
                                            <span className="text-[10px] text-text-secondary">TIA</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-bullish bg-bullish/10 px-1.5 py-0.5 rounded tabular-nums">+6.5%</span>
                                </div>
                                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-text-secondary w-4">4</span>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-white">Optimism</span>
                                            <span className="text-[10px] text-text-secondary">OP</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-bullish bg-bullish/10 px-1.5 py-0.5 rounded tabular-nums">+4.2%</span>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-text-secondary w-4">1</span>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-white">Bitcoin</span>
                                            <span className="text-[10px] text-text-secondary">BTC</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-bearish bg-bearish/10 px-1.5 py-0.5 rounded tabular-nums">-2.4%</span>
                                </div>
                                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-text-secondary w-4">2</span>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-white">Ethereum</span>
                                            <span className="text-[10px] text-text-secondary">ETH</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-bearish bg-bearish/10 px-1.5 py-0.5 rounded tabular-nums">-10.1%</span>
                                </div>
                                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-text-secondary w-4">3</span>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-white">Tether USDt</span>
                                            <span className="text-[10px] text-text-secondary">USDT</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-bearish bg-bearish/10 px-1.5 py-0.5 rounded tabular-nums">-1.5%</span>
                                </div>
                                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-text-secondary w-4">4</span>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-white">Solana</span>
                                            <span className="text-[10px] text-text-secondary">SOL</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-bearish bg-bearish/10 px-1.5 py-0.5 rounded tabular-nums">-2.2%</span>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="mt-auto pt-4">
                    <div className="rounded-lg bg-linear-to-br from-primary/20 to-surface-dark border border-primary/20 p-4 relative overflow-hidden group cursor-pointer">
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                        <span className="relative z-10 text-[10px] font-bold text-primary uppercase tracking-wider mb-2 block">حمایت‌شده</span>
                        <h4 className="relative z-10 text-sm font-bold text-white mb-1">
                            مجموعه نرم‌افزاری تحلیل‌های آماری
                        </h4>
                        <p className="relative z-10 text-xs text-text-secondary mb-3">
                            هشدارهای درون زنجیره‌ای و ردیابی نهنگ را به صورت آنی دریافت کنید.
                        </p>
                        <button className="relative z-10 text-xs font-semibold text-white bg-primary hover:bg-primary/90 px-3 py-1.5 rounded transition-colors w-full">
                            همین حالا ارتقا دهید
                        </button>
                    </div>
                </div>
            </div>
            </aside>

            {openPanel && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur z-60 lg:hidden"
                    onClick={() => setOpenPanel(false)}
                />
            )}

        </>
    )
}

export default Panel