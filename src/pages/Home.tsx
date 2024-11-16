import { useEffect, useState } from "react"
import { category } from "../app/type";

const Home = () => {

  const [categories,setCategories]=useState<category[]>([])
  async function getCategories(){
    
    const response= await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const data:{categories:category[]}= await response.json();
    console.log(data.categories);
    setCategories(data.categories)
}
  useEffect(()=>{
    getCategories();
  },[])
  return (
    <div className="grid grid-cols-4 gap-3 my-2 mx-3 ">
      {categories?.map((category)=>(
        <div >
        <div className="meal position-relative overflow-hidden rounded-2 cursor-pointer" >
        <img src={category.strCategoryThumb} className="w-100"/>
        <div className="meal-layer position-absolute text-center text-black p-2">
        <h3>${category.strCategory}</h3>
        <p>${category.strCategoryDescription.split(" ").splice(0,20).join(" ")}</p>
        </div>
        </div>
        </div>
      ))}
      
    </div>
  )
}

export default Home