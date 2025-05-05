import Logo from '../assets/Logo.png'
const Navbar = () => {
  return (
    <div>
      <div className="bg-ffffff h-22 fixed flex w-full z-50" > 
        <a href='#'>
          <img src={Logo} alt='logo' className='h-20 w-25 ml-10 mt-1'></img>
        </a> 
        <div className='flex justify-center items-center py-8 absolute top-0 left-0 w-full z-10'>
   
        <ul className='flex-1 flex justify-center max-lg:hidden gap-10 ml-40 font-serif text-a78577 font-extrabold '>

          <li className='hover:text-eba1a2'>ORDER</li>
          <li className='hover:text-eba1a2'>PRODUCTS</li>
          <li className='hover:text-eba1a2'>HOURS & LOCATIONS</li>
          <li className='hover:text-eba1a2'>ABOUT US</li>
        </ul>
        <div className='flex justify-end mr-20 gap-4 '>
        <i class='bx bxs-search-alt-2'></i>
        <i class='bx bxs-user'></i>
        <i class='bx bxs-cart-alt'></i>
        
      </div>
    
        </div>
      </div>
    </div>
  )
}

export default Navbar