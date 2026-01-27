import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div>
      <header className=' justify-between flex items-center'>
        <a href="" className='logo flex items-center gap-1'>
          <svg className='w-8 h-8 rotate-270' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"></path>
</svg>
<span className='font-bold text-xl'>AirBB</span>
        </a>

        <div className='flex py-2 px-4 border border-gray-300 rounded-full gap-2 shadow-md shadow-gray-300 items-center'>
          <div>Any where</div>
          <div className='h-4 border-l border-gray-300'></div>
          <div>Any week</div>
          <div className='h-4 border-l border-gray-300'></div>
          <div>Add guests</div>
          <button className='bg-[#FF2C2C] rounded-full w-6 h-6 flex justify-center items-center text-white'>
              <svg className='w-4 h-4 ' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
    </svg>
</button>
        </div>

        <Link to={'/login'} className='flex py-2 px-4 border border-gray-300 rounded-full gap-2'>
          <svg className='h-6 w-6' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
</svg>
    <svg className='h-6 w-6 text-white bg-gray-700 rounded-full overflow-hidden' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
</svg>

        </Link>
      </header>
    </div>
    )
}