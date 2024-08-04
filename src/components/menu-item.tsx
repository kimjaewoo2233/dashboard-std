"use client"
import clsx from "clsx";
import { IoCardOutline } from "react-icons/io5";
import Text from "@/components/ui/text";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface MenuItemProps {
    path: string;
    text: string;
}

const MenuItem = ({ path, text }: MenuItemProps) => {
    
    const pathname = usePathname();
    const selectedMenu = path === pathname;

    useEffect(() => {
        console.log(pathname);
    }, []);
    return (
        <div className={clsx("flex flex-row items-center pl-3 justify-between text-[18px] px-5 w-[290px] h-[60px] rounded-[8px]",{
            "bg-purple-0 text-white":selectedMenu
        })}>
            <div className="flex flex-row gap-2 items-center">
                <IoCardOutline className="w-5 h-10"/>
                <Text className={clsx("text-[#9197B3] font-semibold", {
                    "text-white": selectedMenu
                })}>
                    {text}
                </Text>
            </div>

            <Image src={"/icons/arrow_right.svg"} width="20" height="20" alt="arrow"/>
        </div>
    )
}

export default MenuItem;