import { useState } from "react";
import Slider from "react-slick";
import Appointment from "../../pages/appointment";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaClock,
  FaCalendarAlt,
  FaBandAid,
  FaTransgender,
} from "react-icons/fa";
import "./style.css";
import img1 from "../../assets/treatments/hairTransplant/1.png";
import img2 from "../../assets/treatments/hairTransplant/2.png";
import img3 from "../../assets/treatments/hairTransplant/3.png";
import after from "../../assets/treatments/hairTransplant/after-hair.png";
import before from "../../assets/treatments/hairTransplant/before-hair.png";
const HairTransplant = () => {
  const service = {
    name: "Hair Transplant",
    about:
      "Hair loss is one of the most common and stressful problem, which people are facing. Stress is one of the major problem which caused hairfall. It is very poor to experience heavy hair loss. In Slimfit clinic,  we provide best hair transplantation service in siliguri. ",

    images: [img1, img2, img3],
    suitableFor: "Male/Female",
    benefit: "No Open Wounds",
    timeRequired: "1-2 hours",
    ageGroup: "18-60 years",
    beforeAfter: {
      before: before,
      after: after,
    },
    description:
      " Follicular Unit Transplant (FUT) or the Strip Method – In this procedure, the hair is extracted from the sides or back of the scalp and transplanted into the balding area. The thing to be noted here is that the strips of tissues are removed from the donor area.Follicular Unit Extraction Method (FUE) – In this method, the individual hair follicles are extracted separately from the donor area and transplanted to the balding area. A motorized punch is essential for this extraction. Advanced FUE Method (DHT) – It is just the enhancement of the FUE technique. A manual extractor is used here and not the motorized one. This wouldn’t cause any holes in the reception area, and that is the key advantage of this method.",
    specialty:
      " Here at Slimfit, we know how Hair Transplant treatments can totally change the game. Our services blend cutting-edge techniques with top-notch personalized care to give you genuinely unmatched results. We're all about ensuring everything we do is safe and effective, leaving you delighted. Our skin tightening treatment has got you covered no matter what your skin needs or type.",
    faqs: [
      {
        question: "Is a hair transplant permanent?",
        answer:
          "Yes, the transplanted hair is typically permanent and continues to grow for a lifetime.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "New hair growth can be seen within three to four months, with full results visible after 12 to 18 months.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "The number of sessions needed depends on the treatment area and individual hair growth patterns. Typically, 6-8 sessions are recommended for optimal results.",
      },
      {
        question: "Are there any risks or complications associated with hair transplant surgery?",
        answer:
          "Risks include infection, bleeding, scarring, and temporary shock loss of transplanted hair.",
      },
      {
        question: "Can I style my hair normally after a hair transplant?",
        answer:
          "Yes, once fully healed, you can style and treat your hair as you normally would.",
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

export default HairTransplant;
