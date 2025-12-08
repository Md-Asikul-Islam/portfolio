"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to send message");

      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error: unknown) {
      let errorMessage = "Something went wrong!";
      if (error instanceof Error) errorMessage = error.message;
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="space-y-6"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block mb-2 font-medium">Your Name</label>
        <div className="bg-[#473472] flex items-center gap-2 p-4 rounded-lg">
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

      <div>
        <label className="block mb-2 font-medium">Your Email</label>
        <div className="bg-[#473472] flex items-center gap-2 p-4 rounded-lg">
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

      <div>
        <label className="block mb-2 font-medium">Message</label>
        <div className="bg-[#473472] flex gap-2 p-4 rounded-lg">
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

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
