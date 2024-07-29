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
    <div className = "mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className = "service-info p-5 flex flex-col justify-center items-center">
    <div className = "max-w-3xl text-center">
    <h2  className = "text-4xl text-center font-bold sm:text-4xl">
            {service.name}
          </h2>
        </div>

        <div    className               = "grid grid-cols-1  lg:grid-cols-2 lg:gap-8">
        <div    className               = "lg:w-[200%] sm:w-[100%] p-10  -z-10">
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

        <div className="faqs-section relative left-5% p-10 w-full my-5 text-center flex flex-col items-center  ">
          <h3 className="font-raleway text-2xl">FAQs</h3>
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

export default SteamBath;
