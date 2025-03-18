import MyLink from "../../../utilityFiles/RouterConfig/MyLink";
import "./styles/profilebody.css";

export default function ProfileBodyCard({ toLink, title, desc, imgLink }) {
  return (
    <>
      <MyLink to={toLink}>
        <div className="profilebodycard-wrapper">
          <div className="profilebodycard-iconDiv">
            <div className="profilebodycard-icon-wrapper-div">
              <img src={imgLink} alt="" />
            </div>
          </div>
          <div className="profilebodycard-desc-div">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        </div>
      </MyLink>
    </>
  );
}
