import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* research about props help responsive in components
          research about cors and nodemailer and active it
      */}
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
