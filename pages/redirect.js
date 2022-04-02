import GlowingButton from "../components/glowingButton";

const Redirect = () => {
    return (
        <div className="h-screen w-screen bg-gray-900 flex flex-col justify-center items-center">
            <h1 className="text-white font-medium text-5xl text-center">Password required</h1>
            <p className="text-white font-extralight text-sm text-center">Enter the password before tying to access the portfolio pages</p>
            <GlowingButton link="/" classes="mt-10">Home</GlowingButton>
        </div>
    )
}

export default Redirect;