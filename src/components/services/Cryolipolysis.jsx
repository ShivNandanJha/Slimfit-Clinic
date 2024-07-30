import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import img1 from "../../assets/treatments/cryolipolysis/1.png";
import img2 from "../../assets/treatments/cryolipolysis/2.png";
import img3 from "../../assets/treatments/cryolipolysis/3.png";
import after from "../../assets/treatments/cryolipolysis/after.png";
import before from "../../assets/treatments/cryolipolysis/before.png";
import { assets } from "../../assets/assets";
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
    <div className = "mx-auto max-w-screen-xl px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
    <div className = "service-info p-5 flex flex-col justify-center items-center">
    <div className = "max-w-3xl text-center">
    <h1  className = "text-4xl font-semibold tracking-tighter text-gray-600 lg:text-6xl text-balance">
            {service.name}
            <hr className = "w-48 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-5 dark:bg-gray-700"></hr>
          </h1>
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
          <div     className = "lg:mt-20 text-start flex flex-col ">
          <article className = "space-y-4 text-gray-600 text-lg font-Asap">
              <h3>{service.about}</h3>{" "}
            </article>
            <div className = "service-details flex justify-around my-5 flex-wrap border bg-blue-50 border-blue-400 rounded-lg p-10 bg-cover bg-[url('../../assets/bg.png')]">
            <div className = "detail-grid p-5 flex flex-col items-center text-center">
            <img src       = {assets.gender} alt = "" />
            <p   className = "mt-1">{service.suitableFor}</p>
              </div>
              <div className = "detail-grid p-5 flex flex-col items-center text-center">
              <img src       = {assets.bandage} alt = "" />

                <p className = "mt-1">{service.benefit}</p>
              </div>
              <div className = "detail-grid p-5 flex flex-col items-center text-center">
              <img src       = {assets.time} alt = "" />
              <p   className = "mt-1">{service.timeRequired}</p>
              </div>
              <div className = "detail-grid p-5 flex flex-col items-center text-center">
              <img src       = {assets.age} alt = "" />

                <p className = "mt-1">{service.ageGroup}</p>
              </div>
            </div>
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
          <h1  className = "text-4xl font-semibold tracking-tighter text-gray-600 lg:text-4xl text-balance">
              Specialty
            </h1>
            <hr className = "w-48 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-5 dark:bg-gray-700"></hr>
            <p  className = "font-alegreya text-justify text-lg">
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
        <h1  className = "text-4xl font-semibold tracking-tighter text-gray-600 lg:text-4xl text-balance">
            Description / Procedure
          </h1>
          {/* <hr className="w-40 relative align-middle text-center left-20 lg:left-[30rem] mt-3 bg-blue-400" /> */}
          <hr className = "w-48 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-5 dark:bg-gray-700"></hr>
          <p  className = "font-alegreya text-justify text-lg p-5">
            {service.description}
          </p>
        </div>

        <div className = "faqs-section relative left-5% p-10 w-full my-5 text-center flex flex-col items-center  ">
        <h1  className = "text-4xl font-semibold tracking-tighter text-gray-600 lg:text-4xl text-balance">
            FAQs
          </h1>
          <hr className = "w-48 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-5 dark:bg-gray-700"></hr>
          {service.faqs.map((faq, index) => (
            <div key = {index} className = "faq-item my-2 w-full">
              <button
                onClick   = {() => handleFAQClick(index)}
                className = "faq-question bg-blue-200 w-full text-lg text-black p-2 border-none text-left cursor-pointer font-Asap"
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

export default Cryolipolysis;
