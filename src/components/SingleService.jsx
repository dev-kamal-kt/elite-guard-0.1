import React from "react";
import "../styles/single-service.css";
import SingleServiceLeft from "./SingleServiceLeft"

const SingleService = () => {
  return (
    <>
      <div id="content" className="site-content">
        <div className="content-inner">
          <div className="container content-container">
            <div className="row content-row">
              <div
                id="primary"
                className="content-area content-full-width col-12"
              >
                <main id="main" className="site-main">
                  <article
                    id="post-19560"
                    className="post-19560 page type-page status-publish has-post-thumbnail hentry"
                  >
                    <div className="entry-content clearfix">
                      {/* SECTION: HERO / INTRO */}
                      <section
                        className="elementor-section elementor-top-section"
                        data-id="7c684cd"
                      >
                        <div className="elementor-container">
                          <div className="row">
                            {/* LEFT COLUMN: IMAGE & TEXT */}
                            <div className="col-50">
                              {/* Image */}
                              <div data-aos="zoom-in-up" className="ct-image-single">
                                <img
                                  fetchPriority="high"
                                  decoding="async"
                                  src="https://everywheretinting.ae/wp-content/uploads/2025/03/everywhere__0002_male-auto-wrapper-with-blade-car-tinting-film-2024-11-27-04-53-10-utc-e1742673855268-762x390.jpg"
                                  width="762"
                                  height="390"
                                  alt="Professional window tinting service in Dubai with quality tinting film"
                                />
                              </div>

                              {/* Intro Text */}
                              <div data-aos="zoom-in-up" className="ct-text-editor">
                                <div className="ct-text-inner">
                                  <h3>
                                    Window Tinting Dubai – Comfort, Style &
                                    Protection
                                  </h3>
                                  <p>
                                    Dubai's climate is known for its intense
                                    heat and bright sunlight, making{" "}
                                    <strong>window tinting</strong> an essential
                                    upgrade for cars, homes, and offices. More
                                    than just a stylish addition, tinting offers
                                    practical benefits that improve comfort,
                                    safety, and efficiency.
                                  </p>
                                </div>
                              </div>

                              {/* Benefits List */}
                              <div  className="ct-text-editor">
                                <div  className="ct-text-inner">
                                  <h2>Why Window Tinting Matters</h2>
                                  <ul>
                                    <li data-aos="zoom-in-up">
                                      <strong>Heat Reduction</strong>
                                      <p
                                        style={{
                                          marginLeft: 0,
                                          marginTop: "5px",
                                          fontSize: "0.95rem",
                                        }}
                                      >
                                        Tinting blocks solar heat, keeping
                                        interiors cooler and reducing reliance
                                        on air conditioning.
                                      </p>
                                    </li>
                                    <li data-aos="zoom-in-up">
                                      <strong>UV Protection</strong>
                                      <p
                                        style={{
                                          marginLeft: 0,
                                          marginTop: "5px",
                                          fontSize: "0.95rem",
                                        }}
                                      >
                                        High‑quality films filter harmful UV
                                        rays, protecting skin and preventing
                                        upholstery from fading.
                                      </p>
                                    </li>
                                    <li data-aos="zoom-in-up">
                                      <strong>Glare Control</strong>
                                      <p
                                        style={{
                                          marginLeft: 0,
                                          marginTop: "5px",
                                          fontSize: "0.95rem",
                                        }}
                                      >
                                        Driving in Dubai's strong sunlight can
                                        be challenging; tinting minimizes glare
                                        for safer journeys.
                                      </p>
                                    </li>
                                    <li data-aos="zoom-in-up">
                                      <strong>Privacy & Security</strong>
                                      <p
                                        style={{
                                          marginLeft: 0,
                                          marginTop: "5px",
                                          fontSize: "0.95rem",
                                        }}
                                      >
                                        Tinted windows provide discretion,
                                        shielding interiors from prying eyes
                                        while adding a layer of protection.
                                      </p>
                                    </li>
                                    <li data-aos="zoom-in-up">
                                      <strong>Energy Efficiency</strong>
                                      <p
                                        style={{
                                          marginLeft: 0,
                                          marginTop: "5px",
                                          fontSize: "0.95rem",
                                        }}
                                      >
                                        In homes and offices, tinting reduces
                                        cooling costs by maintaining balanced
                                        indoor temperatures.
                                      </p>
                                    </li>
                                    <li data-aos="zoom-in-up">
                                      <strong>Aesthetic Appeal</strong>
                                      <p
                                        style={{
                                          marginLeft: 0,
                                          marginTop: "5px",
                                          fontSize: "0.95rem",
                                        }}
                                      >
                                        Sleek, modern finishes enhance the look
                                        of vehicles and buildings, aligning with
                                        Dubai's stylish lifestyle.
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* RIGHT COLUMN: CTA & CONTACT */}
                            <SingleServiceLeft/>
                            
                          </div>
                        </div>
                      </section>
                    </div>
                  </article>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleService;
