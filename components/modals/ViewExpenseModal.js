import { useState, useRef } from "react";
import { useExpense } from "../../context/ExpenseContext";

export default function ViewIncomeModal({ show, name, id }) {
  const { expenses, deleteExpenseCategory, deleteExpense } = useExpense();

  const deleteCategory = () => {
    deleteExpenseCategory(id);
    show(false);
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-300 bg-opacity-80 ">
      <div id="modal" className="flex items-center justify-center h-screen ">
        <div className="flex-col justify-center bg-white rounded-lg p-5 w-2/4">
          <div className="flex justify-between gap-20 text-zinc-600 mb-10 items-center">
            <div className="flex gap-4 items-center ">
              <h1 className="font-bold text-3xl ">Expense - {name} </h1>
              <button
                className="bg-red-500 text-white text-2xl  rounded-lg p-2"
                onClick={() => deleteCategory()}
              >
                Delete Expense
              </button>
            </div>
            <span
              className="px-2 h-8 text-white text-xl bg-red-500 cursor-pointer"
              onClick={() => {
                show(false);
                window.location.reload();
              }}
            >
              X
            </span>
          </div>
          <div className="mb-10">
            <ul className="flex flex-col gap-7 text-2xl font-semibold">
              {expenses.map((expense) => {
                if (expense.categoryId === id) {
                  return (
                    <li
                      key={expense.id}
                      className="flex items-center justify-between"
                    >
                      <h3>{expense.description}</h3>
                      <span
                        className="px-2 text-white text-xl bg-red-500 cursor-pointer"
                        onClick={() => {
                          {
                            deleteExpense(expense.id);
                          }
                        }}
                      >
                        X
                      </span>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
