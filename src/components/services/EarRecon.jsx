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
import img1 from "../../assets/treatments/earReconstruction/1.png";
import img2 from "../../assets/treatments/earReconstruction/2.png";
import img3 from "../../assets/treatments/earReconstruction/3.png";
import after from "../../assets/treatments/earReconstruction/after-ear.png";
import before from "../../assets/treatments/earReconstruction/before-ear.png";
const EarRecon = () => {
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
      " Ear reconstruction can take place in the surgeon’s office-based surgical facility, an outpatient surgery center or in a hospital.Before the surgery, the surgeon will conduct a thorough history and examination, as well as hearing tests. The surgeon will also assess whether to use the person’s own (autologous) tissue, such as skin or cartilage, to reconstruct the ear or if a prosthetic is more likely to yield a better result. Regardless of which materials are used, the surgeon will ensure the person is comfortable during the procedure by using anaesthesia. General anaesthesia causes a deep sleep during surgery, whereas a combination of sedative medications and local anaesthesia allows the patient to remain awake but relaxed and pain-free throughout the procedure.",
    faqs: [
      {
        question:
          "Can ear reconstruction surgery correct asymmetry or deformities caused by injury?",
        answer:
          "Yes, ear reconstruction can address a wide range of deformities, including those from trauma or previous surgeries.",
      },
      {
        question:
          "What is the recovery process like for ear reconstruction surgery?",
        answer:
          "Recovery involves wearing a protective headband and avoiding activities that could strain the ears for several weeks.",
      },
      {
        question: "What age is best for ear reconstruction?",
        answer  : 
          "Typically, children aged 6-7 are good candidates as their ears have nearly reached adult size.",
      },
      {
        question: "Is ear reconstruction covered by insurance?",
        answer: "It often is, especially if it's medically necessary.",
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

export default EarRecon;
