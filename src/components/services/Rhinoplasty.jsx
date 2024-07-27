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
import img1 from "../../assets/treatments/rhinoplasty/1.png";
import img2 from "../../assets/treatments/rhinoplasty/2.png";
import img3 from "../../assets/treatments/rhinoplasty/3.png";
import after from "../../assets/treatments/rhinoplasty/after-rhinoplasty.png";
import before from "../../assets/treatments/rhinoplasty/before-rhinoplasty.png";
const Rhinoplasty = () => {
  const service = {
    name: "Rhinoplasty (Nose Reconstruction)",
    aboutl1:
      " Do you have short nose or you want to make your nose sharp? Yes ! We have the solution. Rhinoplasty treatment is a technique to make your nose looks good And Slimfit Clinic is one of the best clinic to provide Rhinoplasty treatment in Siliguri.",

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
      "Rhinoplasty can be done in a hospital, a doctor’s office, or an outpatient surgical facility. Your doctor will use local or general anesthesia. If it’s a simple procedure, you’ll receive local anesthesia to your nose, which will also numb your face. You may also get medication through an IV line that makes you groggy, but you’ll still be awake.With general anesthesia, you’ll inhale a drug or get one through an IV that will make you unconscious. Children are usually given general anesthesia.Once you’re numb or unconscious, your surgeon will make cuts between or inside your nostrils. They’ll separate your skin from your cartilage or bone and then start the reshaping. If your new nose needs a small amount of additional cartilage, your doctor may remove some from your ear or deep inside your nose. If more is needed, you might get an implant or a bone graft. A bone graft is additional bone that’s added to the bone in your nose.The procedure usually takes between one and two hours. If the surgery is complex, it can take longer.",
    specialty:
      " Here at Slimfit, we know how Rhonoplasty treatments can totally change the game. Our services blend cutting-edge techniques with top-notch personalized care to give you genuinely unmatched results. We're all about ensuring everything we do is safe and effective, leaving you delighted. Our skin tightening treatment has got you covered no matter what your skin needs or type.",
    faqs: [
      {
        question: "Is laser hair removal permanent?",
        answer:
          "Laser hair removal provides long-lasting results, but it may not be permanent. Multiple treatments are often needed for initial hair removal, and maintenance treatments might be needed as well.",
      },
      {
        question: "Does laser hair removal hurt?",
        answer:
          "Most patients describe the sensation as a rubber band snapping against the skin. The discomfort is minimal and can be managed with topical anesthetics.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "The number of sessions needed depends on the treatment area and individual hair growth patterns. Typically, 6-8 sessions are recommended for optimal results.",
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
            <h3>{service.aboutl1}</h3>
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
            <p>{service.specialty}</p>
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

export default Rhinoplasty;
