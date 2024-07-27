import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaClock,
  FaCalendarAlt,
  FaBandAid,
  FaTransgender,
} from "react-icons/fa";

import img1 from "../../assets/treatments/breastAug/1.png";
import img2 from "../../assets/treatments/breastAug/2.png";
import img3 from "../../assets/treatments/breastAug/3.png";
import after from "../../assets/treatments/breastAug/after.png";
import before from "../../assets/treatments/breastAug/before.png";
const BreastAugmentation = () => {
  const service = {
    name: "Breast Augmentation",
    about:
      "Breast augmentation is surgery to increase breast size. It involves placing breast implants under breast tissue or chest muscles. And Slimfit Clinic is one of the best clinic to provide breast augmentation  treatment in Siliguri. ",

    images: [img1, img2, img3],
    suitableFor: "Female",
    benefit: "No Open Wounds",
    timeRequired: "1-2 hours",
    ageGroup: "25-55 years",
    beforeAfter: {
      before: before,
      after: after,
    },
    description:
      "Breast Augmentation is a out-patient procedure and the patient is discharged the very same day. For breast augmentation using breast implants, incisions are made either along the areolar edge (peri-areolar incision), the fold under the breast (inframammary fold) or in the armpit (axillary incision). Through the incision, an implant is placed either under the pectoral muscle or directly behind the breast tissue. The incision is closed using sutures or adhesive or surgical tape. The results of breast augmentation are immediately visible. The incision lines however fade with time.",
    faqs: [
      {
        question: "Will breast augmentation surgery leave visible scars?",
        answer:
          "Scarring depends on the technique used. Your surgeon will discuss scar placement and visibility during your consultation.",
      },
      {
        question: "How long does breast augmentation last?",
        answer:
          "The average life span of an implant is about 10 years. Implant rupture is a possibility. Also, your breasts will continue to age, and factors such as weight gain or weight loss might change the way your breasts look.",
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
<div className = "mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
<div className = "service-info p-5 flex flex-col justify-center items-center">
<div className = "max-w-3xl text-center">
<h2  className = "text-4xl text-center font-bold sm:text-4xl">
            {service.name}
          </h2>
        </div>

        <div    className               = "grid grid-cols-1  lg:grid-cols-2 lg:gap-8">
        <div    className               = "lg:w-[200%] sm:w-[100%] p-10">
        <Slider {...settings} className = "sliders w-[100%] sm:w-[50%] ">
              {service.images.map((image, index) => (
                <div key = {index}>
                  <img
                    src       = {image}
                    alt       = {`Slide ${index}`}
                    className = "carousel-image w-full h-auto object-cover"
                  />
                </div>
              ))}
            </Slider>{" "}
          </div>
          <div     className = "lg:mt-20 text-start">
          <article className = "space-y-4 text-gray-600 text-lg">
              <h3>{service.about}</h3>{" "}
            </article>
          </div>
        </div>

        <div           className = "service-details flex justify-around my-5 flex-wrap border border-gray-200 rounded-lg p-10 bg-cover bg-[url('../../assets/bg.png')]">
        <div           className = "detail-grid p-5 flex flex-col items-center text-center">
        <FaTransgender className = "icons text-2xl" />{" "}
        <p             className = "mt-1">{service.suitableFor}</p>
          </div>
          <div       className = "detail-grid p-5 flex flex-col items-center text-center">
          <FaBandAid className = "icons text-2xl" />{" "}
          <p         className = "mt-1">{service.benefit}</p>
          </div>
          <div     className = "detail-grid p-5 flex flex-col items-center text-center">
          <FaClock className = "icons text-2xl" />{" "}
          <p       className = "mt-1">{service.timeRequired}</p>
          </div>
          <div           className = "detail-grid p-5 flex flex-col items-center text-center">
          <FaCalendarAlt className = "icons text-2xl" />{" "}
          <p             className = "mt-1">{service.ageGroup}</p>
          </div>
        </div>

        <div className = "treatment-result-specialty flex flex-wrap lg:flex-nowrap justify-around my-5">
        <div className = "diff aspect-[16/9] w-full lg:w-1/2">
        <div className = "diff-item-1 bg-base-200 text-primary-content grid place-content-center text-9xl font-black">
        <img src       = {service.beforeAfter.before} alt = "" />
            </div>
            <div className = "diff-item-2 bg-base-200 grid place-content-center text-9xl font-black">
            <img src       = {service.beforeAfter.after} alt = "" />
            </div>
            <div className = "diff-resizer"></div>
          </div>
          <div className = "specialty space-y-4 text-gray-600 text-center p-5 w-full lg:w-1/2">
          <h1  className = "font-raleway text-4xl">Specialty</h1>
            <hr />
            <p className = "font-alegreya text-justify text-lg">
              Here at Slimfit, we know how {service.name} treatments can totally
              change the game. Our services blend cutting-edge techniques with
              top-notch personalized care to give you genuinely unmatched
              results. We are all about ensuring everything we do is safe and
              effective, leaving you delighted. Our skin tightening treatment
              has got you covered no matter what your skin needs or type.
            </p>
          </div>
        </div>

        <div className = "description-section my-5 text-center">
        <h3  className = "font-raleway text-4xl">Description</h3>
          <hr />
          <p className = "font-alegreya text-justify text-lg p-5">
            {service.description}
          </p>
        </div>
        

        <div className = "faqs-section relative left-5% p-10 w-full my-5 text-center flex flex-col items-center  ">
        <h3  className = "font-raleway text-2xl">FAQs</h3>
          <hr />
          {service.faqs.map((faq, index) => (
            <div key={index} className="faq-item my-2 w-full">
              <button
                onClick={() => handleFAQClick(index)}
                className="faq-question bg-blue-200 w-full text-lg text-black p-2 border-none text-left cursor-pointer font-alegreya"
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <div className="faq-answer p-2 bg-gray-200 border-l-4 border-gray-800 mt-1 font-alegreya text-lg text-justify">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreastAugmentation;
