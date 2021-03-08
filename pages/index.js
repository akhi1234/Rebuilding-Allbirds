import Head from 'next/head'


export default function Home() {

  const categories = [
    `Women's Running Shoes`,
    `Everyday Sneakers`,
    `Slip-Ons`,
    `High Tops`,
    `Boat Shoes`,
    `Flats`,
    `Weather Repellent Shoes`
  ]
  return (
    <div>
      <Head>
        <title>Rebuilding AllBirds</title>
      </Head>
      <div className="px-5 py-1 bg-lime-700 text-white ">
        <p className="text-xs font-medium text-center">
          We are raising prices on all products by $1 today in support of planet.{' '}
          <a href="#" className="underline">Learn More.</a>
        </p>
      </div>
      <header className='relative px-4 py-4 flex items-center justify-between bg-white '>
        <div className="absolute shadow-lg inset-0 opacity-50"></div>
        <div className="flex">
          <button className="h-8 w-8">
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="flex">
          <img className="h-8" src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg" alt="AllBirds" />
        </div>

        <div className="flex">
          <button className="h-8">

            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" strokeLinejoin="round" stroke-width="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>

          </button>
        </div>
      </header>
      <main>
        <div className="flex justify-between px-6 py-4 pb-3">
          <div className="">
            <div className="text-xs font-medium text-gray-900 space-x-1">
              <a href="#" className="underline">Home</a>
              <span>/</span>
            </div>
            <div className="text-lg font-bold text-gray-900">
              Women's Shoes
            </div>
          </div>
          <div className="">
            <button className="block h-6 w-6">
              <svg className="transform rotate-90" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-gray-100 px-8 py-2 overflow-x-auto scrollbars-hidden">
          <div className="text-sm flex space-x-5">
            {categories.map((category) => (
              <a href="#" className="text-gray-800 whitespace-nowrap">{category}</a>
            ))}
          </div>
        </div>
      </main>
    </div >
  )
}
