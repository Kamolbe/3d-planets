import {
  useEffect,
  useState,
} from "react";

import SpaceCanvas from "./components/3d/SpaceCanvas";

import Navbar from "./components/ui/Navbar";
import HeroSection from "./components/ui/HeroSection";
import FeatureSection from "./components/ui/FeatureSection";
import FooterSection from "./components/ui/FooterSection";

import "./App.css";

function App() {
  const [
    scrollProgress,
    setScrollProgress,
  ] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement
          .scrollHeight -
        window.innerHeight;

      if (totalHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      const progress =
        window.scrollY /
        totalHeight;

      setScrollProgress(
        Math.min(
          Math.max(progress, 0),
          1
        )
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <div className="app">
      <SpaceCanvas
        scrollProgress={
          scrollProgress
        }
      />

      <Navbar />

      <main className="page-content">
        <HeroSection />

        <FeatureSection />
      </main>

      <FooterSection />
    </div>
  );
}

export default App;