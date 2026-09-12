import type { Dispatch, SetStateAction } from "react";
import type { TechType } from "../type";
import TechCard from "./TechCard";

export interface AllTechnologyProps {
  technologyies:TechType[],
  selectedTech:TechType[],setSelectedTech:Dispatch<SetStateAction<TechType[]>>;
}

const AllTechnology = ({ technologyies,selectedTech,setSelectedTech  }: AllTechnologyProps) => {
  
  return (
    <div className=" grid md:grid-cols-3 grid-cols-1 gap-5 md:py-0 md:mr-5 py-10 ">
      {technologyies.map((technology,id)=><TechCard selectedTech={selectedTech} setSelectedTech={setSelectedTech}  technology={technology} key={id}></TechCard>)}
    </div>
  )
}

export default AllTechnology;