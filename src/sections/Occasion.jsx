import Treat from '../assets/Treat.png';
import Treat2 from '../assets/Treat2.png';
import Treat4 from '../assets/Treat4.png';

const Occasion = () => {
  return (
    <div className="relative h-[550px] mt-[540px] overflow-hidden ">

     
      <div className="absolute inset-0  clip-left-half z-0">
      </div>

    
      <div className="absolute inset-0 bg-gradient-to-r from-ffcbcd to-ffe5ec clip-right-half z-0"></div>

   
      <div className="relative flex items-center mt-20 grid-rows-2 justify-start h-full">
        <img
          src={Treat2}
          alt="cat1"
          className="w-[500px] h-[400px] mb-12 object-cover transition-transform duration-300 hover:scale-105 z-00"
        />
      <div className='justify-center items-center w-[550px] flex flex-col py-10 ml-72 mb-20 '>
        <h1 className='font-serif font text-2xl text-center' >Celebrate Sweet Moments with Irresistible Treats</h1>
        <p className='mt-10'>From Birthdays to Big Days – We’ve Got the Perfect Slice Make Every Occasion 
          Sweeter with Our Signature Cakes Because Every Occasion Deserves a Delicious Treat</p>
        <a href='#' className='mt-4 font-semibold underline '>
          VIEWMORE
        </a>
      </div>
      </div>
    </div>
  );
};

export default Occasion;
