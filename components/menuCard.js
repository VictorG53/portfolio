import Link from 'next/link'

const MenuCard = ({ titre, link, children }) => {
    return (
        <div className="flex flex-col justify-center items-center w-1/6 h-full border-2 px-6 py-3 rounded-lg border-gray-700">
            <h3 className="text-white text-2xl mb-3 text-center">{titre}</h3>
            <p className="text-md text-gray-500 text-center">{children}</p>
            <Link href={link}>
                <div className="mt-5 px-16 py-3 border-2 rounded-lg flex justify-center items-center text-white hover:text-gray-800 hover:bg-white transition ease-in-out hover:cursor-pointer">VOIR</div>
            </Link>
        </div>
    )
}

export default MenuCard;