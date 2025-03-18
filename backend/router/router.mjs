import get from "./methods/get.mjs";
import post from "./methods/post.mjs";
import MAP from "./methods/urlMap.mjs";
// naming convention delete(default keyword)=>_delete
import _delete from "./methods/delete.mjs";

export default (req, res, db) => {
  let method = req.method.toUpperCase();
  // console.log(req.url, method);

  // handle cors
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  // end options
  if (req.method === "OPTIONS") {
    res.writeHead(204); // No Content
    res.end();
    return;
  }

  // no map error
  let onlyPath = req.url.split("?")[0]; //removes any path arguments '?name=name'
  if (!MAP[onlyPath]) {
    res.statusCode = 404;
    res.end("User Error Detected");
    return;
  }
  if (method === "GET") {
    get(req, res, db);
  } else if (method === "POST") {
    let userData = "";
    req.on("data", (d_ata) => {
      userData += d_ata;
    });
    req.on("end", () => {
      post(req, res, db, JSON.parse(userData));
    });
  } else if (method === "DELETE") {
    let userData = "";
    req.on("data", (d_ata) => {
      userData += d_ata;
    });
    req.on("end", () => {
      _delete(req, res, db, JSON.parse(userData));
    });
  } else res.end("hi");
};
