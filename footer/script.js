function Footer(){
    return `    <div id="footermain">
    <div id="links1">
        <div class="online">
            <p>ONLINE SHOPPING</p>
            <button onclick="subway()">Men</button>
            <br>
            <button onclick="subway1()">Women</button>
            <br>
            <button onclick="subway2()">Kids</button>
            <br>
            <button onclick="subway3()">Home & Living</button>
            <br>
            <button onclick="subway4()">Beauty</button>
            <br>
            <button onclick="subway()">Gift Cards</button>
            <br>
            <button class="sub1" onclick="subway4()" >Myntra Insider <sup style="color: white;background-color: red;">New</sup></button>
        </div>
        <div class="online">
            <p>USEFUL LINKS</p>
            <button onclick="subway()">Contact Us</button>
            <br>
            <button onclick="subway1()">FAQ</button>
            <br>
            <button onclick="subway2()">T&C</button>
            <br>
            <button onclick="subway3()">Terms Of Use</button>
            <button onclick="subway4()">Track Orders</button>
            <br>
            <button onclick="subway()">Shipping</button>
            <br>
            <button onclick="subway()">Cancellation</button>
            <br>
            <button onclick="subway1()">Returns</button>
            <br>
            <button onclick="subway2()">Whitehat</button>
            <br>
            <button onclick="subway3()">Blogs</button>
            <br>
            <button onclick="subway4()">Careers</button>
            <br>
            <button onclick="subway()">Privacy policy</button>
            <br>
            <button onclick="subway4()">Site Map</button>
            <br>
            <button onclick="subway()">Corporate Information</button>
        </div>
        <div id="social">
            <p>EXPERIENCE MYNTRA APP ON MOBILE</p>
            <img id="play1" src="https://www.seekpng.com/png/detail/20-202991_get-it-on-google-play-logo-png-vector.png" alt="">
            <p>KEEP IN TOUCH</p>
            <img id="keep1" src="data:image/png;base64,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" alt="">
        </div>
        <div id="firstlast">
            <div id="ori1">
                <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="">
                <p>100% ORIGINAL guarantee for all products at myntra.com</p>
            </div>
            <div id="ret1">
                <img src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" alt="">
                <p>Return within 30days of receiving your order</p>
            </div>
        </div>
    </div>
    <div id="popular1">
        <h5>POPULAR SEARCHES</h5>
        <p>
            Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees
        </p>
    </div>
    <div id="contact1">
        <div style="display: flex">
            <p>In case of any concern,</p>
            <h6 style="color: #526cd0; margin-left:10px; margin-top:2px;">Contact Us</h6>
        </div>
        <div>© 2022 www.myntra.com. All rights reserved.</div>
    </div>
</div>`
}
export {Footer};

