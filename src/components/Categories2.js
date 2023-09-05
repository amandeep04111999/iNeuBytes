import React from 'react'
import img1 from '../images/Categories2/img1.webp'
import img2 from '../images/Categories2/img2.webp'
import img3 from '../images/Categories2/img3.webp'
import img4 from '../images/Categories2/img4.webp'
import img5 from '../images/Categories2/img5.webp'


function Categories2() {
  return (
    <div>
        <div className='flex cursor-pointer'>
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
        
        </div>
        <div className='flex justify-center my-[25px] text-[40px] text-[#142E8E]'>
            SHOP BY CATEGORY
        </div>
    </div>
  )
}

export default Categories2