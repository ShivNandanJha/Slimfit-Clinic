import { useState } from "react";
import axios from "axios";

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const telegramBotURL = "https://api.telegram.org/bot7046162386:AAE4XZ-o2TF10YyjM8zhfFPM0iLJ05edugc/sendMessage";
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

      await axios.post(telegramBotURL, {
        chat_id: "-1002166849055",
        text: message,
      });

      setShowSuccessMessage(true);
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
      alert("Failed to send appointment request. Try again later.");
      console.error(error);
    }
  };

  return (
    <div className="bg-[#f9f9f9] min-h-screen ">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-rose-600 mb-12">
          Book an Appointment
        </h1>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side – Steps */}
          <div className="lg:w-2/5">
            {[
              { step: "STEP 1", desc: "Fill out the appointment form with correct details." },
              { step: "STEP 2", desc: "Receive a confirmation call from Paramount Hospital." },
              { step: "STEP 3", desc: "Visit the clinic on your scheduled date." },
              { step: "STEP 4", desc: "Consult with the specialist for your procedure." },
              { step: "FINISH", desc: "Follow our care guidance & continue your journey." },
            ].map((item, idx) => (
              <div className="flex relative pb-10" key={idx}>
                <div className="absolute h-full w-10 flex items-center justify-center">
                  {idx < 4 && <div className="h-full w-1 bg-gray-200"></div>}
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6007b] text-white flex items-center text-left justify-center z-10">
                  {item.step.startsWith("STEP") ? item.step.split(" ")[1] : "✓"}
                </div>
                <div className="pl-4">
                  <h3 className="font-bold text-left text-gray-800">{item.step}</h3>
                  <p className="text-lg font-bold text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side – Form */}
          <div className="lg:w-3/5 bg-white p-8 rounded-lg shadow">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full p-3 border rounded-md"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-3 border rounded-md"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="1234567890"
                  className="w-full p-3 border rounded-md"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">Gender</label>
                <select
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">Service</label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                >
                  <option value="">Choose service</option>
                  <option>Head and Face</option>
                  <option>Non Surgical</option>
                  <option>Body Contouring</option>
                  <option>Breast Surgery</option>
                  <option>Mummy Makeover</option>
                  <option>Bridal Makeup</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">Appointment Date</label>
                <input
                  type="date"
                  name="appointmentDate"
                  required
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-1 font-medium text-gray-700">Address</label>
                <textarea
                  name="address"
                  required
                  rows="4"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your full address"
                  className="w-full p-3 border rounded-md"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[#d6007b] hover:bg-rose-700 text-white py-3 rounded-md font-semibold"
                >
                  Book Appointment
                </button>
              </div>
            </form>

            {showSuccessMessage && (
              <div className="mt-6 text-green-600 font-medium text-center">
                ✅ Your appointment request has been submitted!
                <button onClick={() => setShowSuccessMessage(false)} className="ml-3 text-red-500">
                  ×
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
