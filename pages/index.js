import Head from 'next/head'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useLoginContext } from '../components/useContext';
const Index = () => {
    const router = useRouter();

    const [password, setPassword] = useState("");
    const { setValue } = useLoginContext();

    const checkAndRedirect = (e) => {
        e.preventDefault();
        if (password) {
            if (password != process.env.NEXT_PUBLIC_PASSWORD) {
                alert("Wrong Password");
            }
            else {
                setValue(true);
                router.push('/portfolio', null, { shallow: true });
            }
        }
    }

    return (
        <>
            <Head>
                <title>Victor G. - Personnal Website</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-screen h-screen bg-gradient-to-b from-gray-800 to-gray-900">
                <div className="flex flex-col justify-center items-center h-5/6 w-full">
                    <h1 className="text-white text-center text-3xl font-bold">Victor Girault</h1>
                    <h2 className="text-xl text-center text-white tracking-wider">Student in computer development</h2>
                    <form className="mt-10 flex flex-col" onSubmit={checkAndRedirect}>
                        <label className="text-gray-300 text-center font-extralight text-sm mb-2">Enter the password to get access to my Portfolio</label>
                        <input type="password" className="outline-none bg-gray-200 text-gray-700 border border-gray-600 rounded mb-3 h-8 px-2 text-center" onChange={(e) => setPassword(e.target.value)}></input>
                        <input type="submit" className="hover:cursor-pointer max-w-24 mb-4 px-6 py-2 border text-center text-white rounded hover:bg-white transition hover:text-gray-900 hover:shadow-[0_0_20px_1px_rgba(255,255,255,0.6)]" value="See my Portfolio"></input>
                    </form>
                </div>
                <div className="flex justify-center items-end h-1/6">
                    <h3 className="text-white text-center font-extralight">© 2022 Victor Girault</h3>
                </div>
            </div>
        </>
    )
}

export default Index;
