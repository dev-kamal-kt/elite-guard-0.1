import React from 'react'
import "../styles/brand-bannar.css"

const BrandCarousel = () => {
  return (
    <div className="banner-container">
        <h2 className='section-title'>Best Window Tint for Top Car Brands</h2>
    <div className="slider-track">
      <div className="slidee"><img src="/brands/brand-0.png" alt="Brand 1"/></div>
      <div className="slidee"><img src="/brands/brand-1.png" alt="Brand 2"/></div>
      <div className="slidee"><img src="/brands/brand-2.png" alt="Brand 3"/></div>
      <div className="slidee"><img src="/brands/brand-3.png" alt="Brand 4"/></div>
      <div className="slidee"><img src="/brands/brand-4.png" alt="Brand 5"/></div>
      <div className="slidee"><img src="/brands/brand-5.png" alt="Brand 6"/></div>
      <div className="slidee"><img src="/brands/brand-6.png" alt="Brand 1"/></div>
      <div className="slidee"><img src="/brands/brand-7.png" alt="Brand 2"/></div>
      {/* <div className="slidee"><img src="/brands/brand-0.png" alt="Brand 3"/></div>
      <div className="slidee"><img src="/brands/brand-0.png" alt="Brand 4"/></div>
      <div className="slidee"><img src="/brands/brand-0.png" alt="Brand 5"/></div>
      <div className="slidee"><img src="/brands/brand-0.png" alt="Brand 6"/></div> */}
    </div>
  </div>
  )
}

export default BrandCarousel



/*

100CM = 1M
1M = 350AED

condition => 1m % 50

*/