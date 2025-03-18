import MAP, { types } from "./urlMap.mjs";
import { cookieExtract } from "../../utility/cookie.mjs";
import { extractor } from "../../utility/urlParam.mjs";

export default (req, res, db) => {
  let path = req.url.split("?")[0];
  let dealType = MAP[path].type;
  if (dealType === types.MESSAGE) {
    res.end(MAP[path].data);
  } else if (dealType === types.USERCART) {
    let cookie = req.headers["cookie"];
    if (cookie) {
      let { username, password } = cookieExtract(cookie);

      function onsuccess(cartData) {
        res.setHeader("Content-Type", "application/json");
        cartData = cartData.map((elem) => elem[0]);
        res.end(JSON.stringify(cartData));
      }
      db.userCart(username, password, onsuccess);
    } else {
      res.end();
    }
  } else if (dealType === types.MOSTRECENT) {
    function onsuccess(recentItem) {
      res.setHeader("Content-Type", "application/json");
      recentItem = recentItem.map((elem) => elem[0]);
      res.end(JSON.stringify(recentItem));
    }
    db.mostRecent(onsuccess);
  } else if (dealType === types.HOTPRODUCTS) {
    function onsuccess(products) {
      res.setHeader("Content-Type", "application/json");
      products = products.map((elem) => elem[0]);
      res.end(JSON.stringify(products));
    }
    db.hotProducts(onsuccess);
  } else if (dealType === types.USERINTREST) {
    let cookie = req.headers["cookie"];
    if (cookie) {
      let { username, password } = cookieExtract(cookie);

      function onsuccess(iData, ifFailed = false) {
        // if uid not in recom
        if (ifFailed) {
          res.statusCode = 404;
          res.end();
          return;
        }
        res.setHeader("Content-Type", "application/json");
        iData = iData.map((elem) => elem[0]);
        res.end(JSON.stringify(iData));
      }
      db.userIntrestItem(username, password, onsuccess);
    } else res.end();
  } else if (dealType === types.PRD_BY_ID) {
    let params = extractor(req.url);
    if (params.pid) {
      function onsuccess(prdData) {
        res.setHeader("Content-Type", "application/json");
        prdData = prdData.map((elem) => elem[0]);
        res.end(JSON.stringify(prdData));
      }
      db.prdByID(onsuccess, params.pid);
    } else {
      res.statusCode = 404;
      res.end();
    }
  } else if (dealType === types.RELATED_PRD) {
    let params = extractor(req.url);
    if (params.prd) {
      function onsuccess(prdData) {
        res.setHeader("Content-Type", "application/json");
        prdData = prdData.map((elem) => elem[0]);
        res.end(JSON.stringify(prdData));
      }
      db.search(onsuccess, params.prd);
    } else {
      res.statusCode = 404;
      res.end();
    }
  } else if (dealType === types.THIS_PRD_COUNT) {
    let params = extractor(req.url);
    if (params.name) {
      function onsuccess(count) {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(count));
      }
      db.thisPrdCount(onsuccess, params.name);
    } else {
      res.statusCode = 404;
      res.end();
    }
  } else if (dealType === types.GET_ALL_CAT) {
    function onsuccess(catData) {
      res.setHeader("Content-Type", "application/json");
      catData = catData.map((elem) => elem[0]);
      res.end(JSON.stringify(catData));
    }
    db.getAllCat(onsuccess);
  } else if (dealType === types.CHECK_IF_SELLER) {
    let cookie = req.headers["cookie"];
    if (cookie) {
      let { username, password } = cookieExtract(cookie);
      function onsuccess(val = false) {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(val));
      }
      db.checkifseller(onsuccess, username, password);
    } else {
      res.statusCode = 404;
      res.end("Not a valid request");
    }
  } else if (dealType === types.SELLERPRD_COUNT) {
    let cookie = req.headers["cookie"];
    function onsuccess(err, data) {
      if (err) {
        res.statusCode = 404;
        res.end();
      } else {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
      }
    }
    if (cookie) {
      let { username, password } = cookieExtract(cookie);
      db.sellerPrdCount(onsuccess, username, password);
    } else onsuccess(true);
  }
};
