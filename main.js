
var productName=document.getElementById("product-name");
var productPrice=document.getElementById("product-price");
var productCategory=document.getElementById("product-category");
var productDesc=document.getElementById("product-desc");
var btnProduct=document.getElementById("btn-product");
var inputs=document.getElementsByClassName("form-control");
var alertMassage=document.getElementById("alert-massage");
var alertMassageNumber=document.getElementById("alert-massage-number");
var alertMassageCateg=document.getElementById("alert-massage-cate");
var alertMassageDesc=document.getElementById("alert-massage-desc");




var currentindex="";


if(JSON.parse(localStorage.getItem("productList"))==null){
    var products =[];
}else{
    var products =JSON.parse(localStorage.getItem("productList"));
    displayProduct();
}



btnProduct.onclick=function(){
    if(btnProduct.innerHTML=="add product"){
        addProduct();
    }
else{
    updateProduct();
}
    displayProduct();
    clearForm();
}
function addProduct(){
    product={
        name:productName.value,
        price:productPrice.value,
        category:productCategory.value,
        desc:productDesc.value,
    };
    products.push(product);
   localStorage.setItem("productList",JSON.stringify(products))
    

}

function displayProduct(){


    cartonaa="";
    for(var i=0 ; i<products.length ;i++){
        cartonaa+=`<tr>
        <td>${products[i].name}</td> 
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].desc}</td>
        <td><button type="button" class="btn btn-danger"  onclick="deleteProduct(${i})">delete</button></td>
        <td><button type="button" class="btn btn-warning up-date" onclick="getProductInfo(${i})">update</button></td>
        </tr>`
    }
    document.getElementById("t-body").innerHTML= cartonaa
}
function deleteProduct(index){
    products.splice(index,1)
    displayProduct();
    localStorage.setItem("productList",JSON.stringify(products))
    
}

function clearForm(){
//     console.log(inputs)
//     productName.value="";
// productPrice.value="";
// productCategory.value="";
//    productDesc.value="";
for(var i=0 ; i<inputs.length ;i++){
    inputs[i].value="";
}
}
 function search(searchTxt){
console.log(searchTxt)

cartonaa="";
for(var i=0 ; i<products.length ;i++){
    if(products[i].name.toLowerCase().includes(searchTxt.toLowerCase()))
    cartonaa+=`<tr>
    <td>${products[i].name}</td> 
    <td>${products[i].price}</td>
    <td>${products[i].category}</td>
    <td>${products[i].desc}</td>
    <td><button type="button" class="btn btn-danger"  onclick="deleteProduct(${i})">delete</button></td>
    <td><button type="button" class="btn btn-warning">update</button></td>
    </tr>`
}
document.getElementById("t-body").innerHTML= cartonaa
 }
 function getProductInfo(index){
     currentindex=index;
     
var product=products[index];
productName.value=product.name;
productPrice.value=product.price;
productCategory.value=product.category;
productDesc.value =product.desc;
btnProduct.innerHTML="update Product";
                  
 }
 function updateProduct(){
product={
    name:productName.value,
    price:productPrice.value,
    category:productCategory.value,
    desc:productDesc.value,
};
products[currentindex].name=productName.value;
products[currentindex].price=productPrice.value;
products[currentindex].category=productCategory.value;
products[currentindex].desc=productDesc.value;
localStorage.setItem("productList",JSON.stringify(products))
 }




productName.onkeyup=function(){
    var nameRejex=/^[A-Z][a-z]{2,8}$/;
    if(nameRejex.test(productName.value))
{
productName.classList.add("is-valid")
productName.classList.remove("is-invalid")
btnProduct.removeAttribute("disabled")
alertMassage.classList.add("d-none")


}
else{
    productName.classList.add("is-invalid")
    productName.classList.remove("is-valid")
    btnProduct.disabled="true";
    
    alertMassage.classList.remove("d-none")
    alertMassage.classList.add("d-block")

}
}


productPrice.onkeyup=function(){
    var priceRejex=/^[0-9]{2,8}$/;
    if(priceRejex.test(productPrice.value))
{    btnProduct.removeAttribute("disabled")
    productPrice.classList.add("is-valid")
    productPrice.classList.remove("is-invalid")
    alertMassageNumber.removeAttribute("disabled")
alertMassageNumber.classList.add("d-none")
}
else{
    productPrice.classList.add("is-invalid")
    productPrice.classList.remove("is-valid")

    btnProduct.disabled="true";
    alertMassageNumber.classList.remove("d-none")
    alertMassageNumber.classList.add("d-block")

}
}
productCategory.onkeyup=function(){
    var categRejex=/^([a-z]|[A-Z]|\s){2,15}(\s)?[0-9]{0,4}$/;
    if(categRejex.test(productCategory.value))
{
    productCategory.classList.add("is-valid")
    productCategory.classList.remove("is-invalid")
    alertMassageCateg.removeAttribute("disabled")
    alertMassageCateg.classList.add("d-none")
    btnProduct.removeAttribute("disabled")

}
else{
    productCategory.classList.add("is-invalid")
    productCategory.classList.remove("is-valid")
    btnProduct.disabled="true";
    
    alertMassageCateg.classList.remove("d-none")
    alertMassageCateg.classList.add("d-block")

}
}

productDesc.onkeyup=function(){
    var descRejex=/^([a-z]|[A-Z]|\s){2,100}$/;
    if(descRejex.test(productDesc.value))
{
    productDesc.classList.add("is-valid")
    productDesc.classList.remove("is-invalid")
    alertMassageDesc.removeAttribute("disabled")
    alertMassageDesc.classList.add("d-none")
    btnProduct.removeAttribute("disabled")

}
else{
    productDesc.classList.add("is-invalid")
    productDesc.classList.remove("is-valid")
    btnProduct.disabled="true";
    
    alertMassageDesc.classList.remove("d-none")
    alertMassageDesc.classList.add("d-block")

}
}
