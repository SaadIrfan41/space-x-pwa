import { useQuery, gql } from '@apollo/client'
import Image from 'next/image'
import TextareaAutosize from 'react-textarea-autosize'
const ROCKET_DETAILS = gql`
  query ship($id: ID!) {
    ship(id: $id) {
      image
      name
      active
      year_built

      home_port
    }
  }
`

const ShipDetails = ({ id }: any) => {
  const { loading, error, data } = useQuery(ROCKET_DETAILS, {
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
            src={data.ship.image ? data.ship.image : '/noimage.jpg'}
            alt=''
            layout='fill'
            loading='lazy'
          />
        </div>
        <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-gray-200'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div className='mt-8'>
              <div className='mt-6'>
                <form action='#' method='POST' className='space-y-6'>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Ship Name
                    </label>
                    <div className='mt-1'>
                      <input
                        id='rocket'
                        name='rocket'
                        type='text'
                        disabled
                        defaultValue={data.ship.name}
                        required
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='space-y-1'>
                    <label
                      htmlFor='Description'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Home Port
                    </label>
                    <div className='mt-1'>
                      <input
                        id='rocket'
                        name='rocket'
                        type='text'
                        disabled
                        defaultValue={data.ship.home_port}
                        required
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <label
                        htmlFor='remember-me'
                        className='ml-2 block text-md font-bold text-gray-700'
                      >
                        Built Year: {data.ship.year_built}
                      </label>
                    </div>

                    <div
                      className={`${
                        data.ship.active
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      } px-2 inline-flex text-md leading-5 font-semibold rounded-full `}
                    >
                      Active: {JSON.stringify(data.ship.active)}
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

export default ShipDetails
