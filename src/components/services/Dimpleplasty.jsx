import { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import img1 from "../../assets/treatments/dimpleplasty/1.png";
import img2 from "../../assets/treatments/dimpleplasty/2.png";
import img3 from "../../assets/treatments/dimpleplasty/3.png";
import after from "../../assets/treatments/dimpleplasty/after.png";
import before from "../../assets/treatments/dimpleplasty/before.png";
import { assets } from "../../assets/assets";
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
};

export default Dimpleplasty;
