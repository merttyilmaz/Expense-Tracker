import { useEffect, useState } from "react";
import { useExpense } from "../../context/ExpenseContext";
import BaseCard from "./BaseCard";

export default function TotalIncomeCard({ show }) {
  const { expenses, incomes, expenseCategories } = useExpense();
  const [max, setMax] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    let maxAmount = 0;
    let amount = 0;

    amount = expenses?.reduce((total, expense) => total + expense.amount, 0);
    console.log(amount);
    incomes?.map((income) => {
      if (income.monthCount !== 0 && income.monthCount !== null) {
        maxAmount += income.monthlyAmount * income.monthCount;
      } else {
        maxAmount += income.amount;
      }
    });
    expenseCategories?.map((category) => {
      maxAmount += category.max;
    });
    setMax(maxAmount);
    setAmount(amount);
  }, [max, amount]);

  return <BaseCard name="Total" amount={amount} max={max} show={show} total />;
}
