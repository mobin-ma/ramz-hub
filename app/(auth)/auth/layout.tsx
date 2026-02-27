import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Ramzhub - Auth",
    description: "Auth layout"
}

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <>{children}</>
}
