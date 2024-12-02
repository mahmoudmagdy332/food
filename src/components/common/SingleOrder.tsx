import {  order } from "../../app/type"

const SingleOrder =  ({order,open,handleOpen}:{order:order|undefined,open:boolean,handleOpen:(a: boolean) => void}) => {
    console.log('orderorderorder',order);
    
    return (
    <div className={`${open?'flex':'hidden'} absolute w-screen h-screen left-0 top-0 `}>
    <div className='absolute z-10 w-screen h-screen bg-black opacity-20' onClick={()=>handleOpen(false)}></div>
     <div className="h flex flex-col gap-4 m-8 absolute z-20 w-80 md:w-10/12 bg-white rounded-lg p-4 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="text-yellow-950 font-bold ">
             {order?.meal.name}
        </div>
        <div>
        <h3 className="text-4xl font-bold text-gray-200  mt-10">Ingredient</h3>
         <div className="my-10 container grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
             <div className="flex flex-col gap-2 justify-center items-center">
                <p className="text-black">Rice : {order?.customizations.rice?order?.customizations.rice:order?.meal.rice}</p>
             </div>
             <div className="flex flex-col gap-2 justify-center items-center">
                <p className="text-black">Bread : {order?.customizations.bread?order?.customizations.bread:order?.meal.bread}</p>
             </div>
             <div className="flex flex-col gap-2 justify-center items-center">
                <p className="text-black">Drink : {order?.customizations.drink?order?.customizations.drink:order?.meal.drink}</p>
             </div>
             <div className="flex flex-col gap-2 justify-center items-center">
                <p className="text-black">Salad : {order?.customizations.salad?order?.customizations.salad:order?.meal.salad}</p>
             </div>
         </div>
        </div>

     </div>
  </div>
  )
}

export default SingleOrder