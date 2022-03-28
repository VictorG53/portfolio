import BackButton from "../../components/backButton";

const page5 = () => {
    return (
        <div className="w-screen h-screen bg-gray-900">
            <div className="w-full p-3 flex items-start">
                <BackButton link="/portfolio#summary" />
                <h1 className="text-3xl mx-auto text-white self-center text-center">Mettre à disposition <br /> des utilisateurs un service informatique</h1>
            </div>
        </div>
    )
}

export default page5;