import React from 'react'
import { MdGTranslate } from "react-icons/md";

const AnnouncementBar = () => {
  const translate = ()=>{
    document.querySelector(".goog-te-gadget-simple").click()
  }
  return (
    <div id="announcement-bar">
        <a className="phone-number" href="tel:+971564911220" data-translate="phone_number">+971564911220</a>
        <div className="marquee-container">
            <div className="marquee-text" data-translate="marquee_text">
             Beat the UAE Heat with Elite Guard Tinting Services. Premium Tinting Services –
              Contact Us Today for Exclusive Deals! UAE’s Premium Tinting Experts | 📞 Contact Us for Special Offers.
              Premium Window Tinting in the UAE. Experience the Elite Difference. Get Your 50% Special Offer.
               </div>
        </div>
          <div onClick={()=>{translate()}} id="language-select">
            <MdGTranslate color='#0069aa' size={20}/>
            {/* <option value="en" data-translate="lang_en"></option>
            <option value="ar" data-translate="lang_ar">العربية</option> */}
        </div>  
        <div style={{display:"none"}} id="google_translate_element">
        </div> 
    </div>
  )
}
// goog-te-gadget-simple
export default AnnouncementBar