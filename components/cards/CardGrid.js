import { useState, useEffect } from "react";
import { useExpense } from "../../context/ExpenseContext";

import Card from "./BaseCard";
import TotalIncomeCard from "./TotalIncomeCard";

export default function CardGrid() {
  const [expensesCategories, setExpensesCategories] = useState([]);
  const { expenseCategories, getExpenses } = useExpense();

  useEffect(() => {
    setExpensesCategories(expenseCategories);
  }, [expenseCategories]);

  return (
    <div className="grid items-start gap-4 grid-cols-default">
      {expensesCategories?.map((category) => {
        const amount = getExpenses(category.id).reduce(
          (total, expense) => total + expense.amount,
          0
        );
        return (
          <Card
            key={category.id}
            id={category.id}
            name={category.name}
            amount={amount}
            max={category.max}
          />
        );
      })}

      <TotalIncomeCard />
    </div>
  );
}
