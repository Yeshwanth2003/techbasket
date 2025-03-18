import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import AlertBox from "../../alertbox/AlertBox";
import exportFetch from "../../../utilityFiles/exportFetch";
import { addProductRoute } from "../../../utilityFiles/urlMap";
import "./styles/addsellerproduct.css";
import { createPortal } from "react-dom";

const AddSellerProduct = forwardRef(({}, ref) => {
  // to wait until file is read
  let proceed = useRef();
  // productData state
  let productData = {
    name: "",
    category: "",
    price: "",
    img: "",
  };
  // uploading progress
  const [isUploading, setIsUploading] = useState(false);
  // alert ref
  const alertboxRef = useRef();

  // ---adder box config------
  const adderBoxRef = useRef();
  function bringMeIn() {
    adderBoxRef.current.classList.toggle("add-s-prd-wrapper-in");
  }
  useImperativeHandle(ref, () => ({ bringMeIn }));
  // onSubmit
  function onProductSubmit(ev) {
    ev.preventDefault();
    // checking and adding values
    for (let a = 0; a < ev.target.length; a++) {
      if (ev.target[a].type === "submit") continue;

      // for file
      if (ev.target[a].type === "file") {
        if (ev.target[a].files.length === 0) {
          alertboxRef.current.toggleAlert("Add the file");
          for (let i of ev.target) {
            if (i.type === "submit") continue;
            i.value = "";
          }
          return;
        }
        // restrict large file
        if (ev.target[a].files[0].size > 200000) {
          alertboxRef.current.toggleAlert("File size upto 200kb");
          for (let i of ev.target) {
            if (i.type === "submit") continue;
            i.value = "";
          }
          return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(ev.target[a].files[0]);
        reader.onloadend = () => {
          productData.img = reader.result;
          proceed.current = true;
          // trigger fetch here
          doUpload();
          for (let i of ev.target) {
            if (i.type === "submit") continue;
            i.value = "";
          }
        };
        continue;
      }
      // if no value
      // ---------------------------------------
      if (!ev.target[a].value || ev.target[a].value === "") {
        alertboxRef.current.toggleAlert("Enter all data");
        for (let i of ev.target) {
          if (i.type === "submit") continue;
          i.value = "";
        }
        return;
      }
      let key = ev.target[a].getAttribute("form-property");
      productData[key] = ev.target[a].value;
    }
  }

  function doUpload() {
    setIsUploading(true);
    exportFetch(addProductRoute, productData).then((res) => {
      setIsUploading(false);
      bringMeIn();
    });
  }

  return createPortal(
    <>
      <div ref={adderBoxRef} className="add-s-prd-wrapper">
        <div className="add-s-prd-header">
          <div>Your Product productData</div>
          <div onClick={bringMeIn.bind(this)}>
            <span class="material-symbols-outlined">cancel</span>
          </div>
        </div>
        <div className="add-s-prd-body">
          <form onSubmit={onProductSubmit.bind(this)}>
            <div className="add-s-prd-i-wrapper">
              <div>
                <span class="material-symbols-outlined">inventory_2</span>
              </div>
              <div className="add-s-prd-i-div">
                <input
                  type="text"
                  className="add-s-prd-i"
                  placeholder="Product Name"
                  form-property="name"
                />
              </div>
            </div>
            <div className="add-s-prd-i-wrapper">
              <div>
                <span class="material-symbols-outlined">category</span>
              </div>
              <div className="add-s-prd-i-div">
                <input
                  type="text"
                  className="add-s-prd-i"
                  placeholder="Product Category"
                  form-property="category"
                />
              </div>
            </div>
            <div className="add-s-prd-i-wrapper">
              <div>
                <span class="material-symbols-outlined">payments</span>
              </div>
              <div className="add-s-prd-i-div">
                <input
                  type="text"
                  className="add-s-prd-i"
                  placeholder="Product Price"
                  form-property="price"
                />
              </div>
            </div>
            <div className="add-s-prd-spl-i-div">
              <label htmlFor="addInuptFile">
                <input
                  type="file"
                  id="addInuptFile"
                  accept="image/png, image/jpeg"
                  form-property="img"
                />
                <span
                  style={{ "--iconsize": "30px" }}
                  class="material-symbols-outlined material-symbols-outlined-size-customized"
                >
                  upload_file
                </span>
                Choose File
              </label>
            </div>
            {!isUploading && <button type="submit">Add</button>}
            {isUploading && (
              <>
                <div className="add-s-prd-sh-prgs-div">
                  Uploading
                  <div style={{ "--i-delay": "1" }}></div>
                  <div style={{ "--i-delay": "2" }}></div>
                  <div style={{ "--i-delay": "3" }}></div>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
      <AlertBox ref={alertboxRef} />
    </>,
    document.body
  );
});
export default AddSellerProduct;
