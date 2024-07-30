import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/treatments/heatTherapy/1.png";
import img2 from "../../assets/treatments/heatTherapy/2.png";
import img3 from "../../assets/treatments/heatTherapy/3.png";
import { assets } from "../../assets/assets";
// import after from "../../assets/treatments/heatTherapy/after.png";
// import before from "../../assets/treatments/heatTherapy/before.png";
const HeatTherapy = () => {
  const service = {
    name: "Heat Therapy",
    about:
      "Heat therapy, also called thermotherapy, is the use of heat in therapy, such as for pain relief and health. And Slimfit Clinic is one of the best clinic to provide Heat Therapy in Siliguri.  ",

    images: [img1, img2, img3],
    suitableFor: "Male/Female",
    benefit: "No Open Wounds",
    timeRequired: "1-2 hours",
    ageGroup: "25-55 years",
    beforeAfter: {
      before: " ",
      after: " ",
    },
    description:
      "The treatment depends on the type of application and the type of disease.There are 3 phases of the healing process: the inflammatory phase, the proliferation phase and the remodeling phase. The first phase, known as the inflammatory phase, protects the injured area from further injury while the body contains the damaged tissue. During this phase, cryotherapy can help to reduce swelling. Never use heat during this phase because heat increases the blood flow into the injured area and increases the amount of swelling. The inflammatory phase has a duration of 2 days. During the second phase, the proliferation phase, new tissue and scar tissue are formed. Heat can now be applied to the injured area to facilitate the healing process. The third and final phase, the remodeling phase, is the process of returning to health: the restoration of structure and function of injured or diseased tissues. The healing process includes blood clotting, tissue mending, scarring and bone healing. Heat therapy can also be used during this phase. ",

    faqs: [
      {
        question: "Can heat therapy be used for all types of pain?",
        answer  : 
          "Results can be seen as early as three weeks, with full results visible after two to three months.",
      },
      {
        question: "Are there any risks associated with heat therapy?",
        answer:
          "Overuse can cause burns or skin irritation; always use a barrier between the heat source and skin and limit application time",
      },
      {
        question: "How long does heat therapy take?",
        answer:
          "The exact duration for heat application depends on the type and/or magnitude of the injury. Short durations, about 15 to 20 minutes, will suffice for minor back tension, while longer durations for up to 30 minutes, may be recommended for chronic conditions or severe, excruciating pain.",
      },
      {
        question: "When should you avoid using heat therapy?",
        answer:
          "Do not use heat treatments after activity, and do not use heat after an acute injury. Never use heat where swelling is involved because swelling is caused by bleeding in the tissue, and heat just draws more blood to the area.",
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

export default HeatTherapy;
