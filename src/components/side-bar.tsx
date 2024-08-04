import clsx from "clsx"
import Image from "next/image";
import Text from "@/components/ui/text";
import { IoCardOutline } from "react-icons/io5";
import MenuItem from "./menu-item";

const Sidebar = () => {

    return (
        <aside className={clsx("bg-[#FFF] px-[39px] fixed left-0 top-0 flex h-screen transition-all duration-300 w-[340px] z-20 flex-col")}>
            <Image src={"/icons/header.svg"} alt="tes" width="260" height="100" className="max-h-[200px] w-full mb-20 mt-10" priority/>

            <div className="flex flex-col gap-8">
                <MenuItem path="/payments" text="결제 정보"/>
            </div>
        </aside>
    )
}

export default Sidebar;
