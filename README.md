# Expense Tracker

An Expense Tracker application built with React, Redux, Vite, Tailwind CSS, and Material-UI. This application allows users to track their expenses and income, filter expenses by category, and view a summary of their financial status.

## Features

- Add, edit, and delete expenses
- Filter expenses by category
- Track total income, total expenses, and balance
- Responsive design with Tailwind CSS and Material-UI components

## Technologies Used

- React
- Redux
- Vite
- Tailwind CSS
- Material-UI

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/expense-tracker.git
    cd expense-tracker
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```

## Project Structure

- `src/`: Contains the source code
  - `action/`: Contains Redux action creators and action types
  - `components/`: Contains reusable React components
  - `pages/`: Contains the main pages of the application
  - `reducers/`: Contains Redux reducers
  - `store/`: Contains the Redux store configuration
- `public/`: Contains static assets
- `index.html`: The main HTML file
- `main.jsx`: The entry point for the React application

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm run serve`: Serve the production build locally

## Components

### Input

A reusable input component built with Material-UI's `TextField`.

### OptionMenu

A reusable select component built with Material-UI's `TextField` for category selection.

### Button

A reusable button component built with Material-UI's `Button`.

### Navbar

A simple navigation bar built with Material-UI's `AppBar` and `Toolbar`.

### FilterExpenses

A component for filtering expenses by category.

### ExpenseSummary

A component for displaying the total income, total expenses, and balance.

### ExpenseList

A component for displaying the list of expenses, with options to edit or delete each expense.

### AddExpense

A component for adding a new expense.

### EditExpense

A component for editing an existing expense.

## Redux Setup

### Actions

- `addExpense(expense)`: Action to add a new expense.
- `deleteExpense(id)`: Action to delete an expense by ID.
- `editExpense({ id, updatedExpense })`: Action to edit an existing expense.
- `setFilter(category)`: Action to set the filter category.

### Reducers

- `expenseReducer`: Manages the state of expenses and filter.

### Store

- Configured with `createStore` and `expenseReducer`.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

