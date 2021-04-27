var products = [];
var nameinput = document.getElementById("Productname");
var searchValue = document.getElementById("searchInput")
var categoryinput = document.getElementById("Productcategory");
var priceinput = document.getElementById("Productprice");
var Descriptioninput = document.getElementById("productDescription");
var inputs = document.getElementsByClassName("form-control");
var addbtn = document.getElementById("addbtn");
var currentIndex;

if(JSON.parse(localStorage.getItem("pro"))!=null)
{
    products=JSON.parse(localStorage.getItem("pro"));
    disblaydata()
}

addbtn.onclick = function () 
{
   if (nameinput.value!=""&&categoryinput.value!=""&&priceinput.value!=""&&Descriptioninput.value!="") 
   {
    if (addbtn.innerHTML=="add product") 
    {
        addproducts();
    }
    else{
        updateproduct();
        addbtn.innerHTML="add product"
    }
       
   }
   else
   {
       alert("all fields should be filled")

   }
    
    disblaydata();
    restform()
}
function disblaydata() {
    var datasum = "";
    for (var i = 0; i < products.length; i++) {
        datasum +=
        `
        <tr><td>${i+1}</td>
        <td> ${products[i].productname}</td>
        <td>${products[i].productcategory}</td>
        <td>${products[i].productprice}</td>
        <td>${products[i].productDiscription}</td>
        <td> <button onclick="delproduct(${i})" class="btn btn-danger" >Delete</button> </td>
        <td> <button onclick="getdata(${i})" class="btn btn-warning" >Update</button> </td>
        </tr>
        `
    }
    document.getElementById("tablebody").innerHTML=datasum
}
function addproducts()
{
    var product =
    {
        productname: nameinput.value,
        productcategory: categoryinput.value,
        productprice: priceinput.value,
        productDiscription: Descriptioninput.value
    }
    products.push(product);
    localStorage.setItem("pro",JSON.stringify(products));
}
function restform()
{
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value=""
        
    }
}
function delproduct(index)
{
    products.splice(index,1)
    disblaydata();
    localStorage.setItem("pro",JSON.stringify(products));
}
searchValue.onkeyup=function(){
    var val=searchValue.value;
    var datasum = "";
    for (var i = 0; i < products.length; i++)
     {
         if (products[i].productname.toLowerCase().includes(val.toLowerCase()))
         {
            datasum +=
            `
            <tr><td>${i+1}</td>
            <td> ${products[i].productname}</td>
            <td>${products[i].productcategory}</td>
            <td>${products[i].productprice}</td>
            <td>${products[i].productDiscription}</td>
            <td> <button onclick="delproduct(${i})" class="btn btn-danger" >Delete</button> </td>
            
            </tr>
            `  
         }
        
    }
    document.getElementById("tablebody").innerHTML=datasum

}
function getdata(index)
{
    nameinput.value=products[index].productname;
    categoryinput.value=products[index].productcategory;
    priceinput.value=products[index].productprice;
    Descriptioninput.value=products[index].productDiscription;
    addbtn.innerHTML="Update product";
    currentIndex=index
}
function updateproduct()
{
    var product =
    {
        productname: nameinput.value,
        productcategory: categoryinput.value,
        productprice: priceinput.value,
        productDiscription: Descriptioninput.value
    }
    products[currentIndex]=product;
    localStorage.setItem("pro",JSON.stringify(products));
}
var nameAlert=document.getElementById("nameAlert");
nameinput.onkeyup=function()
{
   var nameRejex=/^[A-Z][a-z]{3,7}$/;
   if(!nameRejex.test(nameinput.value))
   {
       addbtn.disabled="true";
       nameinput.classList.add("is-invalid");
       nameinput.classList.remove("is-valid");
       nameAlert.classList.remove("d-none")
   }
   else{
      addbtn.removeAttribute("disabled");
      nameinput.classList.add("is-valid");
      nameinput.classList.remove("is-invalid");
      nameAlert.classList.add("d-none")

   }
}

var CategoryAlert=document.getElementById("CategoryAlert");
categoryinput.onkeyup=function()
{
   var CategoryRejex=/^[a-z]{3,7}$/;
   if(!CategoryRejex.test(categoryinput.value))
   {
       addbtn.disabled="true";
       categoryinput.classList.add("is-invalid");
       categoryinput.classList.remove("is-valid");
       CategoryAlert.classList.remove("d-none")
   }
   else{
      addbtn.removeAttribute("disabled");
      categoryinput.classList.add("is-valid");
      categoryinput.classList.remove("is-invalid");
      CategoryAlert.classList.add("d-none")

   }
}
var PriceAlert=document.getElementById("PriceAlert");
priceinput.onkeyup=function()
{
   var PriceRejex=/^[1-9][0-9]{2,4}$/;
   if(!PriceRejex.test(priceinput.value))
   {
       addbtn.disabled="true";
       priceinput.classList.add("is-invalid");
       priceinput.classList.remove("is-valid");
       PriceAlert.classList.remove("d-none")
   }
   else{
      addbtn.removeAttribute("disabled");
      priceinput.classList.add("is-valid");
      priceinput.classList.remove("is-invalid");
      PriceAlert.classList.add("d-none")

   }
}



