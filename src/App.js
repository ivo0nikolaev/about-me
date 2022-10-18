import Top from "./componens/top-nav";
import AboutMeCard from "./componens/about-me-card";
import WhatIDo from "./componens/what-i-do";
import Experience from "./componens/experience";

export default function App() {
  return (
    <div className="lg:h-screen bg-no-repeat bg-center bg-cover bg-[url('https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg')]">
      <Top />
      <div className="flex-col justify around">
      <div className="mt-4 lg:mt-16 lg:flex justify-around">
        <AboutMeCard /> <WhatIDo />
      </div>
      <Experience />
      </div>
    </div>
  );
}
