import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../action/expenseAction';
import Button from './Button';
import Input from './Input';
import OptionMenu from './OptionMenu';

const AddExpense = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (category === 'No Filter') {
            alert("Please select a valid category.");
            return;
        }
        dispatch(addExpense({ name, amount: parseFloat(amount), category }));
        setName('');
        setAmount('');
        setCategory('');
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className='w-full mt-3 mb-4 px-10 py-5'>
                <div
                    className='flex justify-between'>
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
                    <Button
                        btnName="Add Expense"
                        type="submit"
                        variant="contained"
                        sx={{
                            width: "200px",
                            backgroundColor: " rgb(6 182 212)",
                            color: "#f2f2f2",
                            transistion: "0.5s",
                            '&:hover': {
                                backgroundColor: 'rgb(8 145 178)',
                            }
                        }}
                    />
                </div>
            </form>
        </>
    );
};

export default AddExpense;