function mainFooter(){
    return ` <div id="footermain">
    <div id="links1">
        <div class="online">
            <p>ONLINE SHOPPING</p>
            <button class="fotterButtons">Men</button>
            <br>
            <button class="fotterButtons">Women</button>
            <br>
            <button class="fotterButtons">Kids</button>
            <br>
            <button class="fotterButtons" >Home & Living</button>
            <br>
            <button class="fotterButtons">Beauty</button>
            <br>
            <button class="fotterButtons">Gift Cards</button>
            <br>
            <button class="sub1 fotterButtons"  >Myntra Insider <sup style="color: white;background-color: red;">New</sup></button>
        </div>
        <div class="online">
            <p>USEFUL LINKS</p>
            <button class="fotterButtons">Contact Us</button>
            <br>
            <button class="fotterButtons">FAQ</button>
            <br>
            <button class="fotterButtons">T&C</button>
            <br>
            <button class="fotterButtons">Terms Of Use</button>
            <button class="fotterButtons">Track Orders</button>
            <br>
            <button class="fotterButtons">Shipping</button>
            <br>
            <button class="fotterButtons">Cancellation</button>
            <br>
            <button class="fotterButtons">Returns</button>
            <br>
            <button class="fotterButtons">Whitehat</button>
            <br>
            <button class="fotterButtons">Blogs</button>
            <br>
            <button class="fotterButtons">Careers</button>
            <br>
            <button class="fotterButtons">Privacy policy</button>
            <br>
            <button class="fotterButtons">Site Map</button>
            <br>
            <button class="fotterButtons">Corporate Information</button>
        </div>
        <div id="social">
            <p>EXPERIENCE MYNTRA APP ON MOBILE</p>
            <img id="play1" src="https://www.seekpng.com/png/detail/20-202991_get-it-on-google-play-logo-png-vector.png" alt="">
            <p>KEEP IN TOUCH</p>
            <img id="keep1" src="data:image/png;base64,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" alt="">
        </div>
        <div id="firstlast">
            <div id="ori1">
                <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="">
                <p>100% ORIGINAL guarantee for all products at myntra.com</p>
            </div>
            <div id="ret1">
                <img src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" alt="">
                <p>Return within 30days of receiving your order</p>
            </div>
        </div>
    </div>
    <div id="popular1">
        <h6 style="color: black; font-weight:300px">POPULAR SEARCHES</h6>
        <p class="peraFontSize">
            Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees
        </p>
    </div>
    <div id="contact1">
        <div style="display: flex">
            <p>In case of any concern</p>
            <h6 style="color: #526cd0; margin-left:10px; margin-top:3px; cursor:pointer">Contact Us</h6>
        </div>
        <div>© 2022 www.myntra.com. All rights reserved.</div>
    </div>
    <div id="address1">
        <h6 style="color: black; font-weight:300px">Registered Office Address</h6>
        <div style="display: flex;justify-content: space-between;">
            <p class="peraFontSize">Buildings Alyssa,<br>
                Begonia and Clover situated in Embassy Tech Village,<br>
                Outer Ring Road,<br>
                Devarabeesanahalli Village,<br>
                Varthur Hobli,<br>
                Bengaluru - 560103, India</p>
            <h5 style="padding-top: 100px;" class="peraFontSize">CIN: U72300KA2007PTC041799 <br>
                Telephone: +91-80-61561999</h5>
        </div>
    </div>
    <div class="details2">
        <strong style="font-size: 14px;color: #535766;" class="headingMargin">ONLINE SHOPPING MADE EASY AT MYNTRA</strong>
        <br>
        <p class="peraFontSize">If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.</p>
    </div>
    <div id="details3">
        <strong style="font-size: 14px;color: #535766;" class="headingMargin">BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</strong>
        <br>
        <p class="peraFontSize">Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.</p>
        <ol>
            <li style="margin-top:10px;"><strong style="font-size: 14px;color: #535766;">Smart men's clothing</strong>- <span class="peraFontSize">At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wear your attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit. </span></li>
            <li style="margin-top:10px;"><strong style="font-size: 14px;color: #535766;">Trendy women's clothing </strong>-<span class="peraFontSize"> Online shopping for women at Myntra is a mood-elevating experience. Look hip and stay comfortable with chinos and printed shorts this summer. Look hot on your date dressed in a little black dress, or opt for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic spirit of nautical fashion. Choose your favourites from among Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up with skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear combination for the cool urbanite. Our grand sarees and lehenga-choli selections are perfect to make an impression at big social events such as weddings. Our salwar-kameez sets, kurtas and Patiala suits make comfortable options for regular wear </span></li>
            <li style="margin-top:10px;"><strong style="font-size: 14px;color: #535766;">Fashionable footwear </strong>- <span class="peraFontSize">While clothes maketh the man, the type of footwear you wear reflects your personality. We bring you an exhaustive lineup of options in casual shoes for men, such as sneakers and loafers. Make a power statement at work dressed in brogues and oxfords. Practice for your marathon with running shoes for men and women. Choose shoes for individual games such as tennis, football, basketball, and the like. Or step into the casual style and comfort offered by sandals, sliders, and flip-flops. Explore our lineup of fashionable footwear for ladies, including pumps, heeled boots, wedge-heels, and pencil-heels. Or enjoy the best of comfort and style with embellished and metallic flats.</span></li>
            <li style="margin-top:10px;"><strong style="font-size: 14px;color: #535766;">Stylish accessories </strong>- <span class="peraFontSize">Myntra is one of the best online shopping sites for classy accessories that perfectly complement your outfits. You can select smart analogue or digital watches and match them up with belts and ties. Pick up spacious bags, backpacks, and wallets to store your essentials in style. Whether you prefer minimal jewellery or grand and sparkling pieces, our online jewellery collection offers you many impressive options. </span></li>
            <li style="margin-top:10px;"><strong style="font-size: 14px;color: #535766;">Fun and frolic</strong> - <span class="peraFontSize">Online shopping for kids at Myntra is a complete joy. Your little princess is going to love the wide variety of pretty dresses, ballerina shoes, headbands and clips. Delight your son by picking up sports shoes, superhero T-shirts, football jerseys and much more from our online store. Check out our lineup of toys with which you can create memories to cherish.
            </span></li>
            <li><strong style="font-size: 14px;color: #535766;">Beauty begins here </strong>- <span class="peraFontSize">You can also refresh, rejuvenate and reveal beautiful skin with personal care, beauty and grooming products from Myntra. Our soaps, shower gels, skin care creams, lotions and other ayurvedic products are specially formulated to reduce the effect of aging and offer the ideal cleansing experience. Keep your scalp clean and your hair uber-stylish with shampoos and hair care products. Choose makeup to enhance your natural beauty. </span></li>
        </ol>
    </div>
    <div class="details2">
        <strong style="font-size: 14px;color: #535766;" >AFFORDABLE FASHION AT YOUR FINGERTIPS</strong>
        <br>
        <p class="peraFontSize">Myntra is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.</p>
    </div>
</div>`
}
export {mainFooter};