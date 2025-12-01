import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8">
      <HeroSection />
      <Skills  />
      <div id="about" className="min-h-screen py-24"> About </div>
      <div id="contacts" className="min-h-screen py-24"> Contacts </div>
      <div id="projects" className="min-h-screen py-24"> Projects </div>
      <div id="blog" className="min-h-screen py-24"> Blog </div>
      
    </main>
  );
};

export default Home;
