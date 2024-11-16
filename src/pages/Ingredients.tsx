import { useEffect, useState } from "react";
import { ingredient } from "../app/type";

const Ingredients = () => {
  const [ingredients,setIngredients]=useState<ingredient[]>([])
  async function getIngredients(){
    
    const response= await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    const data:{meals:ingredient[]}= await response.json();
    console.log(data.meals);
    setIngredients(data.meals.splice(0,20))
}
  useEffect(()=>{
    getIngredients();
  },[])
  return (
    <div className="grid grid-cols-4 gap-x-3 gap-y-12 my-4 mx-1">
      {ingredients?.map((ingredient)=>(
      <div className="flex justify-center">
      <div className="rounded-2 text-center cursor-pointer" >
      <i className="fa-solid fa-drumstick-bite fa-4x"></i>
      <h3>${ingredient.strIngredient}</h3>
      <p>${ingredient.strDescription.split(" ").splice(0,20).join(" ")}</p>
      </div>
      </div>
      ))}
     
    </div>
  )
}

export default Ingredients