import Treat4 from '../assets/Treat4.png';

const Events = () => {
  return (
      <div class="flex w-full bg-gradient-to-r from-ffe5ec to-ffffff">
      <div class="w-1/4  p-4 text-center  text-eba1a2 h-[425px]  px-20 ml-40 text-white">
      <h1 className='font-fancy text-2xl py-8 '>Catering, Gifting & Events</h1>
         <p className='font-serif'> Our catering, gifting and events team is ready to fill your event or celebration with a custom selection of Magnolia Bakery’s best creations.
           No occasion is too large—or too small! </p>
      </div>
      <div class="w-1/3 w-[500px] h-[400px] mb-12 object-cover transition-transform duration-300 hover:scale-105 z-00 ml-[250px] items-center mt-10  ">
         <img src={Treat4} className='w-full h-[425px]  '/>
      </div>
    </div>
//     <div className="" >
//        <div className="w-1/2 pr-5 py-8 mt-20">
//         <h1 className="font-bold text-2xl mb-12">Catering, Gifting & Events</h1>
//         <p className='mt-4'>
//       Our catering, gifting and events team is ready to fill your event or celebration with a custom selection of Magnolia Bakery’s best creations. No occasion is too large—or too small!
//         </p>
//         <button className='mt-6 px-4 py-2 bg-white text-rose-500 hover:bg-rose-100 font-semibold rounded'>
//   GET STARTED
// </button>
   
//       </div>
//       <div className="w-1/2 flex justify-end h-[50px] mt-80 ">
//         <img src={TwotierC} alt="Events" className="w-96 h-96" />
//       </div>
//     </div>
  );
};

export default Events;
