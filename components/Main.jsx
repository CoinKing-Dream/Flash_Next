import Image from "next/image"
import LogoPic from "@/public/logo.png"

export default function Main() {

    return (
        <>
            <div className="p-5 flex justify-center">
                <div className="">

                    <Image
                        src={LogoPic}
                        width={150}
                        height={150}

                    />
                </div>
            </div>
        </>
    )
}