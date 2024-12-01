import { meal } from "../../app/type"

const SingleOrder =  ({meal,open,handleOpen}:{meal:meal|undefined,open:boolean,handleOpen:(a: boolean) => void}) => {
  return (
    <div className={`${open?'flex':'hidden'} absolute w-screen h-screen left-0 top-0 `}>
    <div className='absolute z-10 w-screen h-screen bg-black opacity-20' onClick={()=>handleOpen(false)}></div>
     <div className="h flex flex-col gap-4 m-8 absolute z-20 w-80 md:w-10/12 bg-white rounded-lg p-4 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="text-yellow-950 font-bold ">
             {meal?.name}
        </div>
        <div>
        <h3 className="text-4xl font-bold text-gray-200  mt-10">Ingredient</h3>
         <div className="my-10 container grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
             <div className="flex flex-col gap-2 justify-center items-center">
                <img src={meal?.rice.image} className="w-32 h-32 rounded-full"/>
                <p>{meal?.rice.name}</p>
             </div>
             <div className="flex flex-col gap-2 justify-center items-center">
                <img src={meal?.bread.image} className="w-32 h-32 rounded-full"/>
                <p>{meal?.bread.name}</p>
             </div>
             <div className="flex flex-col gap-2 justify-center items-center">
                <img src={meal?.drink.image} className="w-32 h-32 rounded-full"/>
                <p>{meal?.drink.name}</p>
             </div>
             <div className="flex flex-col gap-2 justify-center items-center">
                <img src={meal?.salad.image} className="w-32 h-32 rounded-full"/>
                <p>{meal?.salad.name}</p>
             </div>
         </div>
        </div>

     </div>
  </div>
  )
}

export default SingleOrder