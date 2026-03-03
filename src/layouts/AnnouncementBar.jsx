import React from 'react'

const AnnouncementBar = () => {
  return (
    <div id="announcement-bar">
        <div className="phone-number" data-translate="phone_number">+971 56 491 1220</div>
        <div className="marquee-container">
            <div className="marquee-text" data-translate="marquee_text">Welcome to Elite Guard Car Care - Premium Services in Dubai & Abu Dhabi - Contact Us for Special Offers!</div>
        </div>
        <select id="language-select">
            <option value="en" data-translate="lang_en">EN</option>
            <option value="ar" data-translate="lang_ar">العربية</option>
        </select>
    </div>
  )
}

export default AnnouncementBar