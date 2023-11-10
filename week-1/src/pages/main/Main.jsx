import "./main.style.scss";
import Astronauts from "../../img/astronauts.png";
import { InfoTab } from "./components/info-tab/InfoTab";
export const Main = () => {
  return (
    <div className="main-content">
      <div className="main-1st-part">
        <div className="title">
          Russia’s Youngest-ever Astronauts Blast Off to Space Station
        </div>
        <div className="desc">
          On Thursday, three Russian astronauts lifted off on the Moscow-17
          spacecraft from the Sputnik 1 Satellite Launch Center deep in the Gobi
          Desert, heading for the Mir space station for a six-month stay.
        </div>
        <div className="footer">
          <span>Space and Universe</span>
          <span>|</span>
          <div>Daniel Albarta</div>
          <span>|</span>
          <span>October 22, 2023</span>
        </div>
      </div>
      <div className="main-2nd-part">
        <img src={Astronauts} alt="astronauts from Russian" width={410} />
      </div>
      <div className="main-3rd-part">
        <InfoTab />
        <InfoTab />
        <InfoTab />
        <InfoTab />
      </div>
    </div>
  );
};
