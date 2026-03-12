import React from "react";
import "../styles/single-service.css";
import SingleServiceLeft from "./SingleServiceLeft"
import ServiceTemp from "./ServiceTemp";

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
                            <ServiceTemp/>
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
