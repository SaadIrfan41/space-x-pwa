import { useQuery, gql } from '@apollo/client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
interface proptypes {
  id: string
  mission_name: string
  site_name: string
  flickr_images: [string]
}

const ALL_LAUNCHES = gql`
  {
    launches(limit: 21) {
      links {
        flickr_images
      }
      id
      launch_site {
        site_name
      }
      mission_name
    }
  }
`

const LaunchPage = () => {
  const { loading, error, data } = useQuery(ALL_LAUNCHES)
  if (loading)
    return (
      <div className=' min-h-screen flex justify-center items-center'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500'></div>
      </div>
    )
  if (error) return <h1>Error : </h1>
  console.log(data.launches)
  return (
    <div className=' bg-gray-200'>
      <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-12'>
          <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl text-center'>
              Spaxe-X-Launches
            </h2>
          </div>
          <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
            {data.launches.map((data: any) => (
              <li key={data.id}>
                <Link href={`/launches/${data.id}`} passHref>
                  <div className='space-y-4 cursor-pointer'>
                    <div className='aspect-w-3 aspect-h-2'>
                      <Image
                        className='object-cover shadow-lg rounded-lg'
                        loading='lazy'
                        src={
                          data?.links?.flickr_images[0]
                            ? data?.links?.flickr_images[0]
                            : '/noimage.jpg'
                        }
                        alt='https://farm8.staticflickr.com/7677/16706406093_61a8f9c2f8_o.jpg'
                        width='422px'
                        height='298px'
                      />
                    </div>

                    <div className='space-y-2'>
                      <div className='text-lg leading-6 font-bold space-y-1 text-center'>
                        <h3>{data.mission_name}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LaunchPage
