import { useEffect, useState } from "react";
import { useExpense } from "../../context/ExpenseContext";
import BaseCard from "./BaseCard";
//This component uses a card to create the Total Card which as a gray background and displays the total amount of spent and earned income
export default function TotalIncomeCard({ show }) {
  const { expenses, incomes } = useExpense();
  const [maxAmount, setMaxAmount] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    let max = 0;

    const amount = expenses?.reduce(
      (total, expense) => total + expense.amount,
      0
    );

    incomes?.map((income) => {
      if (income.monthCount && income.monthCount !== null) {
        max += income.monthlyAmount * income.monthCount;
      } else {
        max += income.amount;
      }
    });

    setMaxAmount(max);
    setAmount(amount);
  }, [incomes, expenses]);

  return (
    <BaseCard
      name="Total Income Spent / Earned"
      amount={amount}
      max={maxAmount}
      show={show}
      total
    />
  );
}
