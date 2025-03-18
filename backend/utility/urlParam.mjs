function extractor(param) {
  let p1 = param.split("?")[1];
  p1 = p1.split("&");
  let params = {};
  for (let i of p1) {
    let [key, val] = i.split("=");
    params[key] = val;
  }
  return params;
}
export { extractor };
