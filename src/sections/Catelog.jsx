import Roll from '../assets/Roll.jpg';
import Icecream from '../assets/Icecream.jpg';
import RedC from '../assets/RedC.jpg';
import cat1 from '../assets/cat.jpg';

const Catelog = () => {
  const items = [cat1, Roll, Icecream, RedC,];

  return (
    <div className="w-full h-auto lg:h-auto py-16 px-4 sm:px-10 lg:px-36">
      <div className="text-center mb-12">
        <h1 className="font-fancy text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
          Our Catelog
        </h1>
        <p className="mt-4 max-w-3xl mx-auto  text-sm sm:text-base font-serif ">
          Tasty Bear Bakery has been making America’s favorite baked goods the old-fashioned way:
          from scratch, in small batches, and using the finest ingredients.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:flex justify-center items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 place-items-center px-4 sm:px-8">
  {items.map((img, i) => (
    <img key={i} src={img} className="w-[250px] h-[400px] object-cover rounded-md shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
  ))}
</div>

    </div>
  );
};

export default Catelog;
