import { ReactNode } from "react";

// Menu Types
export interface PlatformMenu {
    name: string;
    active: boolean;
    link: string
    icon: ReactNode
}

export interface TrendingAssets {
    img: string;
    name: string;
    symbol: string;
    price: string;
    asset: number;
}