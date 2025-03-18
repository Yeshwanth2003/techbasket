const types = {
  MESSAGE: 0,
  NEWUSER: 1,
  CHECKUSER: 2,
  USERCART: 3,
  MOSTRECENT: 4,
  HOTPRODUCTS: 5,
  USERINTREST: 6,
  PRD_BY_ID: 9,
  RELATED_PRD: 10,
  THIS_PRD_COUNT: 11,
  SEARCH: 12,
  GET_ALL_CAT: 13,
  ADD_TO_CART: 14,
  DELETE_CART_ITEM: 15,
  ADD_USERINTEREST: 16,
  PRD_BY_NAME: 17,
  CHECK_IF_SELLER: 18,
  ADD_SELLER: 19,
  THIS_SELLERPRODUCT: 20,
  SELLERPRD_COUNT: 21,
  DELETE_ONEPRD: 22,
  ADD_PRD: 23,
};
const MAP = {
  "/": {
    type: types.MESSAGE,
    data: "Hi there",
  },
  "/addMe": {
    type: types.NEWUSER,
  },
  "/login": {
    type: types.CHECKUSER,
  },
  "/userspecific/cart": {
    type: types.USERCART,
  },
  "/getMostRecent": {
    type: types.MOSTRECENT,
  },
  "/getMostIntrested": {
    type: types.HOTPRODUCTS,
  },
  "/userspecific/getByRecent": {
    type: types.USERINTREST,
  },
  "/getProduct": {
    type: types.PRD_BY_ID,
  },
  "/getRelPrd": {
    type: types.RELATED_PRD,
  },
  "/searchThisCount": {
    type: types.THIS_PRD_COUNT,
  },
  "/searchThis": {
    type: types.SEARCH,
  },
  "/getCat": {
    type: types.GET_ALL_CAT,
  },
  "/userspecific/addToCart": {
    type: types.ADD_TO_CART,
  },
  "/userspecific/deleteFromCartOne": {
    type: types.DELETE_CART_ITEM,
  },
  "/userspecific/deleteFromCart": {
    type: types.DELETE_CART_ITEM,
  },
  "/userspecific/addToRecent": {
    type: types.ADD_USERINTEREST,
  },
  "/getSpecific": {
    type: types.PRD_BY_NAME,
  },
  "/userspecific/amIaSeller": {
    type: types.CHECK_IF_SELLER,
  },
  "/addMeAsSeller": {
    type: types.ADD_SELLER,
  },
  "/userspecific/thisSellerProducts": {
    type: types.THIS_SELLERPRODUCT,
  },
  "/userspecific/getSellerProductsCount": {
    type: types.SELLERPRD_COUNT,
  },
  "/userspecific/deleteOnePrd": {
    type: types.DELETE_ONEPRD,
  },
  "/userspecific/addProduct": {
    type: types.ADD_PRD,
  },
};

export { types };
export default MAP;
