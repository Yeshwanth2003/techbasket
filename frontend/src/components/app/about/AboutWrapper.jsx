import AbtIMG1 from "./components/asserts/a1.jpg";
import AbtIMG2 from "./components/asserts/a2.jpg";
import AboutStat from "./components/AboutStat";
import "./components/style/aboutwrapper.css";

export default function AboutWrapper() {
  return (
    <>
      <div className="aboutwrapper-wrapper">
        <div className="abtwrp-heading-div">
          <h3>About Us</h3>
        </div>
        <div className="abtwrp-body">
          <div className="abtwrp-p1">
            <h2>About Us</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators on the Internet tend to
              repeat predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable.
            </p>
          </div>
          <div className="abtwrp-p2">
            <div className="abtwrp-img-div1">
              <img src={AbtIMG1} alt="" />
            </div>
            <div className="abtwrp-img-div2">
              <img src={AbtIMG2} alt="" />
            </div>
          </div>
        </div>
        <AboutStat />
      </div>
    </>
  );
}
