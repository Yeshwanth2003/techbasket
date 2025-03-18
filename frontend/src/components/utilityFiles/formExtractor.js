/**
 * @param {Object} data
 * @param {HTMLElement} form
 * @param alertboxRef
 * @param {Function} callback(data)
 */

// this requires ```data-property, know about matcher```

export default function formExtractor(data, form, alertboxRef, callback) {
  for (let a = 0; a < form.length - 1; a++) {
    // if value fails
    if (!form[a].value || form[a].value === "") {
      alertboxRef.current.toggleAlert("Enter your datas");
      // clean inputs
      for (let s of form) {
        if (s.type === "submit") continue;
        s.value = "";
      }
      return;
    }
    // set Into data
    const obj = { ...data };
    const key = form[a].getAttribute("data-property");
    const inputValue = form[a].value;
    obj[key] = inputValue;
    //     matcher validation -like email
    if (matcher[key]) {
      if (!inputValue.match(matcher[key])) {
        alertboxRef.current.toggleAlert("Enter valid datas");
        // clean inputs
        for (let s of form) {
          if (s.type === "submit") continue;
          s.value = "";
        }
        return;
      }
    }
    data = { ...obj };
  }
  // clean inputs
  for (let a of form) {
    if (a.type === "submit") continue;
    a.value = "";
  }
  callback(null, data);
}

const matcher = {
  email: /.*@gmail.com/gi,
};
