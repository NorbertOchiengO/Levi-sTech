import "./styles/global.css";

import Cursor    from "./components/Cursor";
import Nav       from "./components/Nav";
import Hero      from "./components/Hero";
import Services  from "./components/Services";
import About     from "./components/About";
import Process   from "./components/Process";
import Portfolio from "./components/Portfolio";
import Community from "./components/Community";
import CTA       from "./components/CTA";
import Contact   from "./components/Contact";
import Footer    from "./components/Footer";
import FAB       from "./components/FAB";

export default function App() {
  return (
    <>
      {/* Custom cursor (hidden on mobile via CSS) */}
      <Cursor />

      {/* Floating nav */}
      <Nav />

      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Portfolio />
        <Community />
        <CTA />       {/* Contains "Schedule a Call" → opens CalendarModal */}
        <Contact />
      </main>

      <Footer />
      <FAB />
    </>
  );
}
