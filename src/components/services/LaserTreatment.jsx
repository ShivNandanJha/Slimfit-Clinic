import { useState } from "react";
import Appointment from "../../pages/appointment";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaClock,
  FaCalendarAlt,
  FaBandAid,
  FaTransgender,
} from "react-icons/fa";
import "./style.css";
import img1 from "../../assets/treatments/lasertreatment/1.png";
import img2 from "../../assets/treatments/lasertreatment/2.png";
import img3 from "../../assets/treatments/lasertreatment/3.png";
import after from "../../assets/treatments/lasertreatment/after.png";
import before from "../../assets/treatments/lasertreatment/before.png";
const LaserTreatment       = () => {
  const service = {
    name: "Laser Treatment",
    about:
      "Do you have acne scar on your face on any kind of scar in your body? And that is making you uncomfortable in public. Don’t worry, We have the solution. laser treatment is a technique to remove scars from your face or any other body parts And Slimfit Clinic is one of the best clinic to provide laser treatment in Siliguri. ",

    images: [img1, img2, img3],
    suitableFor: "Male/Female",
    benefit: "No Open Wounds",
    timeRequired: "1-2 hours",
    ageGroup: "25-55 years",
    beforeAfter: {
      before: before,
      after: after,
    },
    description:"Laser resurfacing is done by a plastic surgeon or dermatologist. It’s an outpatient procedure, meaning you’ll not have to stay overnight. The doctor may treat wrinkles around your eyes, mouth, or forehead individually or treat your entire face. For small areas, the doctor will numb the areas to be treated with a local anesthetic and may also sedate you. You may require general anesthesia if your whole face is being treated.",
    faqs: [
      {
        question: "Is laser treatment painful?",
        answer:
          "Discomfort varies depending on the type of laser and area treated, but most patients report mild discomfort.",
      },
      {
        question: "How many sessions are needed for optimal results?",
        answer:
          "The number of sessions varies based on the condition being treated and individual response to treatment.",
      },
      {
        question: "How long is laser effective?",
        answer:
          "Most people experience hair removal that lasts several months, and it might last for years",
        },
        {
            question: "How many laser sessions are effective?",
            answer:
              "Everyone's body is different, and different biological factors can impact how many sessions you need in order to fully remove your unwanted hair. Generally, clients need about two to six laser treatments in order to completely get rid of hair.",
          },
    ],
  };

  const [showFAQs, setShowFAQs] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQs = () => {
    setShowFAQs(!showFAQs);
  };
  const handleFAQClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <div className="service-info">
        <h2 className="service-title">{service.name}</h2>
        <hr />
        <div className="treatment">
          <Slider {...settings} className="sliders">
            {service.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="carousel-image"
                />
              </div>
            ))}
          </Slider>{" "}
          <div className="h3">
            <h3>{service.about}</h3>
          </div>
        </div>

        <div className="service-details">
          <div className="detail-grid">
            <FaTransgender className="icons" /> <p>{service.suitableFor}</p>
          </div>
          <div className="detail-grid">
            <FaBandAid className="icons" /> <p>{service.benefit}</p>
          </div>
          <div className="detail-grid">
            <FaClock className="icons" /> <p>{service.timeRequired}</p>
          </div>
          <div className="detail-grid">
            <FaCalendarAlt className="icons" /> <p>{service.ageGroup}</p>
          </div>
        </div>

        <div className="treatment-result-specialty">
          <div className="before-after">
            <h3>Before and After</h3>
            <hr />
            <img src={service.beforeAfter.before} alt="Before" />
            <img src={service.beforeAfter.after} alt="After" />
          </div>
          <div className="specialty">
            <h3>Specialty</h3>
            <hr />
            <p>Here at Slimfit, we know how {service.name} treatments can totally change the game. Our services blend cutting-edge techniques with top-notch personalized care to give you genuinely unmatched results. We're all about ensuring everything we do is safe and effective, leaving you delighted. Our skin tightening treatment has got you covered no matter what your skin needs or type</p>
          </div>
        </div>

        <div className="description-section">
          <h3>Description</h3>
          <hr />
          <p>{service.description}</p>
        </div>

        <div className="faqs-section">
          <h3>FAQs</h3>
          <hr />
          {service.faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => handleFAQClick(index)}
                className="faq-question"
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Appointment />
    </div>
  );
};

export default LaserTreatment;
