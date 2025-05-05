import Orderpage from "../assets/Orderpage.png";
import H from"../assets/H.png";

const orderpage = () => {
  return (
    <div className=" flex justify-center h-[250px] bg-scroll" >
      <div>
        <img src={Orderpage} alt="orderpage" className="w-full h-[500px] object-cover mt-28 ml-48 " />
      </div>
    </div>
  )
}

export default orderpage