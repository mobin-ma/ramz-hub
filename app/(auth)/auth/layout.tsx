import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Ramzhub - Auth",
    description: "Auth layout"
}

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="fa" dir="rtl">
            <body className=''>
                {children}
            </body>
        </html>
    )
}
