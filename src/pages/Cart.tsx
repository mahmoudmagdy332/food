import  { useEffect, useState } from 'react'


import { useDispatch } from 'react-redux'


import { useNavigate } from 'react-router-dom'

import { add_item, del_item, useCartSelector } from '../app/slices/CartSlice'
import InputSpinner from '../components/common/InputSpinner'
import { meal } from '../app/type'
import ChangeInrediant from '../components/common/ChangeInrediant'

const CartScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {items,cart_total,items_count}=useCartSelector((state)=>state.cartReducer);
    const [selectedMeal,setSelectedMeal]=useState<meal>();
    const [open,setOpen]=useState(false);
    const HandleOpen=(a:boolean)=>{
        setOpen(a);
    }
    const Change=(meal:meal)=>{
        setSelectedMeal(meal);
        HandleOpen(true);
    }
    const increaseQuantity=(meal:meal)=>{
        dispatch(add_item({meal:meal,quantity:1})); 
      }
    const decrementQuantity=(meal:meal)=>{
        dispatch(add_item({meal:meal,quantity:-1}))
    }
    const delete_product=(id:number)=>{
       dispatch(del_item(id));
    }
    // const product_select=(productSelect)=>{
    //     dispatch(change_product(productSelect));
    //     navigate('/product');
    //   }
   
   
   
        const buyHandle = () => {
            navigate('/payment',{state:{items:items,cart_total:cart_total}})
          }   
        
      useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
      },[])
    return (
       <>
          <div className='mt-lg-5 pt-5 mb-2'>
           
           <div className='container'>
           <div className='cart-header'>
               <div className='cart-image'>
                   <i className="fa fa-cart-shopping bar cart" >
                       <div className='cart-count'>12</div>
                   </i>
                   <div className='flex flex-col justify-start items-between'>
                       <h4>سلة المشتريات</h4>
                       <p>الخطوة الاولى</p>
                   </div>
               </div>
               <div className=' cart-grow'>
                   <div className='cart-grow'></div>
               </div>
               <div className='payment-image'>
                   <i className="fa-solid fa-credit-card cart"></i>
                   <div className='flex flex-col justify-start items-between '>
                       <h4 className='text-white font-bold text-xl'>اتمام الطلب</h4>
                       <p className='text-gray-300 '>الخطوة الثانية</p>
                   </div>
               </div>
           </div>
           <div className=' container cart-body ' >
               {items_count>0?(
                   <>
                   <div className=' pe-3 hidden md:grid grid-cols-6'>
                   <div className='col-span-3'>المنتج</div>
                   <div className=''>السعر</div>
                   <div className=''>الكمية</div>
                   <div className=''>المجموع</div>
             </div>
             <div className='container relative'>
            {items.map((item,idx)=>(
               <div className=' product-cart' key={idx} >  
               <div className='row'>
               <div className='col-md-6 one flex gap-2 mt-1 mb-1' 
               // onClick={()=>product_select(item.meal)}
               >
                       <img src={item.meal.image} className='product-cart-img'/>
                       <p className='d-block text-gray-800 text-truncate' >{item.meal.name}</p>
                   </div>
                   <div className='col-md-1 mt-3 mb-2 flex justify-between'>
                   <p className='md:hidden text-gray-600' >السعر</p>

                       <p className='text-gray-800 font-semibold text-lg'>{item.meal.price} $</p>
                   </div>
                   <div className='col-md-2  mt-3 mb-2 flex justify-between'>
                   <p className='md:hidden' style={{ color:'rgb(20 20 20 / 66%)' }}>الكمية</p>
                   <InputSpinner quantity={item.quantity}
                   decrementQuantity={()=>decrementQuantity(item.meal)} 
                   increaseQuantity={()=>increaseQuantity(item.meal)}/>
                   </div>
                   <div className='col-md-1  mt-3 mb-2 flex justify-between'>
                   <p className='md:hidden text-gray-800' >المجموع</p>
                   <p className='text-black font-bold text-xl'>{item.meal.price*item.quantity} $</p>                        
                   </div> 
                   <div className='col-md-1  mt-3 mb-2 flex justify-between'>
                  
           
                   <button type="button" onClick={()=>Change(item.meal)} className="underline text-yellow-700  text-nowrap">
                     Change Ingredient
                   </button>
                    
                  
                   </div> 
               </div>    
                       
              
              <div className='absolute end-12 -top-3'>
              <i className="fa-solid fa-xmark" onClick={()=>delete_product(idx)} ></i>
               </div>    
            

               </div>
            ))}
             
             <div className=' product-cart p-2 pt-4' >  
          
               <div className=' mt-3 mb-2 flex justify-between cart-size'>
                   <p  style={{ color:'rgb(20 20 20 / 66%)' }}>عدد الأصناف</p>

                       <p className='text-yellow-900'>{items.length}</p>
                   </div>
                   <div className='  mt-3 mb-2 flex justify-between cart-size'>
                   <p  style={{ color:'rgb(20 20 20 / 66%)' }}>مجموع المنتجات</p>

                   <p className='text-yellow-900'>{items_count}</p>
                   </div>
                   <div className=' mt-3 mb-2 flex justify-between cart-size'>
                   <p  style={{ color:'rgb(20 20 20 / 66%)' }}>الإجمالي</p>
                   <p className='text-yellow-900 font-bold text-xl'>{cart_total}$</p>
                       
                   </div> 
               
             </div>
             <button className='btn-buying  w-full' onClick={buyHandle}>
               إتمام الطلب
             </button>
             </div>
                   </>
               ):(
               <div className='flex gap-2  justify-center items-center'>
                    <div className='cart-image'>
                   <i className="fa fa-cart-shopping bar cart"style={{ borderRadius:'40px',width:'60px',height:'60px' }}>
                   </i>
                   </div>
                  <h6 className='text-black font-bold  text-5xl'>السلة فارغة</h6>
               </div>
               )}
             
           </div>
           </div>
          
       

       </div>
       <ChangeInrediant meal={selectedMeal} open={open} handleOpen={HandleOpen}/>

       </>
    )
}

export default CartScreen
