import SQL from "@mysql/xdevapi";
import triggers from "../utility/commanTriggers.mjs";
import addUser from "./methods/addUser.mjs";
import checkExistence from "./methods/checkExistence.mjs";
import userCart from "./methods/userCart.mjs";
import mostRecent from "./methods/mostRecent.mjs";
import hotProducts from "./methods/hotProducts.mjs";
import userIntrestItem from "./methods/userIntrestItem.mjs";
import prdByID from "./methods/prdByID.mjs";
import search from "./methods/search.mjs";
import thisPrdCount from "./methods/thisPrdCount.mjs";
import getAllCat from "./methods/getAllCat.mjs";
import addToCart from "./methods/addToCart.mjs";
import deleteFromCart from "./methods/deleteFromCart.mjs";
import addInterest from "./methods/addInterest.mjs";
import prdByName from "./methods/prdByName.mjs";
import checkifseller from "./methods/checkifseller.mjs";
import addseller from "./methods/addseller.mjs";
import getSellerProduct from "./methods/getSellerProduct.mjs";
import sellerPrdCount from "./methods/sellerPrdCount.mjs";
import deleteOnePrd from "./methods/deleteOnePrd.mjs";
import addPrd from "./methods/addPrd.mjs";

export default (async () => {
  const connection = await SQL.getSession({
    user: "root",
    password: "sivakumar",
    schema: "tech_basket",
  });
  triggers.on("serverclose", () => {
    connection.close();
  });
  const dbMethods = [
    addUser,
    checkExistence,
    userCart,
    mostRecent,
    hotProducts,
    userIntrestItem,
    prdByID,
    search,
    thisPrdCount,
    getAllCat,
    addToCart,
    deleteFromCart,
    addInterest,
    prdByName,
    checkifseller,
    addseller,
    getSellerProduct,
    sellerPrdCount,
    deleteOnePrd,
    addPrd,
  ];
  const dbMethodsWrapper = {};
  for (let i of dbMethods) {
    dbMethodsWrapper[i.name] = (...args) => i(connection, ...args);
  }
  return dbMethodsWrapper;
})();
