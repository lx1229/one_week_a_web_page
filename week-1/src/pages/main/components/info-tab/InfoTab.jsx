import "./InfoTab.style.scss";
import Img1 from "../../../../img/4.png";
export const InfoTab = () => {
  return (
    <div className="info-tab-item">
      <div className="info-tab-item-img">
        <img src={Img1} alt={"Photo of" + Img1} width={180} />
      </div>
      <div className="info-tab-desc">
        <div className="desc-first-line">
          <span>Daniel Albarta</span>
          <span>|</span>
          <span>October 22, 2023</span>
        </div>
        <div className="desc-second-line">
          ‘Washy Clouds and a Weepy Sky Floating Upside Down’
        </div>
        <div className="desc-third-line">
          <span>Our Planet</span>
          <span>|</span>
          <span>October 21, 2023</span>
        </div>
      </div>
    </div>
  );
};
