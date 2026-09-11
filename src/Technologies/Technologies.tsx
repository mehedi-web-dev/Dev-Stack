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
    <div>
   <div>   {<AllTechnology selectedTech={selectedTech} setSelectedTech={setSelectedTech} technologyies={technologyies}></AllTechnology>}</div>
   <div>  {<SelectedTechnology selectedTech={selectedTech} setSelectedTech={setSelectedTech}> </SelectedTechnology>}
     </div>
    </div>
  
  )
}

export default Technologies;