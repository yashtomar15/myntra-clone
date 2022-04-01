
var data=JSON.parse(localStorage.getItem("homedata"));

function appenddata (product,div){
    product.forEach((elm)=>{
    var image=document.createElement("img");
    image.src=elm;
    div.append(image);
    })
    
}
export default appenddata;
