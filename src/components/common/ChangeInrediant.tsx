import { useEffect, useState } from 'react';
import { ingredient, meal } from '../../app/type';
import { useSettingSliceSelector } from '../../app/slices/settingSlice';
import { useLanguageSelector } from '../../app/slices/languageSlice';
import { useDispatch } from 'react-redux';
import { add_customizations } from '../../app/slices/CartSlice';



const ChangeInrediant = ({meal,open,handleOpen}:{meal:meal|undefined,open:boolean,handleOpen:(a: boolean) => void}) => {
  const [indridiant,setIndridiant]=useState('ricee');
  const { translations } = useLanguageSelector(
    (state) => state.languageReducer
  );
  const dispatch = useDispatch();
  const [riceSelected,setRiceSelected]=useState<ingredient>();
  const [breadSelected,setBreadSelected]=useState<ingredient>();
  const [saladSelected,setSaladSelected]=useState<ingredient>();
  const [drinkSelected,setDrinksSelected]=useState<ingredient>();
  const HandleItem=(item:ingredient)=>{
    switch (indridiant) {
      case 'ricee':
          setRiceSelected(item);
          break;
      case 'braeds':
        setBreadSelected(item);
          break;
      case 'drinks':
        setDrinksSelected(item);
          break;
      case 'salads':
        setSaladSelected(item);
          break;
     }
  }
  const onsubmit=()=>
  {
    dispatch(add_customizations({
      id:meal?.id,
      customization:{
      rice_id:riceSelected?.id,
      bread_id:breadSelected?.id,
      salad_id:saladSelected?.id,
      drink_id:drinkSelected?.id,
    }}))
    handleOpen(false)
  }
  const [selected,setSelected]=useState<ingredient[]>();
  const { ricee,braeds,drinks,salads } = useSettingSliceSelector((state) => state.settingReducer);
  useEffect(()=>{
   switch (indridiant) {
    case 'ricee':
        setSelected(ricee);
        break;
    case 'braeds':
        setSelected(braeds);
        break;
    case 'drinks':
        setSelected(drinks);
        break;
    case 'salads':
        setSelected(salads);
        break;
   }
   console.log('indridiant',indridiant);
   
  },[indridiant])
  useEffect(()=>{
    if(meal){
      if(!riceSelected){
        
        setRiceSelected(meal.rice)
      }
      if(!breadSelected){
        setBreadSelected(meal.bread)
      }
      if(!saladSelected){
        setSaladSelected(meal.salad)
      }
      if(!drinkSelected){
        setDrinksSelected(meal.drink)
      }
    }
   
    
   },[meal])
  return (
    <div>
          <div className={`${open?'flex':'hidden'} absolute w-screen h-screen left-0 top-0 `}>
            <div className='absolute z-10 w-screen h-screen bg-black opacity-20' onClick={()=>handleOpen(false)}></div>
             <div className="h flex flex-col gap-4 m-8 absolute z-20 w-80 md:w-10/12 bg-white rounded-lg p-4 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                      <div className='border-e pe-3 flex flex-col gap-2 border-black'>
                          
                          <div className={`border rounded-2xl p-3 cursor-pointer ${indridiant==='ricee'&&'bg-yellow-200'}`} onClick={()=>setIndridiant('ricee')}>
                             <div className='flex gap-2 items-center'>
                                 <img src={riceSelected?.image} className='w-20 h-20 rounded-full'/>   
                                 <p className="text-black font-semibold text-xl">{riceSelected?.name}</p>  
                             </div>
                             
                          </div>
                          <div className={`border rounded-2xl p-3 cursor-pointer ${indridiant==='braeds'&&'bg-yellow-200 '}`} onClick={()=>setIndridiant('braeds')}>
                             <div className='flex gap-2 items-center'>
                                 <img src={breadSelected?.image} className='w-20 h-20 rounded-full'/>   
                                 <p className="text-black font-semibold text-xl">{breadSelected?.name}</p>  
                             </div>
                             
                          </div>
                          <div className={`border rounded-2xl p-3 cursor-pointer ${indridiant=='drinks'&&'bg-yellow-200'}`} onClick={()=>setIndridiant('drinks')}>
                             <div className='flex gap-2 items-center'>
                                 <img src={drinkSelected?.image} className='w-20 h-20 rounded-full'/>   
                                 <p className="text-black font-semibold text-xl">{drinkSelected?.name}</p>  
                             </div>
                             
                          </div>
                          <div className={`border rounded-2xl p-3 cursor-pointer ${indridiant=='salads'&&'bg-yellow-200'}`} onClick={()=>setIndridiant('salads')}>
                             <div className='flex gap-2 items-center'>
                                 <img src={saladSelected?.image} className='w-20 h-20 rounded-full'/>   
                                 <p className="text-black font-semibold text-xl">{saladSelected?.name}</p>  
                             </div>
                             
                          </div>
                      </div>

                      <div className='grid grid-cols-2 ms-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 '>
                        
                       
                         {selected?.map((item)=>(
                          <div className={`${indridiant==='ricee'&&item.id===riceSelected?.id&&'bg-yellow-100 '}
                          ${indridiant==='braeds'&&item.id===breadSelected?.id&&'bg-yellow-100 '}
                           ${indridiant==='drinks'&&item.id===drinkSelected?.id&&'bg-yellow-100 '}
                            ${indridiant==='salads'&&item.id===saladSelected?.id&&'bg-yellow-100 '}
                           flex  cursor-pointer flex-col justify-center items-center h-40 gap-1 p-1 rounded-xl border`} onClick={()=>HandleItem(item)} key={item.id}>
                                <img src={item.image} className='w-16 h-16 rounded-full'/>   
                                <p className="text-black text-center font-semibold text-xl">{item.name}</p>  

                           </div>
                         ))}
                         
                      </div>
                      <div className='mt-4 flex justify-end'>
                        <button onClick={onsubmit} className='btn btn-warning'>{translations.Submit}</button>
                      </div>
                  </div>
             </div>
          </div>
         
    </div>
  )
}

export default ChangeInrediant