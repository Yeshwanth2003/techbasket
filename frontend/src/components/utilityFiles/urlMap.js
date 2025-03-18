const domain = "http://localhost:80";
const addUserRoute = `${domain}/addMe`;
const loginUserRoute = `${domain}/login`;
const cartRoute = `${domain}/userspecific/cart`;
const verifySellerRoute = `${domain}/userspecific/amIaSeller`;
const addSellerRoute = `${domain}/addMeAsSeller`;
const addProductRoute = `${domain}/userspecific/addProduct`;
const getMostWantedRoute = `${domain}/getMostIntrested`;
const getSearchRoute = `${domain}/searchThis`;
const getSearchCountRoute = `${domain}/searchThisCount?name=`;
const getMostRecentRoute = `${domain}/getMostRecent`;
const addToCartRoute = `${domain}/userspecific/addToCart`;
const deleteFromCartRoute = `${domain}/userspecific/deleteFromCart`;
const deleteFromCartOneRoute = `${domain}/userspecific/deleteFromCartOne`;
const getProductRoute = `${domain}/getProduct`;
const getRelProductRoute = `${domain}/getRelPrd`;
const thisSellerProductsRoute = `${domain}/userspecific/thisSellerProducts`;
const thisSellerProductsCountRoute = `${domain}/userspecific/getSellerProductsCount`;
const deleteOnePrdRoute = `${domain}/userspecific/deleteOnePrd`;
const addToRecentRoute = `${domain}/userspecific/addToRecent`;
const getByRecentRoute = `${domain}/userspecific/getByRecent`;
const getSpecificRoute = `${domain}/getSpecific`;
const getCatRoute = `${domain}/getCat`;
const getAllSellers = `${domain}/getAllSellers`;

export {
  addUserRoute,
  loginUserRoute,
  cartRoute,
  verifySellerRoute,
  addSellerRoute,
  addProductRoute,
  getMostWantedRoute,
  getSearchCountRoute,
  getSearchRoute,
  getMostRecentRoute,
  addToCartRoute,
  deleteFromCartRoute,
  deleteFromCartOneRoute,
  getProductRoute,
  getRelProductRoute,
  thisSellerProductsRoute,
  thisSellerProductsCountRoute,
  deleteOnePrdRoute,
  addToRecentRoute,
  getByRecentRoute,
  getSpecificRoute,
  getCatRoute,
  getAllSellers,
};
