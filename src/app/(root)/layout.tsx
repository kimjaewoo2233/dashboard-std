import Sidebar from "@/components/side-bar";
import { ReactNode } from "react"

interface AuthLayout {
    children: React.ReactNode;
}

export default async function AuthLayout({  children}: AuthLayout) {
    return (
        <div className="flex flex-row relative w-full h-full">
            <Sidebar/>
            {children}
        </div>
    )
}