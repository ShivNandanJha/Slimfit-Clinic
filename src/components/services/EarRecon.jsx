import { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/treatments/earReconstruction/1.png";
import img2 from "../../assets/treatments/earReconstruction/2.png";
import img3 from "../../assets/treatments/earReconstruction/3.png";
import after from "../../assets/treatments/earReconstruction/after-ear.png";
import before from "../../assets/treatments/earReconstruction/before-ear.png";
import { assets } from "../../assets/assets";
const EarRecon = () => {
  const service = {
    name: "Chin Augmentation",
    about:
      "Do you have a fatty chin? Or you want a sharp chin. Don’t worry, We have the solution. Chin augmentation is a technique to sharp your chin and remove fat from the chin And Slimfit Clinic is one of the best clinic to provide chin augmentation treatment in Siliguri.  ",

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
      " Ear reconstruction can take place in the surgeon’s office-based surgical facility, an outpatient surgery center or in a hospital.Before the surgery, the surgeon will conduct a thorough history and examination, as well as hearing tests. The surgeon will also assess whether to use the person’s own (autologous) tissue, such as skin or cartilage, to reconstruct the ear or if a prosthetic is more likely to yield a better result. Regardless of which materials are used, the surgeon will ensure the person is comfortable during the procedure by using anaesthesia. General anaesthesia causes a deep sleep during surgery, whereas a combination of sedative medications and local anaesthesia allows the patient to remain awake but relaxed and pain-free throughout the procedure.",
    faqs: [
      {
        question:
          "Can ear reconstruction surgery correct asymmetry or deformities caused by injury?",
        answer:
          "Yes, ear reconstruction can address a wide range of deformities, including those from trauma or previous surgeries.",
      },
      {
        question:
          "What is the recovery process like for ear reconstruction surgery?",
        answer:
          "Recovery involves wearing a protective headband and avoiding activities that could strain the ears for several weeks.",
      },
      {
        question: "What age is best for ear reconstruction?",
        answer:
          "Typically, children aged 6-7 are good candidates as their ears have nearly reached adult size.",
      },
      {
        question: "Is ear reconstruction covered by insurance?",
        answer: "It often is, especially if it's medically necessary.",
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

export default EarRecon;
