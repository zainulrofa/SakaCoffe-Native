import ACTION_STRING from './actionString';
import { getProduct, getAllProduct, getProductDetail, getPromo, createProduct, createPromo } from "../../utils/product";

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

const getAllPending = () => ({
  type: ACTION_STRING.getAll.concat(ACTION_STRING.pending),
});

const getAllRejected = error => ({
  type: ACTION_STRING.getAll.concat(ACTION_STRING.rejected),
  payload: { error },
});

const getAllFulfilled = data => ({
  type: ACTION_STRING.getAll.concat(ACTION_STRING.fulfilled),
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

const getPromoPending = () => ({
  type: ACTION_STRING.getPromo.concat(ACTION_STRING.pending),
});

const getPromoRejected = error => ({
  type: ACTION_STRING.getPromo.concat(ACTION_STRING.rejected),
  payload: { error },
});

const getPromoFulfilled = data => ({
  type: ACTION_STRING.getPromo.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const createProductPending = () => ({
  type: ACTION_STRING.createProduct.concat(ACTION_STRING.pending),
});

const createProductRejected = error => ({
  type: ACTION_STRING.createProduct.concat(ACTION_STRING.rejected),
  payload: { error },
});

const createProductFulfilled = data => ({
  type: ACTION_STRING.createProduct.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const createPromoPending = () => ({
  type: ACTION_STRING.createPromo.concat(ACTION_STRING.pending),
});

const createPromoRejected = error => ({
  type: ACTION_STRING.createPromo.concat(ACTION_STRING.rejected),
  payload: { error },
});

const createPromoFulfilled = data => ({
  type: ACTION_STRING.createPromo.concat(ACTION_STRING.fulfilled),
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

const getAllThunk = (query, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(getAllPending());
      // console.log('redux', body);
      const result = await getAllProduct(query);
      dispatch(getAllFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(getAllRejected(error));
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

const getPromoThunk = (query, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(getPromoPending());
      // console.log('redux', body);
      const result = await getPromo(query);
      dispatch(getPromoFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(getPromoRejected(error));
      // console.log(error);
      typeof cbDenied === "function" && cbDenied(error.response.data.msg);
    }
  };
};

const createProductThunk =
(body, token, cbSuccess, cbDenied) => async dispacth => {
    try {
      dispacth(createProductPending());
      const result = await createProduct(body, token);
      dispacth(createProductFulfilled(result.data));
      typeof cbSuccess() === 'function' && cbSuccess(result.data.data.id);
    } catch (error) {
      console.log(error);
      dispacth(createProductRejected(error));
      typeof cbDenied === 'function' && cbDenied();
    }
  };

  const createPromoThunk =
(body, token, cbSuccess, cbDenied) => async dispacth => {
    try {
      dispacth(createPromoPending());
      const result = await createPromo(body, token);
      dispacth(createPromoFulfilled(result.data));
      typeof cbSuccess() === 'function' && cbSuccess();
    } catch (error) {
      console.log(error);
      dispacth(createPromoRejected(error));
      typeof cbDenied === 'function' && cbDenied();
    }
  };

const productAction = {
  getProductThunk,
  getDetailThunk,
  getAllThunk,
  getPromoThunk,
  createProductThunk,
  createPromoThunk,
};

export default productAction;