import { useState, useRef } from "react";
import { useExpense } from "../../context/ExpenseContext";

export default function ViewIncomeModal({ show }) {
  const { incomes, deleteIncome } = useExpense();

  return (
    <div className="fixed inset-0 z-50 bg-gray-300 bg-opacity-80 ">
      <div id="modal" className="flex items-center justify-center h-screen">
        <div className="flex-col justify-center bg-white rounded-lg p-5">
          <div className="flex justify-between gap-20 text-zinc-600 mb-10">
            <h1 className="text-2xl font-bold">View Incomes </h1>
            <span
              className="px-2 text-white text-xl bg-red-500 cursor-pointer"
              onClick={() => {
                show(false);
                window.location.reload();
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
                    className="px-2 text-white text-xl bg-red-500 cursor-pointer"
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
