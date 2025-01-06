import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import CarouselControlsOutside from "./CardScroll";

const Content = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <svg
              className="w-16 h-auto text-orange-500"
              width="121"
              height="135"
              viewBox="0 0 121 135"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-[#d6007b] sm:text-4xl sm:leading-none">
              We Are Slimfit
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Slimfit Clinic is a cosmetic clinic based in Siliguri. Slimfit
              Clinic provides the most advanced, safe, and customized treatment
              ,equipped with world-class machines and state of the art
              technology and experienced staff. where you can walk in for any of
              your cosmetic problems whether its surgical or medical. We have
              the top skin specialist in Siliguri with high tech equipments to
              provide you best results. Our clinicians are capable of giving the
              best solution for your problem.
            </p>
          </div>
          <div>
            <div className="relative after:absolute after:bg-gray-500 after:bottom-0 after:left-40 after:h-[2px] after:w-[40%] after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
              <NavLink exact to="/about">
                Abouts Us →
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={assets.slimfit}
              alt="slimfit"
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src={assets.slimfit3}
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={assets.slimfit2}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* --------------service Section--------------- */}

      <section className="px-6 md:px-16 mt-20 lg:px-24 py-1 ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* right section */}
          <div className="flex-1 grid grid-cols-2 gap-6 mt-20">
            <div className="w-full h-48 bg-pink-100 flex items-center justify-center rounded-md shadow-lg">
              <img src={assets.feature1} alt="" />
            </div>
            <div className="w-full h-48 bg-pink-100 flex items-center justify-center rounded-md shadow-lg">
              <img src={assets.feature5} alt="" />
            </div>
            <div className="w-full h-48 bg-pink-100 flex items-center justify-center rounded-md shadow-lg">
              <img src={assets.feature6} alt="" />
            </div>
            <div className="w-full h-48 bg-pink-100 flex items-center justify-center rounded-md shadow-lg">
              <img src={assets.feature4} alt="" />
            </div>
          </div>
          {/* Left Section */}
          <div className="flex-1">
            <h2 className="text-[#d6007b] text-3xl md:text-4xl font-bold mb-6">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-12">
              We believe in the transformative power of beauty and healthcare
              combined. Our mission is to empower individuals to achieve their
              optimal health and beauty goals through personalized care and
              cutting-edge treatments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Non-Surgical Treatments
                </h3>
                <ul className="text-gray-600">
                  <li>RF Cavitation </li>
                  <li>Cryolipolysis</li> <li>Laser Treatments </li>{" "}
                  <li>Steambath</li> <li> Heat Therapy</li>{" "}
                  <li>Vacuum Therapy</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Head And Face
                </h3>
                <ul className="text-gray-600">
                  <li> Hair Transplant</li>
                  <li>Chin Augmentation</li>
                  <li>Ear Reconstruction</li>
                  <li>Dimpleplasty</li>
                  <li>Facelift</li>
                  <li>Rhinoplasty</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Breast Surgery
                </h3>
                <ul className="text-gray-600">
                  <li>Breast Augmentation</li>
                  <li>Breast Lift</li>
                  <li>Breast Reduction</li>
                  <li>Gynecomastia Surgery</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Body Contouring
                </h3>
                <ul className="text-gray-600">
                  <li>Liposuction</li>
                  <li>Abdominoplasty</li>
                  <li> Abs Liposuction </li>
                  <li>Arm and Thigh Lift </li> <li>Buttock Contouring</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section */}
        </div>
      </section>
      {/* <!-- Card Blog --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-[#d6007b]">
            Choose Our Best Treatments
          </h2>
          <p className="mt-1 text-gray-600 ">
            We believe in the transformative power of beauty and healthcare
            combined. Our mission is to empower individuals to achieve their
            optimal health and beauty goals through personalized care and
            cutting-edge treatments.
          </p>
        </div>
        <CarouselControlsOutside />

        {/* <div className = "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition "
            href="#"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full object-cover rounded-t-xl"
                src={assets.hair}
                alt="Blog Image"
              />
            </div>
            <div className="p-4 md:p-5">
              <p className="mt-2 text-xs uppercase text-gray-600 ">
                Head And Face
              </p>
              <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 ">
                Hair Transplant
              </h3>
            </div>
          </a>

          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition "
            href="#"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full object-cover rounded-t-xl"
                src={assets.breast_red}
                alt="Blog Image"
              />
            </div>
            <div className="p-4 md:p-5">
              <p className="mt-2 text-xs uppercase text-gray-600 ">
                Breast surgery
              </p>
              <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 ">
                Breast reduction
              </h3>
            </div>
          </a>

          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition "
            href="#"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full object-cover rounded-t-xl"
                src={assets.buttock}
                alt="Blog Image"
              />
            </div>
            <div className="p-4 md:p-5">
              <p className="mt-2 text-xs uppercase text-gray-600 ">
                Body Contouring
              </p>
              <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 ">
                Buttock Contouring
              </h3>
            </div>
          </a>

          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition "
            href="#"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full object-cover rounded-t-xl"
                src={assets.armLift}
                alt="Blog Image"
              />
            </div>
            <div className="p-4 md:p-5">
              <p className="mt-2 text-xs uppercase text-gray-600 ">
                Body Contouring
              </p>
              <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 ">
                Arm Lift
              </h3>
            </div>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Content;
