import Logo from '../assets/Logo.png';
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="">
             <a href="#"> <img src={Logo} alt="Logo" className="h-16 w-auto" /> </a>
          </div>

          <ul className="hidden md:flex flex-1 justify-center space-x-10 font-semibold text-black font-serif text-base lg:text-lg">
            <li className="hover:text-green-200 cursor-pointer">ORDER</li>
            <li className="hover:text-green-200 cursor-pointer">PRODUCTS</li>
            <li className="hover:text-green-200 cursor-pointer">HOURS & LOCATIONS</li>
            <li className="hover:text-green-200 cursor-pointer">ABOUT US</li>
          </ul>

          <div className="hidden md:flex items-center space-x-6 text-xl text-[#281612]">
            <i className="bx bxs-search-alt-2 cursor-pointer"></i>
            
            <i className="bx bxs-user cursor-pointer"></i>
            <i className="bx bxs-cart-alt cursor-pointer"></i>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-2xl">

              <i className="bx bx-menu"></i>
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
