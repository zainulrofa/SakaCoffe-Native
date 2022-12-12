import {
  createTrans,
  getHistory as apiGetHistory,
} from '../../utils/transaction';
import ACTION_STRING from './actionString';

const {
  createTransaction,
  transactionData,
  getHistory,
  pending,
  rejected,
  fulfilled,
} = ACTION_STRING;

const createTransactionPending = () => ({
  type: createTransaction.concat(pending),
});

const createTransactionRejected = error => ({
  type: createTransaction.concat(rejected),
  payload: {error},
});

const createTransactionFulfilled = data => ({
  type: createTransaction.concat(fulfilled),
  payload: {data},
});

const getHistoryPending = () => ({
  type: getHistory.concat(pending),
});

const getHistoryRejected = error => ({
  type: getHistory.concat(rejected),
  payload: {error},
});

const getHistoryFulfilled = data => ({
  type: getHistory.concat(fulfilled),
  payload: {data},
});

const getHistoryThunk = token => async dispatch => {
  try {
    dispatch(getHistoryPending());
    const result = await apiGetHistory(token);
    dispatch(getHistoryFulfilled(result.data));
    typeof cbSuccess === 'function' && cbSuccess();
  } catch (error) {
    dispatch(getHistoryRejected(error));
    typeof cbDenied === 'function' && cbDenied();
  }
};

const createTransactionThunk =
  (body, token, cbSuccess, cbDenied) => async dispatch => {
    try {
      dispatch(createTransactionPending());
      const result = await createTrans(body, token);
      dispatch(createTransactionFulfilled(result.data));
      typeof cbSuccess === 'function' && cbSuccess();
    } catch (error) {
      dispatch(createTransactionRejected(error));
      typeof cbDenied === 'function' && cbDenied();
    }
  };

const dataTransaction = data => {
  return {
    type: transactionData,
    payload: {data},
  };
};
const transactionActions = {
  createTransactionThunk,
  dataTransaction,
  getHistoryThunk,
};

export default transactionActions;
