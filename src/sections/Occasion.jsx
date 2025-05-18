import Roll from '../assets/Roll.jpg';
import Icecream from '../assets/Icecream.jpg';
import RedC from '../assets/RedC.jpg';
import cat1 from '../assets/cat.jpg';

const Occasion = () => {
  const items = [cat1, Roll, Icecream, RedC,];

  return (
    <div className="w-full h-[700px] bg-green-100 py-16 px-4 sm:px-10 lg:px-36">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-a78577">
          Treats for any Occasion
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-a78577 text-sm sm:text-base font-myfont">
         We’ve got you covered for any holiday, special occasion, or cause for celebration.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 justify-center items-center content-center  px-4 sm:px-8">
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

export default Occasion;