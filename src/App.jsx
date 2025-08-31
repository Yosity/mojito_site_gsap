import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return <div className="flex-center text-7xl h-[100vh]">App</div>;
};

export default App;
