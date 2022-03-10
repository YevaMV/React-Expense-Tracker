import { useState } from 'react';
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from './NewExpense/ExpensesFilter';
import ExpensesList from './NewExpense/ExpensesList';
import ExpenseItem from './ExpenseItem';

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expense;
