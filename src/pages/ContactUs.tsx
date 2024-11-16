
const ContactUs = () => {
  return (
    <div>
        <div className="contact min-vh-100 d-flex align-items-center justify-content-center">
    <div className="container w-75">
     <div className="row g-3 pt-5">
    <div className="col-md-6">
    <input type="text" id="nameInput"
      className="text-white form-control bg-transparent" 
      placeholder="Enter Your Name"/>
   <div id="nameAlert" className="alert alert-danger w-100 mt-2 d-none">
    Special character and numbers not allowed
   </div>
    </div>
    <div className="col-md-6">
     <input type="email" id="emailInput" 
     className="text-white form-control bg-transparent" 
     placeholder="Enter Your Email"/>
     <div id="emailAlert" className="alert alert-danger w-100 mt-2 d-none">
    Email not valid *exmple @yyy.zzz
   </div>
     </div>
     <div className="col-md-6">
       <input type="number" id="phoneInput"  className="text-white form-control bg-transparent" placeholder="Enter Your Phone"/>
       <div id="phoneAlert" className="alert alert-danger w-100 mt-2 d-none">
       Enter valid phone number
      </div>
       </div>
       <div className="col-md-6">
         <input type="number" id="ageInput"  className="text-white form-control bg-transparent" placeholder="Enter Your Age"/>
         <div id="ageAlert" className="alert alert-danger w-100 mt-2 d-none">
         Enter valid age
         </div>
         </div>
         <div className="col-md-6">
           <input type="password" id="passwordInput"  className="text-white form-control bg-transparent" placeholder="Enter Your Password"/>
           <div id="passwordAlert" className="alert alert-danger w-100 mt-2 d-none">
           Enter valid password *Minimum eight character, at least one letter and one number:*
           </div>
           </div>
           <div className="col-md-6">
             <input type="password" id="repasswordInput" 
              className="text-white form-control bg-transparent" 
              placeholder="Repassword"/>
             <div id="repasswordAlert"
              className="alert alert-danger w-100 mt-2 d-none">
             Enter valid repassword
             </div>
             </div>
             </div>
             <input type="button" id="submitBtn" disabled value="Submit" className="btn btn-outline-danger d-flex justify-content-center align-items-center m-auto mt-5 "/>
    </div>
   </div>
    </div>
  )
}

export default ContactUs