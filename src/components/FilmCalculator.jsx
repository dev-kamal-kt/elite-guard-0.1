
/*
import React, { useState, useRef } from "react";
import "../styles/film-calculator.css";

const FilmCalculator = () => {
  const [selectedPlan, setPlan] = useState("");
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(200);
  const [qty, setQty] = useState(1);
  const [resultPrice, setResult] = useState(0);
  const msgRef = useRef(null);

  const showMessage = (msg, type) => {
    if (type) {
      msgRef.current.classList.add("success");
      msgRef.current.textContent = msg;
    } else {
      msgRef.current.classList.add("error");
      msgRef.current.textContent = msg;
    }
    setTimeout(() => {
      msgRef.current.removeAttribute("class");
      msgRef.current.textContent = "";
    }, 2500);
  };
  const checkValidation = () => {
    if (selectedPlan === "") {
      showMessage("Please your select a plan", false);
      return false
    }else if (!height) {
      showMessage("Enter Your Height", false);
      return false
    }else if (!weight) {
      showMessage("Enter Your Weight", false);
      return false
    }else if (!height) {
      showMessage("Enter You Quantity", false);
      return false
    }
    return true
  };
  const getEstimate = () => {
    checkValidation();
  };

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
                        src="/window-films/prestige-1769275542-5756.png"
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
                        src="/window-films/silver-1769275613-3043.png"
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
                        src="/window-films/dark-1769275680-6171.png"
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
                        src="/window-films/blackout-1769275713-3933.png"
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
                        src="/window-films/frosted-1769275746-1441.png"
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
                        src="/window-films/colorful-1769275777-4157.png"
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
                        src="/window-films/not-sure-1769275808-5901.png"
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
              <p ref={msgRef} id="msg">
              </p>
              <div className="window-input mt-4">
                <table>
                  <thead>
                    <tr>
                      <th>Height(M)</th>
                      <th>Weight(M)</th>
                      <th>Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Height(M)">
                        <input
                          onChange={(e) => {
                            setHeight(e.target.value);
                          }}
                          type="number"
                          name="height"
                          className="form-control"
                          value={height}
                          placeholder="00"
                        />
                      </td>
                      <td data-label="Weight(M)">
                        <input
                          onChange={(e) => {
                            setWeight(e.target.value);
                          }}
                          type="number"
                          name="width"
                          className="form-control"
                          value={weight}
                          placeholder="00"
                        />
                      </td>
                      <td data-label="Qty">
                        <input
                          onChange={(e) => {
                            setQty(e.target.value);
                          }}
                          type="number"
                          name="qty"
                          className="form-control"
                          value={qty}
                          placeholder="00"
                          min="1"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button type="button" className="btn add-window mt-0 w-100">
                  + Add More
                </button>
              </div>
              <button
                onClick={getEstimate}
                type="button"
                className="btn btn-estimate mt-4 w-100"
                id="getCostEstimationBtn"
              >
                Get Estimation →
              </button>
            </form>
            <div
              className="price-summary mt-4"
              id="estimationResults"
              style={{ display: "none" }}
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
*/






import React, { useState, useRef } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "../styles/film-calculator.css";

