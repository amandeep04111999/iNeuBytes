import React from 'react'
import img1 from '../images/Footerimg/img1.png'
import img2 from '../images/Footerimg/img2.png'
import img3 from '../images/misc/img3.png'
import img4 from '../images/misc/img4.png'

function Footer() {
  return (
    <div>
      <div className='flex bg-[#FAFBFC] pr[-5%] pl-[10%]  '>
        <div className='basis-1/6 pl-[10px]  '>
           <div>
            <div>
              <p className='mb-[25px] font-bold text-[12px]  ' >ONLINE SHOPPING</p>
              <ul className='mb-[40px] cursor-pointer text-[15px] text-[#696B79] '>
                <li>
                    Men
                </li>
                <li>
                  Women
                </li>
                <li>
                  Kids
                </li>
                <li>
                  Beauty
                </li>
                <li>
                  Gifts Cards
                </li>
                <li>
                  Myntra Insider
                </li>
      
              </ul>
            </div>
           </div>
           <div>
           <div>
              <p className='mb-[25px] font-bold text-[12px]'>USEFUL LINKS</p>
              <ul className='mb-[40px] text-[15px] text-[#696B79] cursor-pointer'>
                <li>
                    Blog
                </li>
                <li>
                  Careers
                </li>
                <li>
                  Site Map
                </li>
                <li>
                  Corporate Information
                </li>
                <li>
                  White Hat
                </li>
              </ul>
            </div>
           </div>
          
        </div>
        <div className='basis-1/6 '>
        <div>
              <p className='mb-[25px] font-bold text-[12px] ' >CUSTOMER POLICIES</p>
              <ul className='mb-[40px] text-[15px] text-[#696B79] cursor-pointer'>
                <li>
                    Contact Us
                </li>
                <li>
                  FAQ
                </li>
                <li>
                  T&C
                </li>
                <li>
                  Terms Of Use
                </li>
                <li>
                  Shipping
                </li>
                <li>
                  Cancellation
                </li>
                <li>
                  Returns
                </li>
                <li>
                  Privacy Policy
                </li>
                <li>
                  Grievance Officer
                </li>
                
              </ul>
            </div>
        </div>
        <div className='basis-1/3'>
          <div>
            <p className='font-bold text-[12px]'>EXPERIENCE MYNTRA APP ON MOBILE</p>
            <div className=' flex pt-[20px] space-x-2 pb-[20px] w-[25%] cursor-pointer'>
              <img src={img1}></img>
              <img src={img2}></img>
            </div>
          </div>
        
            <p className='font-bold text-[12px]'>KEEP IN TOUCH</p>
                <div className=' flex pt-[10px] space-x-2 pb-[20px] w-[25%] cursor-pointer'>
                <div className='flex space-x-3'>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>

                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>

                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>

                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </div>
              </div>
             </div> 
              
              <div className='basis-1/3'> 
              <div>
                <div className='flex flex-row mb-[40px] pr-[50px]  '>
                    <img className='w-[10%] h-[10%]' src={img3}></img>
                    <p className='w-[20] text-[16px]'><b>100% ORIGINAL</b> guarantee for<br></br> all products at myntra.com</p>
                  </div>
                  <div className='flex flex-row r'>
                    <img className='w-[10%] h-[10%] ' src={img4}></img>
                    <p className='w-[20] text-[16px]'><b>Return within 14 days</b> of<br></br> receiving your order</p>
                  </div>
                
              </div>
              </div>
              
              
          
    </div>
    <div>
           <div className='pl-[10%] pr-[10%]  border-b border-gray-300 '>
              <p className='mb-[25px] font-bold text-[12px] mt-[15px] border-t border-gray-300 pt-[20px] '>POPULAR SEARCHES</p>
              <ul className='mb-[40px]  text-[#696B79] text-[15px]'>
                <p className='flex justify-between cursor-pointer '>Makeup | Dresses |For Girls | T-Shirts | Sandals | Headphones  |Babydolls  Blazers For Men  Handbags  Ladies Watches  Bags  Sport Shoes  Reebok Shoes  Puma Shoes | Boxers  Wallets  Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye  Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes|Goggles | Bras | Suit | Chinos | Shoes  | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees|</p>
                </ul>
                <div className='flex '>
                <p className='mb-[25px]  text-[14px] text-[#696B79]'>In case of any concern, Contact Us</p>
                <p className='mb-[25px]  text-[14px] text-[#696B79] pl-[45%]'>© 2023 www.myntra.com. All rights reserved.</p>
                

                </div>
            </div>
            <div >
              <div className='pl-[10%] pr-[10%] mt-[15px] border-b border-gray-300 pb-[5%]'>
                <h2 className=' mb-[25px] flex font-bold text-[12px] ' >Registered Office Address</h2>
                <p className='text-[12px] flex text-[#696B79] '>
                  Buildings Alyssa,<br></br>
                  Begonia and Clover situated in Embassy Tech Village,<br></br>
                  Outer Ring Road,<br></br>
                  Devarabeesanahalli Village,<br></br>
                  Varthur Hobli,<br></br></p>
                  <div className='flex '>
                <p className='mb-[25px]  text-[14px] text-[#696B79] '>Bengaluru – 560103, India</p>
                <p className='mb-[25px]  text-[14px] text-[#696B79] pl-[60%]'>CIN:U72300KA2007PTC041799<br></br>Telephone:
                +91-80-61561999</p>
                
                
                  </div>
                  
                  
              </div>
              
            </div>
            
           </div>
    
  </div>
  )
}

export default Footer
