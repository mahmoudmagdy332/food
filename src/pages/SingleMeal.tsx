import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MealQuery } from "../app/services/queries";
import { meal } from "../app/type";
import { add_item } from "../app/slices/CartSlice";
import { useDispatch } from "react-redux";
import InputSpinner from "../components/common/InputSpinner";
import Cookies from "js-cookie";
import Loader from "../components/common/Loader";
import { useLanguageSelector } from "../app/slices/languageSlice";
const SingleMeal = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [meal,setMeal]=useState<meal>();
    const navigate=useNavigate();
    const token=Cookies.get("access_token")
    const {data,refetch,isLoading}=MealQuery(id);
    const [quantity,setQuantity]=useState(1);

    const { translations } = useLanguageSelector(
      (state) => state.languageReducer
    );


    
    const AddToCart=()=>{
        dispatch(add_item({meal:meal,quantity:1})); 
    }
    const decrementQuantity=()=>{
      if(quantity>1){
        setQuantity(quantity-1)
      }
    }
    const increaseQuantity=()=>{

          setQuantity(quantity+1)
      
    }
    const buyHandle = () => {
     if(token){
        navigate('/payment')
     }
     else{
       navigate('/login')
     }
      
    }
 

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  
    if (id) {
        refetch();
        }
  },[id])
  useEffect(() => {
    if (data) {
     setMeal(data.data.meal)
    }
  }, [data]);
  if(isLoading)
    return <Loader/>
  return (

    <div className='container mt-lg-5 pt-5 mb-2'>
         
        <div className='row d-flex justify-content-center justify-content-lg-start mt-4'>
        <div className='col-12 col-md-8 col-lg-4 ' >
         <img src={meal?.image} className="rounded-full"/>
         </div>
         <div className='col-12 col-lg-8  product-select-body px-md-5'>
              <h4 className=" text-warp product-select-body-name ">{meal?.name}</h4>
              <div className='d-flex align-items-center'>
              <p className='ms-3 text-2xl font-bold '>{meal?.price} <span>$</span></p>
              </div>
            
              {meal?.description&&(
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: meal?.description }} />
              )}
              
             
     
              <div className='row  product-select-body-details-model'>
              <div className='col result_1'><span>          
              {translations.diabetes}
              </span></div>
                <div className='col result'>{meal?.diabetes?<p className="text-green-300">yes</p>:<p className="text-red-300">No</p>} </div>       
            </div>
         
         
   <div className='row  product-select-body-details-model'>
              <div className='col result_1'><span>          
              {translations.cancer}
              </span></div>
                <div className='col result'>{meal?.cancer?<p className="text-green-300">yes</p>:<p className="text-red-300">No</p>} </div>       
            </div>
          

<div className='row  product-select-body-details-model'>
              <div className='col result_1'><span>          
              {translations.asthma}              </span></div>
                <div className='col result'>{meal?.asthma?<p className="text-green-300">yes</p>:<p className="text-red-300">No</p>} </div>       
            </div>


            <div className='row  product-select-body-details-model'>
              <div className='col result_1'><span>          
              {translations.hypertension}              </span></div>
                <div className='col result'>{meal?.hypertension?<p className="text-green-300">yes</p>:<p className="text-red-300">No</p>} </div>       
            </div>

            <div className='row  product-select-body-details-model'>
              <div className='col result_1'><span>          
              {translations.heart_disease}              </span></div>
                <div className='col result'>{meal?.heart_disease?<p className="text-green-300">yes</p>:<p className="text-red-300">No</p>} </div>       
            </div>
           
       
             
             
          
                  <div className=' row cart-size'>
                  <div className='mb-3 mt-3 d-flex align-items-center justify-content-between'>
                    
                    <p className='m-0 ' >{translations.price}</p>                    
                   
                       <p className='m-0' style={{fontSize:'26px'}}>{meal?.price?meal?.price*quantity:0} <span>$</span></p>
                   </div>
                 
                    <>
                      <div className='   mt-3 mb-3 d-flex align-items-center justify-content-between '>  
                  <p >{translations.quantity}</p>
                      <InputSpinner quantity={quantity}
                      decrementQuantity={decrementQuantity} 
                      increaseQuantity={()=>increaseQuantity()}/>
                     </div>
                     <div className=' col-md-6 d-flex mt-3'>  
                       <button onClick={()=>AddToCart()} className="product-select-button product-select-cart-button">{translations.cart}</button>
                     </div>
                     <div className=' col-md-6 d-flex mt-3'>  
                     <button onClick={buyHandle} className="product-select-button product-select-buy-button">{translations.Buy}</button>
                     </div>
                    
                    </>
            
                  
  
                  </div>               
  
                
          
         </div>
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
  )
}

export default SingleMeal