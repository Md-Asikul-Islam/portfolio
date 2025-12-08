'use client'
import { motion } from "framer-motion";
import ContactHeading from "../components/contacts/ContactHeading";
import ContactInfo from "../components/contacts/ContactInfo";
import ContactForm from "../components/contacts/ContactForm";

const ContactPage = () =>{
  return (
    <section id="contacts" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          Contact <span className="text-cyan-300">Me</span>
        </motion.h2>

        <ContactHeading />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactPage;