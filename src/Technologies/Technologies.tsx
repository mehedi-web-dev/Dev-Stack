import { use, useState } from "react";
import type { TechType } from "../type";
import AllTechnology from "../Technologies/AllTechnology";
import SelectedTechnology from "./SelectedTechnology";

export interface TechnologiesProps {
  TechPromise: Promise<TechType[]>; 
}

const Technologies = ({ TechPromise}: TechnologiesProps) => {
    const technologyies=use(TechPromise)
    const[selectedTech,setSelectedTech]=useState<TechType[]>([])



  return (
    <div className="md:container md:mx-auto md:py-12 py-10 px-5 ">
      <div className="mb-10">
         <h1 className="text-4xl font-bold text-[#1f2937]">
        Explore the{" "}
        <span className="text-pink-500">
          Technologies
        </span>
      </h1>

      <p className="mt-2 text-gray-500">
        Pick one technology per category to build your ideal stack.
      </p>
      </div>

<div className=" grid grid-cols-1 md:grid-cols-12">
    <div className="col-span-9">   {<AllTechnology selectedTech={selectedTech} setSelectedTech={setSelectedTech} technologyies={technologyies}></AllTechnology>}</div>
    <div className="col-span-3"> {<SelectedTechnology selectedTech={selectedTech} setSelectedTech={setSelectedTech}> </SelectedTechnology>}
     </div>
    </div>
    </div>
     
   
  
  )
}

export default Technologies;