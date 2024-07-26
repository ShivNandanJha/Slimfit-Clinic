import herobanner from "../assets/banner.svg";
import Faqs from "../components/Faqs";
import Content from "../components/Feature";

const Home = () => {
  const sectionStyle = {
    backgroundImage: `url(${herobanner})`, // Define background image using imported variable
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const stats = [
    {
      data: "35K",
      title: "Customers",
    },
    {
      data: "10K+",
      title: "Downloads",
    },
    {
      data: "40+",
      title: "Countries",
    },
    {
      data: "30M+",
      title: "Total revenue",
    },
  ];
  return (
    <div>
      <section className="relative -z-10" style={sectionStyle}>
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Complete Aesthetic Solutions for
              <strong className="block font-extrabold text-rose-500">
                {" "}
                Your Health and Beauty Needs{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              step into a world where your beauty aspirations become reality.
              Our dedicated team offers a range of services, including targeted
              weight loss plans, state-of-the-art hair transplants, and
              personalized breast surgeries. Reimagine your look with face
              reconstructions, liposuction, and mummy makeovers. Perfect your
              special day with our exquisite bridal makeup services. Your
              transformation starts here.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
               Contact →
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Get Appointment →
              </a>
            </div>
          </div>
        </div>
      </section>
      <Content />
      {/* --------------------Success Section---------------- */}
     
      <section className =  "relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
          <div className="sm:hidden lg:block lg:max-w-xl">
            <img
              src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="rounded-lg"
              alt=""
            />
          </div>
          <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
            <div className="max-w-2xl">
              <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                We do our best to make customers always happy
              </h3>
              <p className="mt-3 max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                venenatis sollicitudin quam ut tincidunt.
              </p>
            </div>
            <div className="flex-none mt-6 md:mt-0 lg:mt-6">
              <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                {stats.map((item, idx) => (
                  <li key={idx} className="">
                    <h4 className="text-4xl text-indigo-600 font-semibold">
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
      {/* ------------------------Faqs------------------------ */}
      <Faqs />

      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-neutral-200">
              Insights
            </h1>

            <p className="mt-3 text-gray-600 dark:text-neutral-400">
              Stay in the know with insights from industry experts.
            </p>

            <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
              <form>
                <div className="mx-auto max-w-2xl sm:flex sm:space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
                  <div className="w-full pb-2 sm:pb-0">
                    <label
                      htmlFor="hs-hero-name-1"
                      className="block text-sm font-medium dark:text-white"
                    >
                      <span className="sr-only">Your name</span>
                    </label>
                    <input
                      type="text"
                      id="hs-hero-name-1"
                      className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="pt-2 sm:pt-0 sm:ps-3 border-t border-gray-200 sm:border-t-0 sm:border-s w-full dark:border-neutral-700">
                    <label
                      htmlFor="hs-hero-email-1"
                      className="block text-sm font-medium dark:text-white"
                    >
                      <span className="sr-only">Your email address</span>
                    </label>
                    <input
                      type="email"
                      id="hs-hero-email-1"
                      className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="whitespace-nowrap pt-2 sm:pt-0 grid sm:block">
                    <a
                      className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      href="#"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </form>

              <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
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
              <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                <svg
                  className="w-40 h-auto text-cyan-500"
                  width="347"
                  height="188"
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
  );
};

export default Home;
