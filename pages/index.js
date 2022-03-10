import Head from 'next/head'
import Link from 'next/link'

const Index = () => {
  return (
      <>
          <Head>
              <title>Victor G. - Portfolio</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <div className="w-screen h-screen bg-gray-800">
              <div className="flex flex-col justify-center items-center h-2/3">
                  <h1 className="text-white text-5xl font-medium">Portfolio</h1>
                  <h2 className="text-white text-3xl font-light">Victor Girault</h2>
              </div>
              <div className="h-1/3 flex justify-around items-start">
                  <div className="bg-gray-700 px-5 py-2 rounded drop-shadow">
                    <Link href="/about">
                        <a className="text-white text-xl">About Me</a>
                    </Link>
                  </div>
                  <div className="bg-gray-700 px-5 py-2 rounded drop-shadow">
                    <Link href="/veille">
                        <a className="text-white text-xl">Veille Technologique</a>
                    </Link>
                  </div>
                  <div className="bg-gray-700 px-5 py-2 rounded drop-shadow">
                    <Link href="/e4">
                        <a className="text-white text-xl">E4</a>
                    </Link>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Index;
