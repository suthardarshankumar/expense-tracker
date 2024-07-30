import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editExpense } from '../action/expenseAction';
import Button from './Button';
import Input from './Input';
import OptionMenu from './OptionMenu';

const EditExpense = ({ expense, closeEdit }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(expense.name);
    const [amount, setAmount] = useState(expense.amount.toString());
    const [category, setCategory] = useState(expense.category);

    const handleEdit = (e) => {
        e.preventDefault();
        const updatedExpense = {
            name,
            amount: parseFloat(amount),
            category
        };
        dispatch(editExpense({ id: expense.id, updatedExpense }));
        closeEdit();
    };

    return (
        <>
            <form onSubmit={handleEdit} className='flex w-full gap-x-10 mt-3'>
                <div className='w-[82%] flex justify-between gap-12'>
                    <Input
                        label="Expense Name"
                        value={name}
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        sx={{ width: "300px" }}
                    />
                    <Input
                        label="Expense Amount"
                        value={amount}
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                        sx={{ width: "300px" }}
                    />
                    <OptionMenu
                        label="Filter a Expenses"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        sx={{ width: "300px" }}
                    />
                </div>
                <div className='w-[18%] flex gap-3'>
                    <Button
                        btnName="Save"
                        type="submit"
                        variant="contained"
                        onClick={handleEdit}
                        sx={{
                            width: "100px",
                            backgroundColor: "rgb(13 148 136)",
                            color: "#f2f2f2",
                            transition: "0.5s",
                            '&:hover': {
                                backgroundColor: 'rgb(20 184 166)',
                            }
                        }}
                    />
                    <Button
                        btnName="Cancel"
                        onClick={closeEdit}
                        variant="contained"
                        sx={{
                            width: "100px",
                            backgroundColor: "rgb(239 68 68)",
                            color: "#f2f2f2",
                            transition: "0.5s",
                            '&:hover': {
                                backgroundColor: 'rgb(220 38 38)',
                            }
                        }}
                    />
                </div>
            </form>
        </>
    );
};

export default EditExpense;
