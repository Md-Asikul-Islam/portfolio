'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FiMail, FiUser, FiMessageSquare, FiPhone, FiMapPin } from "react-icons/fi";
import Social from "./Social";

const Contacts = () => {
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setSuccess("");

  try {
    const res = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to send");

    setSuccess("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  } catch (error) {
    console.error(error);
    setSuccess("Failed to send message.");
  } finally {
    setLoading(false);
  }
};


  return (
    <section id="contacts" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          Contact <span className='text-cyan-300'>Me</span>
        </motion.h2>

        <div className="text-center py-3">
          <h1 className="py-2 text-xl sm:text-2xl lg:text-3xl font-semibold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            <Typewriter
              words={[
                "Schedule a call with me to see if I can help",
                "Let’s take your ideas to the next level",
                "I'm here to help you build something amazing",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={35}
              delaySpeed={1500}
            />
          </h1>
          <p className="text-gray-200 py-2 ">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className=" py-6 rounded-2xl ">
              <h4 className="text-lg font-semibold py-3">Email</h4>
              <div className="flex gap-x-6">
                <FiMail className="text-2xl text-indigo-600" />
                <p className="text-gray-200 ">mdasikuli48@gmail.com</p>
              </div>
            </div>

            <div className="py-6 rounded-2xl ">
              <h4 className="text-lg font-semibold py-3">Phone</h4>
              <div className="flex gap-x-6">
                <FiPhone className="text-2xl text-indigo-600" />
                <p className="text-gray-200 ">+8801962-103569</p>
              </div>
            </div>

            <div className="py-6 rounded-2xl">
              <h4 className="text-lg font-semibold py-3">Location</h4>
              <div className="flex gap-x-6">
                <FiMapPin className="text-2xl text-indigo-600" />
                <p className="text-gray-200 ">Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className="py-6">
              <Social />
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div>
              <label className="block mb-2 font-medium">Your Name</label>
              <div className=" bg-[#473472] flex items-center gap-2 p-4  rounded-lg">
                <FiUser className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-transparent outline-none"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">Your Email</label>
              <div className=" bg-[#473472] flex items-center gap-2 p-4  rounded-lg">
                <FiMail className="text-gray-500" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent outline-none"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <div className=" bg-[#473472] flex  gap-2 p-4  rounded-lg">
                <FiMessageSquare className="mt-1 text-gray-500" />
                <textarea
                  placeholder="Write your message..."
                  rows={4}
                  className="w-full bg-transparent outline-none resize-none"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {success && <p className="text-green-400 mt-2">{success}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
