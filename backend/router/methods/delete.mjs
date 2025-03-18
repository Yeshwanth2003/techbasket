import MAP, { types } from "./urlMap.mjs";
import { cookieExtract } from "../../utility/cookie.mjs";

export default function _delete(req, res, db, data = null) {
  let path = req.url.split("?")[0];
  let dealType = MAP[path].type;
  if (dealType === types.DELETE_CART_ITEM) {
    function onsuccess(ifFailed = false) {
      res.setHeader("Content-Type", "application/json");
      if (ifFailed) {
        res.statusCode = 404;
        res.end(JSON.stringify(false));
        return;
      }
      res.end(JSON.stringify(true));
    }
    let cookie = req.headers["cookie"];
    if (path == "/userspecific/deleteFromCart") {
      if (cookie) {
        let { username, password } = cookieExtract(cookie);
        if (data && data.pid)
          db.deleteFromCart(onsuccess, username, password, data.pid, 1);
        else onsuccess(true);
      } else onsuccess(true);
    } else {
      if (cookie) {
        let { username, password } = cookieExtract(cookie);
        if (data && data.pid)
          db.deleteFromCart(onsuccess, username, password, data.pid, 0);
        else onsuccess(true);
      } else onsuccess(true);
    }
  } else if (dealType === types.DELETE_ONEPRD) {
    res.setHeader("Content-Type", "application/json");
    function onsuccess(val) {
      res.end(JSON.stringify(val));
    }
    let cookie = req.headers["cookie"];
    if (data && data.pid && cookie) {
      let { username, password } = cookieExtract(cookie);
      db.deleteOnePrd(onsuccess, data.pid);
    } else onsuccess();
  }
}
