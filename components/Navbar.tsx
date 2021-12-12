import Link from 'next/link'
import { useRouter } from 'next/router'

const navigation = [
  { name: 'Launches', href: '/launches' },
  { name: 'Ships', href: '/ships' },
  { name: 'Rockets', href: '/rockets' },
  ,
]
type navigationprops = {
  name: string
  href: string
}

const Navbar = () => {
  const router = useRouter()
  console.log(router)
  return (
    <div className={`relative z-10 ${router.pathname === '/' ? 'hidden' : ''}`}>
      <header className='bg-gray-300  '>
        <nav
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
          aria-label='Top'
        >
          <div className='w-full py-6 flex items-center justify-center   lg:border-none'>
            <div className='ml-10 space-x-4'>
              <Link href='/launches'>
                <a className='inline-block transform transition duration-500 hover:scale-150 hover:font-bold hover:underline cursor-pointer  py-2 px-4 border border-transparent rounded-md text-xl font-medium text-black hover:bg-opacity-75'>
                  Launches
                </a>
              </Link>
              <Link href='/ships'>
                <a className='inline-block transform transition duration-500 hover:scale-150 hover:font-bold hover:underline cursor-pointer  py-2 px-4 border border-transparent rounded-md text-xl font-medium text-black hover:bg-opacity-75'>
                  Ships
                </a>
              </Link>
              <Link href='/rockets'>
                <a className='inline-block transform transition duration-500 hover:scale-150 hover:font-bold hover:underline cursor-pointer  py-2 px-4 border border-transparent rounded-md text-xl font-medium text-black hover:bg-opacity-75'>
                  Rockets
                </a>
              </Link>
            </div>
          </div>
          {/* <div className='py-4 flex flex-wrap justify-center space-x-6 lg:hidden'>
            {navigation.map((link): any => (
              <a
                key={link.name}
                href={link.href}
                className='text-base font-medium text-white hover:text-indigo-50'
              >
                {link.name}
              </a>
            ))}
          </div> */}
        </nav>
      </header>
    </div>
  )
}

export default Navbar
