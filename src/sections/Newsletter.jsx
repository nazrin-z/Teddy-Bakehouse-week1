import Email from '../assets/Mail.png';
const Newsletter = () => {
  return (
    <div className="flex py-10" >
      <div class="w-1/3 w-[800px] bg-green-200 p-4 text-center  mt-[80px]  ">
     <img src={Email} className='w-full h-[425px]  '/>
  </div>
      <div className="flex flex-col items-center justify-center mr-10">
        <h1 className="font-bold text-a78577 font-fancy text-2xl">Join our Newsletter</h1>
        <p className='mt-4 text-center font-serif text-a78577'>
          Get the freshest Magnolia Bakery updates and offers right to your inbox! Plus, enjoy 10% off on your birthday when you share the date with us!
        </p>

        <div className="mt-8 mr-8 flex flex-col ">
          <input
            type="email"
            placeholder="Enter your email"
            className='px-4 py-4 rounded-md border hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700'
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
