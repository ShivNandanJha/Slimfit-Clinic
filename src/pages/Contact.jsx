export default function Contact() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-left mb-16">
          <h2 className="text-4xl font-extrabold text-[#d6007b]">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600">
            We’d love to hear from you. Our team is always here to help.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-[#feeff7] p-8 rounded-xl shadow-md text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>

            {/* Address */}
            <div className="flex items-start gap-4 mb-6">
              <span className="p-3 rounded-full bg-[#d6007b] text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.14-7.5 11.25-7.5 11.25S4.5 17.64 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>
              <div>
                <p className="font-medium text-gray-800">Address</p>
                <p className="text-gray-600  font-bold text-sm mt-1">
                  3rd Floor, Diagnostic Block, Paramount Hospital PVT. LTD, Mangal Pandey Rd, Ward 9, Khalpara, Siliguri, West Bengal 734005, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-6">
              <span className="p-3 rounded-full bg-[#d6007b] text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M2.25 6.75c0 8.28 6.72 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.37a1.1 1.1 0 00-.85-1.09l-4.42-1.11a1 1 0 00-1.17.42l-.97 1.29a1 1 0 01-1.21.38 12.03 12.03 0 01-7.14-7.14 1 1 0 01.38-1.21l1.29-.97c.36-.27.53-.73.42-1.17L6.96 3.1a1.12 1.12 0 00-1.09-.85H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
              <div>
                <p className="font-medium text-gray-800">Phone</p>
                <p className="text-gray-600 font-bold text-sm mt-1">+91 9800896552</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <span className="p-3 rounded-full bg-[#d6007b] text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6l4 2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3a9 9 0 100 18 9 9 0 000-18z" />
                </svg>
              </span>
              <div>
                <p className="font-medium text-gray-800">Working Hours</p>
                <p className="text-gray-600 font-bold text-sm mt-1">Monday to Friday, 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md border text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6007b]"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6007b]"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6007b]"
                />
              </div>

              <div className="mt-4">
                <label className="text-sm text-gray-600">Phone</label>
                <input
                  type="text"
                  placeholder="9800896552"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6007b]"
                />
              </div>

              <div className="mt-4">
                <label className="text-sm text-gray-600">Message</label>
                <textarea
                  rows="5"
                  placeholder="Type your message..."
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6007b]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-[#d6007b] text-white py-3 rounded-md hover:bg-[#b8006b] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 rounded-lg overflow-hidden shadow-md border">
          <iframe
            title="Google Map"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.241388125162!2d88.4153959764266!3d26.704734376771743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441eddf143217%3A0xbd07eb0efcaba042!2sSlimfit%20Clinic%20-%20Best%20Cosmetic%20%26%20Aesthetic%20Clinic%20in%20Siliguri!5e0!3m2!1sen!2sus!4v1722233823289!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
