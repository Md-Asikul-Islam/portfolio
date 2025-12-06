import About from "./components/About";
import Blog from "./components/Blogs";
import Contacts from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Project from "./components/Project";
import Skills from "./components/Skills";

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8">
      <HeroSection />
      <Skills  />
      <About/>
      <Contacts />
      <Project />
      <Blog />
    </main>
  );
};

export default Home;
