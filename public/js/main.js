let rowData= document.getElementById("rowData");
let searchContainer= document.getElementById("searchContainer");
let submitBtn;
function openSideNav(){
    $(".side-nav-menu").animate({left:'0px'}, 500);
    $(".open-close-icon").removeClass("fa-align-justify");
    $(".open-close-icon").addClass("fa-x");
    $(".links li").eq(0).animate({top:"0px"}, 500);
    $(".links li").eq(1).animate({top:"0px"}, 600);
    $(".links li").eq(2).animate({top:"0px"}, 700);
    $(".links li").eq(3).animate({top:"0px"}, 800);
    $(".links li").eq(4).animate({top:"0px"}, 900);
}

function closeSideNav(){
    let boxWidth= $(".side-nav-menu .nav-tab").outerWidth();
    $(".side-nav-menu").animate({left:-boxWidth}, 500);
    $(".open-close-icon").addClass("fa-align-justify");
    $(".open-close-icon").removeClass("fa-x");
    $(".links li").animate({top:"300px"}, 500);
}
closeSideNav();

$(".side-nav-menu i.open-close-icon").click(function(){
    if($(".side-nav-menu").css('left')=='0px'){
    closeSideNav();
    }
    else{
        openSideNav();
    }
})

function displayMeals(arr){
    let cartona= ``;
    for(let i=0; i<arr.length; i++){
        cartona+=`
    <div class="col-md-3">
     <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer" onclick="getMealDetails('${arr[i].idMeal}')">
     <img src="${arr[i].strMealThumb}" class="w-100">
     <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
     <h3>${arr[i].strMeal}</h3>
     </div>
     </div>
     </div>
        `
    }
    rowData.innerHTML= cartona;
}
searchByName("");


async function getCategories(){
    searchContainer.innerHTML="";
    let response= await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    response= await response.json();
    console.log(response.categories);
    displayCategories(response.categories);
}
function displayCategories(arr){
    let cartona= ``;
    for(let i=0; i<arr.length; i++){
        cartona+=`
    <div class="col-md-3">
     <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer" onclick="getCategoryMeals('${arr[i].strCategory}')">
     <img src="${arr[i].strCategoryThumb}" class="w-100">
     <div class="meal-layer position-absolute text-center text-black p-2">
     <h3>${arr[i].strCategory}</h3>
     <p>${arr[i].strCategoryDescription.split(" ").splice(0,20).join(" ")}</p>
     </div>
     </div>
     </div>
        `
  }
  rowData.innerHTML= cartona;
}

async function getArea(){
    searchContainer.innerHTML="";
    let response= await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    response= await response.json();
    console.log(response.meals);
    displayArea(response.meals);
}
function displayArea(arr){
    let cartona= ``;
    for(let i=0; i<arr.length; i++){
        cartona+=`
    <div class="col-md-3">
     <div class="rounded-2 text-center cursor-pointer" onclick="getAreaMeals('${arr[i].strArea}')">
     <i class="fa-solid fa-house-laptop fa-4x"></i>
     <h3>${arr[i].strArea}</h3>
     </div>
     </div>
        `
  }
  rowData.innerHTML= cartona;
}


async function getIngredients(){
    searchContainer.innerHTML="";
    let response= await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list ");
    response= await response.json();
    console.log(response.meals);
    displayIngredients(response.meals.splice(0,20));
}
function displayIngredients(arr){
    let cartona= ``;
    for(let i=0; i<arr.length; i++){
        cartona+=`
    <div class="col-md-3">
     <div class="rounded-2 text-center cursor-pointer" onclick="getIngredientsMeals('${arr[i].strIngredient}')">
     <i class="fa-solid fa-drumstick-bite fa-4x"></i>
     <h3>${arr[i].strIngredient}</h3>
     <p>${arr[i].strDescription.split(" ").splice(0,20).join(" ")}</p>
     </div>
     </div>
        `
  }
  rowData.innerHTML= cartona;
}

