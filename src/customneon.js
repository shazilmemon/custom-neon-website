import React from "react";
import { MdLocalShipping } from 'react-icons/md'
import { RiStarSFill } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiFillShopping } from 'react-icons/ai'
import { MdComputer } from 'react-icons/md'
import { SlEnergy } from 'react-icons/sl'
import { GiBiceps } from 'react-icons/gi'
import { GiDrill } from 'react-icons/gi'
import styles from './customneon.module.css'
import image from './neonlogo/CustomNeonLogo.png'
import image2 from './neonlogo/neonbackgroundvideo.jpg'
import image3 from './neonlogo/onlinedesigner.jpg'
import image4 from './neonlogo/businesslogos.jpg'
import image5 from './neonlogo/ourstore.jpg'
import today from './neonlogo/today.jpg'
import dog from './neonlogo/dog.jpg'
import hands from './neonlogo/hands.jpg'
import specialhouse from './neonlogo/specialhouse.jpg'
import girl from './neonlogo/girl.jpg'
import wannastyle from './neonlogo/wannastyle.jpg'
import thetaproom from './neonlogo/the taproom.jpg'
import forever from './neonlogo/forever.jpg'
import dothis from './neonlogo/dothis.jpg'
import sundrop from './neonlogo/sundrop.jpg'
import flora from './neonlogo/flora.jpg'
import upandat from './neonlogo/up and at.jpg'
import singer from './neonlogo/singer.jpg'
import electric from './neonlogo/electric.jpg'
import girl1 from './neonlogo/girl 1.jpg'
import girl2 from './neonlogo/girl 2.jpg'
import burger from './neonlogo/burger.jpg'
import cane from './neonlogo/canelicker.jpg'
import benmurphy from './reviews/ben murphy.png'
import tyvillacreses from './reviews/ty villacreses.png'
import kelly from './reviews/kelly boston.png'
import kate from './reviews/kate robbert.png'
const Neon = () => {
  return (

    <>

      <div>


        <div className={styles.headermain}>
          <div className={styles.shippingdiv}>
            <MdLocalShipping className={styles.shippingimg} />
            <p className={styles.shippingpara}>FREE SHIPPING - ALL SINS</p>
          </div>
          <div className={styles.starsmain}>
            <div className={styles.stars}>
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
            <p className={styles.rating}>4.9 GOOGLE RATING</p>
          </div>

          <p className={styles.warranty}>2 YEARS WARRANTY</p>
        </div>


        <div>

          <div className={styles.navbarmain}>
            <h4>HOME</h4>
            <h4>DESIGN YOUR OWN DESIGN</h4>
            <h4>UPLOAD AN IMAGE</h4>
            <img className={styles.logo} src={image} />
            <h4>BUSINESS LOGOS</h4>
            <h4>OUTDOOR SIGNS</h4>
            <h4>SHOP</h4>
            <div className={styles.shopping}>
              <AiOutlineSearch />
              <AiFillShopping className={styles.shoppingbag} />

            </div>
          </div>
        </div>



        <div>
          <iframe  width="1340" height="625" src="https://www.youtube.com/embed/Pi1K2lZR2dc?autoplay=10&controls=0" title="Custom Neon - Makers of the world&#39;s best custom-designed LED neon signs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
          <p className={styles.imagetext}>
            Turn your idea into an eye-catching <br></br>
            LED neon sign
            <div className={styles.button}>
              <button className={styles.design}>Design Your Own Site</button>
              <button className={styles.shop}>Shop Now</button>
              <button className={styles.upload}>Upload An Image</button>


              <button className={styles.off}>GET 10% OFF</button>

            </div>
          </p>
        </div>

        <div>
          <h2 className={styles.middle}>Custom Neon® is America's most affordable supplier of LED<br></br> neon light signs.</h2>
          <div className={styles.para}>
            <p>Let us light up your life with quality LED neon signs for home, business, weddings, events, & more. Take a  </p>
            <p> business logo, song lyrics, a kid's name, or even the shape of your dog, & neon-ify it! We are helping make  </p>
            <p> art accessible with easy-to-design, stylish neon lights. Now there's no excuse not to turn up the brightness! </p>
          </div>
        </div>


        <div className={styles.arrangeimg}>
          <div>
            <img className={styles.image3} src={image3} />
            <button className={styles.imagebutton}>ONLINE DESIGNER</button>
          </div>

          <div className={styles.business}>
            <div>
              <img className={styles.image4} src={image4} />
              <button className={styles.imagebutton2}>BUSINESS AND LOGOS</button>

            </div>
            <div>
              < img className={styles.store} src={image5} />
              <button className={styles.imagebutton3}>OUR STORE</button>
            </div>
          </div>
        </div>


        <div className={styles.middleicons}>

          <div>
            <MdComputer className={styles.computer} />
            <div className={styles.computermain}>
              <h3 className={styles.computerpara}>Custom Designed</h3>
              <p className={styles.computerparagraph}>
                <p>Each LED neon sign or artwork is </p> <p>  designed in-house by our </p> <p>  professional designers. </p>
              </p>

            </div>
          </div>

          <div>
            <SlEnergy className={styles.computer2} />
            <div>
              <h3 className={styles.computerpara2}>Energy & Cost Efficient</h3>
              <p className={styles.energyparagraph}>
                <p>Each LED neon sign or artwork is </p> <p>  designed in-house by our </p> <p>  professional designers. </p>
              </p>
            </div>
          </div>

          <div>
            <GiBiceps className={styles.computer3} />
            <div>
              <h3 className={styles.computerpara3}>Durable</h3>
              <p className={styles.bicepsparagraph}>
                <p>Each LED neon sign or artwork is </p> <p>  designed in-house by our </p> <p>  professional designers. </p>
              </p>
            </div>
          </div>


          <div>
            <GiDrill className={styles.computer} />
            <div>
              <h3 className={styles.computerpara4}>Easy To Install</h3>
              <p className={styles.computerparagraph}>
                <p>Each LED neon sign or artwork is </p> <p>  designed in-house by our </p> <p>  professional designers. </p>
              </p>
            </div>
          </div>


        </div>



        <div className={styles.allimages}>
          <div className={styles.six}>  
          <img className={styles.today} src={today} />
          <img className={styles.today} src={dog} />
          <img className={styles.today} src={hands} />
          <img className={styles.today} src={specialhouse} />
          <img className={styles.today} src={girl} />
          <img className={styles.today} src={wannastyle} />
          </div>
          <div className={styles.twelve}> 
          <img className={styles.today} src={thetaproom} />
          <img className={styles.today} src={forever} />
          <img className={styles.today} src={dothis} />
          <img className={styles.today} src={sundrop} />
          <img className={styles.today} src={flora} />
          <img className={styles.today} src={upandat} />
          </div>
          <div className={styles.eighteen}> 
          <img className={styles.today} src={singer} />
          <img className={styles.today} src={electric} />
          <img className={styles.today} src={girl1} />
          <img className={styles.today} src={girl2} />
          <img className={styles.today} src={burger} />
          <img className={styles.today} src={cane} />
          
          </div>  
        </div>




<div className={styles.imgpara}>

<div>
<h2 className={styles.modern}>MODERN NEON SIGNS</h2>
<p className={styles.modernpara}> 
<p>Popular in the 20th century, neon light signs are making a serious comeback </p>
<p>thanks to a new, safer, more energy efficient and affordable material - LED neon </p>
<p>flex. While vintage neon signs used glass neon tubes, modern neon is allowing a </p>
<p>new generation to enjoy a high quality neon experience with a greater range of</p>
<p>options while costing significantly less! </p>
</p>

<br></br>

<p className={styles.modernpara2}>
<p>Thanks to the affordability, energy efficiency, durability and safety of neon LED </p>   
<p>products, you can now buy neon LED signs and wall decor for a huge variety of </p>
<p>uses. Add a stunning addition to your wedding party, create a neon word sign for </p>
<p>bedroom or home decor, get a custom personalized name sign for the kids room </p>
<p>add a unique touch with neon bar signs, a neon sculpture, or get a customized</p>
<p>neon sign for just about any purpose. </p>
</p>
</div>



<div>
<h2 className={styles.business}>CUSTOM NEON SIGNS FOR BUSINESS</h2>
<p  className={styles.modernpara}>  
<p>Businesses are finding that modern neon flex products can be used for more </p>
<p>than just neon open signs. Hipster neon word lights feature in co-workspaces; </p>
<p>neon wall art adorns coffee shops, bars, restaurants, and diners; neon light up </p>
<p>signs appear in beauty salons and barber shops; neon quote signs are found in</p>
<p>nightclubs and yoga studios </p>
</p>


<br></br>


<p  className={styles.modernpara}>
<p>Food trucks, pop ups, boutiques, hair salons, and entrepreneurial businesses that</p>  
<p>cater for the Instagram generation use neon light up signs to great effect. Want</p>
<p>to get people talking about your business? Add a neon wall decoration as a</p>
<p>backdrop for those all important selfies! Savvy start-ups and in the know</p>
<p>marketing agencies deploy on-trend neon art and quirky signs to generate free</p>
<p>advertising via social media shares </p>
</p>

</div>
</div>








<div className={styles.imgpara}>

<div>
<h2 className={styles.modern}>PERSONALIZED & CUSTOMIZED NEON SIGNS</h2>
<p  className={styles.modernpara}> 
<p>Popular in the 20th century, neon light signs are making a serious comeback </p>
<p>thanks to a new, safer, more energy efficient and affordable material - LED neon </p>
<p>flex. While vintage neon signs used glass neon tubes, modern neon is allowing a </p>
<p>new generation to enjoy a high quality neon experience with a greater range of</p>
<p>options while costing significantly less! </p>
</p>

<br></br>

<p  className={styles.modernpara}>
<p>Thanks to the affordability, energy efficiency, durability and safety of neon LED </p>   
<p>products, you can now buy neon LED signs and wall decor for a huge variety of </p>
<p>uses. Add a stunning addition to your wedding party, create a neon word sign for </p>
<p>bedroom or home decor, get a custom personalized name sign for the kids room </p>
<p>add a unique touch with neon bar signs, a neon sculpture, or get a customized</p>
<p>neon sign for just about any purpose. </p>
</p>
</div>



<div>
<h2 className={styles.business}>GET LIT WITH CUSTOM NEON LIGHTS</h2>
<p  className={styles.modernpara}> 
<p>Businesses are finding that modern neon flex products can be used for more </p>
<p>than just neon open signs. Hipster neon word lights feature in co-workspaces; </p>
<p>neon wall art adorns coffee shops, bars, restaurants, and diners; neon light up </p>
<p>signs appear in beauty salons and barber shops; neon quote signs are found in</p>
<p>nightclubs and yoga studios </p>
</p>


<br></br>


<p  className={styles.modernpara}>
<p>Food trucks, pop ups, boutiques, hair salons, and entrepreneurial businesses that</p>  
<p>cater for the Instagram generation use neon light up signs to great effect. Want</p>
<p>to get people talking about your business? Add a neon wall decoration as a</p>
<p>backdrop for those all important selfies! Savvy start-ups and in the know</p>
<p>marketing agencies deploy on-trend neon art and quirky signs to generate free</p>
<p>advertising via social media shares </p>
</p>

</div>
</div>


<h1 className={styles.reviews}>Our Reviews </h1>

<div className={styles.smallcontainer}>

<div>
<p className={styles.google}>GOOGLE RATING</p>
<p>4.9
 <RiStarSFill/> 
 <RiStarSFill/> 
 <RiStarSFill/> 
 <RiStarSFill/> 
 <RiStarSFill/> 
   316 Reviews
</p>
</div>


<div>
<button className={styles.reviewbutton}>
  Write a Reviews
</button>
</div>
</div>



<div className={styles.reviewsicons}>

<div className={styles.benmurphymain}>
 <div className={styles.benmurphysubmain}>  
<img className={styles.benmurphy} src = {benmurphy}/>
<div> 
<p>Ben Murphy</p>
<RiStarSFill/>
<RiStarSFill/>
<RiStarSFill/>
<RiStarSFill/>
<RiStarSFill/>
<p>20 Days Ago</p>
<div>  
<p className={styles.benmurphypara}>Love Our Custom Logo Neon Sign!Perfect For Our Office</p> </div>
</div>
</div>
</div>

<div  className={styles.tyvillacresesmain}>
<img  className={styles.tyvillacreses} src = {tyvillacreses}/>
</div>



<div  className={styles.kellymain}>
<img  className={styles.kelly} src = {kelly}/>
</div>


<div  className={styles.katemain}>
<img  className={styles.kate} src = {kate}/>
</div>

</div>





















      </div>
    </>
)
}
export default Neon