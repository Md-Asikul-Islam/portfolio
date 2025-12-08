import About from "./components/About";
import Blog from "./components/Blogs";
import HeroSection from "./components/HeroSection";
import Project from "./components/Project";
import Skills from "./components/Skills";
import ContactPage from "./contact/page";

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8">
      <HeroSection />
      <Skills  />
      <About/>
      <ContactPage />
      <Project />
      <Blog />
    </main>
  );
};

export default Home;
