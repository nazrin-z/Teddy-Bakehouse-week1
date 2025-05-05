import Dbag from '../assets/Dbag.jpg';
import Pickup2 from '../assets/Pickup2.png';
import DeliveryC from '../assets/PackedC.jpg';
import Bike from '../assets/Bike.png';

const Catelog = () => {
  return (
  <div class="flex w-full">
  <div class="w-40 bg-blue-200 p-4 text-center  mt-[80px]"> </div>
  <div class="w-1/3 bg-green-200 p-4 text-center  mt-[80px]  ">
     <img src={Bike} className='w-full h-[425px]  '/>
  </div>
  <div class="w-1/4  p-4 text-center  bg-gradient-to-r from-ffcbcd to-eba1a2 text-ffffff h-[425px]  mt-[95px] px-20 ml-40 text-white">
  <h1 className='font-fancy text-2xl py-8'>Delivery and Pick Up Options</h1>
     <p className='font-serif'>For more than 25 years, Magnolia Bakery has been making America’s 
          favorite baked goods the old-fashioned way: from scratch, in small batches, and using the finest ingredients.</p>
  </div>
</div>
  )
}

export default Catelog