import Image from "next/image";
import LogoImg from "@/public/logo.png";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <div className="flex justify-between p-5 py-5 border-b-4 border-yellow-300">
                <Link href={"/"} className="flex items-center gap-4">
                    <Image
                        src={LogoImg}
                        width={50}
                        height={50}
                        alt="Logo"></Image>
                    <h1 className="italic font-serif text-xl sm:text-4xl text-pink-700 font-black">Flashloan</h1>
                </Link>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Connect Wallet
                    </button>
                </div>
            </div>
        </>
    );
}