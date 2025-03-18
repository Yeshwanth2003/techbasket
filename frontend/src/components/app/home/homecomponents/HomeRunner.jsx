import { useEffect, useRef, useState } from "react";
import useImport from "../../../utilityFiles/customhooks/useImport";
import MyLink from "../../../utilityFiles/RouterConfig/MyLink";
import "./styles/homerunner.css";

export default function HomeRunner() {
  const runnerRef = useRef();
  const [data, setData] = useState([]);
  useImport("/HomeData/homerunner.js", (data) => setData(data));

  //   for moving runner
  useEffect(() => {
    // runner timer
    function runnerTimmer() {
      const intervalId = setInterval(() => {
        // else proceed
        if (currentLeft < maxwidth - 100) currentLeft += 100;
        else currentLeft = 0;
        // catch on any error
        try {
          runnerRef.current.style.left = `-${currentLeft}%`;
        } catch {
          // on some error abort interval
          clearInterval(intervalId);
        }
      }, 3000);
      return intervalId;
    }

    const maxwidth = data.length * 100;
    let currentLeft = 0;
    let interval = runnerTimmer();
    // stop on mouse hover
    runnerRef.current.addEventListener("mouseover", () => {
      clearInterval(interval);
    });
    //     continue on mouse leave
    runnerRef.current.addEventListener("mouseleave", () => {
      interval = runnerTimmer();
    });

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  return (
    <>
      <div className="homerunner-wrapper">
        <div className="homerunner-container">
          <div
            ref={runnerRef}
            className="homerunner-runner"
            style={{ "--runnerwidth": `${data.length * 100}%` }}
          >
            {data.map((elem, index) => {
              return (
                <>
                  <ProductCard
                    key={elem.id}
                    imglink={elem.img}
                    productlink={elem.link}
                    description={elem.description}
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
function ProductCard({ imglink, productlink, description }) {
  return (
    <>
      <div className="productcard-wrapper">
        <img src={imglink} alt="" className="productcard-img" />
        <MyLink to={productlink} noaction={true}>
          <button className="productcard-navbutton">Visit Product</button>
        </MyLink>
        <p className="productcard-des-p">{description}</p>
      </div>
    </>
  );
}
