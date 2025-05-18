import D1 from '../assets/D1.png';
import D2 from '../assets/D2.png';
import D3 from '../assets/D3.jpg';

const Catelog = () => {
  const items = [D1, D2, D3];

  return (
    <div className="w-full lg:h-[700px] px-4 sm:px-10 lg:px-36 ">
      <div className="text-center mt-14">
        <h1 className="font-fancy text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
          Delivery and Pick Up Options
        </h1>
        <p className="mt-4 max-w-3xl mx-auto  text-base lg:text-lg font-serif">
         We make it easy for you to get Magnolia Bakery’s best, wherever you are. Order now for nationwide shipping, place an order to pickup at your local shop, or get in touch with our team to arrange custom catering for your next event.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:flex justify-center items-center mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 justify-center items-center content-center  px-4 sm:px-8">
  {items.map((img, i) => (
    <img key={i}src={img}className="w-[250px] h-[400px] object-cover rounded-md shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
  ))}
</div>

    </div>
  );
};

export default Catelog;
