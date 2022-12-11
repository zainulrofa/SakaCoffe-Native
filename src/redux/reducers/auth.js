
import ACTION_STRING from '../actions/actionString';

const initialState = {
  userData: {
    id: null,
    token: null,
  },
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: null,
};

const authReducer = (prevState = initialState, { type, payload }) => {
    const { register, login, forgot, reset, logout, pending, rejected, fulfilled } = ACTION_STRING;
    switch (type) {
        case register + pending:
          return {
            ...prevState,
            isLoading: true,
            isError: false,
            isFulfilled: false,
          };
        case register + rejected:
          return {
            ...prevState,
            isError: true,
            isLoading: false,
            error: payload.error,
          };
        case register + fulfilled:
          return {
            ...prevState,
            isLoading: false,
          };
    
        case login + pending:
          return {
            ...prevState,
            isLoading: true,
            isError: false,
            isFulfilled: false,
          };
        case login + rejected:
          return {
            ...prevState,
            isError: true,
            isLoading: false,
            isFulfilled: false,
            error: payload.error,
          };
        case login + fulfilled:
          return {
            ...prevState,
            isError: false,
            isLoading: false,
            isFulfilled: true,
            userData: {
              id: payload.data.data.payload.id,
              token: payload.data.data.token,
            },
        };
      
        case forgot + pending:
          return {
            ...prevState,
            isLoading: true,
            isError: false,
            isFulfilled: false,
          };
        case forgot + rejected:
          return {
            ...prevState,
            isError: true,
            isLoading: false,
            isFulfilled: false,
            error: payload.error,
          };
        case forgot + fulfilled:
          return {
            ...prevState,
            isError: false,
            isLoading: false,
            isFulfilled: true,
        };
      
        case reset + pending:
          return {
            ...prevState,
            isLoading: true,
            isError: false,
            isFulfilled: false,
          };
        case reset + rejected:
          return {
            ...prevState,
            isError: true,
            isLoading: false,
            isFulfilled: false,
            error: payload.error,
          };
        case reset + fulfilled:
          return {
            ...prevState,
            isError: false,
            isLoading: false,
            isFulfilled: true,
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
          
}

export default authReducer;