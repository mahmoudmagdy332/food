import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MealsQuery } from "../app/services/queries";
import { meal } from "../app/type";
import { useDispatch } from "react-redux";
import { add_item } from "../app/slices/CartSlice";

const Meals = () => {
    const { id } = useParams();
    const {data,refetch}=MealsQuery(id);
    const [meals,setMeals]=useState<meal[]>([]);

    const dispatch = useDispatch();

    const AddToCart=(meal:meal)=>{
        dispatch(add_item({meal:meal,quantity:1})); 
    }
    useEffect(() => {
        if (id) {
        refetch();
        }
      }, [id]);
      useEffect(() => {
        if (data) {
         console.log('sadsadasd',data.data.category.meals)
         setMeals(data.data.category.meals)
        }
      }, [data]);
  return (
    <div className="grid md:grid-cols-2  lg:grid-cols-4 gap-x-3 gap-y-12 my-4 mx-1">
    {meals?.map((meal)=>(
     <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
     <Link to={`/meal/${meal.id}`} >
         <img className="p-8 rounded-t-lg" src={meal.image}/>
     </Link>
     <div className="px-5 pb-5">
         <Link to={`/meal/${meal.id}`} >
             <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{meal.name}</h5>
         </Link>
         <div className="flex items-center mt-2.5 mb-3">
         <span className="text-3xl font-bold text-gray-900 ">${meal.price}</span>
         </div>
         <div className="flex items-center justify-between">
            
             <button onClick={()=>AddToCart(meal)}  className="text-black bg-yellow-200 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</button>
         </div>
     </div>
 </div>
 

    ))}
      {/* <p dangerouslySetInnerHTML={{ __html: meal.description }} /> */}



  </div>
  )
}

export default Meals