async function getCategoryMeals(category){
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    response= await response.json();
    console.log(response.meals);
    displayMeals(response.meals.splice(0,20));
}

async function getAreaMeals(area){
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    response= await response.json();
    console.log(response.meals);
    displayMeals(response.meals.splice(0,20));
}

async function getIngredientsMeals(ingredients){
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`);
    response= await response.json();
    console.log(response.meals);
    displayMeals(response.meals.splice(0,20));
}

async function getMealDetails(mealID){
    searchContainer.innerHTML="";
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    response= await response.json();
    console.log(response.meals[0]);
    displayMealsDetails(response.meals[0]);
}

function displayMealsDetails(meal){
    searchContainer.innerHTML="";
   let ingredients=``;
   for(let i=0; i<=20; i++){
    if(meal[`strIngredient${i}`]){
        ingredients += `<li class="alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
    }
   }

   let tags= meal.strTags?.split(",");
   if(!tags) tags=[];
   let tagsStr= ``;
   for(let i=0; i<tags.length; i++){
    tagsStr+= `<li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
   }

    let cartona = `<div class="col-md-4">
    <img src="${meal.strMealThumb}" class="rounded-3 w-100">
    <h2>${meal.strMeal}</h2>
    </div>
    
    <div class="col-md-8">
      <h2>Instructions</h2>
      <p>${meal.strInstructions}</p>
      <h3><span class="fw-bolder">Area:</span>${meal.strArea}</h3>
      <h3><span class="fw-bolder">Category:</span>${meal.strCategory}</h3>
      <h3>Recipes:</h3>
      <ul class="list-unstyled d-flex g-3 flex-wrap">
        ${ingredients}
      </ul>
      <h3>Tags:</h3>
      <ul class="list-unstyled d-flex g-3 flex-wrap">
        ${tagsStr}
      </ul>
      <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
      <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
    </div>`
    rowData.innerHTML= cartona;
}

function showSearchInputs(){
    searchContainer.innerHTML= `
    <div class="row py-4">
      <div class="col-md-6">
      <input type="text" onkeyup="searchByName(this.value)" class="text-white form-control bg-transparent border border-top-0" placeholder="Search By Name">
      </div>
      
      <div class="col-md-6">
        <input type="text" onkeyup="searchByFLitter(this.value)" maxlength="1" class="text-white form-control bg-transparent border border-top-0" placeholder="Search By First Litter">
        </div>
    </div>`
    rowData.innerHTML="";
}

async function searchByName(term){
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
    response= await response.json();
    console.log(response.meals);
    response.meals? displayMeals(response.meals) : displayMeals([]);
}

async function searchByFLitter(term){
    term == ""? term = "a" : term = "";
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`);
    response= await response.json();
    console.log(response.meals);
    response.meals? displayMeals(response.meals) : displayMeals([]);
}



