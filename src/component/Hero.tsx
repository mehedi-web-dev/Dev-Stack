import banner from "../assets/banner-stack.png";
const Hero = () => {
  return (
    <div>
      <div className="md:container md:mx-auto md:py-12 py-10 px-5  grid md:grid-cols-2 grid-cols-1 justify-between items-center">
        {/* Left */}
        <div className="flex flex-col space-y-4">
        <h1 className="text-[42px] md:text-[60px] text-center md:text-left font-bold leading-[1.1]  text-[#1F2937] tracking-[-1.5px]">Build Your Ideal<span className="block bg-linear-to-r from-[#F5722A] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span></h1>
        <p className="text-[16px] md:text-[17px] font-normal text-center md:text-left font-sans text-[#475569] w-full md:w-[70%]">Explore frontend, backend, database, and tooling options,compare them side by side, and put together the stack that fits yournext project.</p>
        {/* bth */}
        <div className="flex gap-4">
          <button className="w-[50%] md:w-41 h-10 font-sans cursor-pointer  rounded-lg bg-linear-to-r from-[#FF6B18] to-[#EC4899] text-[14px] font-medium text-white">Explore Technologies</button>
          <button className="w-[50%] md:w-41 h-10 font-sans cursor-pointer  border border-[#E5E7EB] rounded-lg bg-white text-[14px] font-medium text-[#374151]">Learn More</button>
          </div>
        </div>
        {/* Right */}
        <div>
          <img src={banner} alt="logo" className=" " />
        </div>
      </div>
      
    </div>
  );
};

export default Hero;