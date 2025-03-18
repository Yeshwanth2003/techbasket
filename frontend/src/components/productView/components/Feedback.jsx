import "./style/feedback.css";

export default function Feedback() {
  function onSubmit(ev) {
    ev.preventDefult();
  }
  return (
    <>
      <div className="feed-b-wrapper">
        <div className="feed-b-header">
          <p>
            <span class="material-symbols-outlined">forum</span>Customer Reviews
          </p>
        </div>
        <div className="feed-b-content-div">{/* allfeed */}</div>
        <div className="feed-input-box">
          <form onSubmit={onSubmit.bind(this)}>
            <label htmlFor="feedbackText">
              <p>
                Add a Feedback
                <span class="material-symbols-outlined">comment</span>
              </p>
            </label>
            <div className="feed-input-div">
              <textarea name="feedback" id="feedbackText"></textarea>
            </div>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </>
  );
}
