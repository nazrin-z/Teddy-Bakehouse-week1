import Bike from '../assets/Bike.png';

const Events = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full bg-red-200 px-6 py-12 items-center justify-center gap-10">
      
      <div className="lg:w-1/2 max-w-lg text-center px-6">
        <h1 className="font-fancy text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">Catering, Gifting & Events</h1>
        <p className="font-serif text-base lg:text-lg mt-6 ">
          Our catering, gifting and events team is ready to fill your event or celebration with a custom 
          selection of Magnolia Bakery’s best creations. No occasion is too large—or too small!
        </p>
        <button className='h-10 w-48 mt-8 font-bold bg-Button rounded-3xl text-white hover:bg-white transition duration-300 hover:text-Button'>GET STARTED</button>
      </div>
      <div className="lg:w-1/2 max-w-md lg:ml-44">
        <img src={Bike} className="w-full h-[425px] object-cover rounded-md transition-transform duration-300 hover:scale-105 shadow-md"/>
      </div>
    </div>
  );
};

export default Events;
