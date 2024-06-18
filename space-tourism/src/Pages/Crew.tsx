import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import "./Crew.css";
import DOUGLASIMG from "../Images/assets/crew/image-douglas-hurley.png";
import MARKIMG from "../Images/assets/crew/image-mark-shuttleworth.png";
import VICTORIMG from "../Images/assets/crew/image-victor-glover.png";
import ANSARIIMG from "../Images/assets/crew/image-anousheh-ansari.png";

interface Option {
  name: string;
  role: string;
  image: string;
  description: string;
}

const CrewDetails: Option[] = [
  {
    name: "DOUGLAS HURLEY",
    role: "COMMANDER",
    image: DOUGLASIMG,
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "MARK SHUTTLEWORTH",
    role: "MISSION SPECIALIST",
    image: MARKIMG,
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "VICTOR GLOVER",
    role: "PILOT",
    image: VICTORIMG,
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },
  {
    name: "ANOUSHEH ANSARI",
    role: "FLIGHT ENGINEER",
    image: ANSARIIMG,
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  },
];
function Crew() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  const handleOptionClick = (index: number): void => {
    setSelectedOptionIndex(index);
  };

  const selectedOption = CrewDetails[selectedOptionIndex];
  return (
    <div className="crew-page">
      <NavBar />
      <div className="crew">
        <h1 className="pick-destination-h1">
          <span className="pick-destination-span">02</span> MEET YOUR CREW
        </h1>
      </div>
      <div className="crew-details-img">
        <div className="crew-details-section">
          <div>
            <h2>{selectedOption.role}</h2>
            <h1>{selectedOption.name}</h1>
            <p>{selectedOption.description}</p>
          </div>
          <div className="dots">
            {CrewDetails.map((option, index) => (
              <span
                key={index}
                className={`dot ${
                  index === selectedOptionIndex ? "active-dot" : ""
                }`}
                onClick={() => handleOptionClick(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className="image-section">
          <img src={selectedOption.image} alt={selectedOption.name} />
        </div>
      </div>
    </div>
  );
}

export default Crew;
