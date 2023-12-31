import { useContext, useState, useEffect } from "react";
import { Lines } from "react-preloaders2";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const [preloaderColor, setPreloaderColor] = useState({
    "clr-bg": "#fcfcfc",
    "clr-fg": "#555",
  });
  useEffect(() => {
    setPreloaderColor(
      themeName === "dark"
        ? { "clr-bg": "#23283e", "clr-fg": "#bdbddd" }
        : { "clr-bg": "#fcfcfc", "clr-fg": "#555" }
    );
  }, [themeName]);
  return (
    <>
      <div id="top" className={`${themeName} app`}>
        <Header />

        <main>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <ScrollToTop />
        <Footer />
      </div>
      <Lines
        background={preloaderColor["clr-bg"]}
        color={preloaderColor["clr-fg"]}
        animation="slide-down"
      />
    </>
  );
};

export default App;
