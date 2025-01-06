import { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/treatments/liposuction/1.png";
import img2 from "../../assets/treatments/liposuction//2.png";
import img3 from "../../assets/treatments/liposuction/3.png";
import after from "../../assets/treatments/liposuction/after-liposuction.png";
import before from "../../assets/treatments/liposuction/before-liposuction.png";
import { assets } from "../../assets/assets";
const Lipo = () => {
  const service = {
    name: "Liposuction",
    about:
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
    <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
      <div className="service-info p-5 flex flex-col justify-center items-center">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tighter text-gray-600 lg:text-6xl text-balance">
            {service.name}
            <hr className="w-48 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-5 "></hr>
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
            <div className="service-details flex justify-around my-5 flex-wrap border bg-blue-50 border-blue-400 rounded-lg p-10 bg-cover bg-[url('../../assets/bg.png')]">
              <div className="detail-grid p-5 flex flex-col items-center text-center">
                <img src={assets.gender} alt="" />
                <p className="mt-1">{service.suitableFor}</p>
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
            <hr className="w-48 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-5 "></hr>
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
          <hr className="w-48 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-5 "></hr>
          <p className="font-alegreya text-justify text-lg p-5">
            {service.description}
          </p>
        </div>

        <div className="faqs-section relative left-5% p-10 w-full my-5 text-center flex flex-col items-center  ">
          <h1 className="text-4xl font-semibold tracking-tighter text-gray-600 lg:text-4xl text-balance">
            FAQs
          </h1>
          <hr className="w-48 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-5 "></hr>
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
};

export default Lipo;
