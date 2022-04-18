import { useEffect, useState } from "react";
import { useExpense } from "../../context/ExpenseContext";
import BaseCard from "./BaseCard";

export default function TotalIncomeCard({ show }) {
  const { expenses, incomes } = useExpense();
  const [max, setMax] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    let maxAmount = 0;
    let amount = 0;

    amount = expenses?.reduce((total, expense) => total + expense.amount, 0);
    incomes?.map((income) => {
      if (income.monthCount !== 0 && income.monthCount !== null) {
        maxAmount += income.monthlyAmount * income.monthCount;
      } else {
        maxAmount += income.amount;
      }
    });

    setMax(maxAmount);
    setAmount(amount);
  }, [expenses, incomes]);

  return (
    <BaseCard
      name="Total Income Spent / Earned"
      amount={amount}
      max={max}
      show={show}
      total
    />
  );
}
