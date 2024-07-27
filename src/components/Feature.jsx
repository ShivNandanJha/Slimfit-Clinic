import { assets } from "../assets/assets";

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
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              About Us
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
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
          </div>  </div>
                <div className="space-y-20 overflow-y-auto prose-sm prose text-gray-500 divide-y max-h-[50vh] mpx-8  mx-auto md:px-12 lg:px-32 max-w-7xl prose-headings:font-normal prose-headings:text-xl ">
                  <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-32">
                    <div>
                      <div className="top-0 lg:sticky lg:pb-16">
                        <div className="pt-8"><h1 className="text-4xl" >Head And Face</h1></div>
                      </div>
                    </div>
                    <div className="pt-8 lg:col-span-2">
                      <div className="flex-shrink-0">
                        <div className="mx-auto">
                          <img className="aspect-[4/3] object-cover" src={assets.feature1} alt="#_"/>
                        
                          <p className="line-clamp-4 mt-5 ">
                            In our latest update, we've revolutionized the performance of our
                            widgets, achieving a remarkable 80% increase in loading speeds.
                            This breakthrough ensures a seamless experience across all
                            Snowpeaks widgets, setting a new standard for efficiency and user
                            satisfaction. Dive into the details to see how our widgets now
                            lead the pack in speed and reliability.
                          </p>
                          <p><a href="#_">Read more</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-32">
                    <div>
                      <div className="top-0 lg:sticky lg:pb-16">
                        <div className="pt-8"><h1 className="text-4xl" >Body Contouring </h1></div>
                      </div>
                    </div>
                    <div className="pt-8 lg:col-span-2">
                      <div className="flex-shrink-0">
                        <div className="mx-auto">
                          <img className="aspect-[4/3] object-cover" src={assets.feature2} alt="#_"/>
                          <p className="line-clamp-4 mt-5 ">
                            Expanding your business operations has never been easier with our
                            new Teams support feature. Now, you can empower your team by
                            inviting members to manage and run your Snowpeak store
                            collaboratively. Streamline your workflow and boost productivity
                            by leveraging the strengths of your team, all accessible from our
                            revamped Team settings page.
                          </p>
                          <p><a href="#_">Read more</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-32">
                    <div>
                      <div className="top-0 lg:sticky lg:pb-16">
                        <div className="pt-8"><h1 className="text-4xl" >Non surgical Treatments</h1></div>
                      </div>
                    </div>
                    <div className="pt-8 lg:col-span-2">
                      <div className="flex-shrink-0">
                        <div className="mx-auto">
                          <img className="aspect-[4/3] object-cover" src={assets.feature3} alt="#_"/>
                          <p className="line-clamp-4 mt-5 ">
                            brought the power of our API directly to your fingertips
                            with an intuitive dashboard feature that allows for effortless
                            modification of subscription plans. Now, managing your
                            subscriptions is as simple as clicking
                            feature designed to streamline plan adjustments and proration
                            handling. Experience the ease of subscription management with our
                            user-friendly dashboard.
                          </p>
                          <p><a href="#_">Read more</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-32">
                    <div>
                      <div className="top-0 lg:sticky lg:pb-16">
                        <div className="pt-8"><h1 className="text-4xl" >Breast Surgery</h1></div>
                      </div>
                    </div>
                    <div className="pt-8 lg:col-span-2">
                      <div className="flex-shrink-0">
                        <div className="mx-auto">
                          <img className="aspect-[4/3] object-cover" src={assets.feature5} alt="#_"/>
                          <p className="line-clamp-4 mt-5 ">
                            Unveiling our latest innovation, the Analytics Dashboard, designed
                            to offer deeper insights into your performance with just a
                            glance. Track visitor behavior, sales trends, and more with our
                            comprehensive and intuitive interface. This new dashboard is
                            engineered to help you make informed decisions, driving your
                            business towards unparalleled growth.
                          </p>
                          <p><a href="#_">Read more</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-32">
                    <div>
                      <div className="top-0 lg:sticky lg:pb-16">
                        <div className="pt-8"><h1 className="text-4xl" >Mummy Makeover</h1></div>
                      </div>
                    </div>
                    <div className="pt-8 lg:col-span-2">
                      <div className="flex-shrink-0">
                        <div className="mx-auto">
                          <img className="aspect-[4/3] object-cover" src={assets.feature4} alt="#_"/>
                          <p className="line-clamp-4 mt-5 ">
                            Security is paramount, and with our latest update,
                            introducing enhanced security features to safeguard your online
                            store. Benefit from advanced encryption, real-time monitoring, and
                            automated threat detection. These updates fortify your
                            defenses, ensuring your data, and your ata, remains
                            protected against evolving cyber threats.
                          </p>
                          <p><a href="#_">Read more</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-32">
                    <div>
                      <div className="top-0 lg:sticky lg:pb-16">
                        <div className="pt-8"><h1 className="text-4xl" >Bridal Makeup</h1></div>
                      </div>
                    </div>
                    <div className = "pt-8 lg:col-span-2">
                    <div className = "flex-shrink-0">
                    <div className = "mx-auto">
                    <img className = "aspect-[4/3] object-cover" src = {assets.feature6} alt = "#_"/>
                    <p className="line-clamp-4 mt-5 ">
                            Our latest update introduces Interactive Dashboards, allowing
                            users to dynamically interact with their data like never before.
                            Customize, explore, and gain insights in a wholly intuitive and
                            seamless manner.
                          </p>
                          <p><a href="#_">Read more</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            
    </div>
  );
};

export default Content;
