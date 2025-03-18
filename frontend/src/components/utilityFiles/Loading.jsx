import "./styles/loading.css";

export default function Loading() {
  return (
    <>
      <div className="loading-wrapper">
        <div className="l-o-c">
          <span
            style={{ "--iconsize": "80px", color: "var(--darkblue)" }}
            className="material-symbols-outlined material-symbols-outlined-size-customized"
          >
            settings
          </span>
          <div className="l-m-c">
            <span
              style={{ "--iconsize": "40px", color: "var(--darkblue)" }}
              className="material-symbols-outlined material-symbols-outlined-size-customized"
            >
              settings
            </span>

            <div className="l-i-c">
              <span
                style={{ "--iconsize": "40px", color: "var(--darkblue)" }}
                className="material-symbols-outlined material-symbols-outlined-size-customized"
              >
                settings
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
