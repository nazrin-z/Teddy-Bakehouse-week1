import I from '../assets/I.png'
import f from '../assets/facebook.png'
import t from '../assets/twitter.png'
import p from '../assets/social.png'
const Footer = () => {
  return (
  <div class="flex w-full h-[350px] bg-ffcbcd">
  <div class="w-1/3 p-4 text-center ">
  <div className='mt-10 font-serif'>
    <ul className='space-y-4 text-left'>
      <li>CAREER</li>
      <li>PRESS </li>
      <li>INTERNATIONAL FRANCHISE</li>
      <li>GIFT CARDS</li>
      <li>SUBSCRIPTION</li>
    </ul>
  </div>
  
  
  </div>
  <div class="w-1/3 p-4 text-center ">
  <div className='mt-10 font-serif'>
    <ul className='space-y-4 text-left'>
      <li>HELP CENTER</li>
      <li>REFUNDS & RETURNS </li>
      <li>PROGRAM</li>
      <li>LOYALTY REWARDS</li>
      <li>WHOLESALE
      </li>
    </ul>
  </div>
  </div>
  <div class="w-1/3  p-4 text-center">
  <div className='space-y-4 text-left'>
 <h1 className='font-serif text-2xl'>Have a question?</h1>
 <h1 className='font-serif'>We're always here to lend a helping hand.</h1>
 <h1 className='font-serif text-left'>Consumer Care Team hours are Monday-Friday, 9am - 5pm EST</h1>
 <h1 className='font-serif text-left font-bold text-lg'>CONTACT US</h1>
 <div className='grid grid-cols-4 gap-0 mr-28'>
 <img src={I} alt='logo' className='h-8 w-8 mt-1'></img>
 <img src={f} alt='logo' className='h-8 w-8  mt-1'></img>
 <img src={t} alt='logo' className='h-8 w-8  mt-1'></img>
 </div>


  </div>
  </div>
</div>
  )
}

export default Footer