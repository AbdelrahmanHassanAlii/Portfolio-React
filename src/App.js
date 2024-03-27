import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="container">
      <Header />
      <Landing />
      <AboutMe />
    </div>
  );
}

export default App;
