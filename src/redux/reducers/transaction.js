import ACTION_STRING from '../actions/actionString';

const initialState = {
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: '',
  cart: {
    id: '',
    price: '',
    image: '',
    productName: '',
    size: '',
  },
  history: [],
};

const transactionReducer = (prevState = initialState, {type, payload}) => {
  const {
    createTransaction,
    getHistory,
    transactionData,
    pending,
    rejected,
    fulfilled,
  } = ACTION_STRING;
  switch (type) {
    case createTransaction.concat(pending):
      return {
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case createTransaction.concat(rejected):
      return {
        isLoading: false,
        isError: true,
        error: payload.error.response.data.msg,
      };
    case createTransaction.concat(fulfilled):
      return {
        isLoading: false,
        isFulfilled: true,
      };

    case getHistory.concat(pending):
      return {
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getHistory.concat(rejected):
      return {
        isLoading: false,
        isError: true,
        error: payload.error.response.data.msg,
      };
    case getHistory.concat(fulfilled):
      return {
        isLoading: false,
        isFulfilled: true,
        history: payload.data.data,
      };

    case transactionData:
      return {
        cart: {
          id: payload.data.id,
          price: payload.data.price,
          image: payload.data.image,
          productName: payload.data.productName,
          size: payload.data.size,
        },
      };

    default:
      return prevState;
  }
};

export default transactionReducer;
