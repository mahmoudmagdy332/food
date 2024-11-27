import React, { useEffect, useState } from 'react'
import SubTitle from '../Components/SubTitle'
import image from '../public/images/cat6.jpg'
import InputSpinner from '../Components/InputSpinner'
import { useDispatch, useSelector } from 'react-redux'
import { currencyFormat } from '../Functions'
import { change_quantity, change_size, decrement_quantity, del_item, increase_quantity } from '../redux/slices/CartSlice'
import { change_product } from '../redux/slices/ProductSlice'
import { useNavigate } from 'react-router-dom'
import { setErrorMessage, setSuccessMessage } from '../redux/slices/MessageSlice'
import axios from 'axios'

const CartScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const titles = [{ name: 'سلة المشتريات', link: '' }]
    const {items,items_count,cart_total}=useSelector((state)=>state.CartReducer);
    const {currentUser,token}=useSelector((state)=>state.AuthReducer);
    const [sizeSelect,setSizeSelect]=useState();

    const increaseQuantity=(id)=>{
        dispatch(increase_quantity(id)); 
      }
    const decrementQuantity=(id)=>{
        dispatch(decrement_quantity(id))
    }
    const delete_product=(id)=>{
       dispatch(del_item(id));
    }
    const product_select=(productSelect)=>{
        dispatch(change_product(productSelect));
        navigate('/product');
      }
      const sendSuccess=(message)=>{
        dispatch(setErrorMessage('')) 
        dispatch(setSuccessMessage(message)) 
        const timeSuccess=setTimeout(() => {
            dispatch(setSuccessMessage(''))
          }, 5000); // 5 seconds    
    }
    const sendError=(message)=>{
        dispatch(setSuccessMessage('')); 
        dispatch(setErrorMessage(message)) 
        setTimeout(() => {
            dispatch(setErrorMessage(''))
          }, 5000); // 5 seconds    
    }
    const size_select_handel=(idx,e,item)=>{
        console.log(item.product.product_sizes[e.target.value]);
        dispatch(change_size({id:idx,size:item.product.product_sizes[e.target.value]}))

          if(item.product.product_sizes[e.target.value].quantity<item.quantity){
           sendError(` يوجد ${item.product.product_sizes[e.target.value].quantity} فقط من المقاس`);
           dispatch(change_quantity({id:idx,quantity:item.product.product_sizes[e.target.value].quantity}))
          }
        }
        const buyHandle = () => {
            console.log(token);
      
           if(!token){
            dispatch(modalChange());
           }
           else{
            axios.get(`${URL}/api/auth/check_auth`,{
              headers:{
                  Authorization:`Bearer ${token}`,
                  'Accept':'application/json',
                 ' Content-Type':'application/json'
              }})
            .then(function (response) {
              if(response.data){
                navigate('/payment',{state:{items:items,cart_total:cart_total}})
              }else{
                dispatch(modalChange());
                console.log(response.data)
              }
          
            })
            .catch(function (error) {
              console.log('error');
            });
           }
            
          }   
        
      useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
      },[])
    return (
        <div className='mt-lg-5 pt-5 mb-2'>
            <SubTitle titles={titles} />
            <div className='container'>
            <div className='cart-header'>
                <div className='cart-image'>
                    <i className="fa fa-cart-shopping bar cart" >
                        <div className='cart-count'>12</div>
                    </i>
                    <div className='d-flex flex-column justify-content-start align-items-between'>
                        <h4>سلة المشتريات</h4>
                        <p>الخطوة الاولى</p>
                    </div>
                </div>
                <div className=' cart-grow'>
                    <div className='cart-grow'></div>
                </div>
                <div className='payment-image'>
                    <i class="fa-solid fa-credit-card cart"></i>
                    <div className='d-flex flex-column justify-content-start align-items-between'>
                        <h4>اتمام الطلب</h4>
                        <p>الخطوة الثانية</p>
                    </div>
                </div>
            </div>
            <div className=' container cart-body ' >
                {items_count>0?(
                    <>
                    <div className='row pe-3 d-none d-md-flex'>
                    <div className='col-5'>المنتج</div>
                    <div className='col-2'>السعر</div>
                    <div className='col-2'>الكمية</div>
                    <div className='col-2'>المجموع</div>
              </div>
              <div className='container'>
             {items.map((item,idx)=>(
                <div className=' product-cart' key={idx} >  
                <div className='row'>
                <div className='col-md-5 one  mt-1 mb-1' onClick={()=>product_select(item.product)}>
                        <img src={item.product.images} className='product-cart-img'/>
                        <p className='d-block text-truncate' style={{ width:'60%' }}>{item.product.name}</p>
                    </div>
                    <div className='col-md-2 mt-3 mb-2 d-flex justify-content-between'>
                    <p className='d-md-none' style={{ color:'rgb(20 20 20 / 66%)' }}>السعر</p>

                        <p>{item.product.price} {item.product.currency}</p>
                    </div>
                    <div className='col-md-2  mt-3 mb-2 d-flex justify-content-between'>
                    <p className='d-md-none' style={{ color:'rgb(20 20 20 / 66%)' }}>الكمية</p>
                    <InputSpinner quantity={item.quantity}
                    decrementQuantity={()=>decrementQuantity(idx)} 
                    increaseQuantity={()=>increaseQuantity(idx)}/>
                    </div>
                    <div className='col-md-2  mt-3 mb-2 d-flex justify-content-between'>
                    <p className='d-md-none' style={{ color:'rgb(20 20 20 / 66%)' }}>المجموع</p>
                    <p>{currencyFormat(item.product.price*item.quantity)} {item.product.currency}</p>                        
                    </div> 
                </div>    
                {item.product.size?(
                <div className='row cart-size'>
                <div className='col-md-4 one  mt-1 mb-1 '>
                    <p>المقاس</p>                    
                    </div>
                    <div className='col-md-8 mt-3 mb-2 d-flex justify-content-between'>
                    <select class="form-select" 
                     onChange={(e)=>size_select_handel(idx,e,item)}
                                id="size"
                                name="size"
                            aria-label="Default select example">
                               
                            {item.product.product_sizes.map((size,idx)=>(
                                <option key={idx} disabled={size.quantity<=0?true:false}
                                 selected={item.size&&item.size.size===size.size?true:false} 
                                value={idx}>{size.size}  {size.quantity<=0&&'- نفذت الكمية'}</option>
                            )
                            )}
                

                        </select>
                    </div>                  
                </div>  
                ):''}                
               
                   
              <i className="fa-solid fa-xmark" onClick={()=>delete_product(idx)} ></i>

                </div>
             ))}
              
              <div className=' product-cart p-2 pt-4' >  
              {/* <form style={{ position:'relative' }}>
                    <input type="email" class="form-control" placeholder='أدخل كود الخصم'
                            id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <button type="submit" style={{ position:'absolute',top:'0px',left:'0px'}}
                             class="btn-add">أضافة</button>
                </form> */}
                <div className=' mt-3 mb-2 d-flex justify-content-between cart-size'>
                    <p  style={{ color:'rgb(20 20 20 / 66%)' }}>عدد الأصناف</p>

                        <p>{items.length}</p>
                    </div>
                    <div className='  mt-3 mb-2 d-flex justify-content-between cart-size'>
                    <p  style={{ color:'rgb(20 20 20 / 66%)' }}>مجموع المنتجات</p>

                    <p>{items_count}</p>
                    </div>
                    <div className=' mt-3 mb-2 d-flex justify-content-between cart-size'>
                    <p  style={{ color:'rgb(20 20 20 / 66%)' }}>الإجمالي</p>
                    <p>{currencyFormat(cart_total)} ج.م</p>
                        
                    </div> 
                
              </div>
              <button className='btn-buying  w-100' onClick={buyHandle}>
                إتمام الطلب
              </button>
              </div>
                    </>
                ):(
                <div className='d-flex  justify-content-center align-items-center'>
                     <div className='cart-image'>
                    <i className="fa fa-cart-shopping bar cart"style={{ borderRadius:'40px',width:'60px',height:'60px' }}>
                    </i>
                    </div>
                   <p style={{ fontSize:'18px',display:'inline-block' }}>السلة فارغة</p>
                </div>
                )}
              
            </div>
            </div>
          

        </div>
    )
}

export default CartScreen
