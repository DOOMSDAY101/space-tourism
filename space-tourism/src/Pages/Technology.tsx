import React, { useState } from "react";
import "./Technology.css";
import NavBar from "../Components/NavBar";
import LAUNCHVEHICLEPORTRAIT from "../Images/assets/technology/image-launch-vehicle-portrait.jpg";
import LAUNCHVEHICLELANDSCAPE from "../Images/assets/technology/image-launch-vehicle-landscape.jpg";
import SPACEPORTPORTRAIT from "../Images/assets/technology/image-spaceport-portrait.jpg";
import SPACEPORTLANDSCAPE from "../Images/assets/technology/image-spaceport-landscape.jpg";
import SPAECAPSULEPORTRAIT from "../Images/assets/technology/image-space-capsule-portrait.jpg";
import SPACECAPSULELANDSCAPE from "../Images/assets/technology/image-space-capsule-landscape.jpg";

interface Option {
  id: number;
  term: string;
  name: string;
  description: string;
  portraitImg: string;
  landscapeImg: string;
}

const TechnologyDetails: Option[] = [
  {
    id: 1,
    term: "THE TERMINOLOGY…",
    name: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    portraitImg: LAUNCHVEHICLEPORTRAIT,
    landscapeImg: LAUNCHVEHICLELANDSCAPE,
  },
  {
    id: 2,
    term: "THE TERMINOLOGY…",
    name: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
    portraitImg: SPACEPORTPORTRAIT,
    landscapeImg: SPACEPORTLANDSCAPE,
  },
  {
    id: 3,
    term: "THE TERMINOLOGY…",
    name: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    portraitImg: SPAECAPSULEPORTRAIT,
    landscapeImg: SPACECAPSULELANDSCAPE,
  },
];
function Technology() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);

  const handleOptionClick = (index: number): void => {
    setSelectedOptionIndex(index);
  };

  const selectedOption = TechnologyDetails[selectedOptionIndex];

  return (
    <div className="technology-page">
      <NavBar />
      <div className="crew">
        <h1 className="pick-destination-h1">
          <span className="pick-destination-span">03</span> SPACE LAUNCH 101
        </h1>
      </div>
      <div className="technology-main">
        <div className="technology-details">
          <div className="tech-no">
            {TechnologyDetails.map((option, index) => (
              <span
                key={index}
                onClick={() => handleOptionClick(index)}
                className={`select-circle ${
                  selectedOption === option ? "selected" : ""
                }`}
              >
                {option.id}
              </span>
            ))}
          </div>
          <div className="tech-details">
            <h2>{selectedOption.term}</h2>
            <h1>{selectedOption.name}</h1>
            <p>{selectedOption.description}</p>
          </div>
        </div>
        <div className="tech-img">
          <picture>
            <source
              media="(min-width: 950px)"
              srcSet={selectedOption.portraitImg}
            />
            <source
              media="(max-width: 950px)"
              srcSet={selectedOption.landscapeImg}
              className="landscape-img"
            />
            <img src={selectedOption.portraitImg} alt={selectedOption.name} />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default Technology;
