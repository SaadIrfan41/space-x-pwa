import Image from 'next/image'
import launch from '../public/launch.webp'
import ship from '../public/ship.jpg'
import rocket from '../public/rocket.jpg'

import Link from 'next/link'

const Home = () => {
  return (
    <div className='h-screen grid place-items-center'>
      <div className=' <p-10 grid text-center   grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 mt-20 place-items-center'>
        <Link href='/launches' passHref>
          <div className='max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-500 hover:scale-110 cursor-pointer '>
            <Image
              className='w-full'
              width='422px'
              height='298px'
              src={launch}
              alt='Sunset in the mountains'
              placeholder='blur'
              priority={true}
              loading='eager'
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 underline'>
                Space-X-Launches
              </div>
              <p className='text-gray-700 text-base'>
                Space launch is the earliest part of a flight that reaches
                space. Space launch involves liftoff, when a rocket or other
                space launch vehicle leaves the ground, floating ship or midair
                aircraft at the start of a flight. Liftoff is of two main types:
                rocket launch, and non-rocket spacelaunch.
              </p>
            </div>
          </div>
        </Link>
        <Link href='/ships' passHref>
          <div className='max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-500 hover:scale-110  cursor-pointer'>
            <Image
              className='w-full'
              width='422px'
              height='298px'
              src={ship}
              alt='Sunset in the mountains'
              placeholder='blur'
              priority={true}
              loading='eager'
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 underline'>
                Space-X-Ships
              </div>
              <p className='text-gray-700 text-base'>
                A spacecraft is a vehicle or machine designed to fly in outer
                space. A type of artificial satellite, spacecraft are used for a
                variety of purposes, including communications, Earth
                observation, meteorology, navigation, space colonization,
                planetary exploration, and transportation of humans and cargo.
              </p>
            </div>
          </div>
        </Link>
        <Link href='/rockets' passHref>
          <div className='max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-500 hover:scale-110 cursor-pointer '>
            <Image
              className='w-full'
              width='422px'
              height='298px'
              src={rocket}
              alt='Sunset in the mountains'
              placeholder='blur'
              priority={true}
              loading='eager'
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 underline'>
                Space-X-Rockets
              </div>
              <p className='text-gray-700 text-base'>
                Space shuttle, also called Space Transportation System,
                partially reusable rocket-launched vehicle designed to go into
                orbit around Earth, to transport people and cargo to and from
                orbiting spacecraft, and to glide to a runway landing on its
                return to Earth’s surface that was developed by the U.S.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
