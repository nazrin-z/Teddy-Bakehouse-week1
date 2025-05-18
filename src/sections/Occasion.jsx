import Treat from '../assets/Treat.png';
import Treat2 from '../assets/Treat2.png';
import Treat3 from '../assets/Treat3.png';
import Treat4 from '../assets/Treat4.png';

const Occasion = () => {
  const items = [Treat, Treat2, Treat3, Treat4,];

  return (
    <div className="w-full sm:h-auto bg-green-100 py-16 px-4 sm:px-10 lg:px-36">
      <div className="text-center mb-12">
        <h1 className="font-fancy text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
          Treats for any Occasion
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-base lg:text-lg font-serif ">
         We’ve got you covered for any holiday, special occasion, or cause for celebration.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:flex  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 justify-center items-center content-center  px-4 sm:px-8">
  {items.map((img, i) => (
    <img
      key={i} src={img} className="w-[250px] h-[400px] object-cover rounded-md shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"/>
  ))}
</div>

    </div>
  );
};

export default Occasion;