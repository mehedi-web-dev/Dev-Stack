import { use } from "react";
import type { TechType } from "../type";

export interface TechnologiesProps {
  TechPromise: Promise<TechType[]>;
}

const Technologies = ({ TechPromise}: TechnologiesProps) => {
    const technologys=use(TechPromise)
  return (
    <div>
     { technologys.map((technology)=>technology.name)}
    </div>
  )
}

export default Technologies;