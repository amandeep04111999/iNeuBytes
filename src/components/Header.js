import React from 'react';
import myntralogo from '../images/myntralogo.png'
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&family=Roboto:ital,wght@0,100;0,300;1,100;1,300;1,400&display=swap');
</style>




function Header() {
  return (
    <div className="flex h-[60px] sticky top-0 bg-[#FFFFFF] pt-[10px] mb-6">
      <div className="w-[10%] flex justify-center items-center">
        <img className="w-[35%]" src={myntralogo}></img>
      </div>
        
      <div className="w-[50%] flex flex-row items-center text-[#282C3F] text-[14px]">
            <div className='px-[10px] cursor-pointer'><a className='font-bold '>MEN</a></div>
            <div className='px-[10px] cursor-pointer'><a className='font-bold'>WOMEN</a></div>
            <div className='px-[10px] cursor-pointer'><a className='font-bold'>KIDS</a></div>
            <div className='px-[10px] cursor-pointer'><a className='font-bold'>HOME&LIVING</a></div>
            <div className='px-[10px] cursor-pointer'><a className='font-bold'>BEAUTY</a></div>
            <div className='px-[10px] cursor-pointer'>
              <a className='font-bold'>STUDIO</a>
            </div>
        </div>
        <div className="w-[25%] flex justify-center items-center relative">
          <div className='absolute left-[10px]'>
          <svg
           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>


        </div>
        
        <input className="h-[70%] w-[100%] bg-[#F5F5F6] rounded pl-[40px] focus:bg-[white] focus:outline-none focus:border-[2px]" type='text'
        placeholder='Search for products, brand and many more'/>
        </div>
        
      <div className="w-[15%] flex flex-row items-center ">
        <div className= "flex-1 flex flex-col ">
            <div className='flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>


            </div>
            <div className='flex justify-center cursor-pointer'>
                <p className='font-bold text-[12px] '>Profile</p>
            </div>
        </div>
        <div className="flex-1 flex flex-col">
           <div className='flex justify-center'>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>


           </div>
           <div className='flex justify-center cursor-pointer'>
            <p className='font-bold text-[12px]'>Wishlist</p>
           </div>
        </div>
        <div className="flex-1 flex flex-col">
            <div className='flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>


            </div>
            <div className='flex justify-center cursor-pointer'>
                <p className='font-bold text-[12px]'>Bag</p>
            </div>
        </div>
      </div>  
    </div>
        



   
  )
}

export default Header
