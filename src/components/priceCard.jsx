export default function PriceCard({ planName, price, services, notServices }) {
  return(
    <div className=' flex flex-col justify-between w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 00'>
      <div>
      <h5 className='mb-4 text-xl font-medium text-gray-500 '>
          {planName}
      </h5>
      <div className='flex items-baseline text-gray-900'>
        <span className='text-3xl font-semibold'>€</span>
        <span className='text-5xl font-extrabold tracking-tight'>
          {price}
        </span>
        <span className='ms-1 text-xl font-normal text-gray-500 '>
          /month
        </span>
      </div>
      <ul role='list' className='space-y-5 my-7'>
        {services.map(e => {
          return(
            <li key={e} className='flex items-center'>
              <svg
                className='flex-shrink-0 w-4 h-4 text-blue-700 '
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500  ms-3'>
                {e}
              </span>
            </li>
            )
          })}
        {notServices.map(e=>{
          return(
            <li key={e} className='flex line-through decoration-gray-500'>
            <svg
              className='flex-shrink-0 w-4 h-4 text-gray-400 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
            </svg>
            <span className='text-base font-normal leading-tight text-gray-500 ms-3'>
              {e}
            </span>
          </li>
          )
          })}
        </ul>
      </div>
      
        <button
          type='button'
          className='bottom-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 -700 ue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'
        >
          Choose plan
        </button>
      </div>
  )
}