const FilmCalculator = () => {
  const [selectedPlan, setSelectedPlan] = useState("1");
  const [windows, setWindows] = useState([{ id: 1, height: "150", width: "200", qty: "1" }]);
  const [totalArea, setTotalArea] = useState(0);
  const [offerTotal, setOfferTotal] = useState(0);
  const [companyTotal, setCompanyTotal] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const msgRef = useRef(null);

  const films = [
    {
      id: "1",
      companyPrice: "435.00",
      offerPrice: "175.00",
      name: "Prestige",
      type: "Transparent",
      description: "Best for natural light and high heat protection\nTransparent – allows natural light\n80% Heat Reduction\n99.99% UV Protection\n97% IR Rejection\nAvailable Colors: 30% & 50%",
    },
    {
      id: "2",
      companyPrice: "435.00",
      offerPrice: "175.00",
      name: "Silver",
      type: "Reflective",
      description: "Clear from inside, reflective mirror from outside\n76% Heat Reduction\n99% UV Protection\n92% IR Rejection\nColors Available: 30% & 70%",
    },
    {
      id: "3",
      companyPrice: "435.00",
      offerPrice: "175.00",
      name: "Dark",
      type: "Privacy",
      description: "Clear from inside, dark from outside\n78% Heat Reduction\nColors Available: 30% / 50% / 70%",
    },
    {
      id: "4",
      companyPrice: "435.00",
      offerPrice: "175.00",
      name: "Blackout",
      type: "100% Black",
      description: "Full privacy from both sides\n85% Heat Reduction\n99% UV Protection\nCompletely blocks view from both sides",
    },
    {
      id: "5",
      companyPrice: "435.00",
      offerPrice: "175.00",
      name: "Frosted",
      type: "Blur Privacy",
      description: "Perfect for offices, partitions, and glass doors\nFull daytime privacy\nElegant and premium appearance",
    },
    {
      id: "6",
      companyPrice: "435.00",
      offerPrice: "175.00",
      name: "Colorful",
      type: "Decorative",
      description: "Vibrant colors for decorative and heat purposes\nBlocks 99% of harmful UV rays\nHeat rejection 53-84%\nImprove comfort\nUnique aesthetic appeal",
    },
    {
      id: "7",
      companyPrice: "435.00",
      offerPrice: "175.00",
      name: "Not Sure?",
      type: "We will help you choose",
      description: "Unsure which film is right for you?\nWe will bring samples to your location\nFree professional consultation\nExact measurements on site\nCustomized quotation",
    },
  ];

  const selectedFilm = films.find((f) => f.id === selectedPlan) || films[0];

  const showMessage = (msg, type) => {
    if (type) {
      msgRef.current.classList.add("success");
      msgRef.current.textContent = msg;
    } else {
      msgRef.current.classList.add("error");
      msgRef.current.textContent = msg;
    }
    setTimeout(() => {
      msgRef.current.removeAttribute("class");
      msgRef.current.textContent = "";
    }, 2500);
  };

  const checkValidation = () => {
    if (!selectedPlan) {
      showMessage("Please select a plan", false);
      return false;
    }
    for (let i = 0; i < windows.length; i++) {
      const w = windows[i];
      if (!w.height || parseFloat(w.height) <= 0) {
        showMessage(`Enter valid Height for window #${i + 1}`, false);
        return false;
      }
      if (!w.width || parseFloat(w.width) <= 0) {
        showMessage(`Enter valid Width for window #${i + 1}`, false);
        return false;
      }
      if (!w.qty || parseInt(w.qty) <= 0) {
        showMessage(`Enter valid Quantity for window #${i + 1}`, false);
        return false;
      }
    }
    return true;
  };

  const getEstimate = () => {
    if (checkValidation()) {
      const area = windows.reduce(
        (sum, w) =>
          sum + (parseFloat(w.height) / 100) * (parseFloat(w.width) / 100) * parseInt(w.qty),
        0
      );
      const offerPriceNum = parseFloat(selectedFilm.offerPrice);
      const companyPriceNum = parseFloat(selectedFilm.companyPrice);
      const offerTot = area * offerPriceNum;
      const companyTot = area * companyPriceNum;
      setTotalArea(area);
      setOfferTotal(offerTot);
      setCompanyTotal(companyTot);
      setShowSummary(true);
    }
  };

  const addWindow = () => {
    const newId = windows.length + 1;
    setWindows([...windows, { id: newId, height: "", width: "", qty: "1" }]);
  };

  const removeWindow = (id) => {
    setWindows(windows.filter((w) => w.id !== id));
  };

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
                    className={`film-option ${selectedPlan === "1" ? "active" : ""}`}
                    data-film-id="1"
                    data-company-price="435.00"
                    data-offer-price="175.00"
                    data-name="Prestige"
                    data-type="Transparent"
                    data-description="Best for natural light and high heat protection\nTransparent – allows natural light\n80% Heat Reduction\n99.99% UV Protection\n97% IR Rejection\nAvailable Colors: 30% &amp; 50%"
                  >
                    <input
                      type="radio"
                      name="film"
                      value="1"
                      checked={selectedPlan === "1"}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                    />
                    <span className="circle prestige">
                      <img
                        src="/window-films/prestige-1769275542-5756.png"
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
                    className={`film-option ${selectedPlan === "2" ? "active" : ""}`}
                    data-film-id="2"
                    data-company-price="435.00"
                    data-offer-price="175.00"
                    data-name="Silver"
                    data-type="Reflective"
                    data-description="Clear from inside, reflective mirror from outside\n76% Heat Reduction\n99% UV Protection\n92% IR Rejection\nColors Available: 30% &amp; 70%"
                  >
                    <input
                      type="radio"
                      name="film"
                      value="2"
                      checked={selectedPlan === "2"}onChange={(e) => setSelectedPlan(e.target.value)}
                      
                    />
                    <span className="circle prestige">
                      <img
                        src="/window-films/silver-1769275613-3043.png"
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
                    className={`film-option ${selectedPlan === "3" ? "active" : ""}`}
                    data-film-id="3"
                    data-company-price="435.00"
                    data-offer-price="175.00"
                    data-name="Dark"
                    data-type="Privacy"
                    data-description="Clear from inside, dark from outside\n78% Heat Reduction\nColors Available: 30% / 50% / 70%"
                  >
                    <input
                      type="radio"
                      name="film"
                      value="3"
                      checked={selectedPlan === "3"}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                    />
                    <span className="circle prestige">
                      <img
                        src="/window-films/dark-1769275680-6171.png"
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
                    className={`film-option ${selectedPlan === "4" ? "active" : ""}`}
                    data-film-id="4"
                    data-company-price="435.00"
                    data-offer-price="175.00"
                    data-name="Blackout"
                    data-type="100% Black"
                    data-description="Full privacy from both sides\n85% Heat Reduction\n99% UV Protection\nCompletely blocks view from both sides"
                  >
                    <input
                      type="radio"
                      name="film"
                      value="4"
                      checked={selectedPlan === "4"}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                    />
                    <span className="circle prestige">
                      <img
                        src="/window-films/blackout-1769275713-3933.png"
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
                    className={`film-option ${selectedPlan === "5" ? "active" : ""}`}
                    data-film-id="5"
                    data-company-price="435.00"
                    data-offer-price="175.00"
                    data-name="Frosted"
                    data-type="Blur Privacy"
                    data-description="Perfect for offices, partitions, and glass doors\nFull daytime privacy\nElegant and premium appearance"
                  >
                    <input
                      type="radio"
                      name="film"
                      value="5"
                      checked={selectedPlan === "5"}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                    />
                    <span className="circle prestige">
                      <img
                        src="/window-films/frosted-1769275746-1441.png"
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
                    className={`film-option ${selectedPlan === "6" ? "active" : ""}`}
                    data-film-id="6"
                    data-company-price="435.00"
                    data-offer-price="175.00"
                    data-name="Colorful"
                    data-type="Decorative"
                    data-description="Vibrant colors for decorative and heat purposes\nBlocks 99% of harmful UV rays\nHeat rejection 53-84%\nImprove comfort\nUnique aesthetic appeal"
                  >
                    <input
                      type="radio"
                      name="film"
                      value="6"
                      checked={selectedPlan === "6"}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                    />
                    <span className="circle prestige">
                      <img
                        src="/window-films/colorful-1769275777-4157.png"
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
                    className={`film-option ${selectedPlan === "7" ? "active" : ""}`}
                    data-film-id="7"
                    data-company-price="435.00"
                    data-offer-price="175.00"
                    data-name="Not Sure?"
                    data-type="We will help you choose"
                    data-description="Unsure which film is right for you?\nWe will bring samples to your location\nFree professional consultation\nExact measurements on site\nCustomized quotation"
                  >
                    <input
                      type="radio"
                      name="film"
                      value="7"
                      checked={selectedPlan === "7"}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                    />
                    <span className="circle prestige">
                      <img
                        src="/window-films/not-sure-1769275808-5901.png"
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
                <h6 id="feature-title">
                  {selectedFilm.name} ({selectedFilm.type})
                </h6>
                <ul className="list-unstyled mt-3" id="feature-list">
                  {selectedFilm.description.split("\n").map((line, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-check text-success me-2"></i>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="price-box mt-4">
                <div className="price company text-muted">
                  <span>Company Price</span>
                  <p
                    className="text-muted text-decoration-line-through opacity-75 fw-semibold mb-0"
                    id="companyPriceValue"
                  >
                    {selectedFilm.companyPrice}
                  </p>
                  <small>AED/m²</small>
                </div>
                <div className="price offer">
                  <span className="badge">Best Deal</span>
                  <span>Offer Price</span>
                  <strong id="offerPriceValue">{selectedFilm.offerPrice}</strong>
                  <small>AED/m²</small>
                </div>
              </div>
              <p ref={msgRef} id="msg"></p>
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
                    {windows.map((win, index) => (
                      <tr key={win.id}>
                        <td className="row-no" data-label="No.">
                          #{win.id}
                        </td>
                        <td data-label="Height (cm)">
                          <input
                            type="number"
                            className="form-control"
                            value={win.height}
                            placeholder="00"
                            min="1"
                            onChange={(e) => {
                              const newWindows = [...windows];
                              newWindows[index].height = e.target.value;
                              setWindows(newWindows);
                            }}
                          />
                        </td>
                        <td data-label="Width (cm)">
                          <input
                            type="number"
                            className="form-control"
                            value={win.width}
                            placeholder="00"
                            min="1"
                            onChange={(e) => {
                              const newWindows = [...windows];
                              newWindows[index].width = e.target.value;
                              setWindows(newWindows);
                            }}
                          />
                        </td>
                        <td data-label="Qty">
                          <input
                            type="number"
                            className="form-control"
                            value={win.qty}
                            placeholder="00"
                            min="1"
                            onChange={(e) => {
                              const newWindows = [...windows];
                              newWindows[index].qty = e.target.value;
                              setWindows(newWindows);
                            }}
                          />
                        </td>
                        <td width="8%">
                          {windows.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeWindow(win.id)}
                              className="btn btn-danger btn-sm"
                            >
                              <RiDeleteBin6Line size={25}/>
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button onClick={addWindow} type="button" className="btn add-window mt-0 w-100">
                  + Add More
                </button>
              </div>
              <button
                onClick={getEstimate}
                type="button"
                className="btn btn-estimate mt-4 w-100"
                id="getCostEstimationBtn"
              >
                Get Estimation →
              </button>
            </form>
            <div
              className="price-summary mt-4"
              id="estimationResults"
              style={{ display: showSummary ? "block" : "none" }}
            >
              <div className="summary-box">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="label">Total Area  -- </span>
                  <span className="value" id="totalAreaValue">
                    {totalArea.toFixed(2)} m²
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="sub-label">Regular Price  -- </span>
                  <span
                    className="sub-value text-decoration-line-through"
                    id="regularTotalValue"
                  >
                    {companyTotal.toFixed(2)} AED
                  </span>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center total-row">
                  <span className="total-label">Total Price</span>
                  <span className="total-value" id="offerTotalValue">
                    {offerTotal.toFixed(2)} AED
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