import  {  FormEvent, useEffect } from 'react'
import {   useNavigate } from 'react-router-dom'


import { useOrderMutation } from '../app/services/mutation';
import { toast } from 'react-toastify';
import { del_all, useCartSelector } from '../app/slices/CartSlice';
import { useLanguageSelector } from '../app/slices/languageSlice';
import { useDispatch } from 'react-redux';




const Payment = () => { 
     const navigate = useNavigate();
     const {mutate, isPending, error,isSuccess}=useOrderMutation();
     const {items,cart_total}=useCartSelector((state)=>state.cartReducer);
     const dispatch = useDispatch();
     const { translations } = useLanguageSelector(
      (state) => state.languageReducer
    );
     const handleSubmit=(e:FormEvent)=>{
      e.preventDefault();
      const transformedItems = items.map((item) => (
        {
        id: item.meal.id ,
        quantity: item.quantity,
        customizations:item.customizations,
      }));
      mutate({meals:transformedItems})
     }
     useEffect(()=>{
      if(isSuccess){
        dispatch(del_all());
        navigate('/')
        toast.success("Order Success");
       
       }
     },[isSuccess])
     useEffect(()=>{
      if(error){ 
        toast.error('order Error');
           
       }
     },[error])
  
  return (
     <div className='container'>

<div className='mt-5 '>
  
  <div className='payment'>
        <div className='d-flex align-items-center section'>
        {/* <Link to='/' style={{textDecoration:'none',backgroundColor:'black',padding:'10px',borderRadius:'5px'  }}><h2  className="logo">تاج</h2></Link>  */}
        
        <div className='d-flex flex-column gap-1'>
        <p style={{ fontSize:'14px',marginRight:'14px',padding:'0px 10px 10px 0'  }}>إتمام الدفع
        </p>
        </div>
        </div>
       
        
        <div className='d-flex justify-content-between my-2'>
         <div>
             <h5 className='text-black text-2xl font-bold'>{translations.Buy}</h5>
         </div>
         <div>
           <h5 className='text-black text-2xl font-bold'>{cart_total} $ </h5>
         </div>
   </div>
        <div className='section'>
     
          
          
          <form className='mt-4' onSubmit={handleSubmit} >
        
        

        {isPending?(
          <button className='pay-button d-flex gap-2 align-items-center justify-content-center' disabled style={{backgroundColor:''}} 
           >Loading
           <div className="spinner-border spinner-border-sm"  role="status">
            <span className="visually-hidden" >Loading...</span>
          </div>
           </button>
        ):(
        
         <button className='pay-button' type='submit' style={{backgroundColor:''}} 
      
         >اكمال الطلب</button>
        )}
          </form>
        </div>
       
        

  </div>
  </div>
     </div>
   
  )
}

export default Payment