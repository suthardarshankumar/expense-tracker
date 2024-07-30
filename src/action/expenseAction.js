import { ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE, SET_FILTER } from './actionTypes'

export const addExpense = (expense) => ({
    type: ADD_EXPENSE,
    payload: expense,
})

export const deleteExpense = (id) => ({
    type: DELETE_EXPENSE,
    payload: id,
})

export const editExpense = ({ id, updatedExpense }) => ({
    type: EDIT_EXPENSE,
    payload: { id, updatedExpense }
});


export const setFilter = (category) => ({
    type: SET_FILTER,
    payload: category
})