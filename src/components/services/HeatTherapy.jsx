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
import img1 from "../../assets/treatments/heatTherapy/1.png";
import img2 from "../../assets/treatments/heatTherapy/2.png";
import img3 from "../../assets/treatments/heatTherapy/3.png";
// import after from "../../assets/treatments/heatTherapy/after.png";
// import before from "../../assets/treatments/heatTherapy/before.png";
const HeatTherapy = () => {
  const service = {
    name: "Heat Therapy",
    about:
      "Heat therapy, also called thermotherapy, is the use of heat in therapy, such as for pain relief and health. And Slimfit Clinic is one of the best clinic to provide Heat Therapy in Siliguri.  ",

    images: [img1, img2, img3],
    suitableFor: "Male/Female",
    benefit: "No Open Wounds",
    timeRequired: "1-2 hours",
    ageGroup: "25-55 years",
    beforeAfter: {
      before: " ",
      after: " ",
    },
    description:
      "The treatment depends on the type of application and the type of disease.There are 3 phases of the healing process: the inflammatory phase, the proliferation phase and the remodeling phase. The first phase, known as the inflammatory phase, protects the injured area from further injury while the body contains the damaged tissue. During this phase, cryotherapy can help to reduce swelling. Never use heat during this phase because heat increases the blood flow into the injured area and increases the amount of swelling. The inflammatory phase has a duration of 2 days. During the second phase, the proliferation phase, new tissue and scar tissue are formed. Heat can now be applied to the injured area to facilitate the healing process. The third and final phase, the remodeling phase, is the process of returning to health: the restoration of structure and function of injured or diseased tissues. The healing process includes blood clotting, tissue mending, scarring and bone healing. Heat therapy can also be used during this phase. ",

    faqs: [
      {
        question: "Can heat therapy be used for all types of pain?",
        answer  : 
          "Results can be seen as early as three weeks, with full results visible after two to three months.",
      },
      {
        question: "Are there any risks associated with heat therapy?",
        answer:
          "Overuse can cause burns or skin irritation; always use a barrier between the heat source and skin and limit application time",
      },
      {
        question: "How long does heat therapy take?",
        answer:
          "The exact duration for heat application depends on the type and/or magnitude of the injury. Short durations, about 15 to 20 minutes, will suffice for minor back tension, while longer durations for up to 30 minutes, may be recommended for chronic conditions or severe, excruciating pain.",
      },
      {
        question: "When should you avoid using heat therapy?",
        answer:
          "Do not use heat treatments after activity, and do not use heat after an acute injury. Never use heat where swelling is involved because swelling is caused by bleeding in the tissue, and heat just draws more blood to the area.",
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

export default HeatTherapy;
