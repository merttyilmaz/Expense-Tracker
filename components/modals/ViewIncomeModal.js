import { useState, useRef } from "react";
import { useExpense } from "../../context/ExpenseContext";
//This component is a modal that allows the user to view an income
export default function ViewIncomeModal({ show }) {
  const { incomes, deleteIncome } = useExpense();

  return (
    <div className="fixed inset-0 z-50 bg-gray-300 bg-opacity-80 ">
      <div id="modal" className="flex items-center justify-center h-screen">
        <div className="flex-col justify-center p-5 bg-white rounded-lg">
          <div className="flex justify-between gap-20 mb-10 text-zinc-600">
            <h1 className="text-2xl font-bold">View Incomes </h1>
            <span
              aria-label="close"
              className="px-2 text-xl text-white bg-red-500 rounded-md cursor-pointer"
              onClick={() => {
                show(false);
              }}
            >
              X
            </span>
          </div>
          <div className="mb-10">
            <ul className="flex flex-col gap-5">
              {incomes.map((income) => (
                <li
                  key={income.id}
                  className="flex items-center justify-between"
                >
                  <h3>{income.name}</h3>
                  <span
                    className="px-2 text-xl text-white bg-red-500 cursor-pointer"
                    onClick={() => {
                      {
                        deleteIncome(income.id);
                      }
                    }}
                  >
                    X
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
