import type { Dispatch, SetStateAction } from "react";
import type { TechType } from "../type";
import { toast } from "react-toastify";

export interface SelectedTechnologyProps {
  
  children: React.ReactNode;
  selectedTech: TechType[];
  setSelectedTech: Dispatch<SetStateAction<TechType[]>>;
}

const SelectedTechnology = ({selectedTech,setSelectedTech,}: SelectedTechnologyProps) => {
  const handleRemove = (id: number) => {

    const remainingTech = selectedTech.filter((tech) => tech.id !== id);
 setSelectedTech(remainingTech);};
const handleRemoveAll = () => {
setSelectedTech([])
toast.error("Remove All Stack");};

  return (
    <div className="md:container md:mx-auto md:py-12 md:my-0 my-10 mx-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      
      {/* Header */}
      <h2 className="text-lg font-bold text-[#1F2937]">Your Stack </h2>
      {selectedTech.length===0?(<p className="text-[#475569] text-[15px] font-normal font-sans">No technologies selected yet.</p>):(<p className="mt-1 text-sm text-gray-400">{selectedTech.length} technology selected </p>)}


  {/* Selected Technologies */}

 {selectedTech.length===0?(<div className="p-5 flex justify-center items-center mt-2 border border-[#E5E7EB]"><p className="text-[#475569] text-center text-[15px] font-normal font-sans">Your stack is empty</p></div>):( <div className="mt-4 space-y-2">{selectedTech.map((tech) => (
<div key={tech.id}className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
       {/* Left Side */}
 <div className="flex items-center gap-3">
  <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain"/>
  <div><h3 className="text-sm font-semibold text-[#1F2937]">{tech.name}</h3>
  <p className="text-xs text-gray-400"> {tech.category} </p>
   </div> </div>

  {/* Remove Button */}
  <button
    onClick={() => handleRemove(tech.id)} className=" cursor-pointer text-2xl font-light text-gray-400 transition hover:text-red-500" >  ×
     </button></div>))}</div>)}
      {/* Remove All */}
      {selectedTech.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="mt-12 w-full cursor-pointer rounded-lg border border-red-300 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default SelectedTechnology;