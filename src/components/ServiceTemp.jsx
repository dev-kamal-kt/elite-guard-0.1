import React from "react";
// import services from "../data/services-data"
import { useParams } from 'react-router-dom'

const services = [
  {
    service_1: [
      {
        section: "intro",
        title: "Car Window Tinting Services in UAE | Elite Guard",
        description:
          "Elite Guard provides high-performance car window tinting across Dubai and Abu Dhabi. Using ISO & SGS certified films (including original 3M options), our experts deliver dust-free, bubble-free installation at your doorstep. With over 14 years of experience, we ensure your car stays cooler, safer, and more stylish under the UAE sun.",
        image:
          "https://everywheretinting.ae/wp-content/uploads/2025/03/everywhere__0002_male-auto-wrapper-with-blade-car-tinting-film-2024-11-27-04-53-10-utc-e1742673855268-762x390.jpg",
      },
      {
        section: "benefits",
        title: "Benefits of Car Window Tinting",
        items: [
          {
            title: "Heat Reduction",
            description:
              "Tinting blocks solar heat, keeping interiors cooler and reducing reliance on air conditioning.",
          },
          {
            title: "UV Protection",
            description:
              "High‑quality films filter harmful UV rays, protecting skin and preventing upholstery from fading.",
          },
          {
            title: "Glare Control",
            description:
              "Driving in Dubai's strong sunlight can be challenging; tinting minimizes glare for safer journeys.",
          },
          {
            title: "Privacy & Security",
            description:
              "Tinted windows provide discretion, shielding interiors from prying eyes while adding a layer of protection.",
          },
          {
            title: "Energy Efficiency",
            description:
              "Tinting reduces cooling costs by maintaining balanced indoor temperatures.",
          },
          {
            title: "Aesthetic Appeal",
            description:
              "Sleek, modern finishes enhance the look of vehicles and buildings, aligning with Dubai's stylish lifestyle.",
          },
        ],
      },
      {
        section: "process",
        title: "Our Tinting Process",
        items: [
          "Consultation – Select your preferred shade (5%, 30%, 50%, 70%).",
          "Preparation – Thorough cleaning of windows for dust-free application.",
          "Application – Certified technicians apply films with precision.",
          "Quality Check – Ensuring a bubble-free, flawless finish.",
          "Warranty – Up to 7 years depending on package.",
        ],
      },
      {
        section: "materials",
        title: "Materials We Use",
        items: [
          "3M Certified Films – Global standard for durability.",
          "Nano-Ceramic Films – Superior heat rejection & clarity.",
          "Metalized Films – Scratch-resistant and long-lasting.",
          "Entry-Level Films – Affordable protection with UV filtering.",
        ],
      },
      {
        section: "importance",
        title: "Why Window Tinting Matters in UAE",
        description:
          "The UAE’s desert climate exposes vehicles to extreme heat and sunlight. Tinting reduces interior temperatures by up to 15°C, protects passengers from harmful UV rays, minimizes glare for safer driving, and preserves your car’s interior for better resale value.",
      },
    ],
  },
];


const ServiceTemp = () => {
const {serviceName} = useParams()
console.log(serviceName)


  return (
    <div className="col-50">
      {services.map((serviceObj, index) => {
        const serviceKey = Object.keys(serviceObj)[0]; // e.g. "service_1"
        const serviceSections = serviceObj[serviceKey];

        return serviceSections.map((section, idx) => (
          <div key={`${index}-${idx}`} className="ct-text-editor" data-aos="zoom-in-up">
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
                      alt="Professional window tinting service in Dubai with quality tinting film"
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
                  <ul>
                    {section.items.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
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
        ));
      })}
    </div>
  );
};

export default ServiceTemp;