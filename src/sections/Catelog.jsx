import BlackC from '../assets/BlackC.jpeg'
import Roll from '../assets/Roll.jpg'
import Icecream from '../assets/Icecream.jpg'
import RedC from '../assets/RedC.jpg'
import Brownie from '../assets/Brownie.jpg'
import JarC from '../assets/JarC.jpg'
import cat1 from '../assets/cat.jpg'
const Catelog = () => {
  return (
    <>
    <div className="flex h-[300px] mt-20 w-full py-10 px-36  bg-gradient-to-r from-ffcbcd to-ffe5ec justify-center">
      <div className=' mt-80 '> 
        <h1 className='font-serif font-extrabold text-4xl mr-72 ml-72 text-a78577'>Our Catelog</h1>
        <p className=' mt-5 w-[800px] text-center font-myfont text-a78577'>Tasty bear Bakery has been making America’s favorite baked goods the old-fashioned way: from scratch, 
          in small batches, and using the finest ingredients.</p>
          
          <div className='grid grid-cols-3 grid-rows-3 gap-2  h-[500px] px-20 mt-10 '>
          <img src={cat1} className='h-[170px] w-[180px] transition duration-300 hover:scale-105 hover:shadow-lg'/>
          <img src={Roll} className='h-[170px] w-[180px] transition duration-300 hover:scale-105 hover:shadow-lg'/>
          <img src={Icecream} className='h-[170px] w-[180px] transition duration-300 hover:scale-105 hover:shadow-lg'/>
          <img src={RedC} className='h-[170px] w-[180px] mt-9 transition duration-300 hover:scale-105 hover:shadow-lg'/>
          <img src={Brownie} className='h-[170px] w-[180px] mt-9 transition duration-300 hover:scale-105 hover:shadow-lg'/>
          <img src={JarC} className='h-[170px] w-[180px] mt-9 transition duration-300 hover:scale-105 hover:shadow-lg'/>
  </div>
      </div>
  </div>

  </>
      
  )
}

export default Catelog
