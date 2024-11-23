import { useSettingSliceSelector } from "../app/slices/settingSlice";


const Home = () => {
    const { categories } = useSettingSliceSelector((state) => state.settingReducer);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-2 mx-3 ">
      {categories?.map((category)=>(
        <div >
        <div className="meal position-relative overflow-hidden rounded-2 cursor-pointer" >
        <img src={category.image} className="w-full h-72 object-cover"/>
        <div className="meal-layer position-absolute text-center text-black p-2">
        <h3>${category.title}</h3>
        <p>${category.description.split(" ").splice(0,20).join(" ")}</p>
        </div>
        </div>
        </div>
      ))}
      
    </div>
  )
}

export default Home