import React from "react"
import banner1 from '../images/GenderBanner/banner1.png'
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&family=Roboto:ital,wght@0,100;0,300;1,100;1,300;1,400&display=swap');
</style>



function GenderBanner(){
    return(
        <div className="  w-[100%] h-[200px] p-[3%] bg-white " >
           <div className=" cursor-pointer pb-[10px]"> 
               <img src={banner1}></img> 
            </div>
            <div>
                <div className="flex flex-col items-center mb-[20px] font-family: 'Poppins', sans-serif;">
                    <div className="text-[40px] text-[#142E8E]"><h4>OMG! DEALS</h4></div>
                    <p className="text-[20px] text-[#142E8E]">MEDAL-WORTHY BRANDS TO BAG</p>
            </div>
            </div>
          </div>
          
        
           
    
)
}
export default GenderBanner
            