import { useState, useRef } from "react";
import { useExpense } from "../../context/ExpenseContext";

export default function AddIncomeModal({ show }) {
  const [showRegularAmount, setShowRegularAmount] = useState(true);
  const nameRef = useRef();
  const oneTimePaymentRef = useRef();
  const monthlyPaymentRef = useRef();
  const monthRef = useRef();
  const { addIncome } = useExpense();

  const changePaymentType = (e) => {
    setShowRegularAmount(!showRegularAmount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addIncome({
      name: nameRef.current.value,
      amount: parseFloat(oneTimePaymentRef.current?.value),
      monthlyAmount: parseFloat(monthlyPaymentRef.current?.value),
      monthCount: Number(monthRef.current?.value),
    });

    show(false);
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-300 bg-opacity-80 ">
      <div id="modal" className="flex items-center justify-center h-screen">
        <div className="flex-col justify-center p-5 bg-white rounded-lg">
          <div className="flex justify-between gap-20 mb-10 text-zinc-600">
            <h1 className="text-2xl font-bold">Add Income </h1>
            <span
              className="px-2 text-xl text-white bg-red-500 cursor-pointer"
              onClick={() => {
                show(false);
              }}
            >
              X
            </span>
          </div>
          <div className="mb-10">
            <label className="text-lg font-semibold text-gray-600">Name</label>
            <input
              ref={nameRef}
              type="text"
              className="w-full p-2 border-2 rounded-lg "
            />
          </div>
          <div className="flex items-center gap-4 mb-10 ">
            <input type="checkbox" onChange={() => changePaymentType()} />
            <label className="text-lg font-semibold text-gray-600">
              Recurring Payment
            </label>
          </div>
          <div className="mb-10">
            {showRegularAmount ? (
              <div className="flex flex-col ">
                <label className="text-lg font-semibold text-gray-600">
                  One-time Payment
                </label>
                <input
                  ref={oneTimePaymentRef}
                  type="number"
                  className="w-full p-2 border-2 rounded-lg "
                />
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div>
                  <label className="text-lg font-semibold text-gray-600">
                    Monthly Payment
                  </label>
                  <input
                    ref={monthlyPaymentRef}
                    type="number"
                    className="w-full p-2 border-2 rounded-lg "
                  />
                </div>
                <div>
                  <label className="text-lg font-semibold text-gray-600">
                    Month Count
                  </label>
                  <input
                    ref={monthRef}
                    type="number"
                    className="w-full p-2 border-2 rounded-lg "
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex">
            <button
              type="submit"
              className="px-4 py-2 ml-auto text-white bg-blue-500 rounded "
              onClick={(e) => handleSubmit(e)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
