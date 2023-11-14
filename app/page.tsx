import { CustomFilter, Hero, SearchBar } from '@/components'
import { fetchCars } from '@/utils';
import Image from 'next/image'
import { fuels,yearsOfProduction } from '@/constants'; 

export default async function Home() {

  const allCars = await fetchCars({
    manufacturer:  "",
    year: 2022,
    fuel:  "",
    limit: 10,
    model:  "",
  });
  
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        
      </div>
    </main>
  )
}
