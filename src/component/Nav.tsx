import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    
   <div className="border-b border-[#f1f5f9] sticky top-0 bg-white">
     <div className="md:container mx-auto py-2.5 px-5 flex justify-between items-center">
       {/* logo */}
      <div><img src={logo} alt="logo" className="w-[136.2px] h-8"/></div>
       {/* menu */}
      <div >
        <ul className="flex items-center gap-5 text-[#475569] text-[15px] font-normal font-sans">
          <li><a href="" className="text-[#DB2777] font-medium ">Home</a></li>
          <li><a href="">Technologies</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        </div>
        {/* button */}
        <div className="flex gap-3"> 
          <button className="text-[15px] cursor-pointer  font-medium text-[#475569]">Sign In</button>
          <button className="bg-[#D91B7E] cursor-pointer  text-white text-[15px] font-medium py-2.5 px-5 rounded-full">Sign Up</button>
        </div>
    </div>
   </div>
  );
};

export default Nav;