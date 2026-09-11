import type { Dispatch, SetStateAction } from "react";
import type { TechType } from "../type";

export interface SelectedTechnologyProps {
  selectedTech:TechType[],setSelectedTech:Dispatch<SetStateAction<TechType[]>>;
}

const SelectedTechnology = ({ selectedTech,setSelectedTech }: SelectedTechnologyProps) => {
  
  return (
    <div className="md:container mx-auto md:py-12 py-10 px-5">
      <h1>heloo</h1>
    </div>
  )
}

export default SelectedTechnology;