// homepage  code
function appenddata (product,div){
    product.forEach((elm)=>{
     var image=document.createElement("img");
    image.src=elm;
    div.append(image);
    image.addEventListener("click",showmenspage);
    function showmenspage(){
        window.location.href="mensprod.html";
    }
    })
}
export {appenddata};
