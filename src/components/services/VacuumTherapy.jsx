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
import img1 from "../../assets/treatments/vacuumTherapy/1.png";
import img2 from "../../assets/treatments/vacuumTherapy/2.png";
import img3 from "../../assets/treatments/vacuumTherapy/3.png";
// import after from "../../assets/treatments/vacuumTherapy/after.png";
// import before from "../../assets/treatments/vacuumTherapy/before.png";
const VacuumTherapy       = () => {
  const service = {
    name: "Vacuum Therapy",
    about:
      "Unlike the traditional Brazilian butt lift, vacuum therapy promises to help tone and tighten your rear without the use of incisions and fat grafting. And Slimfit Clinic is one of the best clinic to provide vacuum therapy treatment in Siliguri.  ",

    images: [img1, img2, img3],
    suitableFor: "Male/Female",
    benefit: "No Open Wounds",
    timeRequired: "1-2 hours",
    ageGroup: "25-55 years",
    beforeAfter: {
      before: " ",
      after: " ",
    },
      description: "The vacuum therapy butt lift works through the application of specialized suction cups along the patient’s buttocks, helping to correct, tone, and tighten the gluteus muscles. We begin by placing the suction cups along the buttocks for a period of 30 to 45 minutes, at which time, we increase the pressure based on what the patient’s desired level of enhancement and their tolerance. These cups are made of a transparent material that allows the therapist to visualize the effect of suction, monitor treatment, and ensure quality. The procedure is painless and should not cause any traumatic effect to the skin",
    
      
    faqs: [
      {
        question: "How long do results from vacuum therapy last?",
        answer:
          "Results can last for several months, but maintenance sessions are recommended for prolonged effects.",
      },
      {
        question: "Is vacuum therapy painful?",
        answer:
          "Most patients experience mild discomfort, similar to a deep tissue massage.",
      },
      {
        question: "Is vacuum therapy safe?",
        answer:
          "Vacuum therapy is a noninvasive procedure, so you can expect few to no side effects. However, you may feel slight pain and tightness after the procedure. Mild swelling can also occur.",
        },
        {
            question: "How many times can I do vacuum therapy?",
            answer:
              "Vacuum therapy is non-invasive, with minimal side effects. Treatment sessions typically last 30–45 minutes, once or twice a week.",
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

export default VacuumTherapy;
