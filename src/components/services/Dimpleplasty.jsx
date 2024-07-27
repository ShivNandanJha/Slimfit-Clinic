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
import img1 from "../../assets/treatments/dimpleplasty/1.png";
import img2 from "../../assets/treatments/dimpleplasty/2.png";
import img3 from "../../assets/treatments/dimpleplasty/3.png";
import after from "../../assets/treatments/dimpleplasty/after.png";
import before from "../../assets/treatments/dimpleplasty/before.png";
const Dimpleplasty       = () => {
  const service = {
    name: "dimpleplasty",
    about:
      "Do you want to make your smile more beautiful? We have the solution  Dimpleplasty is a technique to make your smile more beautiful by making a dimple in your cheeks.  And Slimfit Clinic is one of the best clinic to provide dimpleplasty  treatment in Siliguri.  ",

    images: [img1, img2, img3],
    suitableFor: "Male/Female",
    benefit: "No Open Wounds",
    timeRequired: "1-2 hours",
    ageGroup: "25-55 years",
    beforeAfter: {
      before: before,
      after: after,
    },
    description:"Dimples are small depressions in the skin that appear when smiling. These indentations can enhance someone’s features and are often desired to create a more attractive facial contour. Natural dimples are apparent at birth and are caused by a slight deformity in the cheek muscle where the skin is tethered to the zygomaticus major muscle. When an individual smiles, the fibrous connection causes the dimple to become deeper and more visible. This tethering can be mimicked surgically during a dimpleplasty procedures. For those with prominent cheekbones looking for a dramatic reshaping of the face, a cheekbone reduction surgery may be better suited. Before the dimpleplasty procedure, the surgeon will mark the areas on the surface of the cheeks for where the new dimples will be. Once the location is agreed upon, local anesthesia will be applied to ensure comfort for the patient. A small incision will be made on the inside of the cheek. An absorbable suture will be passed through the inside of the cheek to catch the undersurface of the skin where the dimple is desired. Once the suture is tied, a depression will form on the overlying skin. After surgery the dimple will be present even without smiling. Eventually, the dimple will only fade and only be present when moving the face. The suture will cause scarring between the cheek and cheek muscle so that even when the suture has dissolved, the scar tissue will act as the fibrous connection and create the superficial indentation when smiling. The goal of a dimpleplasty is to create the appearance of dimples.",
    faqs: [
      {
        question: "Is dimpleplasty permanent?",
        answer:
          "Yes, once the tissue heals and forms a natural-looking dimple, the results are permanent.",
      },
      {
        question: "Is the procedure painful?",
        answer:
          "It is performed under local anesthesia, so pain is minimal during the procedure, with mild discomfort during recovery",
      },
      {
        question: "How long does dimpleplasty take to heal?",
        answer:
          "You can go back to work or resume regular activities two days after the procedure. The surgeon will set up a follow-up appointment a few weeks later to check the results. In general, recovery takes about 2 weeks, but it may take a couple of months to see the full results.",
        },
        {
            question: "What to avoid after dimpleplasty?",
            answer:
              "Smoking will delay the healing process or cause skin loss, which increases your risk of postoperative complications. Also, continue to avoid aspirin and other anti-inflammatory medications (NSAIDS), vitamin E, and herbal medications for one week after surgery.",
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
      <Appointment  />
    </div>
  );
};

export default Dimpleplasty;
