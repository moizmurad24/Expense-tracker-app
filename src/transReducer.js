export const TransactionReducer = ((state, action) => {
    switch (action.type) {
        case 'Add_Transaction':
            return [action.payload, ...state];
    
        default:
         return state;
    }
}
)