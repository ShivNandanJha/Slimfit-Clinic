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
import img1 from "../../assets/treatments/chinAugmentation/1.png";
import img2 from "../../assets/treatments/chinAugmentation/2.png";
import img3 from "../../assets/treatments/chinAugmentation/3.png";
import after from "../../assets/treatments/chinAugmentation/after-chin.png";
import before from "../../assets/treatments/chinAugmentation/before-chin.png";
const ChinAug = () => {
  const service = {
    name: "Chin Augmentation",
    about:
      "Do you have a fatty chin? Or you want a sharp chin. Don’t worry, We have the solution. Chin augmentation is a technique to sharp your chin and remove fat from the chin And Slimfit Clinic is one of the best clinic to provide chin augmentation treatment in Siliguri.  ",

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
      " Though a variety of temporary or long lasting fillers are available in the market, your own Fat or Dermis of Skin is the best filling material for lip, which last for life long & without any allergic reaction or foreign body side effects. Hyaluronic Acid (Restylane, Juvederm) is a natural substance found in our bodies. It is well suited to plump thin lips and it may also be appropriate for some surface wrinkles around lips. Artificial fillers can also be used for lip augmentation. Sometimes augmentation of the lips requires multiple injections to distribute the filler for enhanced lip fullness and to raise or define a cupid’s bow (the middle portion of the lip), which has the upturn or vermillion border the red part of your lips.",
    faqs: [
      {
        question: "How long does chin augmentation surgery take?",
        answer:
          "The surgery typically takes about one to two hours.",
      },
      {
        question: "Is chin augmentation painful?",
        answer:
          "Discomfort is minimal and can be managed with pain medication.",
      },
      {
        question: "How long do chin implants last?",
        answer:
          "Chin implants are designed to be permanent but may need replacement or adjustment over time.",
        },
        {
            question: "Will I need to change my diet or lifestyle after chin augmentation?",
            answer:
              "No specific changes are required, but maintaining a healthy lifestyle can optimize results.",
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
      <Appointment/>
    </div>
  );
};

export default ChinAug;
