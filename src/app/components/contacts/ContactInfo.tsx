'use client'
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Social from "../Social";

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-6"
    >
      <div className="py-6 rounded-2xl">
        <h4 className="text-lg font-semibold py-3">Email</h4>
        <div className="flex gap-x-6">
          <FiMail className="text-2xl text-indigo-600" />
          <p className="text-gray-200">mdasikuli48@gmail.com</p>
        </div>
      </div>

      <div className="py-6 rounded-2xl">
        <h4 className="text-lg font-semibold py-3">Phone</h4>
        <div className="flex gap-x-6">
          <FiPhone className="text-2xl text-indigo-600" />
          <p className="text-gray-200">+8801962-103569</p>
        </div>
      </div>

      <div className="py-6 rounded-2xl">
        <h4 className="text-lg font-semibold py-3">Location</h4>
        <div className="flex gap-x-6">
          <FiMapPin className="text-2xl text-indigo-600" />
          <p className="text-gray-200">Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="py-6">
        <Social />
      </div>
    </motion.div>
  );
};

export default ContactInfo;
