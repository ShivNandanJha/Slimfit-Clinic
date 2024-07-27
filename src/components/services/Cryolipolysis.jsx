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
import img1 from "../../assets/treatments/cryolipolysis/1.png";
import img2 from "../../assets/treatments/cryolipolysis/2.png";
import img3 from "../../assets/treatments/cryolipolysis/3.png";
import after from "../../assets/treatments/cryolipolysis/after.png";
import before from "../../assets/treatments/cryolipolysis/before.png";
const Cryolipolysis       = () => {
  const service = {
    name: "Cryolipolysis",
    about:
      "Do you have excess fats in your body and you want to remove the fat from your body ?  But you afraid from surgical treatment. Don’t we have solution, In slimfit clinic, we can remove your bad body fat without doing any surgical treatment.    ",

    images: [img1, img2, img3],
    suitableFor: "Male/Female",
    benefit: "No Open Wounds",
    timeRequired: "1-2 hours",
    ageGroup: "25-55 years",
    beforeAfter: {
      before: before,
      after: after,
    },
      description: "The procedure can be done in a doctor’s office or outpatient clinic. The size and shape of the fatty deposit is assessed and the area to be treated is outlined with a skin-marking pencil. Patients are awake during the procedure. A handheld device called an applicator is used to freeze the layer of fat cells (adipocytes) underneath the skin. First, a gel pad is applied to the area to protect the skin. Next, the fatty bulge is suctioned or vacuumed into the applicator’s hallow opening. You will feel a tugging or pulling sensation as suction is applied. These sensations, intense cold plus other possible sensations – tingling, stinging, aching, cramping – lessen after 5 to 10 minutes as the area becomes numb during the cooling down process. The fat layer is gradually cooled to the target temperature of between 30.2 and 39.2 degrees Fahrenheit.It takes up to one hour to treat an area. After the area is treated, the applicator is removed. The area may be massaged for 2 to 3 minutes to assist with the breakdown of the fat cells.",
    
      
    faqs: [
      {
        question: "How soon will I see results after cryolipolysis?",
        answer:
          "Results can be seen as early as three weeks, with full results visible after two to three months.",
      },
      {
        question: "Is cryolipolysis a weight loss solution?",
        answer:
          "No, it is not a weight loss solution but a fat reduction treatment for specific areas.",
      },
      {
        question: "How do I know if cryolipolysis is working",
        answer:
          "After 3 to 4 weeks, you can then take your “after” photos and your “after” measurements to see the progress in which you have made.",
        },
        {
            question: "Can fat come back after cryolipolysis?",
            answer:
              "After this point, in the weeks following treatment, they will be naturally removed from the body. Since the treated fat cells are permanently removed during this process, the fat will not come back after getting CoolSculpting",
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

export default Cryolipolysis;
