import React, { useState, useRef } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "../styles/film-calculator.css";

const FilmCalculator = () => {
  const [selectedPlan, setSelectedPlan] = useState("1");
  const [windows, setWindows] = useState([{ id: Date.now(), height: "100", width: "100", qty: "1" }]);
  const [totalArea, setTotalArea] = useState(0);
  const [offerTotal, setOfferTotal] = useState(0);
  const [companyTotal, setCompanyTotal] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const msgRef = useRef(null);

  const films = [
    {
      id: "1",
      companyPrice: "350.00", // Original Price before discount
      offerPrice: "175.00",   // 50% Discounted Price
      name: "Prestige",
      type: "Transparent",
      description: "Best for natural light and high heat protection\nTransparent – allows natural light\n80% Heat Reduction\n99.99% UV Protection\n97% IR Rejection\nAvailable Colors: 30% & 50%",
    },
    {
      id: "2",
      companyPrice: "350.00",
      offerPrice: "175.00",
      name: "Silver",
      type: "Reflective",
      description: "Clear from inside, reflective mirror from outside\n76% Heat Reduction\n99% UV Protection\n92% IR Rejection\nColors Available: 30% & 70%",
    },
    {
      id: "3",
      companyPrice: "350.00",
      offerPrice: "175.00",
      name: "Dark",
      type: "Privacy",
      description: "Clear from inside, dark from outside\n78% Heat Reduction\nColors Available: 30% / 50% / 70%",
    },
    {
      id: "4",
      companyPrice: "350.00",
      offerPrice: "175.00",
      name: "Blackout",
      type: "100% Black",
      description: "Full privacy from both sides\n85% Heat Reduction\n99% UV Protection\nCompletely blocks view from both sides",
    },
    {
      id: "5",
      companyPrice: "350.00",
      offerPrice: "175.00",
      name: "Frosted",
      type: "Blur Privacy",
      description: "Perfect for offices, partitions, and glass doors\nFull daytime privacy\nElegant and premium appearance",
    },
    {
      id: "6",
      companyPrice: "350.00",
      offerPrice: "175.00",
      name: "Colorful",
      type: "Decorative",
      description: "Vibrant colors for decorative and heat purposes\nBlocks 99% of harmful UV rays\nHeat rejection 53-84%\nImprove comfort\nUnique aesthetic appeal",
    },
    {
      id: "7",
      companyPrice: "350.00",
      offerPrice: "175.00",
      name: "Not Sure?",
      type: "We will help you choose",
      description: "Unsure which film is right for you?\nWe will bring samples to your location\nFree professional consultation\nExact measurements on site\nCustomized quotation",
    },
  ];

  const selectedFilm = films.find((f) => f.id === selectedPlan) || films[0];

  const showMessage = (msg, isSuccess) => {
    if (!msgRef.current) return;
    msgRef.current.className = isSuccess ? "success" : "error";
    msgRef.current.textContent = msg;
    setTimeout(() => {
      if (msgRef.current) {
        msgRef.current.className = "";
        msgRef.current.textContent = "";
      }
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
      // Logic: (H/100 * W/100) convert cm to meters, then multiply by Qty
      const area = windows.reduce(
        (sum, w) =>
          sum + (parseFloat(w.height) / 100) * (parseFloat(w.width) / 100) * parseInt(w.qty),
        0
      );

      const offerPriceNum = parseFloat(selectedFilm.offerPrice);
      const companyPriceNum = parseFloat(selectedFilm.companyPrice);

      setTotalArea(area);
      setOfferTotal(area * offerPriceNum);
      setCompanyTotal(area * companyPriceNum);
      setShowSummary(true);
    }
  };

  const addWindow = () => {
    setWindows([...windows, { id: Date.now(), height: "", width: "", qty: "1" }]);
  };

  const removeWindow = (id) => {
    setWindows(windows.filter((w) => w.id !== id));
  };

  const handleInputChange = (index, field, value) => {
    const newWindows = [...windows];
    newWindows[index][field] = value;
    setWindows(newWindows);
  };

  return (
    <section className="film-calculator py-5" id="get-your-quote">
      <div className="container text-center">
        <h2 className="section-title">Find the Best Film for Your Windows</h2>
        <p className="section-subtitle text-center">
          Tell us your window size — we’ll calculate price instantly
          <br />
          🇦🇪 UAE | Dubai | Abu Dhabi
        </p>
        <div className="calculator-card mx-auto">
          <div className="calculator-header">
            <h5 className="text-white">Get Your Quote</h5>
            <p className="text-white">Premium Window Film Calculation</p>
          </div>
          <div className="calculator-body text-start">
            <form onSubmit={(e) => e.preventDefault()}>
              <h6 className="block-title">Select Film Type</h6>
              <div className="row g-3 film-options">
                {films.map((film) => (
                  <div className="col-md-6" key={film.id}>
                    <label className={`film-option ${selectedPlan === film.id ? "active" : ""}`}>
                      <input
                        type="radio"
                        name="film"
                        value={film.id}
                        checked={selectedPlan === film.id}
                        onChange={(e) => setSelectedPlan(e.target.value)}
                      />
                      <span className="circle">
                        <img
                          src={`/window-films/${film.name.toLowerCase().replace("?", "unknown")}.png`} 
                          alt={film.name}
                          style={{ width: "28px", height: "28px", objectFit: "cover", borderRadius: "50%" }}
                          onError={(e) => (e.target.src = "https://via.placeholder.com/28")}
                        />
                      </span>
                      <div>
                        <strong>{film.name}</strong>
                        <small>{film.type}</small>
                      </div>
                      <span className="checked-icon">
                        <i className="fa-solid fa-circle-check"></i>
                      </span>
                    </label>
                  </div>
                ))}
              </div>

              <div className="feature-box mt-4">
                <h6>{selectedFilm.name} ({selectedFilm.type})</h6>
                <ul className="list-unstyled mt-3">
                  {selectedFilm.description.split("\n").map((line, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-check text-success me-2"></i>{line}
                    </li>
                  ))}
                </ul>
              </div>

              <p ref={msgRef} id="msg"></p>

              <div className="window-input mt-4">
                <table className="table table-borderless align-middle">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Height <span className="text-primary">(cm)</span></th>
                      <th>Width <span className="text-primary">(cm)</span></th>
                      <th>Qty</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {windows.map((win, index) => (
                      <tr key={win.id}>
                        <td className="row-no">#{index + 1}</td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={win.height}
                            placeholder="cm"
                            onChange={(e) => handleInputChange(index, "height", e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={win.width}
                            placeholder="cm"
                            onChange={(e) => handleInputChange(index, "width", e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={win.qty}
                            onChange={(e) => handleInputChange(index, "qty", e.target.value)}
                          />
                        </td>
                        <td>
                          {windows.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeWindow(win.id)}
                              className="btn btn-danger btn-sm"
                            >
                              <RiDeleteBin6Line size={20}/>
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

              <button onClick={getEstimate} type="button" className="btn btn-estimate mt-4 w-100">
                Get Estimation →
              </button>
            </form>

            {showSummary && (
              <div className="price-summary mt-4">
                <div className="summary-box">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="label">Total Area</span>
                    <span className="value">{totalArea.toFixed(2)} m²</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span className="sub-label">Regular Price</span>
                    <span className="sub-value text-decoration-line-through">
                      {companyTotal.toFixed(2)} AED
                    </span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between total-row">
                    <span className="total-label">Offer Price (50% OFF)</span>
                    <span className="total-value">{offerTotal.toFixed(2)} AED</span>
                  </div>
                </div>
                <div className="row g-3 mt-3">
                  <div className="col-6">
                    <a href="tel:+971564911220" className="btn btn-call w-100">Call Now</a>
                  </div>
                  <div className="col-6">
                    <a href="https://wa.me/971564911220" target="_blank" rel="noreferrer" className="btn btn-whatsapp w-100">WhatsApp</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmCalculator;