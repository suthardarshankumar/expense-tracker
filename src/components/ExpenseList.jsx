import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteExpense } from '../action/expenseAction'
import Button from './Button'
import EditExpense from './EditExpense'

const ExpenseList = () => {
    const dispatch = useDispatch();
    const { expenses, filter } = useSelector((state) => state)
    const [editingExpense, setEditingExpense] = useState(null)

    const filterExpenses = filter === 'No Filter' ? expenses : expenses.filter((expense) => expense.category === filter)

    return (
        <>
            <div className="px-10 py-4">
                {filterExpenses.map((expense) => (
                    <div key={expense.id} className="flex justify-between items-center mb-4">
                        {editingExpense === expense.id ? (
                            <EditExpense expense={expense} closeEdit={() => setEditingExpense(null)} />
                        ) : (
                            <div className={`flex w-full text-xl mt-3 border-l-4 rounded-md px-4 py-1 ${expense.amount >= 0 ? 'border-green-500' : 'border-red-500'}`}>
                                <div className="flex w-5/6">
                                    <p className="font-semibold w-2/5">{expense.name}</p>
                                    <p className={`w-2/5 ${expense.amount >= 0 ? 'text-green-500' : 'text-red-500'}`}>₹{expense.amount.toFixed(2)}</p>
                                    <p className="w-1/5">{expense.category}</p>
                                </div>
                                <div className="w-1/6 flex justify-end gap-x-4">
                                    <Button
                                        onClick={() => setEditingExpense(expense.id)}
                                        variant="contained"
                                        color="primary"
                                        btnName="Edit"
                                        sx={{
                                            backgroundColor: "rgb(234, 179, 8,0.8)",
                                            color: "#f2f2f2",
                                            transistion: "0.5s",
                                            "&:hover": {
                                                backgroundColor: "rgb(234 179 8)",
                                            }
                                        }} />
                                    <Button
                                        onClick={() => dispatch(deleteExpense(expense.id))}
                                        variant="contained"
                                        color="secondary"
                                        btnName="Delete"
                                        sx={{
                                            backgroundColor: "rgb(239, 68, 68,0.8)",
                                            color: "#f2f2f2",
                                            transistion: "0.5s",
                                            "&:hover": {
                                                backgroundColor: "rgb(239 68 68)",
                                            }
                                        }} />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default ExpenseList;