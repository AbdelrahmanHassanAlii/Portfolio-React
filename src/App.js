import "./App.css";
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
    </div>
  );
}

export default App;
