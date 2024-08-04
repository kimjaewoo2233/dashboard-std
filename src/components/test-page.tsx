import MainLogo from "@/components/main-logo";
import { shimmer } from "@/components/ui/animation";
import { ArrowRightIcon, UserPlusIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";


export default function Page() {

    return (
        <main className="flex flex-col min-h-screen p-4">
            <div className={clsx(shimmer, 'relative overflow-hidden')}>
                <div className="flex items-center h-20 p-2 bg-blue-500 rounded-lg">
                    <MainLogo/>
                </div>
            </div>

            <div className="flex flex-col gap-4 mt-4 grow md:flex-row">
                <div className="flex flex-col justify-center gap-6 px-6 py-10 rounded-lg bg-gray-50 md:w-3/5 md:px-20">
                    <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
                        <strong>
                            관리자 페이지에 오신걸 환영합니다.
                        </strong>
                        <br/>
                        <span>
                            성능을 분석하는 대시보드입니다.
                        </span>
                    </p>

                    <div className="flex gap-2">
                        <Link 
                            href="/login"
                            className="flex items-center  gap-2 px-6 py-3 text-sm
                            font-medium text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-400 md:text-base"
                        >
                            로그인 <ArrowRightIcon className="w-5 md:w-2 lg:w-6"/>
                        </Link>
                        
                        <Link
                            href="/signup"
                            className="flex items-center self-start gap-2 px-6 py-3 text-sm font-medium text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-400 md:text-base"
                        >
                            회원가입 <UserPlusIcon className="w-5 md:w-2 lg:w-6" />
                        </Link>
                    </div>
                </div>

                <div className="flex items-center justify-center p-6 md:w-4/5 md:px-70 md:py-12">
                    <Image
                        src="/hero-desktop.png"
                        width={1000}
                        height={760}
                        className="hidden md:block"
                        alt="Screenshots of the dashboard project showing desktop version"
                    />
                    <Image
                        src="/hero-mobile.png"
                        width={560}
                        height={620}
                        className="block md:hidden"
                        alt="Screenshot of the dashboard project showing mobile version"
                    />
                </div>
            </div>
        </main>
    )
}