function showContacts(){
    rowData.innerHTML=`<div class="contact min-vh-100 d-flex align-items-center justify-content-center">
    <div class="container w-75">
     <div class="row g-3 pt-5">
    <div class="col-md-6">
    <input type="text" id="nameInput" onkeyup='inputsValidation()' class="text-white form-control bg-transparent" placeholder="Enter Your Name">
   <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
    Special character and numbers not allowed
   </div>
    </div>
    <div class="col-md-6">
     <input type="email" id="emailInput" onkeyup='inputsValidation()' class="text-white form-control bg-transparent" placeholder="Enter Your Email">
     <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
    Email not valid *exmple @yyy.zzz
   </div>
     </div>
     <div class="col-md-6">
       <input type="number" id="phoneInput" onkeyup='inputsValidation()' class="text-white form-control bg-transparent" placeholder="Enter Your Phone">
       <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
       Enter valid phone number
      </div>
       </div>
       <div class="col-md-6">
         <input type="number" id="ageInput" onkeyup='inputsValidation()' class="text-white form-control bg-transparent" placeholder="Enter Your Age">
         <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
         Enter valid age
         </div>
         </div>
         <div class="col-md-6">
           <input type="password" id="passwordInput" onkeyup='inputsValidation()' class="text-white form-control bg-transparent" placeholder="Enter Your Password">
           <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
           Enter valid password *Minimum eight character, at least one letter and one number:*
           </div>
           </div>
           <div class="col-md-6">
             <input type="password" id="repasswordInput" onkeyup='inputsValidation()' class="text-white form-control bg-transparent" placeholder="Repassword">
             <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
             Enter valid repassword
             </div>
             </div>
             </div>
             <input type="button" id="submitBtn" disabled value="Submit" class="btn btn-outline-danger d-flex justify-content-center align-items-center m-auto mt-5 ">
    </div>
   </div>`

   submitBtn= document.getElementById('submitBtn');

   
document.getElementById('nameInput').addEventListener('focus', () => 
nameInputTouched = true
)
document.getElementById('emailInput').addEventListener('focus', () => 
emailInputTouched = true
)
document.getElementById('phoneInput').addEventListener('focus', () => 
phoneInputTouched = true
)
document.getElementById('ageInput').addEventListener('focus', () => 
ageInputTouched = true
)
document.getElementById('passwordInput').addEventListener('focus', () => 
passwordInputTouched = true
)
document.getElementById('repasswordInput').addEventListener('focus', () => 
repasswordInputTouched = true
)
}

let nameInputTouched= false;
let emailInputTouched= false;
let phoneInputTouched= false;
let ageInputTouched= false;
let passwordInputTouched= false;
let repasswordInputTouched= false;


function inputsValidation(){
    if(nameInputTouched){
        if(nameValidation()){
            document.getElementById("nameAlert").classList.replace("d-block","d-none");
            document.getElementById("nameInput").classList.add("is-valid");
        }else{
            document.getElementById("nameAlert").classList.replace("d-none","d-block");
            document.getElementById("nameInput").classList.remove("is-valid");
        }
    }
   if(emailInputTouched){
    if(emailValidation()){
        document.getElementById("emailAlert").classList.replace("d-block","d-none");
    }else{
        document.getElementById("emailAlert").classList.replace("d-none","d-block");
    }
   }
   if(passwordInputTouched){
    if(phoneValidation()){
        document.getElementById("phoneAlert").classList.replace("d-block","d-none");
    }else{
        document.getElementById("phoneAlert").classList.replace("d-none","d-block");
    }
   }
    if(ageInputTouched){
    if(ageValidation()){
        document.getElementById("ageAlert").classList.replace("d-block","d-none");
    }else{
        document.getElementById("ageAlert").classList.replace("d-none","d-block");
    }
}
    if(passwordInputTouched){
    if(passwordValidation()){
        document.getElementById("passwordAlert").classList.replace("d-block","d-none");
    }else{
        document.getElementById("passwordAlert").classList.replace("d-none","d-block");
    }
    }
    if(repasswordInputTouched){
    if(repasswordValidation()){
        document.getElementById("repasswordAlert").classList.replace("d-block","d-none");
    }else{
        document.getElementById("repasswordAlert").classList.replace("d-none","d-block");
    }
    }

    if(nameValidation() &&
       emailValidation() &&
       phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
       repasswordValidation()){
         submitBtn.removeAttribute("disabled");
       }else{
        submitBtn.setAttribute("disabled", true);
       }
}

function nameValidation(){
    return /^[a-zA-Z]{1,}$/.test(document.getElementById('nameInput').value);
}
function emailValidation(){
    return /^[a-zA-Z]{1,}$/.test(document.getElementById('emailInput').value);
}
function phoneValidation(){
    return /^[0-9]{1,}$/.test(document.getElementById('phoneInput').value);
}
function ageValidation(){
    return /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById('ageInput').value);
}
function passwordValidation(){
    return /^[0-9]{1,}$/.test(document.getElementById('passwordInput').value);
}
function repasswordValidation(){
   return document.getElementById('repasswordInput').value == document.getElementById('passwordInput').value;
}















