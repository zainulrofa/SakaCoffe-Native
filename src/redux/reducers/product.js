import ACTION_STRING from '../actions/actionString';

const initialState = {
    product: [],
    isLoading: false,
    isError: false,
    isFulfilled: false,
    error: null,
};

const productReducer = (prevState = initialState, { type, payload }) => {
    const { getProduct, pending, rejected, fulfilled } = ACTION_STRING;
    switch (type) {
        case getProduct + pending:
            return {
                ...prevState,
                isLoading: true,
                isError: false,
                isFulfilled: false,
            };
        case getProduct + rejected:
            return {
                ...prevState,
                isError: true,
                isLoading: false,
                isFulfilled: false,
                error: payload.error.response.data.msg,
                product: []
            };
        case getProduct + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isError: false,
                isFulfilled: true,
                product: payload.data.data
            };

        default:
            return prevState;
    }
}

export default productReducer