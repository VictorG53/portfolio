import BackButton from "../../components/backButton";

const page4 = () => {
    return (
        <div className="w-screen h-screen bg-gray-900">
            <div className="w-full p-3 flex items-start">
                <BackButton link="/portfolio#summary" />
                <h1 className="text-3xl mx-auto text-white self-center text-center">Travailler en mode projet</h1>
            </div>
        </div>
    )
}

export default page4;