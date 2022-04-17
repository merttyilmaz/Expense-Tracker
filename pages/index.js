import { useState, useEffect } from "react";
import Head from "next/head";
import Card from "../components/cards/BaseCard";
import TotalIncomeCard from "../components/cards/TotalIncomeCard";
import AddIncomeModal from "../components/modals/AddIncomeModal";
import AddExpenseModalCategory from "../components/modals/AddExpenseModalCategory";
import { useExpense } from "../context/ExpenseContext";

export default function Home() {
  const [showAddIncomeModal, setShowAddIncomeModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [expensesCategories, setExpensesCategories] = useState([]);
  const { expenseCategories, getExpenses } = useExpense();

  useEffect(() => {
    setExpensesCategories(expenseCategories);
  }, [expenseCategories]);

  return (
    <div>
      <Head>
        <title>Expense Tracker</title>
        <meta name="description" content="Track your income and expenses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-3 sm:p-10 ">
        <div className="flex flex-col max-w-screen-xl gap-10 p-8 mx-auto my-10 bg-white rounded-lg">
          <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold">Tracker</h1>
            </div>
            <div className="flex gap-2 mt-5 text-lg text-white sm:gap-10 sm:flex-row sm:mt-0">
              <button
                className="p-3 rounded-lg bg-emerald-500"
                onClick={() => setShowAddIncomeModal(true)}
              >
                Add Income
              </button>
              <button
                className="p-3 rounded-lg bg-cyan-400"
                onClick={() => setShowAddExpenseModal(true)}
              >
                Add Expense Category
              </button>
            </div>
          </div>
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
          {showAddIncomeModal && (
            <AddIncomeModal show={setShowAddIncomeModal} />
          )}
          {showAddExpenseModal && (
            <AddExpenseModalCategory show={setShowAddExpenseModal} />
          )}
        </div>
      </main>
    </div>
  );
}
