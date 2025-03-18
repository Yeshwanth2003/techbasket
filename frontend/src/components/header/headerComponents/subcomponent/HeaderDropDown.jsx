import { useEffect, useState } from "react";
import "./styles/headerdropdown.css";

export default function HeaderDropDown({
  currentValue,
  values = [],
  onCurrentChange = false,
}) {
  const [current, setCurrent] = useState(currentValue);
  let [thisValues, setThisValues] = useState(values);

  useEffect(() => {
    if (!onCurrentChange) return;
    onCurrentChange(current);
  }, [current, onCurrentChange]);

  //   handle dropDown filter
  function onDropDownOptionChange(value) {
    setCurrent((pre) => {
      thisValues.push(pre);
      const filteredValues = thisValues.filter((elem) => elem.value !== value.value);
      setThisValues([...filteredValues]);
      return value;
    });
  }

  return (
    <>
      <div className="hdr-dd-wrapper">
        <input type="checkbox" name="" id="HeaderDropdownChecker" />
        <label htmlFor="HeaderDropdownChecker">
          <div className="hdr-dd-currnet">
            <span>{current.value}</span>
          </div>
        </label>
        <div className="hdr-dd-options">
          <ul>
            {thisValues.map((elem) => {
              return (
                <>
                  <li
                    onClick={() => onDropDownOptionChange(elem)}
                    key={elem.id}
                  >
                    {elem.value}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
