import Link from 'next/link'

const GlowingButton = ({ content, link }) => {
    return (
        <Link href={link}>
            <div className="hover:cursor-pointer mt-12 px-6 py-2 border text-white rounded hover:bg-white transition hover:text-gray-900 hover:shadow-[0_0_20px_1px_rgba(255,255,255,0.6)]">{content}</div>
        </Link>
    )
}

export default GlowingButton;