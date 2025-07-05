import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import herobanner from "../assets/slimfit-hero-banner.jpg"; // Hero banner image
import Faqs from "../components/Faqs";
import Content from "../components/Feature";

// Move static stats outside component to avoid re-creation on each render
const stats = [
  { data: "35K", title: "Customers" },
  { data: "10K+", title: "Downloads" },
  { data: "40+", title: "Countries" },
  { data: "30M+", title: "Total revenue" },
];

const Home = () => {
  const sectionStyle = {
    backgroundImage: `url(${herobanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative z-10" style={sectionStyle}>
        <div className="pointer-events-none absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-start">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl text-start font-bold sm:text-5xl font-calgary">
              Complete Aesthetic Solutions for
              <strong className="block font-bold text-rose-500">
                Your Health and Beauty Needs
              </strong>
            </h1>

            <div className="mt-8 flex flex-wrap gap-4 text-center z-10">
              <NavLink
                to="/contact"
                className="cursor-pointer block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Contact →
              </NavLink>

              <NavLink
                to="/appointment"
                className="cursor-pointer block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Get Appointment →
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Content Section */}
      <div
        style={{
          backgroundImage: `url(${assets.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Content />

        {/* Stats Section */}
        <section className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
          <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
            <div className="sm:hidden lg:block lg:max-w-xl">
              <img
                src={assets.client}
                alt="Happy Slimfit client"
                className="rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
              <div className="max-w-2xl">
                <h2 className="text-[#d6007b] text-3xl font-semibold sm:text-4xl">
                  We do our best to make customers always happy
                </h2>
                <p className="mt-3 max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  venenatis sollicitudin quam ut tincidunt.
                </p>
              </div>
              <div className="flex-none mt-6 md:mt-0 lg:mt-6">
                <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                  {stats.map((item, idx) => (
                    <li key={idx}>
                      <h4 className="text-4xl text-[#d6007b] font-semibold">
                        {item.data}
                      </h4>
                      <p className="mt-3 font-medium">{item.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <Faqs />

        {/* Callback Form Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
            <div className="text-center">
              <h2 className="text-4xl sm:text-6xl font-bold text-[#d6007b]">
                Request a Callback
              </h2>

              <p className="mt-3 text-grey">Want to know more about us</p>

              <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mx-auto max-w-2xl sm:flex sm:space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100">
                    <div className="w-full pb-2 sm:pb-0">
                      <input
                        type="text"
                        className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="pt-2 sm:pt-0 sm:ps-3 border-t border-gray-200 sm:border-t-0 sm:border-s w-full">
                      <input
                        type="email"
                        className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    <div className="whitespace-nowrap pt-2 sm:pt-0 grid sm:block">
                      <button
                        type="submit"
                        className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#d6007b] text-white disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Get started
                      </button>
                    </div>
                  </div>
                </form>

                {/* Decorative SVGs */}
                <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                  <svg
                    className="w-16 h-auto text-orange-500"
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

                <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                  <svg
                    className="w-40 h-auto text-cyan-500"
                    viewBox="0 0 347 188"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                      stroke="currentColor"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
