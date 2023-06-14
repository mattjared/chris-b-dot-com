import Image from 'next/image'
import Tiles from "./Tiles"
import Contact from "./Contact"
import Footer from "./Footer"

export default function Home() {
  return (
    <main className='bg-red-200'>
      <section className="py-10 md:pt-24 md:pb-12 container max-w-screen-xl mx-auto px-4 text-center">
        <Image src="/pic of me.png" alt="" width="250" height="250" className="mx-auto mb-16 rounded-full" />
        <h1 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">{`I am`}</h1>
        <h2 className='text-6xl font-bold'>Hungry</h2>
        <p className="font-bold text-purple-500 text-md md:text-xl my-16">This is my favorite picture of myself</p>
      </section>
      <Contact />
      <Tiles />
      <Footer />
    </main>
  )
}
