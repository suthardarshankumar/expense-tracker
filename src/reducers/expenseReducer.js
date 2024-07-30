import { ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE, SET_FILTER } from '../action/actionTypes';

const initialState = {
    expenses: [],
    filter: 'No Filter',
};

const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            return {
                ...state,
                expenses: [...state.expenses, { ...action.payload, id: Date.now() }],
            };
        case DELETE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload),
            };
        case EDIT_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.map((expense) =>
                    expense.id === action.payload.id
                        ? { ...expense, ...action.payload.updatedExpense }
                        : expense
                ),
            };
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;
    }
};

export default expenseReducer;
