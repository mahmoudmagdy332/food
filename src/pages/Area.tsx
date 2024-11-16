import { useEffect, useState } from "react";
import { meal } from "../app/type";

const Area = () => {
    const [meals,setMeals]=useState<meal[]>([])
    async function getArea(){
      
        const response= await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
        const data:{meals:meal[]}= await response.json();
      console.log(data.meals);
      setMeals(data.meals)
  }
    useEffect(()=>{
        getArea();
    },[])
  return (
    <div className="grid grid-cols-4 gap-x-3 gap-y-12 my-4 mx-1">
        {meals.map((meal)=>(
            <div className=" flex justify-center">
                <div className="rounded-2 text-center cursor-pointer" >
                <i className="fa-solid fa-house-laptop fa-4x"></i>
                <h3>${meal.strArea}</h3>
            </div>
     </div>
        ))}
          
    </div>
  )
}

export default Area