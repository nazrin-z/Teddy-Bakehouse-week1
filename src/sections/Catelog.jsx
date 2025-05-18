import BlackC from '../assets/BlackC.jpeg';
import Roll from '../assets/Roll.jpg';
import Icecream from '../assets/Icecream.jpg';
import RedC from '../assets/RedC.jpg';
import Brownie from '../assets/Brownie.jpg';
import JarC from '../assets/JarC.jpg';
import cat1 from '../assets/cat.jpg';

const Catelog = () => {
  const items = [cat1, Roll, Icecream, RedC, Brownie, JarC];

  return (
    <div className="w-full h-auto lg:h-auto bg-gradient-to-r py-16 px-4 sm:px-10 lg:px-36">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-fancy font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-a78577">
          Our Catelog
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-a78577 text-sm sm:text-base font-myfont">
          Tasty Bear Bakery has been making America’s favorite baked goods the old-fashioned way:
          from scratch, in small batches, and using the finest ingredients.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 place-items-center px-4 sm:px-8">
  {items.map((img, i) => (
    <img
      key={i}
      src={img}
      alt={`catalog-item-${i}`}
      className="w-[250px] h-[400px] object-cover rounded-md shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
    />
  ))}
</div>

    </div>
  );
};

export default Catelog;
