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
            <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-gray-900">
                <h1 className="text-white text-center text-3xl font-bold">Victor Girault</h1>
                <h2 className="text-xl text-center text-white tracking-wider">Student in developpment</h2>
                <h5 className="text-lg text-center text-gray-500 tracking-wider mt-10">Upcoming content</h5>
            </div>
        </>
    )
}

export default Index;
