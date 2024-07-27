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
import img1 from "../../assets/treatments/gynecomastia/1.png";
import img2 from "../../assets/treatments/gynecomastia/2.png";
import img3 from "../../assets/treatments/gynecomastia/3.png";
import after from "../../assets/treatments/gynecomastia/after.png";
import before from "../../assets/treatments/gynecomastia/before.png";
const Gynecomastia = () => {
  const service = {
    name: "gynecomastia",
    about:
      "You don’t have to let gynecomastia keep you from feeling your most confident.  Don’t worry we have the solution for you, gynecomastia surgery is the solution for you. And Slimfit Clinic is one of the best clinic to provide gynecomastia surgery  treatment in Siliguri. ",

    images: [img1, img2, img3],
    suitableFor: "Male",
    benefit: "No Open Wounds",
    timeRequired: "1-2 hours",
    ageGroup: "25-55 years",
    beforeAfter: {
      before: before,
      after: after,
    },
    description:
      "Gynecomastia surgery is performed under general or local anesthesia. The technique may differ for various types of Gynecomastia. Liposuction is performed to get rid of the excess fat in the male chest. Small incisions are made in the lateral chest wall, through which cannula is inserted. For gland removal, state of the art equipment MicroAire and VASER are used in combination to break the gland and then removed through a very tiny incision on the side or lateral chest wall.",
    faqs: [
      {
        question: "How long is the recovery time for gynecomastia surgery?",
        answer:
          "Initial recovery typically takes 1 to 2 weeks, with full recovery and final results visible after a few months.",
      },
      {
        question: "Are the results of gynecomastia surgery permanent?",
        answer:
          "Yes, the results are generally permanent, but maintaining a stable weight and avoiding certain medications or substances that could trigger recurrence is essential.",
      },
      {
        question: "Will there be visible scars after the surgery?",
        answer:
          "Scarring is minimal and usually well-concealed around the areola or in the natural chest contours.",
      },
      {
        question: "Is gynecomastia surgery painful?",
        answer:
          "Post-operative pain is typically mild to moderate and can be managed with prescribed pain medications.",
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
            <p>
              Here at Slimfit, we know how {service.name} treatments can totally
              change the game. Our services blend cutting-edge techniques with
              top-notch personalized care to give you genuinely unmatched
              results. We're all about ensuring everything we do is safe and
              effective, leaving you delighted. Our skin tightening treatment
              has got you covered no matter what your skin needs or type
            </p>
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

export default Gynecomastia;
