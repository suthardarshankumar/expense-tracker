import React from 'react';
import AddExpenseForm from '../components/AddExpense';
import ExpenseList from '../components/ExpenseList';
import ExpenseSummary from '../components/ExpenseSummary';
import FilterExpenses from '../components/FilterExpenses';

const HomePage = () => {
    return (
        <div className="w-full px-8 py-4">
            <ExpenseSummary />
            <AddExpenseForm />
            <FilterExpenses />
            <ExpenseList />
        </div>
    );
};

export default HomePage;
