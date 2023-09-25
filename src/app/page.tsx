import Image from 'next/image'
import Map from '@/components/Map'
import FindBloodForm from '@/components/FindBloodForm'

export default function Home() {
  return(
    <main className='flex p-8 justify-between'>
       <section className='flex justify-center mx-16 px-16 bg-stone-200 items-center'>
        <FindBloodForm/>
       </section>
      <Map></Map>
      </main>
  )
}
