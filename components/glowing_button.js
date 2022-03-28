import Link from 'next/link'

const GlowingButton = ({ content, link, classes }) => {
    return (
        <Link href={link}>
            <div className={"hover:cursor-pointer max-w-24 mb-4 px-6 py-2 border text-center text-white rounded hover:bg-white transition hover:text-gray-900 hover:shadow-[0_0_20px_1px_rgba(255,255,255,0.6)] " + classes}>{content}</div>
        </Link>
    )
}

export default GlowingButton;