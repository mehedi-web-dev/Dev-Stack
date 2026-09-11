import { useState, type Dispatch, type SetStateAction } from "react";
import type { TechType } from "../type";
import { toast } from "react-toastify";

export interface TechCardProps {
  technology: TechType;
  selectedTech:TechType[],setSelectedTech:Dispatch<SetStateAction<TechType[]>>;
}

const TechCard = ({ technology,selectedTech,setSelectedTech }: TechCardProps) => {
 const [selected,setSelected]=useState(false)

 const handleBtn=():void=>{
  if(selected===false){
    setSelected(true)
    toast.success(`${technology.name} add successfully`)
  }
  setSelectedTech([...selectedTech,technology])

 }
  return (
 <div className="w-full max-w-72.5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      
 {/* Top Section */}
  <div className="mb-6 flex items-start justify-between">
        {/* Icon */}
  <div className="flex h-10 w-10 items-center justify-center">
    <img src={technology.icon}alt={technology.name}className="h-8 w-8 object-contain"/></div>

  {/* Badge */}
   <span className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-500">{technology.badge} </span></div>
 {/* Name */}
  <h2 className="mb-2 text-xl font-semibold text-gray-800"> {technology.name}</h2>
 {/* Description */}
  <p className="mb-5 text-sm leading-6 text-gray-500"> {technology.description} </p>
 {/* Bottom Info */}
 <div className="mb-4 flex items-center justify-between">
 {/* Category */}
 <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-500">{technology.category}</span>

 {/* Difficulty */}
 <span className="text-xs text-gray-500">{technology.difficulty}</span>
 {/* Rating */}
  <div className="flex items-center gap-1 text-sm text-gray-600"><span className="text-yellow-500">★</span>
 <span>{technology.rating}</span></div></div>
 {/* Button */}
 <button onClick={handleBtn} disabled={selected===true} className={`w-full cursor-pointer rounded-lg ${selected===false?"bg-[#151b28]":"bg-[#EC4899]"} py-3 text-sm font-medium text-white transition`}>{selected===false?"Add To Stack":"Selected"}</button></div>
  );
};

export default TechCard;