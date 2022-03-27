import Head from 'next/head'
import Link from 'next/link'
import { FastArrowDown } from 'iconoir-react'
import { useEffect, useState } from 'react';


const Home = () => {
    const [visibility, setVisibility] = useState('opacity-100');
    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 100) {
            setVisibility('opacity-0');
        }
        else {
            setVisibility('opacity-100');
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return <>
        <Head>
            <title>Victor G. - Portfolio</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="h-screen bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="flex h-full flex-col justify-center items-center pt-5">
                <div className="h-5/6 flex flex-col justify-center items-center">
                    <h1 className="font-semibold text-white text-6xl">Portfolio</h1>
                    <h2 className="font-light text-2xl text-white">Victor Girault</h2>
                </div>
                <div className={"text-white font-extralight transition duration-150 " + visibility}>
                    <p>Scroll to see all pages</p>
                    <Link href="#summary">
                        <FastArrowDown className="mx-auto hover:cursor-pointer" height={38} width={38} strokeWidth={0.8} />
                    </Link>
                </div>
            </div>

        </div>
        <div className="h-screen bg-gray-900 flex justify-around items-center flex-wrap" id="summary">
            <div className="flex flex-wrap justify-around items-center w-screen">
                <Link href="/portfolio/page1">
                    <div className="hover:cursor-pointer mt-12 px-6 py-2 border text-white rounded hover:bg-white transition hover:text-gray-900 hover:shadow-[0_0_20px_1px_rgba(255,255,255,0.6)]">Page 1</div>
                </Link><Link href="/portfolio/page2">
                    <div className="hover:cursor-pointer mt-12 px-6 py-2 border text-white rounded hover:bg-white transition hover:text-gray-900 hover:shadow-[0_0_20px_1px_rgba(255,255,255,0.6)]">Page 2</div>
                </Link><Link href="/portfolio/page3">
                    <div className="hover:cursor-pointer mt-12 px-6 py-2 border text-white rounded hover:bg-white transition hover:text-gray-900 hover:shadow-[0_0_20px_1px_rgba(255,255,255,0.6)]">Page 3</div>
                </Link>
            </div>

        </div>
    </>
}

export default Home;