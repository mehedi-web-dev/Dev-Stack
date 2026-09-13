import { FaBarsStaggered } from "react-icons/fa6";
import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    
   <div className="border-b border-[#f1f5f9] sticky top-0 bg-white py-3">
 
     <div className="md:container md:mx-auto md:px-0 py-2.5 px-5 flex justify-between  items-center">
         {/* hm.menu */}
         <div className="md:hidden block ">
         <FaBarsStaggered />
         </div >
       {/* logo */}
      <div ><img src={logo} alt="logo" className="md:w-[136.2px] md:h-8 w-[122.2px] h-6 "/></div>
       {/* menu */}
      <div className="hidden md:block">
        <ul className="flex items-center gap-5 text-[#475569] text-[15px] font-normal font-sans">
          <li><a href="" className="text-[#DB2777] font-medium ">Home</a></li>
          <li><a href="">Technologies</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        </div>
        {/* button */}
        <div className="flex gap-3  "> 
          <button className="md:text-[15px] text-[11px] cursor-pointer  md:font-medium font-semibold text-[#475569]">Sign In</button>
          <button className="bg-[#D91B7E] cursor-pointer  text-white md:text-[15px] text-[11px] md:font-medium font-semibold md:w-23.5 md:h-8 w-14 h-6 rounded-full">Sign Up</button>
        </div>
    </div>
   </div>
  );
};

export default Nav;