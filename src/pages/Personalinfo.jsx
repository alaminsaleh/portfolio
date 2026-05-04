import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaHeart,
} from "react-icons/fa";

const Personalinfo = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-primary mb-2">
            Personal Details
          </h2>
          <p className="text-gray-500">
            Basic information about me
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-br from-base-200 to-base-300 rounded-3xl shadow-lg p-8 md:p-12">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Name */}
            <div className="flex items-center gap-4 bg-base-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <FaUser className="text-primary text-xl" />
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-semibold">Mr. Al Amin</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 bg-base-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <FaEnvelope className="text-secondary text-xl" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold">abusalehalamin52@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 bg-base-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <FaPhoneAlt className="text-accent text-xl" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-semibold">+880 17242-33351</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 bg-base-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <FaMapMarkerAlt className="text-error text-xl" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold">Sylhet, Bangladesh</p>
              </div>
            </div>

            {/* Birthday */}
            <div className="flex items-center gap-4 bg-base-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <FaBirthdayCake className="text-warning text-xl" />
              <div>
                <p className="text-sm text-gray-500">Date of Birth</p>
                <p className="font-semibold">12 / 01 / 2003</p>
              </div>
            </div>

            {/* Hobby */}
            <div className="flex items-center gap-4 bg-base-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <FaHeart className="text-pink-500 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Hobbies</p>
                <p className="font-semibold">Coding, Music, Reading</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Personalinfo;