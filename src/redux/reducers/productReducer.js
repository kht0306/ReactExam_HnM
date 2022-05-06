let initialState = {
  productList: [],
  img: "",
  title: "",
  price: "",
  choice: "",
  size: [],
};
function productReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, productList: payload.data };
    case "GET_PRODUCTDETAIL_SUCCESS":
      return {
        ...state,
        img: payload.data.img,
        title: payload.data.title,
        price: payload.data.price,
        choice: payload.data.choice,
        size: payload.data.size,
      };
    default:
      return { ...state };
  }
}
export default productReducer;
