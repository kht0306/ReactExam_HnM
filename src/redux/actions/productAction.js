import axios from "axios";

function getProduct(searchQuery) {
  return (dispatch, getState) => {
    let orgUrl = `https://my-json-server.typicode.com/kht0306/ReactExam_HnM/products?q=${searchQuery}`;
    axios({
      url: orgUrl,
      data: {},
    })
      .then((res) => {
        let data = res.data;
        dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
}

function getProductDetail(id) {
  return (dispatch, getState) => {
    axios({
      url: `https://my-json-server.typicode.com/kht0306/ReactExam_HnM/products/${id}`,
      data: {},
    })
      .then((res) => {
        let data = res.data;
        dispatch({ type: "GET_PRODUCTDETAIL_SUCCESS", payload: { data } });
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
}

export const productAction = { getProduct, getProductDetail };
