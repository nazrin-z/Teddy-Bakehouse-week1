const Newsletter = () => {
  return (
       <div className="w-full h-[300px] bg-white">
      <div className="text-center mt-24">
        <h1 className="font-fancy text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
        Join our Newsletter
        </h1>
        <p className="mt-10 max-w-3xl mx-auto text-base lg:text-lg font-serif ">
        Get the freshest Magnolia Bakery updates and offers right to your inbox! Plus, enjoy 10% off on your birthday when you share the date with us!
        </p>


        <div className="flex items-center justify-center bg-transparent mt-10 ">
          <div className="relative">
           <input type="email" placeholder="ENTER YOUR MAIL"className="w-[400px]  px-4 pr-10 py-2 border-2 border-black bg-transparent placeholder-black text-black outline-none" />
    <i className='bx bx-right-arrow-alt absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl text-black cursor-pointer'></i>
  </div>
</div>

      </div>

  </div>
  
  );
};

export default Newsletter;
