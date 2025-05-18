import Treat4 from '../assets/Treat4.png';

const Events = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full bg-rose-300 px-6 py-12 items-center justify-center gap-10">
      
      {/* Text Section */}
      <div className="lg:w-1/2 max-w-lg text-eba1a2 text-center px-6">
        <h1 className="font-fancy text-3xl mb-6">Catering, Gifting & Events</h1>
        <p className="font-serif text-base">
          Our catering, gifting and events team is ready to fill your event or celebration with a custom 
          selection of Magnolia Bakery’s best creations. No occasion is too large—or too small!
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 max-w-md">
        <img
          src={Treat4}
          alt="Catering Treat"
          className="w-full h-[425px] object-cover rounded-md transition-transform duration-300 hover:scale-105 shadow-md"
        />
      </div>
    </div>
  );
};

export default Events;
