import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="*" element={<Home />}  />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
