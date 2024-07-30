import { createStore } from 'redux'
import expenseReducer from '../reducers/expenseReducer'

const store = createStore(expenseReducer)

export default store