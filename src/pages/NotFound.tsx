

import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div style={{ position:'relative' }}>
   <img src="sf" style={{ 
      width:'100%',
      height:'100vh',
   }}/>
   <div style={{ position:'absolute',
    width:'100%',
    height:'100vh',
    top:0,
    left:0,
    backgroundColor:'#000',
   }}></div>
   <div style={{ position:'absolute',
    width:'100%',
    height:'100vh',
    top:0,
    left:0,
    backgroundColor:'#0000',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
   }}>
    <div className='d-flex  flex-column flex-sm-row'>
    {/* <Link to='/' style={{textDecoration:'none',backgroundColor:'black',padding:'10px',borderRadius:'5px'  }}><h2  className="logo">تاج</h2></Link>  */}
    <p style={{ fontSize:'50px',color:'gold'  }}>404</p>
    </div>
    <p style={{ fontSize:'30px',color:'gray' ,margin:'10px 0' }}>نأسف، الرابط غير موجود</p>
<Link to='/' style={{color:'#003030',marginTop:'10px'}}>الذهاب للصفحة الرئيسية</Link> 

   </div>
    </div>
  )
}

export default NotFound