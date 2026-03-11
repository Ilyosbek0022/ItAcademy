import Image from "next/image";
import DeveloperCard from "./components/right";
import OutlineButton from "./components/buttons/outlinebtn";
import PrimaryButton from "./components/buttons/btnprim";

import Card from "./components/Card";
import CardB from "./components/Cardforbackend";
import CardM from "./components/cardmobile";
import CardSlider from "./components/slider";
import LoginBackground from "./components/Login";
import Socials from "./components/Socials";
import Header from "./components/Header";


export default function Home() {
  const developer = {
    name: "You",
    skills: ["React", "Node.js", "Flutter", "SQL"],
    ready: true
  };
  return (
    <div className="all">
      <div className="container">

      <Header/>
       <main>
       
        
        <nav>
          
<div className="between flex justify-between">
  <div className="left flex flex-col ">
    <div className="widther ">
    <h1 className="font-bold text-4xl ">Become a <span className="textss">professional</span> developer</h1>
    <p className="text-#e8edf5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quaerat tempora quia mollitia facilis, fuga sapiente perspiciatis consectetur doloremque iure quod q.</p>
  <span className="flex wrap-anywhere gap-3"> <PrimaryButton/>
  <OutlineButton/>
    </span> 
    </div>
  </div>
  <div className="right">
      <DeveloperCard developer={developer}  />
  </div>
</div>
        </nav>
        <div className="center flex justify-center align-middle mt-8">
         <h1 className="font-bold text-4xl text-center "> About our <span className="textss">courses</span> </h1>
         </div>
        <section className="section">
           
          <Card/>
          <CardB/>
          <CardM/>
        </section>
<section id="hallo mt-8">
   <div className="center flex justify-center align-middle flex-col mt-8">
         <h1 className="font-bold text-4xl text-center ">  Why <span className="textss">IT ACADEMY</span> <span className="text-blue-50">?</span></h1>
          <p className="text-gray-400 text-center">We dont just teach,we educate-truly,freely and independently.</p>
         </div>
<CardSlider/>
</section>
       </main>
<section className="login-ui tile">
<LoginBackground/>
</section>
<footer className="bg-[#060a10] w-full font-medium flex flex-col wrap-anywhere">
  <div className="between flex justify-between align-middle">
    <div className="sociallar">
      <div className="text smth text-white text-3xl font-bold flex flex-row"><h1>It</h1> <p className="text-[#00e5ff]">Academy</p></div> <br />
      <p className="text-gray-400"></p><br />
      <span className="">
        <Socials/>
      </span>
    </div>
    <div className="kurslar text-gray-400 font-medium flex gap-2 flex-col">
      <h1 className="text-gray-400 font-bold">Courses:</h1> <br />
      <p>frontend</p>
      <p>Backend</p>
      <p>flutter</p>
      <p>App dev</p>
    </div>
    <div className="about flex gap-2 flex-col">
      <a href="#" className="forcolor text-gray-400">About</a><br />
      <a href="#">Contact</a><a href="#">Privacy</a><a href="#">CEO</a><a href="#">About Us</a>
    </div>
    <div className="qushimcha flex gap-2 flex-col">
      <h1 className="text-gray-400">More</h1> <br />
      <p>nomer</p>
      <p>email</p>
      <p>Contact</p>
    </div>
  </div>
  <div className="between">
    <div className="text">© 2025 IT Academy. All rights reserved.</div>
     <div className="love">
      made with love
     </div>
  </div>
</footer>
    </div>
    </div>
  );
}

