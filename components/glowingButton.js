import Link from 'next/link'

const GlowingButton = ({ children, link, classes }) => {
    return (
        <Link href={link} passHref >
            <div className={"hover:cursor-pointer max-w-24 mb-4 px-3 lg:px-6 py-2 border items-center text-center justify-center text-white rounded hover:bg-white transition flex hover:text-gray-900 hover:shadow-[0_0_20px_1px_rgba(255,255,255,0.6)] " + classes}>{children}</div>
        </Link>
    )
}

export default GlowingButton;