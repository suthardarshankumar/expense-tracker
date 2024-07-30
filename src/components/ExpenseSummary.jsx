import React from 'react';
import { useSelector } from 'react-redux';

const ExpenseSummary = () => {
    const { expenses } = useSelector((state) => state);
    const totalIncome = expenses.reduce((acc, expense) => acc + (expense.amount > 0 ? expense.amount : 0), 0);
    const totalExpenses = expenses.reduce((acc, expense) => acc + (expense.amount < 0 ? -expense.amount : 0), 0);
    const balance = totalIncome - totalExpenses;

    return (
        <div className="p-4 mb-4 flex justify-center gap-x-5">
            <div className='text-center bg-slate-100 rounded-md px-5 py-3 shadow border-0 border-b-4 border-green-500'>
                <div className='text-2xl text-slate-900'>Total Income</div>
                <div className='text-3xl mt-2 text-green-500'>₹{totalIncome}</div>
            </div>
            <div className='text-center bg-slate-100 rounded-md px-5 py-3 shadow border-0 border-b-4 border-red-500'>
                <div className='text-2xl text-slate-900'>Total Expenses</div>
                <div className='text-3xl mt-2 text-red-500'>₹{totalExpenses}</div>
            </div>
            <div className={`text-center bg-slate-100 rounded-md px-5 py-3 shadow border-0 border-b-4 transition-all duration-500 ${balance >= 0 ? 'border-green-500' : 'border-red-500'}`}>
                <div className='text-2xl text-slate-900'>Balance</div>
                <div className={`text-3xl mt-2 ${balance >= 0 ? 'text-green-500' : 'text-red-500'}`}>₹{balance}</div>
            </div>
        </div>
    );
};

export default ExpenseSummary;
