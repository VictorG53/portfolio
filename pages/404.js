import GlowingButton from "../components/glowingButton";

const Custom404 = () => {
    return (
        <div className="h-screen w-screen bg-gray-900 flex flex-col justify-center items-center">
            <h1 className="text-white font-medium text-6xl">404</h1>
            <p className="text-white font-extralight text-sm">Page not found</p>
            <GlowingButton link="/" classes="mt-10">Home</GlowingButton>
        </div>
    )
}

export default Custom404;