import Image from "next/image"
function MediumCard({img,title}) {
    return (
        <div className="cursor-pointer m-2 space-y-3 hover:scale-105 transition transform duration-300 ease-out">
            <div className="relative h-80  w-80 lg:h-80 lg:w-80">
                <Image src={img} layout="fill" className="rounded-lg" />
            </div>
            <div>
                <h3 className="text-2xl font-medium">{title}</h3>
            </div>
        </div>
    )
}

export default MediumCard
