import { FC } from "react"


type InputSpinnerProps={
  quantity:number,
  increaseQuantity:()=>void,
  decrementQuantity:()=>void
}

const InputSpinner:FC<InputSpinnerProps> = ({quantity,increaseQuantity,decrementQuantity}) => {

  return (
    <div>
    <div className='flex relative'>
      <button onClick={decrementQuantity} style={{ 
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'40px',
        height:'40px',
        borderWidth:'2px 0 2px 2px',
        borderColor:'#29443a',
        borderStyle:'solid',
        borderRadius:' 20px 0 0 20px',
        backgroundColor:'white',
        fontSize:'30px',
        color:'#29443a',
        paddingRight:'7px'
       
     }} >-</button>
      <input type="text" value={quantity} readOnly style={{ 
        width:'35px',
        height:'35px',
        fontSize:'18px',
        fontWeight:'bold',
        borderWidth:'2px ',
        borderColor:'#1414144d',
        backgroundColor:'#29443a',
        color:'white',
        borderStyle:'solid',
        textAlign:'center',
        outlineStyle: 'none',
        borderRadius:'100%',
        position:'absolute',
        top:'-20px',
        left:'50%',
        transform:'translateX(-50%',
         }} />
      <button onClick={increaseQuantity} style={{ 
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'40px',
        height:'40px',
        fontSize:'30px',
        borderWidth:'2px 2px 2px 0',
        borderColor:'#29443a',
        borderStyle:'solid',
        borderRadius:' 0 20px 20px 0',
    
        backgroundColor:'white',
        color:'#29443a',
        paddingLeft:'7px'
         }} >+</button>
    </div>
  </div>
  )
}

export default InputSpinner
