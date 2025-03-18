import ProfileBodyCard from "./ProfileBodyCard";
import profileOptionsData from "../../../../DataCenter/profileData/profileOptionsData";
import "./styles/profilebody.css";

export default function ProfileBody({ name }) {
  return (
    <>
      <div className="profilebody-wrapper">
        <div className="profilebody-contents">
          <div className="profilebody-header">
            <h3>
              Hey <span className="A-U-N">{name}</span>!
            </h3>
          </div>
          <div className="profilebody-body">
            {profileOptionsData.map((elem) => {
              return (
                <>
                  <ProfileBodyCard
                    desc={elem.desc}
                    imgLink={elem.imgLink}
                    title={elem.title}
                    toLink={elem.toLink}
                    key={elem.id}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
