import Head from 'next/head'
import Link from 'next/link'
import { FastArrowDown } from 'iconoir-react'
import { useEffect, useState } from 'react';
import GlowingButton from '../../components/glowing_button';


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
                <Link href="#summary">
                    <div className={"text-white font-extralight transition duration-150 hover:cursor-pointer " + visibility}>
                        <p>Scroll to see all pages</p>
                        <FastArrowDown className="mx-auto" height={38} width={38} strokeWidth={0.8} />
                    </div>
                </Link>
            </div>

        </div>
        <div className="h-screen bg-gray-900 flex justify-around items-center flex-wrap" id="summary">
            <div className="flex flex-wrap justify-around items-center w-screen">
                <GlowingButton content="Page 1" link="/portfolio/page1" />
                <GlowingButton content="Page 2" link="/portfolio/page2" />
                <GlowingButton content="Page 3" link="/portfolio/page3" />
            </div>

        </div>
    </>
}

export default Home;