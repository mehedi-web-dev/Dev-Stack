import { Suspense, useState } from "react";
import Footer from "./component/Footer"
import Hero from "./component/Hero"
import Nav from "./component/Nav"
import type { TechType } from "./type";
import Technologies from "./Technologies/Technologies";

const TechFetch= async():Promise<TechType[]>=>{
  const res=await fetch("/data.json");
  const data=await res.json()
  return data
}
function App() {
  const [TechPromise]=useState(TechFetch())
 

  return (
    <>
   <Nav/>
   <Hero/>
  <Suspense fallback="Loading data">
    <Technologies TechPromise={TechPromise}></Technologies>
  </Suspense>
   <Footer/>
    </>
  )
}

export default App
