import MAP, { types } from "./urlMap.mjs";
import { cookieExtract } from "../../utility/cookie.mjs";

export default (req, res, db, data) => {
  let path = req.url.split("?")[0];
  let dealType = MAP[path].type;

  if (dealType === types.MESSAGE) {
    res.end("Hi");
  } else if (dealType === types.NEWUSER) {
    function onsuccess(ifFailed) {
      res.setHeader("Content-Type", "application/json");
      if (ifFailed) {
        res.end(JSON.stringify(false));
        return;
      }
      res.end(JSON.stringify(true));
    }
    db.addUser(onsuccess, data);
  } else if (dealType === types.CHECKUSER) {
    function onsuccess(successcode) {
      // let user know content type
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      if (successcode) {
        // set cookie to the user
        let token = `${data.username}:${data.password}`;
        res.setHeader("set-Cookie", `user-auth-key=${token};HttpOnly`);
        res.end(JSON.stringify({ exist: true }));
      } else res.end(JSON.stringify({ exist: false }));
    }
    db.checkExistence(data, onsuccess);
  } else if (dealType === types.SEARCH) {
    if (data.name && data.page) {
      function onsuccess(prdData) {
        res.setHeader("Content-Type", "application/json");
        prdData = prdData.map((elem) => elem[0]);
        res.end(JSON.stringify(prdData));
      }
      db.search(onsuccess, data.name, data.page);
    } else res.end();
  } else if (dealType === types.ADD_TO_CART) {
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
    if (cookie) {
      let { username, password } = cookieExtract(cookie);
      if (data && data.pid)
        db.addToCart(onsuccess, username, password, data.pid);
      else onsuccess(true);
    } else onsuccess(true);
  } else if (dealType === types.ADD_USERINTEREST) {
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
    if (cookie) {
      let { username, password } = cookieExtract(cookie);
      if (data && data.recomdata)
        db.addInterest(onsuccess, username, password, data.recomdata);
      else onsuccess(true);
    } else onsuccess(true);
  } else if (dealType === types.PRD_BY_NAME) {
    res.setHeader("Content-Type", "application/json");
    if (data && data.name) {
      function onsuccess(prdData) {
        prdData = prdData.map((elem) => elem[0]);
        res.end(JSON.stringify(prdData));
      }
      db.prdByName(onsuccess, data.name);
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify(false));
    }
  } else if (dealType === types.ADD_SELLER) {
    res.setHeader("Content-Type", "application/json");
    if (data && data.country) {
      function onsuccess(val = false) {
        res.end(JSON.stringify(val));
      }
      let cookie = req.headers["cookie"];
      if (cookie) {
        let { username, password } = cookieExtract(cookie);
        db.addseller(onsuccess, username, password, data.country);
      } else onsuccess();
    }
  } else if (dealType === types.THIS_SELLERPRODUCT) {
    function onsuccess(err, data) {
      res.setHeader("Content-Type", "application/json");
      if (err) {
        res.statusCode = 404;
        res.end();
      } else {
        let prdData = data.map((elem) => elem[0]);
        res.end(JSON.stringify(prdData));
      }
    }
    let cookie = req.headers["cookie"];
    if (data && data.page && cookie) {
      let { username, password } = cookieExtract(cookie);
      db.getSellerProduct(onsuccess, username, password, data.page);
    } else {
      onsuccess(true);
    }
  } else if (dealType === types.ADD_PRD) {
    function onsuccess(val = false) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(val));
    }
    let cookie = req.headers["cookie"];
    if (cookie && data) {
      let { username, password } = cookieExtract(cookie);
      db.addPrd(onsuccess, username, password, data);
    } else onsuccess();
  }
};
