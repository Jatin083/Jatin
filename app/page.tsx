import Hero from "./components/Hero/hero";
import Work from "./components/work/work";
import Service from "./components/service/services";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Service />
      <Contact />
    </>
  );
}
