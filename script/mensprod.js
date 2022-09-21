const createELm=(elm)=>{
    return document.createElement(elm);
  }
  const getElm=(selector)=>{
    return document.querySelector(selector);
  }

  // get Products Data
 const productsData=JSON.parse(localStorage.getItem('productsData'));

  console.log(productsData," products data");
  
  // filter 
  const FilterInputs=document.querySelectorAll('.filterInputs');
// console.log(FilterInputs);

  FilterInputs.forEach((item,ind)=>{
   FilterInputs[ind].addEventListener('click',handleClick);
  })

  function handleClick(e){
        console.log(e.target.name);
        let inputName=e.target.name;
        filterData(inputName)
   }

   const filterData=(name)=>{
    let tempData=productsData.mens;
        if(name==="T-shirt" || name==="Lounge Tshirt"){
          let filterData=tempData.filter((item)=>{
            return item.category===name;
          })       
          console.log(filterData);
          initialPageData(filterData);
        }
        else if(name==="Roadster" || name==="Levis" || name==="WROGN"|| name.slice(0,3)==="HRX" || name==="Puma" || name==="Moda Rapido" || name==="Jack & Jones" || name==="Rigo"){
          let filterData=tempData.filter((item)=>{
            return item.brand===name;
          })       
          initialPageData(filterData);
        }else if(name.slice(0,5)==="price") {

          if(name==="price1"){
            priceFilter(tempData,134,2348);      
          }
          else if(name==="price2"){
            priceFilter(tempData,2348,4568); 
          }
          else if(name==="price3"){
            priceFilter(tempData,4568,6776); 
          }
          else if(name==="price4"){
            priceFilter(tempData,6776,8990); 
          }

        }else if(name==="White" || name==="black" ||name==="navy blue" ||name==="green" || name==="red" || name==="blue" || name==="grey"){
          colorFilter(tempData,name);
        }
        else if(name.slice(0,name.length-2)==="discountrange"){
          console.log(name.slice(name.length-2,'dis'));
                discountFilter(tempData,Number(name.slice(name.length-2)));
        }

   }
function priceFilter(data,startPrice,endPrice){
  let filterData=data.filter((item)=>{
    return item.dis_price>=startPrice && item.dis_price<=endPrice;
  })      
  
  if(filterData.length===0){
    alert('Product is not available in this range, Please try other price ranges.');
  }else{
    initialPageData(filterData);
  }
}  

function colorFilter(data,color){
  let filterData=data.filter((item)=>{
    return item.color===color;
  })    
  if(filterData.length===0){
    alert('T-shirt is not available in this color, Please try other colors.');
  }else{
    initialPageData(filterData);
  }  
}

function discountFilter(data,num){
  let filterData=data.filter((item)=>{
    return item.discount>=num;
  })    
  if(filterData.length===0){
    alert('T-shirt is not available at this discount rate, Please try other discount rate.');
  }else{
    initialPageData(filterData);
  }
}

