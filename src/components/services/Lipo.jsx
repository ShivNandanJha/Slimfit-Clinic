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
import img1 from "../../assets/treatments/liposuction/1.png";
import img2 from "../../assets/treatments/liposuction//2.png";
import img3 from "../../assets/treatments/liposuction/3.png";
import after from "../../assets/treatments/liposuction/after-liposuction.png";
import before from "../../assets/treatments/liposuction/before-liposuction.png";
const Lipo = () => {
  const service = {
    name: "Liposuction",
    aboutl1:
      "At this era,  almost everyone is suffering from high weight problem. And becasue of the bad figure they don’t find themselves comfortable in public. Don’t worry, We have the solution. Liposuction is a technique to lose fat without wasting lots of time in gym.  And Slimfit Clinic is one of the best clinic to provide liposuction surgery in Siliguri. ",

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
      " A general examination is done to evaluate the patient’s health status in terms of BP, blood sugar, asthma, thyroid, or any other health associated risks. A qualified & experienced anesthesiologist will attend you for a higher safety purpose. The procedure is done under local or general anesthesia depends on the amount of fat and body areas needed to be treated. Tiny keyhole incisions are made in hidden location so that it could be practically imperceptible. A highly diluted anesthesia / numbing fluid injected into the treatment area.The ultimate goal of liposuction surgery is to achieve a desired sculpted body profile in the least traumatic way without the chances of any kind of discomfort or side effects. Liposuction is performed by using a small cannula (3-4mm), which is connected to a powerful suction pump. The cannula is carefully inserted into the fat deposits through incisions in order to achieve the best fat aspiration done throughout the procedure. The cannula is destined to move back and forth and removes the fat cells effectively. Later on, the tiny incisions are closed with a stitch.  It’s a daycare procedure in a few cases,                                                                                                                                                                                                    where less fat removal is done so one can go home the same day. Few patients may want to stay a day or two to recover and rest. You will be provided with pressure garments that are needed to be worn 24/7 as instructed by the surgeon for a month or more in order to avoid swelling and seroma. Pressure garments also help in adapting new contours and help the skin to retract.Resuming Work        : One can start walking the same day of the surgery and resume office work within 2-3 days. Driving can be started after 3-4 days,                                                                                                            cardio activities after 7-10 days,                                                                                                                                                                                                                                                                  and heavy or strenuous physical activities after 2-3 weeks are advisable. No bed rest is advised. Daily 30mins of walking and keeping yourself active is crucial for a speedy recovery.",
    specialty:
      " Here at Slimfit, we know how Liposuction treatments can totally change the game. Our services blend cutting-edge techniques with top-notch personalized care to give you genuinely unmatched results. We're all about ensuring everything we do is safe and effective, leaving you delighted. Our skin tightening treatment has got you covered no matter what your skin needs or type.",
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
      <Appointment />
    </div>
  );
};

export default Lipo;
