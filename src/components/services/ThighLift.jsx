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
import img1 from "../../assets/treatments/thighLift/1.png";
import img2 from "../../assets/treatments/thighLift/2.png";
import img3 from "../../assets/treatments/thighLift/3.png";
import after from "../../assets/treatments/thighLift/after.png";
import before from "../../assets/treatments/thighLift/before.png";
export default  function Thighlift ()  {
  const service = {
    name: "Thigh Lift",
    about:
      "If you’ve recently lost weight in your thighs, you may be looking for a way to help achieve smoother, more shapely legs. Or perhaps you’re looking for a way to address the skin on your thighs, which tends to sag with age. Don’t worry, We have the solution. Chin augmentation is a technique to sharp your chin and remove fat from the chip And Slimfit Clinic is one of the best clinic to provide chin augmentation treatment in Siliguri. ",

    images: [img1, img2, img3],
    suitableFor: "Male / Female",
    benefit: "No Open Wounds",
    timeRequired: "1-2 hours",
    ageGroup: "25-55 years",
    beforeAfter: {
      before: before,
      after: after,
    },
    description:
      "The surgery is classified into two types, based on the target area: Medial thigh lift: This procedure is performed to reduce the excess skin and fat of the inner thigh. In this method, the incision is made at the junction of the thigh and pubic area. A portion of skin and fat in the shape of a wedge from the upper part of the inner thigh is removed, and skin is sutured back. This surgical procedure improves the leg contour, tightens the skin, and improve the skin elasticity. Lateral thigh lift: In this method, skin on the front and outside of the thigh is tightened.  At the top of the leg (the area where the lower edge of underwear rests), an incision is made. Some amount of skin is removed, and the skin is pulled up and stitched back with the help of the sutures. This procedure aids in tightening the skin on both the left and right side of the leg. It is mostly performed in people who have loose skin due to significant weight loss",
    faqs: [
      {
        question: "How long does it take to recover from a thigh lift?",
        answer:
          "Initial recovery takes about 2 to 3 weeks, with full recovery taking several months.",
      },
      {
        question: "Will there be visible scars after a thigh lift?",
        answer:
          "Yes, there will be scars, but they are typically placed in the groin area and along the inner thigh to be less noticeable.",
      },
      {
        question: "How much recovery time is needed?",
        answer:
          "Most patients return to normal activities within two weeks, but full recovery can take several months.",
      },
      {
        question: "What are the restrictions after breast augmentation?",
        answer:
          "Do not take a bath or soak in a hot tub for about 4 weeks. Sleep on your back with your head and shoulders raised with a pillow. This will help keep your implants in place and prevent them from slipping or shifting. ",
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
        <Appointment/>
      </div>
      
    </div>
  );
}


