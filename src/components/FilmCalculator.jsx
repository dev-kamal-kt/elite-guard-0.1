import React from "react";
import "../styles/film-calculator.css";

const FilmCalculator = () => {
  return (
    <section className="film-calculator py-5" id="get-your-quote">
      <div className="container text-center">
        <h2 className="section-title">Find the Best Film for Your Windows</h2>
        <p className="section-subtitle text-center">
          Tell us your window size — we’ll calculate price instantly
          <br />
          🇺🇸 USA | 🇩🇪 Germany | 🇬🇧 UK
        </p>
        <div className="calculator-card mx-auto">
          <div className="calculator-header">
            <h5 className="text-white">Get Your Quote</h5>
            <p className="text-white">Premium Window Film Calculation</p>
          </div>
          <div className="calculator-body text-start">
            <form action="" method="post">
              <h6 className="block-title">Select Film Type</h6>
              <div className="row g-3 film-options">
                <div className="col-md-6">
                  <label
                    className="film-option active"
                    data-film-id="1"
                    data-company-price="435.00"
                    data-offer-price="175.00"
                    data-name="Prestige"
                    data-type="Transparent"
                    data-description="Best for natural light and high heat protection\nTransparent – allows natural light\n80% Heat Reduction\n99.99% UV Protection\n97% IR Rejection\nAvailable Colors: 30% &amp; 50%"
                  >
                    <input type="radio" name="film" value="1" checked />
                    <span className="circle prestige">
                      <img
                        src="https://eliteguardcarcare.com/assets/img/window-films/prestige-1769275542-5756.png"
                        alt="Prestige Window Film"
                        style={{
                          width: "28px",
                          height: "28px",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    </span>
                    <div>
                      <strong>Prestige</strong>
                      <small>Transparent</small>
                    </div>
                    <span className="checked-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                  </label>
                </div>
                <div className="col-md-6">
                  <label
                    className="film-option"
                    data-film-id="2"
                    data-company-price="435.00"
                    data-offer-price="175.00"
                    data-name="Silver"
                    data-type="Reflective"
                    data-description="Clear from inside, reflective mirror from outside\n76% Heat Reduction\n99% UV Protection\n92% IR Rejection\nColors Available: 30% &amp; 70%"
                  >
                    <input type="radio" name="film" value="2" />
                    <span className="circle prestige">
                      <img
                        src="https://eliteguardcarcare.com/assets/img/window-films/silver-1769275613-3043.png"
                        alt="Silver Window Film"
                        style={{
                          width: "28px",
                          height: "28px",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    </span>
                    <div>
                      <strong>Silver</strong>
                      <small>Reflective</small>
                    </div>
                    <span className="checked-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                  </label>
                </div>
                <div className="col-md-6">
                  <label
                    className="film-option"
                    data-film-id="3"
                    data-company-price="435.00"
                    data-offer-price="175.00"
                    data-name="Dark"
                    data-type="Privacy"
                    data-description="Clear from inside, dark from outside\n78% Heat Reduction\nColors Available: 30% / 50% / 70%"
                  >
                    <input type="radio" name="film" value="3" />
                    <span className="circle prestige">
                      <img
                        src="https://eliteguardcarcare.com/assets/img/window-films/dark-1769275680-6171.png"
                        alt="Dark Window Film"
                        style={{
                          width: "28px",
                          height: "28px",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    </span>
                    <div>
                      <strong>Dark</strong>
                      <small>Privacy</small>
                    </div>
                    <span className="checked-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                  </label>
                </div>
                <div className="col-md-6">
                  <label
                    className="film-option"
                    data-film-id="4"
                    data-company-price="435.00"
                    data-offer-price="175.00"
                    data-name="Blackout"
                    data-type="100% Black"
                    data-description="Full privacy from both sides\n85% Heat Reduction\n99% UV Protection\nCompletely blocks view from both sides"
                  >
                    <input type="radio" name="film" value="4" />
                    <span className="circle prestige">
                      <img
                        src="https://eliteguardcarcare.com/assets/img/window-films/blackout-1769275713-3933.png"
                        alt="Blackout Window Film"
                        style={{
                          width: "28px",
                          height: "28px",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    </span>
                    <div>
                      <strong>Blackout</strong>
                      <small>100% Black</small>
                    </div>
                    <span className="checked-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                  </label>
                </div>
                <div className="col-md-6">
                  <label
                    className="film-option"
                    data-film-id="5"
                    data-company-price="435.00"
                    data-offer-price="175.00"
                    data-name="Frosted"
                    data-type="Blur Privacy"
                    data-description="Perfect for offices, partitions, and glass doors\nFull daytime privacy\nElegant and premium appearance"
                  >
                    <input type="radio" name="film" value="5" />
                    <span className="circle prestige">
                      <img
                        src="https://eliteguardcarcare.com/assets/img/window-films/frosted-1769275746-1441.png"
                        alt="Frosted Window Film"
                        style={{
                          width: "28px",
                          height: "28px",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    </span>
                    <div>
                      <strong>Frosted</strong>
                      <small>Blur Privacy</small>
                    </div>
                    <span className="checked-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                  </label>
                </div>
                <div className="col-md-6">
                  <label
                    className="film-option"
                    data-film-id="6"
                    data-company-price="435.00"
                    data-offer-price="175.00"
                    data-name="Colorful"
                    data-type="Decorative"
                    data-description="Vibrant colors for decorative and heat purposes\nBlocks 99% of harmful UV rays\nHeat rejection 53-84%\nImprove comfort\nUnique aesthetic appeal"
                  >
                    <input type="radio" name="film" value="6" />
                    <span className="circle prestige">
                      <img
                        src="https://eliteguardcarcare.com/assets/img/window-films/colorful-1769275777-4157.png"
                        alt="Colorful Window Film"
                        style={{
                          width: "28px",
                          height: "28px",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    </span>
                    <div>
                      <strong>Colorful</strong>
                      <small>Decorative</small>
                    </div>
                    <span className="checked-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                  </label>
                </div>
                <div className="col-md-6">
                  <label
                    className="film-option"
                    data-film-id="7"
                    data-company-price="435.00"
                    data-offer-price="175.00"
                    data-name="Not Sure?"
                    data-type="We will help you choose"
                    data-description="Unsure which film is right for you?\nWe will bring samples to your location\nFree professional consultation\nExact measurements on site\nCustomized quotation"
                  >
                    <input type="radio" name="film" value="7" />
                    <span className="circle prestige">
                      <img
                        src="https://eliteguardcarcare.com/assets/img/window-films/not-sure-1769275808-5901.png"
                        alt="Not Sure Window Film Option"
                        style={{
                          width: "28px",
                          height: "28px",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    </span>
                    <div>
                      <strong>Not Sure?</strong>
                      <small>We will help you choose</small>
                    </div>
                    <span className="checked-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                  </label>
                </div>
              </div>
              <div className="feature-box mt-4">
                <h6 id="feature-title">Prestige (Transparent)</h6>
                <ul className="list-unstyled mt-3" id="feature-list">
                  <li>
                    <i className="fa-solid fa-check text-success me-2"></i>
                    <span id="filmDescriptionText">
                      Best for natural light and high heat protection
                      Transparent – allows natural light 80% Heat Reduction
                      99.99% UV Protection 97% IR Rejection Available Colors:
                      30% &amp; 50%
                    </span>
                  </li>
                </ul>
              </div>
              <div className="price-box mt-4">
                <div className="price company text-muted">
                  <span>Company Price</span>
                  <p
                    className="text-muted text-decoration-line-through opacity-75 fw-semibold mb-0"
                    id="companyPriceValue"
                  >
                    435.00
                  </p>
                  <small>AED/m²</small>
                </div>
                <div className="price offer">
                  <span className="badge">Best Deal</span>
                  <span>Offer Price</span>
                  <strong id="offerPriceValue">175.00</strong>
                  <small>AED/m²</small>
                </div>
              </div>
              <div className="window-input mt-4">
                <table className="table table-borderless align-middle">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>
                        Height <span className="text-primary">(cm)</span>
                      </th>
                      <th>
                        Width <span className="text-primary">(cm)</span>
                      </th>
                      <th>Qty</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody id="windowTableBody">
                    <tr>
                      <td className="row-no">#1</td>
                      <td>
                        <input
                          type="number"
                          name="height"
                          className="form-control"
                          value="150"
                          placeholder="00"
                          min="1"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="width"
                          className="form-control"
                          value="200"
                          placeholder="00"
                          min="1"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="qty"
                          className="form-control"
                          value="1"
                          placeholder="00"
                          min="1"
                        />
                      </td>
                      <td width="8%"></td>
                    </tr>
                  </tbody>
                </table>
                <button type="button" className="btn add-window mt-0 w-100">
                  + Add More
                </button>
              </div>
              <button
                type="button"
                className="btn btn-estimate mt-4 w-100"
                id="getCostEstimationBtn"
              >
                Get Cost Estimation →
              </button>
            </form>
            <div
              className="price-summary mt-4"
              id="estimationResults"
              style={{display: "none"}}
            >
              <div className="summary-box">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="label">Total Area</span>
                  <span className="value" id="totalAreaValue">
                    0.00 m²
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="sub-label">Regular Price</span>
                  <span
                    className="sub-value text-decoration-line-through"
                    id="regularTotalValue"
                  >
                    0.00 AED
                  </span>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center total-row">
                  <span className="total-label">Total Price</span>
                  <span className="total-value" id="offerTotalValue">
                    0.00 AED
                  </span>
                </div>
              </div>
              <div className="row g-3 mt-3">
                <div className="col-md-6">
                  <a href="tel:+971564911220" className="btn btn-call w-100">
                    <i className="fa-solid fa-phone me-2"></i> Call Now
                  </a>
                </div>
                <div className="col-md-6">
                  <a
                    href="https://wa.me/971564911220"
                    target="_blank"
                    className="btn btn-whatsapp w-100"
                  >
                    <i className="fa-brands fa-whatsapp me-2"></i> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmCalculator;
