import { useState } from "react";
import Head from "next/head";
import { useExpense } from "../context/ExpenseContext";
import CardGrid from "../components/cards/CardGrid";
import AddIncomeModal from "../components/modals/AddIncomeModal";
import AddExpenseModalCategory from "../components/modals/AddExpenseModalCategory";

export default function Home() {
  const [showAddIncomeModal, setShowAddIncomeModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const { incomes } = useExpense();
  //This function validates if a income is already added or else if gives a user to add a income
  const incomeController = (e) => {
    if (incomes?.length === 0) {
      window.alert("Please add an income first");
    } else {
      setShowAddExpenseModal(true);
    }
  };

  return (
    <>
      <Head>
        <title>Expense Tracker</title>
        <meta name="description" content="Track your income and expenses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow p-3 sm:p-10 ">
        <div className="flex flex-col max-w-screen-xl gap-10 p-8 mx-auto my-10 bg-white rounded-lg">
          <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold">Tracker</h1>
            </div>
            <div className="flex gap-2 mt-5 text-lg text-white sm:gap-10 sm:flex-row sm:mt-0">
              <button
                className="p-3 rounded-lg bg-emerald-500"
                onClick={(e) => setShowAddIncomeModal(true)}
              >
                Add Income
              </button>
              <button
                className="p-3 rounded-lg bg-cyan-400"
                onClick={() => incomeController(true)}
              >
                Add Expense Category
              </button>
            </div>
          </div>
          <CardGrid />
          {showAddIncomeModal && (
            <AddIncomeModal show={setShowAddIncomeModal} />
          )}
          {showAddExpenseModal && (
            <AddExpenseModalCategory show={setShowAddExpenseModal} />
          )}
        </div>
      </main>
    </>
  );
}
