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
  dataCheckout: {
    id: '',
    image: '',
    productName: '',
    price: '',
    size: '',
    qty: '',
    subTotal: ''
  },
  dataPayment: {
    id: '',
    image: '',
    productName: '',
    price: '',
    size: '',
    qty: '',
    subTotal: '',
    delivMethod: ''
  },
  history: [],
};

const transactionReducer = (prevState = initialState, { type, payload }) => {
  const {
    createTransaction,
    getHistory,
    transactionData,
    checkout,
    payment,
    logout,
    pending,
    rejected,
    fulfilled,
  } = ACTION_STRING;
  switch (type) {
    case createTransaction.concat(pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case createTransaction.concat(rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: payload.error.response.data.msg,
      };
    case createTransaction.concat(fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isFulfilled: true,
      };

    case getHistory.concat(pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getHistory.concat(rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: payload.error.response.data.msg,
      };
    case getHistory.concat(fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isFulfilled: true,
        history: payload.data.data,
      };

    case transactionData:
      return {
        ...prevState,
        cart: {
          id: payload.data.id,
          price: payload.data.price,
          image: payload.data.image,
          productName: payload.data.productName,
          size: payload.data.size,
        },
      };

    case checkout:
      return {
        ...prevState,
        dataCheckout: {
          id: payload.data.id,
          image: payload.data.image,
          productName: payload.data.productName,
          price: payload.data.price,
          size: payload.data.size,
          qty: payload.data.qty,
          subTotal: payload.data.subTotal
        },
      };

    case payment:
      return {
        ...prevState,
        dataPayment: {
          id: payload.data.id,
          image: payload.data.image,
          productName: payload.data.productName,
          price: payload.data.price,
          size: payload.data.size,
          qty: payload.data.qty,
          subTotal: payload.data.subTotal,
          delivMethod: payload.data.delivMethod
        },
      };
    
      case logout + pending:
        return {
          ...prevState,
          isLoading: true,
          isError: false,
          isFulfilled: false,
        };
      case logout + rejected:
        return {
          ...prevState,
          isError: true,
          isLoading: false,
          isFulfilled: false,
          error: payload.error,
        };
      case logout + fulfilled:
        return initialState

    default:
      return prevState;
  }
};

export default transactionReducer;
