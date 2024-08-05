import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import Scroll from "./Scroll";
import CarouselControlsOutside from "./CardScroll";

const Content = () => {
  return (
    <div className = "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className = "grid gap-10 lg:grid-cols-2">
    <div className = "flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
    <div className = "flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
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
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
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

      <section>
        <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
          <div>
            <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-6xl text-balance">
              Transform Your Beauty with
              <span className="text-gray-600"> Our Expert Services</span>
            </h1>
            <p className="mt-4 text-base font-medium text-gray-500 text-balance">
              At Slimfit, we specialize in enhancing your natural beauty with
              advanced skincare and aesthetic treatments. Discover personalized
              care and achieve radiant results today.
            </p>
          </div>
          <Scroll/>
        </div>
        <div className="space-y-20 overflow-y-auto prose-sm prose text-gray-500 divide-y max-h-[50vh] mpx-8  mx-auto md:px-12 lg:px-32 max-w-7xl prose-headings:font-normal prose-headings:text-xl ">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-32">
            <div>
              <div className="top-0 lg:sticky lg:pb-16">
                <div className="pt-8">
                  <h1 className="text-4xl">Head And Face</h1>
                </div>
              </div>
            </div>
            <div className="pt-8 lg:col-span-2">
              <div className="flex-shrink-0">
                <div className="mx-auto">
                  <img
                    className="aspect-[4/3] object-cover"
                    src={assets.feature1}
                    alt="#_"
                  />

                  <ul className="line-clamp-6 mt-5 ">
                    <li>Hair Transplant </li>
                    <li>Face Lift</li>
                    <li>Ear reconstruction</li>
                    <li>Rhinoplasty</li>
                    <li>Dimpleplasty </li>
                    <li>Chin Augmentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-32">
            <div>
              <div className="top-0 lg:sticky lg:pb-16">
                <div className="pt-8">
                  <h1 className="text-4xl">Body Contouring </h1>
                </div>
              </div>
            </div>
            <div className="pt-8 lg:col-span-2">
              <div className="flex-shrink-0">
                <div className="mx-auto">
                  <img
                    className="aspect-[4/3] object-cover"
                    src={assets.feature2}
                    alt="#_"
                  />
                  <ul className="line-clamp-6 mt-5 ">
                    <li>Liposuction </li>
                    <li>Abdominoplasty</li>
                    <li>Abs Liposuction</li>
                    <li>Arm Lift</li>
                    <li>Thigh Lift </li>
                    <li>Buttock Contouring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-32">
            <div>
              <div className="top-0 lg:sticky lg:pb-16">
                <div className="pt-8">
                  <h1 className="text-4xl">Non surgical Treatments</h1>
                </div>
              </div>
            </div>
            <div className="pt-8 lg:col-span-2">
              <div className="flex-shrink-0">
                <div className="mx-auto">
                  <img
                    className="aspect-[4/3] object-cover"
                    src={assets.feature3}
                    alt="#_"
                  />
                  <ul className="line-clamp-6 mt-5 ">
                    <li>RF Cavitation </li>
                    <li>Cryolipolysis</li>
                    <li>Laser Treatment</li>
                    <li>Steam Bath</li>
                    <li>Heat Therapy </li>
                    <li>Vacuum Therapy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-32">
            <div>
              <div className="top-0 lg:sticky lg:pb-16">
                <div className="pt-8">
                  <h1 className="text-4xl">Breast Surgery</h1>
                </div>
              </div>
            </div>
            <div className="pt-8 lg:col-span-2">
              <div className="flex-shrink-0">
                <div className="mx-auto">
                  <img
                    className="aspect-[4/3] object-cover"
                    src={assets.feature5}
                    alt="#_"
                  />
                  <ul className="line-clamp-6 mt-5 ">
                    <li>Breast Augmentation </li>
                    <li>Breast Lift</li>
                    <li>Breast Reduction</li>
                    <li>Gynecomastia Surgery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-32">
            <div>
              <div className="top-0 lg:sticky lg:pb-16">
                <div className="pt-8">
                  <h1 className="text-4xl">Mummy Makeover</h1>
                </div>
              </div>
            </div>
            <div className="pt-8 lg:col-span-2">
              <div className="flex-shrink-0">
                <div className="mx-auto">
                  <img
                    className="aspect-[4/3] object-cover"
                    src={assets.feature4}
                    alt="#_"
                  />
                  <p className="line-clamp-4 mt-5 ">
                    Security is paramount, and with our latest update,
                    introducing enhanced security features to safeguard your
                    online store. Benefit from advanced encryption, real-time
                    monitoring, and automated threat detection. These updates
                    fortify your defenses, ensuring your data, and your ata,
                    remains protected against evolving cyber threats.
                  </p>
                  <p>
                    <a href="#_">Read more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-32">
            <div>
              <div className="top-0 lg:sticky lg:pb-16">
                <div className="pt-8">
                  <h1 className="text-4xl">Bridal Makeup</h1>
                </div>
              </div>
            </div>
            <div className="pt-8 lg:col-span-2">
              <div className="flex-shrink-0">
                <div className="mx-auto">
                  <img
                    className="aspect-[4/3] object-cover"
                    src={assets.feature6}
                    alt="#_"
                  />
                  <p className="line-clamp-4 mt-5 ">
                    Our latest update introduces Interactive Dashboards,
                    allowing users to dynamically interact with their data like
                    never before. Customize, explore, and gain insights in a
                    wholly intuitive and seamless manner.
                  </p>
                  <p>
                    <a href="#_">Read more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Card Blog --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Choose Our Best Treatments
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            We believe in the transformative power of beauty and healthcare
            combined. Our mission is to empower individuals to achieve their
            optimal health and beauty goals through personalized care and
            cutting-edge treatments.
          </p>
        </div>
        <CarouselControlsOutside />
        
        {/* <div className = "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
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
              <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
                Head And Face
              </p>
              <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                Hair Transplant
              </h3>
            </div>
          </a>

          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
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
              <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
                Breast surgery
              </p>
              <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                Breast reduction
              </h3>
            </div>
          </a>

          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
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
              <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
                Body Contouring
              </p>
              <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                Buttock Contouring
              </h3>
            </div>
          </a>

          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
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
              <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
                Body Contouring
              </p>
              <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
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
