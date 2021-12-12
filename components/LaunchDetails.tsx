import { useQuery, gql } from '@apollo/client'
import Image from 'next/image'
import TextareaAutosize from 'react-textarea-autosize'
const launch_details = gql`
  query launch($id: ID!) {
    launch(id: $id) {
      links {
        flickr_images
      }
      details
      mission_name
      launch_year
      launch_success
      launch_site {
        site_name_long
      }
    }
  }
`

const LaunchDetails = ({ id }: any) => {
  const { loading, error, data } = useQuery(launch_details, {
    variables: { id },
  })

  if (loading)
    return (
      <div className=' min-h-screen flex justify-center items-center'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500'></div>
      </div>
    )

  if (error) return <h1>Error : </h1>
  console.log(id)
  console.log(data)
  return (
    <div>
      <div className='min-h-screen bg-white flex  '>
        <div className='hidden lg:block relative   flex-1'>
          <Image
            className='absolute inset-0 h-full w-full object-cover'
            src={
              data?.launch?.links?.flickr_images[0]
                ? data?.launch?.links?.flickr_images[0]
                : '/noimage.jpg'
            }
            alt=''
            layout='fill'
            loading='lazy'
          />
        </div>
        <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-gray-200'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div>
              <h2 className='mt-6 text-3xl font-extrabold text-gray-900 text-center'>
                {data?.launch?.mission_name}
              </h2>
            </div>

            <div className='mt-8'>
              <div className='mt-6'>
                <form action='#' method='POST' className='space-y-6'>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Site Name
                    </label>
                    <div className='mt-1'>
                      <input
                        id='email'
                        name='email'
                        type='textarea'
                        disabled
                        defaultValue={data?.launch?.launch_site?.site_name_long}
                        autoComplete='email'
                        required
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='space-y-1'>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Description
                    </label>
                    <div className='mt-1'>
                      <TextareaAutosize
                        id='password'
                        name='password'
                        disabled
                        value={
                          data?.launch?.details
                            ? data?.launch?.details
                            : 'No Details Found '
                        }
                        autoComplete='current-password'
                        required
                        className='resize-none appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <label
                        htmlFor='remember-me'
                        className='ml-2 block text-md font-bold text-gray-700'
                      >
                        Year: {data?.launch?.launch_year}
                      </label>
                    </div>

                    <div
                      className={`${
                        data?.launch?.launch_success
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      } px-2 inline-flex text-md leading-5 font-semibold rounded-full `}
                    >
                      Launch Success:{' '}
                      {JSON.stringify(data?.launch?.launch_success)}
                    </div>
                  </div>

                  <div></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LaunchDetails
