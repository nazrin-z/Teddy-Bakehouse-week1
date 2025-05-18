const OrderPage = () => {
  return (
    <div className="w-full h-screen bg-og bg-cover bg-no-repeat">
       <div className="relative flex flex-col items-start ml-10 sm:ml-20 lg:ml-40 h-full justify-center">
        <h1 className="text-6xl lg:text-7xl w-auto lg:w-[800px] font-myfont mt-8">
        This Month's Pudding: Peanut Butter Chocolate Banana Pudding
        </h1>
        <button className="mt-10 px-6 py-3 bg-red-950 text-yellow-100 rounded-full hover:bg-white hover:text-red-950 transition duration-300 font-bold text-lg sm:text-xl lg:text-2xl">
          ORDER NOW
        </button>
        </div>



      </div>
  
  );
};

export default OrderPage;
