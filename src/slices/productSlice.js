
export const selectProduct = (product) => {
    return {
        type: 'product/select',
        payload: product,
    };
};


const initialState = {
    selectedProduct: null,
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case 'product/select':
            return {
                ...state,
                selectedProduct: action.payload,
            };
        default:
            return state;
    }
}
