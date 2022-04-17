import { useState } from "react";

import { currencyFormatter } from "../../utils";
import AddExpenseModal from "../../components/modals/AddExpenseModal";
import ViewExpenseModal from "../../components/modals/ViewExpenseModal";
import ViewIncomeModal from "../../components/modals/ViewIncomeModal";

export default function ExpenseCard({ name, amount, max, id, total }) {
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showViewExpenseModal, setShowViewExpenseModal] = useState(false);
  const [showViewIncomeModal, setShowViewIncomeModal] = useState(false);

  const getProgressBarColor = () => {
    const percentage = amount / max;

    let width = String((amount * 100) / max) + "%";

    if (amount > max) {
      width = "100%";
    }

    if (percentage < 0.5) {
      return {
        backgroundColor: "rgb(14 165 233)",
        width: width,
      };
    } else if (percentage < 0.75) {
      return { backgroundColor: "yellow", width: width };
    } else {
      if (max !== 0) {
        return { backgroundColor: "red", width: width };
      }
    }
  };

  const overExpenseLimit = () => {
    if (amount > max) {
      return { backgroundColor: "rgba(255, 0, 0, 0.2)" };
    } else if (total) {
      return { backgroundColor: "white" };
    }
  };

  return (
    <div
      className="flex flex-col gap-5 p-5 bg-gray-400 border border-gray-200 rounded-lg bg-opacity-20"
      style={overExpenseLimit()}
    >
      <div className="flex flex-col items-center justify-between gap-5 text-3xl sm:gap-0 sm:flex-row">
        <div>{name}</div>
        <div>
          {currencyFormatter.format(amount)}
          <span className="text-2xl text-gray-500">
            / {currencyFormatter.format(max)}
          </span>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full">
        <div className="h-8 rounded-full " style={getProgressBarColor()} />
      </div>
      <div className="flex gap-4 text-xl">
        {!total ? (
          <>
            <button
              className="p-3 ml-auto text-blue-500 bg-white border border-blue-500 rounded-lg"
              onClick={() => setShowExpenseModal(true)}
            >
              Add Expense
            </button>
            <button
              className="p-3 text-gray-500 bg-white border border-gray-500 rounded-lg"
              onClick={() => setShowViewExpenseModal(true)}
            >
              View Expense
            </button>
          </>
        ) : (
          <button
            className="p-3 ml-auto text-gray-500 bg-white border border-gray-500 rounded-lg "
            onClick={() => {
              setShowViewIncomeModal(true);
            }}
          >
            View Incomes
          </button>
        )}

        {showExpenseModal && (
          <AddExpenseModal show={setShowExpenseModal} categoryId={id} />
        )}
        {showViewExpenseModal && (
          <ViewExpenseModal
            name={name}
            id={id}
            show={setShowViewExpenseModal}
          />
        )}
        {showViewIncomeModal && (
          <ViewIncomeModal show={setShowViewIncomeModal} />
        )}
      </div>
    </div>
  );
}