function sort (productsData){
      let data=productsData.mens.sort((a,b)=>{return Number(a.price)-Number(b.price)});
      return data;
}
  // sort(productsData);
  // getElm('#sortBtn').addEventListener('click',function(){
  //    let data=sort(productsData);
  //   console.log(data," sort data");
  //   appendProductsData(data);
  // })
  

  
 
    let ind=0;

    function initialPageData(data){
      let perPageData=data.slice(ind,ind+38);
      appendProductsData(perPageData);
    }
  
 //  display products
  let flag=false;
  const  appendProductsData=(data)=>{
    getElm('.mensProducts').innerHTML=null;
      let displayData=data;
      displayData.map((item,ind)=>{
          //  console.log(item.color);
        const mainDiv=createELm('div');
        mainDiv.setAttribute('class','productMainDiv');
        const imageDiv=createELm('img');
        imageDiv.setAttribute('class','mensProductImages');
        imageDiv.src=item.images[0];
        imageDiv.addEventListener('click',function(){
         window.location.href="productdescription.html";
        })

        let rating=(Math.random() * 4) + 1;
        rating=rating.toString().substring(0,3);
        if(Number(rating)<2.5){
          rating=Number(rating)+1;
        }
        // console.log(rating,"rating")
  
        const ratingDiv=createELm('div');
        ratingDiv.setAttribute('class','ratingDiv');
        const ratingPera=createELm('span');
        ratingPera.innerText=rating;
        ratingPera.style.marginLeft="5px";
        ratingPera.style.marginTop="20px";
        const ratingStar=createELm('span');
        ratingStar.setAttribute('class','fa fa-star checked')
        const partitionPipe=createELm('span');
        partitionPipe.innerText=' |  '; 
        partitionPipe.style.marginRight="5px";
        const reviewCount=createELm('span');
        reviewCount.innerText=item.review;
        ratingDiv.append(ratingPera,ratingStar,partitionPipe,reviewCount);
        
        let heartpresence=JSON.parse(localStorage.getItem('hearticon'));
        const wishlistBtn=createELm('button');
        wishlistBtn.setAttribute('class','wishlistBtn');
        const heartIcon=createELm('i');
        const btnName=createELm('span');
        if(heartpresence && heartpresence[item.id]===true){
          heartIcon.setAttribute('class','fa-solid fa-heart');
          btnName.innerText="WISHLISTED";
        }else{
          heartIcon.setAttribute('class','fa-regular fa-heart');
          btnName.innerText="WISHLIST";
        }
        heartIcon.style.color='#e73a6a';
        heartIcon.style.marginRight="10px"
        wishlistBtn.addEventListener("click",function(){
            heartIcon.setAttribute('class','fa-solid fa-heart')
            btnName.innerText="WISHLISTED";
            let heartData=JSON.parse(localStorage.getItem('hearticon'));
            let wishlistedItems=JSON.parse(localStorage.getItem('wishlistedItems'));
            if(!heartData){
              let initId={};
              initId[item.id]=true;
              localStorage.setItem('hearticon',JSON.stringify(initId));
              localStorage.setItem('wishlistedItems',JSON.stringify([item]));
            }else{
              heartData[item.id]=true;
            localStorage.setItem('hearticon',JSON.stringify(heartData));
            console.log(wishlistedItems,"wish");
            wishlistedItems.push(item);
            console.log(wishlistedItems,"after wish");
            localStorage.setItem('wishlistedItems',JSON.stringify(wishlistedItems));
            }
          heartIcon.style.color='#e73a6a';
        })
        wishlistBtn.append(heartIcon,btnName);
  
        const detailsDiv=createELm('div');
        detailsDiv.setAttribute('class','mensDetailsDiv');
        const brand=createELm('p');
        brand.setAttribute('class','mensBrand');
        brand.innerText=item.brand;
       
        const title=createELm('p');
        title.setAttribute('class','mensTitle');
        if(item.sub_heading.length>30){
          let subHeading=item.sub_heading.substring(0,30);
          title.innerText=subHeading+"...";
        }else{
          title.innerText=item.sub_heading;
        }
  
        const priceCont=createELm('p');
        priceCont.setAttribute('class','mensPriceCont');
        const discPricePera=createELm('span');
        discPricePera.innerText="Rs. "+item.dis_price;
        
        const pricePeraCont=createELm('span');
        const pricePeraStrike=createELm('strike');
        pricePeraStrike.innerText="Rs. "+item.price;
        pricePeraCont.style.marginLeft="5px";
  
        const priceOffCont=createELm("span");
        priceOffCont.innerText=`(${item.discount}% OFF)`;
        priceOffCont.style.marginLeft="5px";
  
        pricePeraCont.append(pricePeraStrike);
        priceCont.append(discPricePera,pricePeraCont,priceOffCont);
        detailsDiv.append(brand,title,priceCont);
        detailsDiv.addEventListener('click',function(){
          window.location.href="productdescription.html";
         })
        mainDiv.append(imageDiv,ratingDiv,detailsDiv);
  
        mainDiv.addEventListener('mouseover',(event)=>{
          mainDiv.innerHTML=null; 
          detailsDiv.style.position='relative';
          detailsDiv.style.top="-26px";
          mainDiv.append(imageDiv,wishlistBtn,detailsDiv)
        })
  
          mainDiv.addEventListener('mouseout',(event)=>{
          mainDiv.innerHTML=null; 
          detailsDiv.style.position='relative';
          detailsDiv.style.top="0px"
          mainDiv.append(imageDiv,ratingDiv,detailsDiv)
        })

        mainDiv.addEventListener('click',function (){
          localStorage.setItem('product',JSON.stringify([item]));
        })
  
         const mensProducts=getElm('.mensProducts');
  
        mensProducts.append(mainDiv);
      })
  
    }

    initialPageData(productsData.mens);

      // paginate data
  // next button
  const nextBtn=getElm('.nextBtn'); 
  const prevBtn=getElm('.prevBtn');

    nextBtn.addEventListener('click',function(){
      ind+=38;
      if(ind>productsData.mens.length-1){
        ind=prooducts.mend.length-38;
      }
      let perPageData=productsData.mens.slice(ind,ind+38);
      appendProductsData(perPageData);
    })


    prevBtn.addEventListener('click',function(){
      ind-=38;
      if(ind<0){
        ind=0;
      }
      let perPageData=productsData.mens.slice(ind,ind+38);
      appendProductsData(perPageData);
    })


  