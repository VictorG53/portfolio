import BackButton from "../../components/backButton";

const page2 = () => {
    return (
        <div className="w-screen h-screen bg-gray-900">
            <div className="w-full p-3 flex items-start">
                <BackButton link="/portfolio#summary" />
                <h1 className="text-3xl mx-auto text-white self-center text-center">Répondre aux incidents <br /> et aux demandes d’assistance <br /> et d’évolution</h1>
            </div>
        </div>
    )
}

export default page2;