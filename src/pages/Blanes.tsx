import { useEffect, useState } from "react";
import { BlanesQuery } from "../app/services/queries";
import { plan } from "../app/type";

const Blanes = () => {
    const [planes,setPlanes]=useState<plan[]>();
    const {data}=BlanesQuery();
    useEffect(() => {
        if (data) {
            setPlanes(data.data.diets)
        }
      }, [data]);
  return (
    <div className="grid md:grid-cols-2  lg:grid-cols-4 gap-x-3 gap-y-12 my-4 mx-1">
        {planes?.map((plane)=>(
     <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">

        

     <div className="px-5 pb-5">
     
             <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{plane.disease}</h5>
    
         <div className="flex items-center mt-2.5 mb-3">
         <span className="text-3xl font-bold text-gray-900 ">{plane.name}</span>
         </div>
         <div className="text-md font-bold text-gray-900 ">
             {plane.description}
         </div>
         <div className="flex items-center justify-between">
            
         </div>
     </div>
 </div>
 

    ))}
    </div>
  )
}

export default Blanes