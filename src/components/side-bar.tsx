import clsx from "clsx"
import Image from "next/image";
import Text from "@/components/ui/text";

const Sidebar = () => {

    return (
        <aside className={clsx("bg-[#FFF] px-[39px] fixed left-0 top-0 flex h-screen transition-all duration-300 w-[300px] z-20 flex-col")}>
            <Image src={"/icons/header.svg"} alt="tes" width="260" height="100" className="max-h-[200px] w-full mb-20 mt-10" priority/>

            <div className="flex flex-col gap-8">
                <div className="flex flex-row items-center pl-3 justify-between">
                    <div className="flex flex-row gap-2 items-center">
                        <Image src={"/icons/key.svg"} width="30" height="30" alt="key"/>
                        <Text className="text-[#9197B3] font-semibold">
                            Dashboard
                        </Text>
                    </div>

                    <Image src={"/icons/arrow_right.svg"} width="20" height="20" alt="arrow"/>
                </div>
                <div className="flex flex-row items-center pl-3 justify-between">
                    <div className="flex flex-row gap-2 items-center">
                        <Image src={"/icons/key.svg"} width="30" height="30" alt="key"/>
                        <Text className="text-[#9197B3] font-semibold">
                            Dashboard
                        </Text>
                    </div>

                    <Image src={"/icons/arrow_right.svg"} width="20" height="20" alt="arrow"/>
                </div>
                <div className="flex flex-row items-center pl-3 justify-between">
                    <div className="flex flex-row gap-2 items-center">
                        <Image src={"/icons/key.svg"} width="30" height="30" alt="key"/>
                        <Text className="text-[#9197B3] font-semibold">
                            Dashboard
                        </Text>
                    </div>

                    <Image src={"/icons/arrow_right.svg"} width="20" height="20" alt="arrow"/>
                </div>
                <div className="flex flex-row items-center pl-3 justify-between">
                    <div className="flex flex-row gap-2 items-center">
                        <Image src={"/icons/key.svg"} width="30" height="30" alt="key"/>
                        <Text className="text-[#9197B3] font-semibold">
                            Dashboard
                        </Text>
                    </div>

                    <Image src={"/icons/arrow_right.svg"} width="20" height="20" alt="arrow"/>
                </div>
                <div className="flex flex-row items-center pl-3 justify-between">
                    <div className="flex flex-row gap-2 items-center">
                        <Image src={"/icons/key.svg"} width="30" height="30" alt="key"/>
                        <Text className="text-[#9197B3] font-semibold">
                            Dashboard
                        </Text>
                    </div>

                    <Image src={"/icons/arrow_right.svg"} width="20" height="20" alt="arrow"/>
                </div>
                <div className="flex flex-row items-center pl-3 justify-between">
                    <div className="flex flex-row gap-2 items-center">
                        <Image src={"/icons/key.svg"} width="30" height="30" alt="key"/>
                        <Text className="text-[#9197B3] font-semibold">
                            Dashboard
                        </Text>
                    </div>

                    <Image src={"/icons/arrow_right.svg"} width="20" height="20" alt="arrow"/>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;
