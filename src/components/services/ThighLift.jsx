import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/treatments/thighLift/1.png";
import img2 from "../../assets/treatments/thighLift/2.png";
import img3 from "../../assets/treatments/thighLift/3.png";
import after from "../../assets/treatments/thighLift/after.png";
import before from "../../assets/treatments/thighLift/before.png";
import { assets } from "../../assets/assets";
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
    <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
    <div className="service-info p-5 flex flex-col justify-center items-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-semibold tracking-tighter text-gray-600 lg:text-6xl text-balance">
          {service.name}
          <hr className="w-48 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-5 dark:bg-gray-700"></hr>
        </h1>
      </div>

      <div className="grid grid-cols-1  lg:grid-cols-2 lg:gap-8">
        <div className="lg:w-[200%] sm:w-[100%] p-10  -z-10">
          <Slider {...settings} className="sliders w-[100%] sm:w-[50%] ">
            {service.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="carousel-image w-full h-auto object-cover"
                />
              </div>
            ))}
          </Slider>{" "}
        </div>
        <div className="lg:mt-20 text-start flex flex-col ">
          <article className="space-y-4 text-gray-600 text-lg font-Asap">
            <h3>{service.about}</h3>{" "}
          </article>
          <div className = "service-details flex justify-around my-5 flex-wrap border bg-blue-50 border-blue-400 rounded-lg p-10 bg-cover bg-[url('../../assets/bg.png')]">
          <div className = "detail-grid p-5 flex flex-col items-center text-center">
          <img src       = {assets.gender} alt = "" />
          <p   className = "mt-1">{service.suitableFor}</p>
            </div>
            <div className="detail-grid p-5 flex flex-col items-center text-center">
              <img src={assets.bandage} alt="" />

              <p className="mt-1">{service.benefit}</p>
            </div>
            <div className="detail-grid p-5 flex flex-col items-center text-center">
              <img src={assets.time} alt="" />
              <p className="mt-1">{service.timeRequired}</p>
            </div>
            <div className="detail-grid p-5 flex flex-col items-center text-center">
              <img src={assets.age} alt="" />

              <p className="mt-1">{service.ageGroup}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="treatment-result-specialty flex flex-wrap lg:flex-nowrap justify-around my-5">
        <div className="diff aspect-[16/9] w-full lg:w-1/2">
          <div className="diff-item-1 bg-base-200 text-primary-content grid place-content-center text-9xl font-black">
            <img src={service.beforeAfter.before} alt="" />
          </div>
          <div className="diff-item-2 bg-base-200 grid place-content-center text-9xl font-black">
            <img src={service.beforeAfter.after} alt="" />
          </div>
          <div className="diff-resizer"></div>
        </div>
        <div className="specialty space-y-4 text-gray-600 text-center p-5 w-full lg:w-1/2">
          <h1 className="text-4xl font-semibold tracking-tighter text-gray-600 lg:text-4xl text-balance">
            Specialty
          </h1>
          <hr className="w-48 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-5 dark:bg-gray-700"></hr>
          <p className="font-alegreya text-justify text-lg">
            Here at Slimfit, we know how {service.name} treatments can totally
            change the game. Our services blend cutting-edge techniques with
            top-notch personalized care to give you genuinely unmatched
            results. We are all about ensuring everything we do is safe and
            effective, leaving you delighted. Our skin tightening treatment
            has got you covered no matter what your skin needs or type.
          </p>
        </div>
      </div>

      <div className="description-section my-5 text-center">
        <h1 className="text-4xl font-semibold tracking-tighter text-gray-600 lg:text-4xl text-balance">
          Description / Procedure
        </h1>
        {/* <hr className="w-40 relative align-middle text-center left-20 lg:left-[30rem] mt-3 bg-blue-400" /> */}
        <hr className="w-48 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-5 dark:bg-gray-700"></hr>
        <p className="font-alegreya text-justify text-lg p-5">
          {service.description}
        </p>
      </div>

      <div className="faqs-section relative left-5% p-10 w-full my-5 text-center flex flex-col items-center  ">
        <h1 className="text-4xl font-semibold tracking-tighter text-gray-600 lg:text-4xl text-balance">
          FAQs
        </h1>
        <hr className="w-48 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-5 dark:bg-gray-700"></hr>
        {service.faqs.map((faq, index) => (
          <div key={index} className="faq-item my-2 w-full">
            <button
              onClick={() => handleFAQClick(index)}
              className="faq-question bg-blue-200 w-full text-lg text-black p-2 border-none text-left cursor-pointer font-Asap"
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="faq-answer p-2 bg-gray-100 border-l-4 border-orange-500 mt-1 font-Asap text-lg text-justify">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}


