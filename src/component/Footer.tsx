import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="border-t border-[#f1f5f9]">
      <div className="md:container mx-auto py-2.5 px-5 ">
        {/* top */}
        <div className="grid md:grid-cols-4 grid-cols-1 space-y-4  justify-between py-12 border-b border-[#f1f5f9]">
          {/* Logo */}
         <div className="flex space-y-2.5 flex-col items-center md:items-start ">
            <img src={logo} alt="logo" className="w-[136.2px] h-8" />
            <p className="text-[#64748B] font-normal text-[14px] md:text-left text-center font-sans w-[80%] ">Curated tools, technologies, and resources for developers building modern software.</p>
            <ul className="flex items-center gap-5 text-[#475569] text-[14px] font-medium font-sans">
              <li><a href="">GitHub</a></li>
              <li><a href="">Twitter</a></li>
              <li><a href="">Linkedin</a></li>
            </ul>
         </div>
         {/* PRODUCT */}
         <div className="md:flex md:space-y-2.5 md:flex-col hidden  ">
          <h4 className="font-semibold font-sans text-[#0F172A]">PRODUCT</h4>
          <ul className="flex flex-col gap-2 text-[#475569] text-[14px] font-normal font-sans">
            <li><a href="">Home</a></li>
            <li><a href="">Technologies</a></li>
            <li><a href="">Projects</a></li>
          </ul>
         </div>
         {/* COMPANY */}
         <div className="md:flex md:space-y-2.5 md:flex-col hidden">
          <h4 className="font-semibold font-sans text-[#0F172A]">COMPANY</h4>
          <ul className="flex flex-col gap-2 text-[#475569] text-[14px] font-normal font-sans">
            <li><a href="">About</a></li>
            <li><a href="">contact</a></li>
            <li><a href="">Careers</a></li>
          </ul>
         </div>
         {/* LEGAL */}
         <div className="md:flex md:space-y-2.5 md:flex-col hidden  ">
          <h4 className="font-semibold font-sans text-[#0F172A]">LEGAL</h4>
          <ul className="flex flex-col gap-2 text-[#475569] text-[14px] font-normal font-sans">
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms of Service</a></li>
          </ul>
         </div>
         
        
        </div>


      {/* bottom */}
        <div className="flex justify-between  items-center py-5">
          <p className="text-[#64748B] font-normal text-[11px] md:text-[14px] font-sans">© 2026 Dev Stack. All rights reserved.</p>
           <ul className="flex gap-5 text-[#475569] text-[11px] md:text-[14px] font-normal font-sans">
            <li><a href="">Privacy</a></li>
            <li><a href="">Terms</a></li>
          
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;