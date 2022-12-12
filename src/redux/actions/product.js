import ACTION_STRING from './actionString';
import { getProduct, getProductDetail } from "../../utils/product";

const getProductPending = () => ({
  type: ACTION_STRING.getProduct.concat(ACTION_STRING.pending),
});

const getProductRejected = error => ({
  type: ACTION_STRING.getProduct.concat(ACTION_STRING.rejected),
  payload: { error },
});

const getProductFulfilled = data => ({
  type: ACTION_STRING.getProduct.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const getDetailPending = () => ({
  type: ACTION_STRING.getDetail.concat(ACTION_STRING.pending),
});

const getDetailRejected = error => ({
  type: ACTION_STRING.getDetail.concat(ACTION_STRING.rejected),
  payload: { error },
});

const getDetailFulfilled = data => ({
  type: ACTION_STRING.getDetail.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const getProductThunk = (cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(getProductPending());
      // console.log('redux', body);
      const result = await getProduct();
      dispatch(getProductFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(getProductRejected(error));
      // console.log(error);
      typeof cbDenied === "function" && cbDenied(error.response.data.msg);
    }
  };
};

const getDetailThunk = (params, token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(getDetailPending());
      // console.log('redux', body);
      const result = await getProductDetail(params, token);
      dispatch(getDetailFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(getDetailRejected(error));
      // console.log(error);
      typeof cbDenied === "function" && cbDenied(error.response.data.msg);
    }
  };
};

const productAction = {
  getProductThunk, getDetailThunk
};

export default productAction;