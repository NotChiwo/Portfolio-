import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import AcademicProjects from "./sections/AcademicProjects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="dashboard">
        <div className="container dashboard-grid">
          <Hero />
          <About />
          <Skills />
          <AcademicProjects />
          <Certifications />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
