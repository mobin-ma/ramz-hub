import { PlatformMenu, TrendingAssets } from "@/types/generalTypings"
import { FiSettings } from "react-icons/fi";
import { MdMoreHoriz, MdOutlineAccountCircle, MdOutlineNewspaper, MdOutlinePieChartOutline, MdOutlineStarBorder, MdStackedBarChart } from "react-icons/md";

function Sidebar() {
    const platformMenu: PlatformMenu[] = [
        {
            name: "اخبار",
            active: true,
            link: "#",
            icon: <MdOutlineNewspaper />
        },
        {
            name: "پورتفولیو",
            active: false,
            link: "#",
            icon: <MdOutlinePieChartOutline />

        },
        {
            name: "فهرست‌پیگیری",
            active: false,
            link: "#",
            icon: <MdOutlineStarBorder />

        },
        {
            name: "تحلیل‌ها",
            active: false,
            link: "#",
            icon: <MdStackedBarChart />

        }
    ];

    const trendingAssets: TrendingAssets[] = [
        {
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAqG7mZYeR_x52fC0dijlCkhDZoixAYDuS7Zlq1Fo7C6eOiw7t_uiNgE0z57ds_ebjl-jvJ0cCSIB-Zc5dZHNeAAhi0su1y6gOG6lPZYmRHdCNRkPfHeeTFiVQyP9605Q7X1Vz_JbooJM4O3vDo9ypvCXk_ZANDtJ-AJdbEwL07jdhV48eC766DzP_g6OWajH8Dr8271B38bcZUp3wfeYQXkmQyig3P9OkgyE6VRWihXbfYeDcl9T49k28DQD48SqYf_QUNS0mbzzF",
            name: "Bitcoin",
            symbol: "BTC",
            price: "$43,210",
            asset: +2.4
        },
        {
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiv_v8Vs3vRIIwnWU8yIk8Y9PP9-GVQeLYKbLhS1VtGQ1hq16Qpz7x8GSCXkUFfHzMUTPDikHJ_NWtyVI06fQoajQt6Iw745WmBaP-Q6RzKnQTa07H2UA-Y3v_i9Q2ZJb4kH_sSIfS77Ee50W93RcYj6oEPDbvYVLq5ZhHb_MmDNDw6whQQEBvIHV-2rp4uV6GKK72_Td8LdK4vDO7dVKLm59hsN6mmf3K2ULH2w9AHIYSJh2AM6NSNsX6V2SxtUU7JfWePXs1bnu9",
            name: "Ethereum",
            symbol: "ETH",
            price: "$2,290",
            asset: -0.8
        },
        {
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6CPMZ0tB8o3J7BkFJhwrIpQW2sN2zU-vYEbe7KTW6GGxIxOImHg29bE-4zIFCjGNdthK1PKmMS4hHA6d305PAB7XGKTTTsLfUtNeEtHmbnfPWU68rNfJI6geSp9kfoa8N1czq-DH5LrbuyrkVeDFF3hQLxdgVLUQBrbDJ49kyj9hxLhgKERO8rnqy8yxh9O_0mzQPb9z5ikoyeKL0sRk0nuZgKy-SyaxzuG0gYPHAlLJhf5nnLM1G9J5K-_TeJkLz60jV9dXIOzIs",
            name: "Solana",
            symbol: "SOL",
            price: "$98.45",
            asset: +5.2
        },
    ];
    return (
        <aside className="w-64 flex-col border-l border-border bg-surface overflow-y-auto shrink-0 md:flex hidden">
            <div className="p-4 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                    {
                        platformMenu.map((item, i) => (
                            <a className={`flex items-center gap-3 px-3 py-2 rounded-lg ${item.active ? "bg-primary/10 text-primary group transition-colors" : "text-text-secondary hover:text-white hover:bg-background transition-colors"}`} href={item.link} key={i}>
                                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                <span className="text-sm font-medium">{item.name}</span>
                            </a>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between px-3">
                        <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                            دارایی‌های پرطرفدار
                        </p>
                        <span className="material-symbols-outlined text-text-secondary text-[16px] cursor-pointer hover:text-white">
                            <MdMoreHoriz />
                        </span>
                    </div>
                    <div className="flex flex-col gap-1">
                        {
                            trendingAssets.map((item, i) => (
                                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-background-dark cursor-pointer group transition-colors" key={i}>
                                    <div className="flex items-center gap-3">
                                        <img alt={item.name} className="w-6 h-6 rounded-full bg-black" data-alt="Solana logo" src={item.img} />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-white">{item.name}</span>
                                            <span className="text-xs text-text-secondary">{item.symbol}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-sm font-medium text-white">{item.price}</span>
                                        <span className={`text-xs font-medium ${item.asset > 0 ? "text-bullish" : item.asset < 0 ? "text-bearish" : "text-text-secondary"}`}>{item.asset + "%"}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-auto pt-4 border-t border-border flex flex-col gap-1">
                    <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:text-white hover:bg-background transition-colors" href="#">
                        <span className="material-symbols-outlined text-[20px]">
                            <FiSettings />
                        </span>
                        <span className="text-sm font-medium">تنظیمات</span>
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:text-white hover:bg-background transition-colors" href="#">
                        <span className="material-symbols-outlined text-[20px]">
                            <MdOutlineAccountCircle />
                        </span>
                        <span className="text-sm font-medium">پروفایل</span>
                    </a>
                </div>
            </div>
        </aside>
    )
}

export function MobileSidebar() {
    const platformMenu: PlatformMenu[] = [
        {
            name: "اخبار",
            active: true,
            link: "#",
            icon: <MdOutlineNewspaper />
        },
        {
            name: "پورتفولیو",
            active: false,
            link: "#",
            icon: <MdOutlinePieChartOutline />

        },
        {
            name: "فهرست‌پیگیری",
            active: false,
            link: "#",
            icon: <MdOutlineStarBorder />

        },
        {
            name: "تحلیل‌ها",
            active: false,
            link: "#",
            icon: <MdStackedBarChart />

        },
        {
            name: "تنظیمات",
            active: false,
            link: "#",
            icon: <FiSettings />

        },
        {
            name: "پروفایل",
            active: false,
            link: "#",
            icon: <MdOutlineAccountCircle />

        }
    ];

    return (
        <nav className="md:hidden w-11/12 fixed bottom-2 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-surface/80 border border-border/50 rounded-3xl shadow-lg">
            <div className="flex items-center justify-around px-4 py-3">
                {platformMenu.map((item, i) => (
                    <a
                        className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors text-sm ${
                            item.active
                                ? "text-primary"
                                : "text-text-secondary"
                        }`}
                        href={item.link}
                        key={i}
                    >
                        <span className="text-[24px]">{item.icon}</span>
                        <span className="text-[10px] font-medium">{item.name}</span>
                    </a>
                ))}
            </div>
        </nav>
    );
}

export default Sidebar