import { useState } from "react";
import axios from "axios"; // Add this line to import axios library

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    service: "",
    appointmentDate: "",
    address: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Example URL for sending data to Telegram bot (replace with your own bot endpoint)
      const telegramBotURL =
        "https://api.telegram.org/bot6886100657:AAGqnx43OWjOIecx3ltgnidi4pgko2V58uk/sendMessage";
      const message = `
        New Appointment Request:
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Gender: ${formData.gender}
        Service: ${formData.service}
        Appointment Date: ${formData.appointmentDate}
        Address: ${formData.address}
      `;

      // Sending data to Telegram bot
      await axios.post(telegramBotURL, {
        chat_id: "6432775968", // Replace with your chat ID
        text: message,
      });

      setShowSuccessMessage(true);
      // Optionally, reset form fields after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        gender: "",
        service: "",
        appointmentDate: "",
        address: "",
      });
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
      alert("Failed to send appointment request. Please try again later.");
    }
  };

  const closeSuccessMessage = () => {
    setShowSuccessMessage(false);
  };
  return (
    <div>
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 1
                  </h2>
                  <p className="leading-relaxed">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 2
                  </h2>
                  <p className="leading-relaxed">
                    Vice migas literally kitsch +1 pok pok. Truffaut hot chicken
                    slow-carb health goth, vape typewriter.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 3
                  </h2>
                  <p className="leading-relaxed">
                    Coloring book nar whal glossier master cleanse umami. Salvia
                    +1 master cleanse blog taiyaki.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 4
                  </h2>
                  <p className="leading-relaxed">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    FINISH
                  </h2>
                  <p className="leading-relaxed">
                    Pitchfork ugh tattooed scenester echo park gastropub
                    whatever cold-pressed retro.
                  </p>
                </div>
              </div>
            </div>
            {/*----------------------------------- form---------------------------- */}
            <div className="mt-12 mx-auto px-4 p-8 bg-[#eee] lg:w-[40%] sm:w-[100%] sm:px-8 sm:rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-start">
                  <label htmlFor="name" className="font-medium">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 px-3 py-2 bg-white text-gray-500  outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
                <div   className = "text-start">
                <label htmlFor   = "email" className = "font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mt-2 px-3 py-2 text-gray-500  bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
                <div className="text-start">
                  <label  htmlFor="phone" className="font-medium">Phone number</label>
                  <div className="relative mt-2">
                    <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                      <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                        <option>+91</option>
                      </select>
                    </div>
                    <input
                      type="number"
                      placeholder="1234567899"
                      required name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-[4.5rem] pr-3 py-2 appearance-none  bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    />
                  </div>
                </div>
                <div className="relative flex flex-row flex-wrap gap-5 justify-start mt-2">
                  <div className="text-start">
                    <label htmlFor="gender" className="font-medium">Gender</label>
                    <select
                      type="text"  name="gender"
                      placeholder="1234567899"
                      required
                      value={formData.gender}
                      onChange={handleChange}
                      className="text-start w-full pl-3  py-2 appearance-none  bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    >
                      <option value="male">Select your gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>{" "}
                    </select>
                  </div>

                  <div className="text-start">
                    <label  htmlFor="appointmentDate" className="font-medium">Date</label>
                    <input
                      type="date"
                      placeholder="Appointment Date"
                      required  name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      className="w-full  px-3 py-2 bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    />
                  </div>
                </div>
                <div className="text-start">
                  <label htmlFor="service" className="font-medium">Service</label>
                  <select
                    type="text"   name="service"
                    placeholder="1234567899"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="text-start w-full pl-3  py-2 appearance-none  bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  >
                    <option value="Choose service">Choose service</option>
                    <option value="Head And Face">Head And Face</option>
                    <option value="Non Surgical">Non Surgical</option>
                    <option value="body Contouring">body Contouring</option>
                    <option value="Breast Surgery">Breast Surgery</option>
                    <option value="Mummy Makeover">Mummy Makeover</option>
                    <option value="Bridal Makeup">Bridal Makeup</option>
                  </select>
                </div>
                <div className="text-start">
                  <label  htmlFor="address" className="font-medium ">Address</label>
                  <textarea
                    rows="10"
                    placeholder="Address"
                    required  name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none  bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                >
                  Submit
                </button>
              </form>

            </div>
            {showSuccessMessage && (
  <div className = "toast toast-top toast-start">
  <div className="alert alert-success">
                  <span>Your appointment request has been booked successfully!</span>
                  <button onClick={closeSuccessMessage}> ❎</button>
                </div>

</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
