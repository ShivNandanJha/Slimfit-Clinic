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
import img1 from "../../assets/treatments/steamBath/1.png";
import img2 from "../../assets/treatments/steamBath/2.png";
import img3 from "../../assets/treatments/steamBath/3.png";
// import after from "../../assets/treatments/steamBath/after.png";
// import before from "../../assets/treatments/steamBath/before.png";
const SteamBath       = () => {
  const service = {
    name: "Steam Bath",
    about:
      "Steam bathing has been part of cultures around the world throughout history, but it’s not uncommon to meet Americans unfamiliar with the practice.  And Slimfit Clinic is one of the best clinic to provide steam bath therapy in Siliguri. ",

    images: [img1, img2, img3],
    suitableFor: "Male/Female",
    benefit: "No Open Wounds",
    timeRequired: "1-2 hours",
    ageGroup: "25-55 years",
    beforeAfter: {
      before: " ",
      after: " ",
    },
    description:"Steam bath is a glowing therapy wherein a person sits inside a box keeping their head out. This box contains a mixture of herbs and medicinal leaves. The person sits in the steam box which is filled with herb-infused steam for about ten minutes to half hour. The herbs are added to the steam therapy according to the individual’s state of imbalance. This therapy helps to drive the herbal oil deeper into the layers of the person’s skin. The sweating helps to remove toxins. In Steam bath, a deep bath is filled with herbal decoctions or essential oils. Essential oils like lemon grass and eucalyptus oil are used to speed up the process of detoxification. The steam therapy is truly an enjoyable and rejuvenating experience for the individual. In this therapy the body is nourished by the herbal steam and a cool damp cloth is placed on the back of the neck and the forehead in order to keep the head cool. The practitioners gently mists or moistens the face with organic rose water. This process results in the release of endorphins which make the individual relax absolutely in an invigorated and blissful state of being. The herbs that are used in the steam help to remove the toxins, soften the muscles and also support the increase of healthy blood circulation. To rehydrate and cool the individual’s body, room temperature cooling teas like hibiscus or rose-mint will be given",
    faqs: [
      {
        question: "What are the benefits of a steam bath?",
        answer:
          "Benefits include improved circulation, relaxation, detoxification, and relief from respiratory issues.",
      },
      {
        question: "How often can I use a steam bath?",
        answer:
          "It is safe to use a steam bath several times a week, but it is essential to stay hydrated.",
      },
      {
        question: "What are the precautions for steam bath?",
        answer:
          "Due to the heat, there is a risk of dehydrating the body, and it is advisable not to spend longer than 10 minutes inside. It is also important to drink plenty of water beforehand. A steam room also provides the ideal environment for certain bacteria and germs to grow and spread.",
        },
        {
            question: "Is steam shower good for blood pressure?",
            answer:
              "The heat in a steam room can dilate, or enlarge, your blood vessels. This helps move blood from your core to your skin, which can lower your blood pressure. Your body will then compensate by raising your heart rate. Improves circulation.",
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

export default SteamBath;
