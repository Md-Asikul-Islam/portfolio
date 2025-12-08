'use client'
import { Typewriter } from "react-simple-typewriter";

const ContactHeading = () => {
  return (
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
      <p className="text-gray-200 py-2">
        Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
      </p>
    </div>
  );
};

export default ContactHeading;
