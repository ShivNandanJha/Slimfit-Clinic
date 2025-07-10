import { assets } from "../assets/assets";

const About = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-[#d6007b] sm:text-4xl sm:leading-none">
                Welcome to Slimfit
                <br className="hidden md:block" />
                <span className="text-gray-700">Where Beauty Meets Science</span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                At Slimfit, we believe beauty is more than skin deep — it's a reflection of confidence, wellness, and self-love. As a leading aesthetics and weight loss clinic, we combine science-backed technologies with personalized care to help you look and feel your best. Whether you're aiming for fat reduction, radiant skin, or complete body transformation, our team of certified experts is here to guide you every step of the way. Your journey to a healthier, happier, and more confident you starts here.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={assets.slimfit}
                alt="Slimfit Facility"
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src={assets.slimfit3}
                alt="Clinic Service"
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={assets.slimfit2}
                alt="Treatment Room"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section>
          <div className="flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
              <div className="w-full mx-auto">
                <h1 className="text-5xl text-center p-5 font-bold text-gray-500">
                  Our Services
                </h1>
              </div>
            </div>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="mb-10 border-t border-b divide-y">
                
                {/* Service 1 */}
                <div className="grid py-8 sm:grid-cols-4">
                  <div className="mb-4 sm:mb-0">
                    <p className="text-gray-600 text-xl text-start font-semibold">
                      Weight Loss Programs
                    </p>
                  </div>
                  <div className="sm:col-span-3 lg:col-span-2">
                    <p className="text-gray-700 text-lg">
                      Our evidence-based weight loss programs are designed to help you lose fat sustainably without crash diets or harmful pills. With expert guidance from our team of doctors, dietitians, and fitness coaches, you'll receive a personalized plan that works with your lifestyle.
                    </p>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="grid py-8 sm:grid-cols-4">
                  <div className="mb-4 sm:mb-0">
                    <p className="text-gray-600 text-xl text-start font-semibold">
                      Advanced Beauty Treatments
                    </p>
                  </div>
                  <div className="sm:col-span-3 lg:col-span-2">
                    <p className="text-gray-700 text-lg">
                      Revitalize your skin with our range of aesthetic treatments including anti-aging facials, skin tightening, acne solutions, and pigmentation control — all using the latest non-invasive technologies.
                    </p>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="grid py-8 sm:grid-cols-4">
                  <div className="mb-4 sm:mb-0">
                    <p className="text-gray-600 text-xl text-start font-semibold">
                      Wellness Consultations
                    </p>
                  </div>
                  <div className="sm:col-span-3 lg:col-span-2">
                    <p className="text-gray-700 text-lg">
                      We take a 360° approach to your well-being. Our wellness consultations include lifestyle assessment, stress management tips, nutrition advice, and habit coaching — so you not only look good, but feel amazing from within.
                    </p>
                  </div>
                </div>

                {/* Service 4 */}
                <div className="grid py-8 sm:grid-cols-4">
                  <div className="mb-4 sm:mb-0">
                    <p className="text-gray-600 text-xl text-start font-semibold">
                      Body Contouring & Sculpting
                    </p>
                  </div>
                  <div className="sm:col-span-3 lg:col-span-2">
                    <p className="text-gray-700 text-lg">
                      Say goodbye to stubborn fat with our non-surgical body contouring options like CoolSculpting, ultrasonic cavitation, and laser lipolysis. These treatments are perfect for toning arms, thighs, belly, and love handles without downtime.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
