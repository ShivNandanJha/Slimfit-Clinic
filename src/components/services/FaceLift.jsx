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
import img1 from "../../assets/treatments/faceLift/1.png";
import img2 from "../../assets/treatments/faceLift/2.png";
import img3 from "../../assets/treatments/faceLift/3.png";
import after from "../../assets/treatments/faceLift/after.png";
import before from "../../assets/treatments/faceLift/before.png";
const FaceLift = () => {
  const service = {
    name: "Face Lift",
    about:
      "Do you have a loose face skin?  Don’t worry, We have the solution. Facelift is a technique to lift from your face And Slimfit Clinic is one of the best clinic to provide facelift treatment in Siliguri. ",

    images: [img1, img2, img3],
    suitableFor: "Male/Female",
    benefit: "No Open Wounds",
    timeRequired: "1-2 hours",
    ageGroup: "25-55 years",
    beforeAfter: {
      before: before,
      after: after,
    },
    description:
      "In general, a face-lift involves elevating the skin and tightening the underlying tissues and muscles. Fat in the face and neck may be sculpted, removed or redistributed. Facial skin is then re-draped over the newly repositioned contours of the face, excess skin is removed, and the wound is stitched or taped closed. The incisions for the procedure depend on the techniques that will be used and the patient’s preferences. Options include:A traditional face-lift incision starts at your temples in the hairline, continues down and around the front of your ears and ends behind your ears in your lower scalp. An incision might be made under your chin to improve the appearance of your neck.A limited incision is a shorter incision that begins in your hairline just above your ear, wraps around the front of your ear, but does not extend all the way into the lower scalp.Neck lift incision starts in front of your earlobe and continues around your ear into your lower scalp. A small incision also is made under your chin.A face-lift generally takes two to four hours but might take longer if other cosmetic procedures are done at the same time.",
    faqs: [
      {
        question: "How long do facelift results last?",
        answer:
          "Results can last up to 10 years, depending on lifestyle and genetics.",
      },
      {
        question: "Will a facelift leave scars?",
        answer:
          "Scars are usually hidden within the hairline and natural contours of the face, becoming less noticeable over time.",
      },
      {
        question: "What is the success rate of a facelift?",
        answer:
          "Many studies indicated that up to 95-97% of patients were satisfied with their facelift results.",
      },
      {
        question: "What is a good age to get a facelift?",
        answer:
          "On average, you should be between the age of 35 and 65 for facelift surgery, with the optimal age at around 45 to 50. The goal with facelift procedures is to preserve and maintain the face, so the sooner the signs of aging are addressed, the better and more enduring the results can be.",
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
              results. We are all about ensuring everything we do is safe and
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

export default FaceLift;
