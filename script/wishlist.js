const createELm=(elm)=>{
    return document.createElement(elm);
  }
  const getElm=(selector)=>{
    return document.querySelector(selector);
  }
// get data from local storage
  const productsData=JSON.parse(localStorage.getItem('wishlistedItems')) || [];

 console.log(productsData,"wish data");
 let length=productsData.length;
 if(length===0){
    getElm('.wishlistItemsCount').innerText=`0 items`;
 }
 else if(length===1){
    getElm('.wishlistItemsCount').innerText=`1 item`;
 }else if(length>1){
    getElm('.wishlistItemsCount').innerText=`${length} items`;
 }

  let flag=false;
  const  appendProductsData=(data)=>{

    getElm('.mensProducts').innerHTML=null;
      data.map((item,ind)=>{
          //  console.log(item.color);
        const mainDiv=createELm('div');
        mainDiv.setAttribute('class','productMainDiv');
        mainDiv.style.border="1px solid #efefef";
{/* <i class="fa-solid fa-xmark"></i> */}
        const crossIconDiv=createELm('div');
        crossIconDiv.setAttribute('class','crossIconDiv');
        const crossIcon=createELm('i');
        crossIcon.setAttribute('class','fa-solid fa-xmark')
        crossIconDiv.addEventListener('click',handleUnWislist);
        function handleUnWislist (){
            let wishlistedItems=JSON.parse(localStorage.getItem('wishlistedItems'));
            let hearticonIds={};
            let newItems=wishlistedItems.filter((currItem)=>{
                if(currItem.id!==item.id){
                    hearticonIds[currItem.id]=true;
                }
                return currItem.id!==item.id;
            })
            localStorage.setItem('hearticon',JSON.stringify(hearticonIds));
            // console.log(newItems,'after filter');
            localStorage.setItem('wishlistedItems',JSON.stringify(newItems));
            mainDiv.style.display="none";
            alert('product remove from wishlist succesfully');
        }

     
        const imageDiv=createELm('img');
        imageDiv.setAttribute('class','mensProductImages');
        imageDiv.src=item.images[0];
        imageDiv.style.width="100%";
        
        const detailsDiv=createELm('div');
        detailsDiv.setAttribute('class','mensDetailsDiv');
       
        const title=createELm('p');
        title.setAttribute('class','mensTitle');
        title.style.fontSize="17px";
        title.style.marginTop="-5px";
        if(item.sub_heading.length>30){
          let subHeading=item.sub_heading.substring(0,25);
          title.innerText=subHeading+"...";
        }else{
          title.innerText=item.sub_heading;
        }
  
        const priceCont=createELm('p');
        priceCont.setAttribute('class','mensPriceCont');
        priceCont.style.paddingLeft="30px";
        const discPricePera=createELm('span');
        discPricePera.innerText="Rs. "+item.dis_price;
        discPricePera.style.fontSize="15px"
        
        const pricePeraCont=createELm('span');
        const pricePeraStrike=createELm('strike');
        pricePeraStrike.innerText="Rs. "+item.price;
        pricePeraCont.style.marginLeft="5px";

        const priceOffCont=createELm("span");
        priceOffCont.innerText=`(${item.discount}% OFF)`;
        priceOffCont.style.marginLeft="5px";

        pricePeraCont.append(pricePeraStrike);
        priceCont.append(discPricePera,pricePeraCont,priceOffCont);
        detailsDiv.append(title,priceCont);

        const bagBtn=createELm('button');
        bagBtn.setAttribute('class','moveBagBtn');
        bagBtn.addEventListener('click',handleMoveBag);
        bagBtn.innerText="MOVE TO BAG";
        function handleMoveBag(){
           let cartItems=JSON.parse(localStorage.getItem('cartItems')) || [];
           let wishlistedItems=JSON.parse(localStorage.getItem('wishlistedItems'));

            cartItems.push(item);
            localStorage.setItem('cartItems',JSON.stringify(cartItems));
           
    //   remove from wishlist
            let hearticonIds={};
           let newItems=wishlistedItems.filter((currItem)=>{
            if(currItem.id!==item.id){
                hearticonIds[currItem.id]=true;
            }
               return currItem.id!==item.id;
           })
           localStorage.setItem('hearticon',JSON.stringify(hearticonIds));
           localStorage.setItem('wishlistedItems',JSON.stringify(newItems));
           mainDiv.style.display="none";

           let cartCountDiv=getElm('.cartCounts');
           cartCountDiv.style.display="visible";
           cartCountDiv.innerText=cartItems.length;
           window.location.reload();

           alert('product added in bag succesfully');


        }
        crossIconDiv.append(crossIcon);
        mainDiv.append(crossIconDiv,imageDiv,detailsDiv,bagBtn);
        // mainDiv.append(imageDiv,detailsDiv,bagBtn);
  
         const mensProducts=getElm('.mensProducts');
  
        mensProducts.append(mainDiv);

      })
  
    }


    appendProductsData(productsData);