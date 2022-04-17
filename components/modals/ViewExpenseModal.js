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
        <div className="flex-col justify-center w-5/6 p-5 bg-white rounded-lg sm:2/4">
          <div className="flex items-start justify-between gap-6 mb-10 sm:gap-20 sm:items-center text-zinc-600">
            <div className="flex items-center gap-4 ">
              <h1 className="text-base font-bold sm:text-3xl ">
                Expense - {name}
              </h1>
              <button
                className="p-2 text-base text-white bg-red-500 rounded-lg sm:text-2xl"
                onClick={() => deleteCategory()}
              >
                Delete Expense
              </button>
            </div>
            <span
              className="h-8 px-2 text-xl text-white bg-red-500 cursor-pointer"
              onClick={() => {
                show(false);
                window.location.reload();
              }}
            >
              X
            </span>
          </div>
          <div className="mb-10">
            <ul className="flex flex-col text-2xl font-semibold gap-7">
              {expenses.map((expense) => {
                if (expense.categoryId === id) {
                  return (
                    <li
                      key={expense.id}
                      className="flex items-center justify-between"
                    >
                      <h3>{expense.description}</h3>
                      <span
                        className="px-2 text-xl text-white bg-red-500 cursor-pointer"
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
