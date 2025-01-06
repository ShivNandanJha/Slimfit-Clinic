import { useEffect } from "react";
import Glide from "@glidejs/glide";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

export default function CarouselControlsOutside() {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Carousel with controls outside --> */}
      <div className="glide-04 relative w-full ">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-20">
            <li>
              <NavLink
                className="group flex flex-col bg-[#d6007b] border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition "
                exact
                to="/lip"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover rounded-t-xl"
                    src={assets.lip}
                    alt="Blog Image"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <p className="mt-2 text-xs uppercase text-white ">
                    Head And Face
                  </p>
                  <h3 className="mt-2 text-lg font-medium text-white group-hover:text-grey ">
                    Lip Augmentation
                  </h3>
                </div>
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                className="group flex flex-col bg-[#d6007b] border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition "
                exact
                to="/cryolipolysis"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover rounded-t-xl"
                    src={assets.cryolipolysis}
                    alt="Blog Image"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <p className="mt-2 text-xs uppercase text-white ">
                    Non Surgical
                  </p>
                  <h3 className="mt-2 text-lg font-medium text-white group-hover:text-grey ">
                    Cryolipolysis
                  </h3>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="group flex flex-col bg-[#d6007b] border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition "
                exact
                to="/hairtransplant"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover rounded-t-xl"
                    src={assets.hair}
                    alt="Blog Image"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <p className="mt-2 text-xs uppercase text-white ">
                    Head And Face
                  </p>
                  <h3 className="mt-2 text-lg font-medium text-white group-hover:text-grey ">
                    Hair Transplant
                  </h3>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/breastlift"
                className="group flex flex-col bg-[#d6007b] border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition "
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover rounded-t-xl"
                    src={assets.breast}
                    alt="Blog Image"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <p className="mt-2 text-xs uppercase text-white ">
                    Breast Surgery
                  </p>
                  <h3 className="mt-2 text-lg font-medium text-white group-hover:text-grey ">
                    Breast Lift
                  </h3>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="group flex flex-col bg-[#d6007b] border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition "
                exact
                to="/thighlift"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover rounded-t-xl"
                    src={assets.thigh}
                    alt="Blog Image"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <p className="mt-2 text-xs uppercase text-white ">
                    Body Contouring
                  </p>
                  <h3 className="mt-2 text-lg font-medium text-white group-hover:text-grey ">
                    thigh Lift
                  </h3>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="group flex flex-col bg-[#d6007b] border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition "
                exact
                to="/liposuction"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover rounded-t-xl"
                    src={assets.lipos}
                    alt="Blog Image"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <p className="mt-2 text-xs uppercase text-white ">
                    Body Contouring
                  </p>
                  <h3 className="mt-2 text-lg font-medium text-white group-hover:text-grey ">
                    Liposuction
                  </h3>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="group flex flex-col bg-[#d6007b] border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition "
                exact
                to="/chinaugmentation"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover rounded-t-xl"
                    src={assets.chin_aug}
                    alt="Blog Image"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <p className="mt-2 text-xs uppercase text-white ">
                    Head And Face
                  </p>
                  <h3 className="mt-2 text-lg font-medium text-white group-hover:text-grey ">
                    Chin Augmentation
                  </h3>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="group flex flex-col bg-[#d6007b] border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition "
                exact
                to="/rhinoplasty"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover rounded-t-xl"
                    src={assets.rhino}
                    alt="Blog Image"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <p className="mt-2 text-xs uppercase text-white ">
                    Head And Face
                  </p>
                  <h3 className="mt-2 text-lg font-medium text-white group-hover:text-grey ">
                    Rhinoplasty
                  </h3>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="flex w-full items-center justify-center gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-[#d6007b]/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-[#d6007b]/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with controls outside --> */}
    </>
  );
}
