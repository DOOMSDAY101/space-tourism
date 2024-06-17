import React, { useEffect, useState } from "react";
import "./Destination.css";
import NavBar from "../Components/NavBar";
import MOON from "../Images/assets/destination/image-moon.png";
import MARS from "../Images/assets/destination/image-mars.png";
import EUROPA from "../Images/assets/destination/image-europa.png";
import TITAN from "../Images/assets/destination/image-titan.png";

interface Option {
  name: string;
  description: string;
  image: string;
  distance: string;
  duration: string;
}

const DestinationDetails: Option[] = [
  {
    name: "MOON",
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    image: MOON,
    distance: "384,400 KM",
    duration: "3 DAYS",
  },
  {
    name: "MARS",
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    image: MARS,
    distance: "225 MIL. KM",
    duration: "9 MONTHS",
  },
  {
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    image: EUROPA,
    distance: "628 MIL. KM",
    duration: "3 YEARS",
  },
  {
    name: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    image: TITAN,
    distance: "1.6 BIL. KM",
    duration: "7 YEARS",
  },
];
function Destination() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  useEffect((): void => {
    setSelectedOption(DestinationDetails[0]);
  }, []);

  const handleOptionClick = (option: Option): void => {
    setSelectedOption(option);
  };
  return (
    <div className="destinaton-page">
      <NavBar />
      <div className="pick-destination">
        <h1 className="pick-destination-h1">
          <span className="pick-destination-span">01</span> PICK YOUR
          DESTINATION
        </h1>

        {selectedOption && (
          <div className="destination-location">
            <div className="image-holder">
              <img
                src={selectedOption.image}
                alt={selectedOption.name}
                className="image-destination"
              />
            </div>
            <div className="image-details">
              <div className="image-options">
                {DestinationDetails.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className={`${"options-select"} ${
                      selectedOption === option ? "selected" : ""
                    }`}
                  >
                    {option.name}
                  </div>
                ))}
              </div>
              <h1 className="selected-h1">{selectedOption.name}</h1>
              <p className="options-desc">{selectedOption.description}</p>
              <div className="divider"></div>
              <div className="distance-duration">
                <div className="distance">
                  <h3>AVG. DISTANCE</h3>
                  <h2>{selectedOption.distance}</h2>
                </div>
                <div className="distance" id="no-margin">
                  <h3>EST. TRAVEL TIME</h3>
                  <h2>{selectedOption.duration}</h2>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Destination;
