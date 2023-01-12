import "./App.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "none", duration: 2 });
  // const tl = gsap.timeline();
  // useEffect(() => {
  //   tl.from(".title", { yPercent: -100 })
  //     .from(".quran", { yPercent: 100 })
  //     .from(".stats", { yPercent: -100 })
  //     .from(".progress", { yPercent: -100 })
  //     .from(".donate", { yPercent: -100 });

  //   ScrollTrigger.create({
  //     animation: tl,
  //     trigger: ".app-container",
  //     start: "top top",
  //     end: "+=4000",
  //     scrub: true,
  //     pin: true,
  //     anticipatePin: 1,
  //   });
  // });

  // let panels = gsap.utils.toArray(".panel"),
  //   scrollTween;

  // function goToSection(i) {
  //   scrollTween = gsap.to(window, {
  //     scrollTo: { y: i * window.innerHeight, autoKill: false },
  //     duration: 1,
  //     onComplete: () => (scrollTween = null),
  //     overwrite: true,
  //   });
  // }

  // panels.forEach((panel, i) => {
  //   ScrollTrigger.create({
  //     trigger: panel,
  //     start: "top bottom",
  //     markers: true,
  //     end: "+=200%",
  //     onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
  //   });
  // });

  // // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
  // ScrollTrigger.create({
  //   start: 0,
  //   end: "max",
  //   snap: 1 / (panels.length - 1),
  // });

  return (
    <div className="app-container">
      <div className="panel title"> بسم الله</div>
      <div className="panel quran"></div>
      <div className="panel stats"></div>
      <div className="panel progress"></div>
      <div className="panel donate"></div>
    </div>
  );
}

export default App;
