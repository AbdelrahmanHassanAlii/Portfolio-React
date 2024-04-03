import "./App.css";
import Contact from "./components/Contact";
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
    </div>
  );
}

export default App;
