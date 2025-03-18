import { useEffect, useRef } from "react";
import "./style/aboutstat.css";

export default function AboutStat() {
  const abtstatRef = useRef();
  const b1Ref = useRef();
  const b2Ref = useRef();
  const b3Ref = useRef();
  const b4Ref = useRef();
  const called = new Array(4).fill(false);

  const windowHeight = window.innerHeight;
  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;

  function setA(a) {
    called[0] = true;
    const id = setTimeout(() => {
      try {
        b1Ref.current.innerHTML = `${a + 1}+`;
      } catch {
        return;
      }
      if (a === 9) {
        clearTimeout(id);
      } else {
        setA(++a);
      }
    }, 10);
  }
  function setB(b) {
    called[1] = true;
    const id = setTimeout(() => {
      try {
        b2Ref.current.innerHTML = `${b + 1}+`;
      } catch {
        return;
      }
      if (b === 99) {
        clearTimeout(id);
      } else {
        setB(++b);
      }
    }, 10);
  }
  function setC(c) {
    called[2] = true;
    const id = setTimeout(() => {
      try {
        b3Ref.current.innerHTML = `${c + 1}+`;
      } catch {
        return;
      }
      if (c === 999) {
        clearTimeout(id);
      } else {
        setC(++c);
      }
    }, 10);
  }
  function setD(d) {
    called[3] = true;
    const id = setTimeout(() => {
      try {
        b4Ref.current.innerHTML = `${d + 1}+`;
      } catch {
        return;
      }
      if (d === 599) {
        clearTimeout(id);
      } else {
        setD(++d);
      }
    }, 10);
  }

  useEffect(() => {
    function onVisible(ev) {
      const boundObj = abtstatRef.current.getBoundingClientRect();
      if (
        boundObj.top < Math.abs(windowHeight * (80 / 100)) &&
        boundObj.top > Math.abs(windowHeight * (10 / 100))
      ) {
        if (!called[0]) setA(a);
        if (!called[1]) setB(b);
        if (!called[2]) setC(c);
        if (!called[3]) setD(d);
      }
    }
    window.addEventListener("scroll", onVisible);
    return () => window.removeEventListener("scroll", onVisible);
  });

  return (
    <>
      <div ref={abtstatRef} className="abtstat-wrapper">
        <div className="abtstat-contents-div">
          <div className="abtstat-c-box">
            <span
              style={{ "--iconsize": "80px", "--customColor": "royalblue" }}
              class="material-symbols-outlined material-symbols-outlined-size-customized material-symbols-outlined-custom-color"
            >
              calendar_month
            </span>
            <h4 ref={b1Ref}>{a}+</h4>
            <h3>Years Experince</h3>
          </div>
          <div className="abtstat-c-box">
            <span
              style={{ "--iconsize": "80px", "--customColor": "royalblue" }}
              class="material-symbols-outlined material-symbols-outlined-size-customized material-symbols-outlined-custom-color"
            >
              box_edit
            </span>
            <h4 ref={b2Ref}>{b}+</h4>
            <h3>Products Variety</h3>
          </div>
          <div className="abtstat-c-box">
            <span
              style={{ "--iconsize": "80px", "--customColor": "royalblue" }}
              class="material-symbols-outlined material-symbols-outlined-size-customized material-symbols-outlined-custom-color"
            >
              assured_workload
            </span>
            <h4 ref={b3Ref}>{c}+</h4>
            <h3>Order Completed</h3>
          </div>
          <div className="abtstat-c-box">
            <span
              style={{ "--iconsize": "80px", "--customColor": "royalblue" }}
              class="material-symbols-outlined material-symbols-outlined-size-customized material-symbols-outlined-custom-color"
            >
              badge
            </span>
            <h4 ref={b4Ref}>{d}+</h4>
            <h3>Employees</h3>
          </div>
        </div>
      </div>
    </>
  );
}
