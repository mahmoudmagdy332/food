import { createSlice } from '@reduxjs/toolkit'
import { CartType } from '../type';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
     

     
let initialState:CartType={ 
 items:[],
 items_count:0,
 cart_total:0
}
if(window.localStorage.CartStorage){
  const cart_storage=JSON.parse(window.localStorage.CartStorage);
  initialState={
    items:cart_storage.items,
    items_count:cart_storage.items_count,
    cart_total:cart_storage.cart_total,
  }
}

export const CartSlice =  createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add_item: (state,action) => {
    
      if(state.items.find((item)=>item.meal.id===action.payload.meal.id)){
      
        state.items=state.items.map((item)=>{
           if(item.meal.id===action.payload.meal.id){          
            item.quantity=item.quantity+action.payload.quantity;
           }    
           return item;      
        });
    
      }else{
          const item={
          meal:action.payload.meal,
          quantity:action.payload.quantity,
      }
       state.items.unshift(item);
      }
      state.items_count=state.items_count+action.payload.quantity;
      state.cart_total=state.cart_total+(parseFloat(action.payload.meal.price)*action.payload.quantity);
     
      window.localStorage.setItem("CartStorage",JSON.stringify(state));
      
    },
    del_item: (state,action) => {
      state.items.map((item,idx)=>{
        console.log(action.payload);
        if(idx===action.payload){
          console.log(action.payload);
          state.items_count=state.items_count-item.quantity;
          state.cart_total=state.cart_total-(item.quantity*item.meal.price);
        }
      })
      state.items=state.items.filter((_,idx)=>idx!==action.payload);

      window.localStorage.setItem("CartStorage",JSON.stringify(state));      
    },
  //   increase_quantity: (state,action) => { 
     
  //       state.items=state.items.map((item,idx)=>{
  //          if(idx===action.payload){   
  //           if(item.size){
  //             console.log(item.size.quantity) 
  //             if(item.quantity<item.size.quantity){
  //               item.quantity=item.quantity+1;
  //               state.items_count=state.items_count+1;
  //               state.cart_total=state.cart_total+parseFloat(item.product.price);
  //             }
  //           }else{
  //             if(item.quantity<item.product.quantity){
  //               item.quantity=item.quantity+1;
  //               state.items_count=state.items_count+1;
  //               state.cart_total=state.cart_total+parseFloat(item.product.price);
  //             }
  //           }
             
  //          }    
  //          return item;      
  //       }); 
  //       window.localStorage.setItem("CartStorage",JSON.stringify({
  //         'items':state.items,
  //         'items_count':state.items_count,
  //         'cart_total':state.cart_total,
  //       }));
      
  //   },
  //   decrement_quantity: (state,action) => {     
  //     state.items=state.items.map((item,idx)=>{
  //        if(idx===action.payload){
  //         if (item.quantity > 1) {
  //          item.quantity=item.quantity-1;
  //          state.items_count=state.items_count-1;
  //          state.cart_total=state.cart_total-parseFloat(item.product.price);
  //         }
  //          }    
  //        return item;      
  //     }); 
  //     window.localStorage.setItem("CartStorage",JSON.stringify({
  //       'items':state.items,
  //       'items_count':state.items_count,
  //       'cart_total':state.cart_total,
  //     }));
  // },
//   change_quantity: (state,action) => {     
//     state.items=state.items.map((item,idx)=>{
//        if(idx===action.payload.id){
//         state.items_count=state.items_count-item.quantity;
//         state.cart_total=state.cart_total-(item.quantity*item.product.price);  
//         item.quantity=action.payload.quantity;
//         state.items_count=state.items_count+item.quantity;
//         state.cart_total=state.cart_total+(item.quantity*item.product.price); 
//          }   
//        return item;      
//     });  
   

//     window.localStorage.setItem("CartStorage",JSON.stringify({
//       'items':state.items,
//       'items_count':state.items_count,
//       'cart_total':state.cart_total,
//     }));
// },
// change_size: (state,action) => {     
//   state.items=state.items.map((item,idx)=>{
//      if(idx===action.payload.id){
//       item.size=action.payload.size;
//        }   
//      return item;      
//   }); 
//   window.localStorage.setItem("CartStorage",JSON.stringify({
//     'items':state.items,
//     'items_count':state.items_count,
//     'cart_total':state.cart_total,
//   }));
// },


  },
})
export const {add_item,del_item}=CartSlice.actions
export default CartSlice.reducer

export const useCartSelector = useSelector.withTypes<RootState>()