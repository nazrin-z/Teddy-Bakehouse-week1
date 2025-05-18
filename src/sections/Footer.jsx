import I from '../assets/I.png';
import f from '../assets/facebook.png';
import t from '../assets/twitter.png';

const Footer = () => {
  return (
    <footer className="w-full h-[400px] bg-green-100 text-black py-12 px-6">
      <div className="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto gap-10">

        {/* Left Column */}
        <div className="flex-1">
          <ul className="space-y-4 font-serif text-left">
            <li>CAREER</li>
            <li>PRESS</li>
            <li>INTERNATIONAL FRANCHISE</li>
            <li>GIFT CARDS</li>
            <li>SUBSCRIPTION</li>
          </ul>
        </div>

        {/* Center Column */}
        <div className="flex-1">
          <ul className="space-y-4 font-serif text-left">
            <li>HELP CENTER</li>
            <li>REFUNDS & RETURNS</li>
            <li>PROGRAM</li>
            <li>LOYALTY REWARDS</li>
            <li>WHOLESALE</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4 font-serif text-left">
          <h2 className="text-2xl font-bold">Have a question?</h2>
          <p>We're always here to lend a helping hand.</p>
          <p>Consumer Care Team hours are Monday–Friday, 9am–5pm EST</p>
          <p className="font-bold text-lg">CONTACT US</p>
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
