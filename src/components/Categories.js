import React from 'react'
import img1 from '../images/Categories/img1.webp'
import img2 from '../images/Categories/img2.webp'
import img3 from '../images/Categories/img3.webp'
import img4 from '../images/Categories/img4.webp'
import img5 from '../images/Categories/img5.webp'
import img6 from '../images/Categories/img6.webp'



function Categories() {
  return (
    <div> 
      <div className='flex pt-[22%] cursor-pointer p-[5px]'>
        <div>
            <img src={img1}></img>
        </div>
        <div>
        <img src={img2}></img>
        </div>
        <div>
        <img src={img3}></img>
        </div>
        <div>
        <img src={img4}></img>
        </div>
        <div>
        <img src={img5}></img>
        </div>
        <div>
        <img src={img6}></img> 
        </div>
        
      </div>
        <div>
                <div className="flex flex-col items-center mb-[20px] mt-[30px] font-family: 'Roboto', sans-serif;">
                    <div className="text-[40px] text-[#142E8E]">FOR THE LOVE OF SIBLINGS</div>
                    <p className="text-[20px] text-[#142E8E]">RAKSHABANDHAN</p>
            </div>  
        </div>
    </div>


  )
}

export default Categories