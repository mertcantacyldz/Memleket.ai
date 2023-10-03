import { FaMonument} from 'react-icons/fa6';
import { MdFoodBank} from 'react-icons/md';
import {GiWaterfall} from 'react-icons/gi'
import {MdTour} from 'react-icons/md'
import {GiPathDistance} from 'react-icons/gi'

export default function Slight() {
    return (
      <div className=" flex justify-end  mt-10 pr-20">
    <div className=" max-w-6xl px-6">
      <div className="flex [&:hover>div]:w-16 [&>div:hover]:w-[30rem]">
        <div className="group relative h-96 w-[30rem] cursor-pointer overflow-hidden transition-all duration-200">
          <img className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src={`${process.env.PUBLIC_URL}/image/efes.jpg`} alt="" />
          <div className="invisible absolute inset-0 bg-gradient-to-t from-navbar group-hover:visible flex justify-start items-end pb-20 pl-10">
          <div className="   ">
              <FaMonument className='text-white w-20 h-20'></FaMonument>
              
          </div>
          <p className=' text-white font-inter max-w-xs '>Discover unique historical sites and cultural heritage. See Turkey's rich past, from ancient cities to Ottoman artifacts.</p>
          
            </div>
        </div>
        <div className="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
          <img className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src={`${process.env.PUBLIC_URL}/image/yemek.jpg`} alt="" />
          <div className="invisible absolute inset-0 bg-gradient-to-t from-navbar group-hover:visible flex justify-start items-end pb-20 pl-10">
            <div className="">
              <MdFoodBank className='text-white w-24 h-24'></MdFoodBank>
            </div>
            <p className=' text-white font-inter max-w-xs '>Discover the tastes of Turkey. Try the unique flavors of each region and enjoy the local cuisine.</p>
          </div>
        </div>
  
        <div className="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
          <img className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src={`${process.env.PUBLIC_URL}/image/pamukkale.jpg`} alt="" />
          <div className="invisible absolute inset-0 bg-gradient-to-t from-navbar group-hover:visible flex justify-start items-end pb-20 pl-10">
            <div className="mr-3 ">
           <GiWaterfall className='text-white w-24 h-24'></GiWaterfall>
            </div>
            <p className=' text-white font-inter max-w-xs '>Discover spectacular natural beauty. From beaches to mountains, lakes to forests, fall under the spell of nature.</p>
          </div>
        </div>
  
        <div className="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
          <img className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src={`${process.env.PUBLIC_URL}/image/bodrum.jpg`} alt="" />
          <div className="invisible absolute inset-0 bg-gradient-to-t from-navbar group-hover:visible flex justify-start items-end pb-20 pl-10">
            <div className="">
              <GiPathDistance className='text-white w-24 h-24'></GiPathDistance>
            </div>
            <p className=' ml-5 text-white font-inter max-w-xs '> Get tips and suggestions for exploring everywhere in Turkey, from big cities to small towns.</p>
          </div>
        </div>
        
        
      </div>
    </div>
    
  </div>
  
    )
  }
  
  