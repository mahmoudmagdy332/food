


import { useState } from 'react';
import { useUserSliceSelector } from '../app/slices/userSlice';
import SingleOrder from '../components/common/SingleOrder';
import {  order } from '../app/type';



const Orders = () => {

  const {orders} = useUserSliceSelector((state) => state.userReducer);
  console.log('dsffsdfsd',orders);
  const [selectedMeal,setSelectedMeal]=useState<order>();
  const [open,setOpen]=useState(false);
  const HandleOpen=(a:boolean)=>{
      setOpen(a);
  }
  const Change=(order:order)=>{
      setSelectedMeal(order);
      HandleOpen(true);
  }
  
  return (
    <div>
        <div className=' mt-lg-5 py-5 mb-2'>
    

        <div className='container'>
           <div className='row'>
           
          
               <div >
                   
               <div className="card min-w-full">
 <div className="card-header">
  <h3 className="card-title">
    Orders
  </h3>
 </div>
 <div className="card-table ">
  <table className="table overflow-x-scroll align-middle text-gray-700 font-medium text-sm">
   <thead>
    <tr>
     <th>
      Meal
     </th>
     <th>
     Meal Price 
     </th>
     <th>
      Quantity
     </th>
     <th>
     Amount Price 
     </th>
     <th>
     
     </th>
    </tr>
   </thead>
   <tbody>
   {orders.map((order)=>(
              <tr key={order.meal.id}>
              <td className='flex items-center gap-2 '>
              <img src={order.meal.image} className='w-12 h-12 rounded-full'/>  
                {order.meal.name}
              </td>
              <td>
              {order.meal.price} $
              </td>
              <td>
              {order.quantity}
              </td>
              <td>
              {order.quantity*order.meal.price} $
              </td>
              <td>
                <button className='btn btn-warning' onClick={()=>Change(order)}>Ditails</button>
              </td>
             </tr>       
      ))}

    
   
   </tbody>
  </table>
 </div>
</div>
                 
               </div>
           </div>
        </div>
        </div>   
        <SingleOrder order={selectedMeal} open={open} handleOpen={HandleOpen}/>
    </div>
  )
}

export default Orders