import Roll from '../assets/Roll.jpg';
import Icecream from '../assets/Icecream.jpg';
import cat1 from '../assets/cat.jpg';

const Catelog = () => {
  const items = [cat1, Roll, Icecream];

  return (
    <div className="w-full h-[700px] px-4 sm:px-10 lg:px-36">
      {/* Header */}
      <div className="text-center mt-14">
        <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-a78577">
          Delivery and Pick Up Options
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-a78577 text-sm sm:text-base font-myfont">
         We make it easy for you to get Magnolia Bakery’s best, wherever you are. Order now for nationwide shipping, place an order to pickup at your local shop, or get in touch with our team to arrange custom catering for your next event.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 justify-center items-center content-center  px-4 sm:px-8">
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
