import React, { useState, useEffect } from "react";
import services from "../data/services-data";
import { useParams } from "react-router-dom";

const ServiceTemp = () => {
  const [key_name, setKey] = useState("");
  const { serviceName } = useParams();

  const formatString = (str) => {
    return str.split(" ").join("_"); // e.g. "Paint Protection Film" → "Paint_Protection_Film"
  };

  useEffect(() => {
    if (serviceName) {
      setKey(formatString(serviceName));
    }
  }, [serviceName]);

  // Find the service object that matches the key_name
  const currentServiceObj = services.find(
    (serviceObj) => Object.keys(serviceObj)[0] === key_name
  );

  if (!currentServiceObj) {
    return <p>Service not found.</p>;
  }

  const serviceSections = services[0][key_name];

  return (
    <div className="col-50">
      {serviceSections.map((section, idx) => (
        <div
          key={idx}
          className="ct-text-editor"
          data-aos="zoom-in-up"
        >
          <div className="ct-text-inner">
            {/* Intro Section */}
            {section.section === "intro" && (
              <>
                <div className="ct-image-single">
                  <img
                    fetchPriority="high"
                    decoding="async"
                    src={section.image}
                    width="762"
                    height="390"
                    alt={section.title}
                  />
                </div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </>
            )}

            {/* Benefits Section */}
            {section.section === "benefits" && (
              <>
                <h2>{section.title}</h2>
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <strong>{item.title}</strong>
                      <p style={{ marginTop: "5px", fontSize: "0.95rem" }}>
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Process Section */}
            {section.section === "process" && (
              <>
                <h2>{section.title}</h2>
                <ol>
                  {section.items.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </>
            )}

            {/* Materials Section */}
            {section.section === "materials" && (
              <>
                <h2>{section.title}</h2>
                <ul>
                  {section.items.map((material, i) => (
                    <li key={i}>{material}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Importance Section */}
            {section.section === "importance" && (
              <>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceTemp;