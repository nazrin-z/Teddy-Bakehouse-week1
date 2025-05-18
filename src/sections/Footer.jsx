import I from '../assets/I.png';
import f from '../assets/facebook.png';
import t from '../assets/twitter.png';

const Footer = () => {
  return (
    <footer className="w-full sm:h-auto bg-green-100 text-black py-12 px-6">
      <div className="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto gap-10 ">
        <div className="flex-1">
          <ul className="space-y-4 font-serif text-left text-base lg:text-lg">
            <li>CAREER</li>
            <li>PRESS</li>
            <li>INTERNATIONAL FRANCHISE</li>
            <li>GIFT CARDS</li>
            <li>SUBSCRIPTION</li>
          </ul>
        </div>
        <div className="flex-1 text-base lg:text-lg">
          <ul className="space-y-4 font-serif  text-left">
            <li>HELP CENTER</li>
            <li>REFUNDS & RETURNS</li>
            <li>PROGRAM</li>
            <li>LOYALTY REWARDS</li>
            <li>WHOLESALE</li>
          </ul>
        </div>
        <div className="flex-1 space-y-4 font-serif text-left">
          <h2 className="  text-2xl lg:text-4xl font-bold">Have a question?</h2>
          <p className="text-base lg:text-xl">We're always here to lend a helping hand.</p>
          <p className="text-base lg:text-xl">Consumer Care Team hours are Monday–Friday, 9am–5pm EST</p>
          <p className="text-base lg:text-xl">CONTACT US</p>
          <div className="flex space-x-4 mt-4">
            <img src={I} alt="Instagram" className="h-8 w-8" />
            <img src={f} alt="Facebook" className="h-8 w-8" />
            <img src={t} alt="Twitter" className="h-8 w-8" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
