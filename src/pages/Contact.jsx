import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Message sent successfully!",
      icon: "success",
      draggable: true
    });


    e.target.reset();
  };

  return (
    <section className="pb-20 pt-40 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-700 mb-3">
            Contact Me
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Feel free to reach out for collaboration, opportunities, or just a friendly chat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div className="space-y-6">

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition">
              <FaEnvelope className="text-green-700 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold text-gray-600">abusalehalamin52@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition">
              <FaPhoneAlt className="text-green-700 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-semibold text-gray-600">+880 17242-33351</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition">
              <FaMapMarkerAlt className="text-green-700 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold text-gray-600">Sylhet, Bangladesh</p>
              </div>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full mt-1 px-4 text-gray-600 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full mt-1 px-4 text-gray-600 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Write your message..."
                  className="w-full mt-1 px-4 text-gray-600 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;

