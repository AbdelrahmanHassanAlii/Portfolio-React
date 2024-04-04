import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="container">
      <Header />
      <Landing />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
