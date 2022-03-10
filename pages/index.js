import Head from 'next/head'

export default function Index() {
  return (
      <>
          <Head>
              <title>Victor G. - Portfolio</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <div className="w-screen h-screen bg-gray-800">
              <div className="flex flex-col justify-center items-center h-full">
                  <h1 className="text-white text-5xl font-medium">Portfolio</h1>
                  <h2 className="text-white text-4xl font-light">Victor Girault</h2>
              </div>
          </div>
      </>
  )
}
