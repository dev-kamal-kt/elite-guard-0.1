// src/components/FAQ.jsx
import React, { useState } from "react";
import "../styles/faq-section.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      category: "General Questions",
      items: [
        {
          question: "What services does Elite Guard Car Care offer?",
          answer: (
            <>
              <p>Elite Guard Car Care provides comprehensive vehicle cosmetic maintenance and protection services designed to keep your car in like-new condition. Our services include:</p>
              <ul>
                <li><strong>Paintless Dent Repair</strong> - Professional removal of door dings and small dents</li>
                <li><strong>Scratch and Paint Touch-Up</strong> - Expert repair of minor scratches and scuffs</li>
                <li><strong>Windshield Repair</strong> - Rock chip and crack repair services</li>
                <li><strong>Alloy Wheel Repair</strong> - Cosmetic restoration of factory wheels</li>
                <li><strong>Interior Damage Repair</strong> - Restoration of leather, cloth, and door panels</li>
                <li><strong>24/7 Roadside Assistance</strong> - Emergency support whenever you need it</li>
              </ul>
            </>
          )
        },
        {
          question: "Why choose Elite Guard Car Care?",
          answer: (
            <>
              <p>Elite Guard Car Care specializes in preventing vehicle depreciation through minor cosmetic repairs not typically covered by standard insurance. We focus on maintaining your vehicle's condition and protecting your investment. Our team of professionals uses advanced techniques and specialized equipment to deliver high-quality results while minimizing vehicle downtime.</p>
            </>
          )
        },
        {
          question: "Is Elite Guard Car Care available 24/7?",
          answer: (
            <>
              <p>Our roadside assistance services are available 24/7 to support you in emergencies. For regular service appointments, please contact us during business hours for scheduling. Emergency roadside assistance includes towing, jump starts, tire changes, fluid delivery, and lockout assistance.</p>
            </>
          )
        }
      ]
    },
    {
      category: "Paintless Dent Repair",
      items: [
        {
          question: "What is paintless dent repair?",
          answer: (
            <>
              <p>Paintless dent repair (PDR) is an advanced technique that removes door dings and small dents from vertical metal panels without damaging or disturbing the factory paint. Using specialized tools and expert techniques, our technicians carefully massage the dent from the inside or outside of the panel, restoring your vehicle's original appearance while preserving the protective clear coat.</p>
            </>
          )
        },
        {
          question: "What types of dents can be repaired with paintless dent repair?",
          answer: (
            <>
              <p>Paintless dent repair works best on small to medium-sized dents, particularly:</p>
              <ul>
                <li>Door dings from adjacent vehicle doors</li>
                <li>Small hail damage</li>
                <li>Minor creases and crumples</li>
                <li>Surface dings on fenders and panels</li>
                <li>Round dents without sharp creases</li>
              </ul>
              <p>However, deep dents with sharp creases, large damaged areas, or dents involving paint damage may require traditional repair methods. Our technicians will assess your vehicle to determine the best repair approach.</p>
            </>
          )
        },
        {
          question: "How long does paintless dent repair take?",
          answer: (
            <>
              <p>The time required depends on the size, location, and severity of the dent. Most small dents can be repaired in 1-3 hours, while more complex repairs may take longer. We'll provide you with an accurate time estimate during your initial assessment. The main advantage of PDR is that it's typically much faster than traditional dent repair methods, getting you back on the road quickly.</p>
            </>
          )
        },
        {
          question: "Will paintless dent repair affect my car's paint?",
          answer: (
            <>
              <p>No, paintless dent repair is specifically designed to preserve your factory paint. Our technicians use specialized tools and techniques that gently work out the dent without disturbing the paint surface. Your vehicle's original finish, protective clear coat, and resale value remain intact.</p>
            </>
          )
        }
      ]
    },
    {
      category: "Scratch & Paint Repair",
      items: [
        {
          question: "What is covered under your scratch and paint touch-up service?",
          answer: (
            <>
              <p>Our scratch and paint touch-up service covers exterior surface damage, including:</p>
              <ul>
                <li>Minor scratches and scrapes</li>
                <li>Scuffs and surface marks</li>
                <li>Paint chips and light scoring</li>
                <li>Damage typically up to 5 inches in length</li>
              </ul>
              <p>We use specialized touch-up methods and original manufacturer paint to ensure a seamless finish that matches your vehicle's color and texture.</p>
            </>
          )
        },
        {
          question: "How do you match the paint color?",
          answer: (
            <>
              <p>We use your vehicle's paint code to ensure an exact color match. Our technicians locate your vehicle's paint code (typically found on a label in the driver's door jamb) and use original manufacturer paint to repair the damaged area. This guarantees a seamless blend with your existing finish.</p>
            </>
          )
        },
        {
          question: "Can deep scratches be repaired?",
          answer: (
            <>
              <p>Deep scratches that expose bare metal or primer typically require more intensive repair than our standard touch-up service. If your scratch is deeper than the clear coat layer, we may recommend traditional paint repair. Our technicians will assess the damage and recommend the best repair solution to restore your vehicle's appearance and protect the exposed areas from rust.</p>
            </>
          )
        }
      ]
    },
    {
      category: "Windshield Repair",
      items: [
        {
          question: "What does your windshield star repair service include?",
          answer: (
            <>
              <p>Our windshield star repair service provides protection and repair for small rock chips and cracks on your windshield. We use specialized resin injection techniques to fill and seal the damaged area, preventing the crack from spreading and restoring the windshield's structural integrity. This service helps maintain visibility and safety while extending the life of your windshield.</p>
            </>
          )
        },
        {
          question: "Is windshield repair covered by insurance?",
          answer: (
            <>
              <p>Many comprehensive auto insurance policies cover windshield repair with little to no deductible. However, coverage varies by policy and insurance provider. We recommend checking with your insurance company to determine what's covered under your plan. Our team can often work directly with your insurance provider to facilitate the repair process and minimize your out-of-pocket expenses.</p>
            </>
          )
        },
        {
          question: "When should a windshield be replaced instead of repaired?",
          answer: (
            <>
              <p>A windshield should be replaced rather than repaired if:</p>
              <ul>
                <li>The crack is longer than 12 inches</li>
                <li>The damage is in the driver's direct line of sight</li>
                <li>The damage affects the structural integrity of the windshield</li>
                <li>Multiple cracks are present</li>
                <li>The damage is near the edge of the windshield</li>
              </ul>
              <p>Our technicians will evaluate your windshield and recommend repair or replacement based on safety requirements and the extent of the damage.</p>
            </>
          )
        }
      ]
    },
    {
      category: "Alloy Wheel Repair",
      items: [
        {
          question: "What wheel damage can be repaired?",
          answer: (
            <>
              <p>Our alloy wheel repair service addresses cosmetic damage including:</p>
              <ul>
                <li>Scuffs and scrapes on the wheel surface</li>
                <li>Curb rash and impact marks</li>
                <li>Minor bends and dents</li>
                <li>Paint chips and fading</li>
                <li>Cosmetic damage to factory alloy wheels</li>
              </ul>
              <p>We restore your wheels to their original appearance, protecting their value and your vehicle's aesthetic appeal.</p>
            </>
          )
        },
        {
          question: "Can bent wheels be repaired?",
          answer: (
            <>
              <p>Minor bends in alloy wheels can often be repaired using specialized equipment. However, wheels with severe damage or structural compromise may need to be replaced to ensure safe vehicle operation. Our technicians will inspect your wheels to determine whether they can be safely repaired or if replacement is necessary. Safety is always our priority.</p>
            </>
          )
        },
        {
          question: "How long does wheel repair take?",
          answer: (
            <>
              <p>Most wheel repairs can be completed in 1-2 hours depending on the extent of the damage. We'll provide you with a specific time estimate during your assessment. Some cosmetic damage may require buffing and refinishing, which might extend the service time. We work efficiently to get you back on the road with beautifully restored wheels.</p>
            </>
          )
        }
      ]
    },
    {
      category: "Interior Damage Repair",
      items: [
        {
          question: "What interior damage can Elite Guard Car Care repair?",
          answer: (
            <>
              <p>We provide restoration services for damage to:</p>
              <ul>
                <li><strong>Leather seats</strong> - Tears, cracks, and surface damage</li>
                <li><strong>Cloth seats</strong> - Rips, stains, and wear marks</li>
                <li><strong>Door panels</strong> - Dents, scratches, and cosmetic damage</li>
                <li><strong>Armrests</strong> - Cracking, peeling, and deterioration</li>
                <li><strong>Dashboard</strong> - Minor scratches and cosmetic damage</li>
              </ul>
              <p>Our expert technicians use specialized techniques to restore your interior to like-new condition while maintaining your vehicle's value.</p>
            </>
          )
        },
        {
          question: "Can leather seats be repaired?",
          answer: (
            <>
              <p>Yes, leather seat damage can be effectively repaired depending on the severity. Small tears and cracks can be professionally repaired using specialized leather repair kits and techniques. Large tears or severe damage may require seat replacement. We assess each situation individually and provide recommendations for the best repair solution to restore your leather's appearance and durability.</p>
            </>
          )
        },
        {
          question: "How can I prevent interior damage?",
          answer: (
            <>
              <p>To help prevent interior damage:</p>
              <ul>
                <li>Use protective seat covers on leather and cloth seats</li>
                <li>Clean spills immediately to prevent staining</li>
                <li>Use door edge guards to protect door panels</li>
                <li>Maintain proper humidity levels in your vehicle</li>
                <li>Apply leather conditioner regularly for leather interiors</li>
                <li>Avoid placing sharp objects on seats or dashboards</li>
              </ul>
              <p>Regular maintenance and protective measures can significantly extend your interior's lifespan and maintain your vehicle's resale value.</p>
            </>
          )
        }
      ]
    },
    {
      category: "Roadside Assistance",
      items: [
        {
          question: "What is included in Elite Guard Car Care's 24/7 roadside assistance?",
          answer: (
            <>
              <p>Our comprehensive 24/7 roadside assistance includes:</p>
              <ul>
                <li><strong>Towing</strong> - Professional towing to your preferred repair facility</li>
                <li><strong>Jump Starts</strong> - Emergency battery assistance</li>
                <li><strong>Tire Changes</strong> - Help changing a flat tire</li>
                <li><strong>Fluid Delivery</strong> - Emergency fuel, coolant, and fluid delivery</li>
                <li><strong>Lockout Assistance</strong> - Help when you're locked out of your vehicle</li>
              </ul>
              <p>Our services are available anytime, anywhere, providing peace of mind knowing professional help is just a call away.</p>
            </>
          )
        },
        {
          question: "How do I request roadside assistance?",
          answer: (
            <>
              <p>To request roadside assistance, simply call our 24/7 assistance line. Provide your location, vehicle information, and the type of assistance you need. Our dispatch team will connect you with the nearest available service provider. Have your membership information ready to expedite the process. Response times typically vary depending on location and service demand, but we prioritize getting help to you as quickly as possible.</p>
            </>
          )
        },
        {
          question: "Is there a limit to how far you can tow my vehicle?",
          answer: (
            <>
              <p>Towing distance coverage depends on your specific coverage plan. Most standard plans include reasonable towing distances to the nearest repair facility of your choice. For extended towing needs, additional fees may apply. We recommend reviewing your coverage details or contacting our team for specific information about your towing limits and any associated costs.</p>
            </>
          )
        }
      ]
    },
    {
      category: "Protection Plans & Coverage",
      items: [
        {
          question: "How does Elite Guard Car Care's protection plan work?",
          answer: (
            <>
              <p>Our protection plan covers minor cosmetic repairs that are typically not included in standard comprehensive car insurance. These repairs help prevent vehicle depreciation and keep your car in like-new condition. When you need a covered service, simply contact us or visit a participating repair center. Depending on your plan, you may pay a deductible or co-payment for each service. Your coverage helps maintain your vehicle's appearance and value over time.</p>
            </>
          )
        },
        {
          question: "What is not covered by Elite Guard Car Care's protection plan?",
          answer: (
            <>
              <p>Our protection plan typically excludes:</p>
              <ul>
                <li>Damage caused by accidents covered by collision insurance</li>
                <li>Mechanical or electrical failures</li>
                <li>Normal wear and tear</li>
                <li>Damage from lack of maintenance</li>
                <li>Intentional damage</li>
                <li>Damage from racing or competitive driving</li>
              </ul>
              <p>Our plans are designed to cover unexpected minor cosmetic damage that helps preserve your vehicle's condition and value. For a complete list of exclusions and coverage details, please review your specific plan documentation.</p>
            </>
          )
        },
        {
          question: "Can I use any repair facility with my Elite Guard Car Care plan?",
          answer: (
            <>
              <p>You can typically use any qualified repair facility; however, using our network of participating repair centers often provides better coverage and reduced out-of-pocket costs. We partner with trusted repair shops to ensure quality service and seamless claims processing. If you prefer to use a non-network facility, your coverage may be subject to different terms. We recommend checking with us or your plan documentation to understand your options and any associated costs.</p>
            </>
          )
        },
        {
          question: "How do I file a claim with Elite Guard Car Care?",
          answer: (
            <>
              <p>Filing a claim is simple:</p>
              <ul>
                <li>Contact our customer service team or visit our website</li>
                <li>Provide your policy and vehicle information</li>
                <li>Describe the damage with photos if possible</li>
                <li>Submit the claim for review</li>
                <li>Receive approval and authorization to proceed with repairs</li>
              </ul>
              <p>Our team will process your claim promptly and guide you through the repair process. Keep receipts and documentation for your records. Most claims are processed within 3-5 business days.</p>
            </>
          )
        }
      ]
    },
    {
      category: "Vehicle Value & Depreciation",
      items: [
        {
          question: "How does regular car maintenance prevent depreciation?",
          answer: (
            <>
              <p>Regular maintenance, including cosmetic repairs, significantly affects your vehicle's resale value. A well-maintained vehicle with minimal cosmetic damage commands higher prices in the used market. Dents, scratches, wheel damage, and interior issues signal poor maintenance to potential buyers and reduce their willingness to pay. By addressing minor damage promptly through our repair services, you preserve your vehicle's appearance and appeal, maintaining higher resale value and investment protection.</p>
            </>
          )
        },
        {
          question: "Does paintless dent repair affect resale value?",
          answer: (
            <>
              <p>Paintless dent repair actually protects your resale value by restoring your vehicle's appearance without damaging the factory paint. Leaving dents unrepaired sends a signal to potential buyers that the vehicle hasn't been well maintained, potentially reducing its value by thousands of dollars. Professional PDR removes that concern, presenting a vehicle that appears pristine and well-cared-for, which directly translates to better resale prices and buyer confidence.</p>
            </>
          )
        },
        {
          question: "How much can cosmetic damage reduce my vehicle's value?",
          answer: (
            <>
              <p>The impact of cosmetic damage on resale value varies based on severity and vehicle type, but studies show:</p>
              <ul>
                <li>Minor dents and scratches: 2-5% reduction in value</li>
                <li>Multiple cosmetic issues: 5-10% reduction in value</li>
                <li>Significant damage: 10-20%+ reduction in value</li>
              </ul>
              <p>For a vehicle worth $30,000, even minor cosmetic damage could reduce its value by $600-$1,500 at resale. Investing in timely cosmetic repairs through Elite Guard Car Care is often far less expensive than accepting reduced resale value.</p>
            </>
          )
        }
      ]
    },
    {
      category: "Contact & Support",
      items: [
        {
          question: "How can I get a free estimate for my repair?",
          answer: (
            <>
              <p>Getting a free estimate is easy:</p>
              <ul>
                <li>Call us during business hours to schedule an appointment</li>
                <li>Visit our facility in person with your vehicle</li>
                <li>Submit photos of the damage through our online portal</li>
                <li>Describe your vehicle and damage in detail</li>
              </ul>
              <p>Our expert technicians will assess your vehicle and provide a comprehensive, no-obligation estimate for the repair cost and timeline. We're here to help you understand your options and find the best solution for your needs.</p>
            </>
          )
        },
        {
          question: "Do you offer mobile service or do I need to come to your facility?",
          answer: (
            <>
              <p>We offer convenient service options to fit your needs. Many of our repair services can be performed at our facility, where we have all the specialized equipment and controlled environment necessary for quality results. For certain services or specific situations, we may offer mobile service options. Contact us to discuss whether mobile service is available for your particular repair needs. Most customers appreciate the convenience of dropping off their vehicle and having it expertly repaired while they wait or attend to other tasks.</p>
            </>
          )
        },
        {
          question: "What is your warranty on repair work?",
          answer: (
            <>
              <p>We stand behind our work with comprehensive warranties on all repairs. Our paintless dent repairs, scratch repairs, wheel restoration, and other services are backed by warranties that protect your investment. If any issue arises with your repair within the warranty period, we'll address it at no additional cost. Warranty coverage details vary by service type; contact us for specific information about warranty coverage for your repair.</p>
            </>
          )
        },
        {
          question: "Do you have financing options available?",
          answer: (
            <>
              <p>We understand that repair costs can sometimes be a consideration. We offer various payment options to make our services accessible to all customers. These may include financing plans, payment plans, and partnerships with credit providers. Contact our customer service team to discuss financing options that work best for your situation. We're committed to making quality car care affordable and convenient for our clients.</p>
            </>
          )
        },
        {
          question: "Still have questions? How can I reach your team?",
          answer: (
            <>
              <p>We're here to help! You can reach our team through:</p>
              <ul>
                <li><strong>Phone:</strong> Call our customer service during business hours</li>
                <li><strong>Email:</strong> Contact us through our website</li>
                <li><strong>Online:</strong> Visit our website for more information and to request a quote</li>
                <li><strong>In Person:</strong> Visit our facility to speak with our experts directly</li>
                <li><strong>Roadside Assistance:</strong> Call 24/7 for emergency support</li>
              </ul>
              <p>Our dedicated team is ready to answer your questions and help you maintain your vehicle in perfect condition.</p>
            </>
          )
        }
      ]
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our car care services, protection plans, and roadside assistance.</p>
      </div>

      {faqData.map((category, categoryIndex) => (
        <div key={categoryIndex} className="faq-category">
          <h2 className="faq-category-title">{category.category}</h2>
          
          <div className="faq-container">
            {category.items.map((item, itemIndex) => {
              const uniqueIndex = `${categoryIndex}-${itemIndex}`;
              const isActive = activeIndex === uniqueIndex;

              return (
                <div key={uniqueIndex} className={`faq-item ${isActive ? 'active' : ''}`}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => handleToggle(uniqueIndex)}
                    aria-expanded={isActive}
                    aria-controls={`answer-${uniqueIndex}`}
                  >
                    <span>{item.question}</span>
                    <span className="faq-toggle-icon">▼</span>
                  </button>
                  <div 
                    className="faq-answer"
                    id={`answer-${uniqueIndex}`}
                    role="region"
                  >
                    <div className="faq-answer-content">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;