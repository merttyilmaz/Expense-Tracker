import { useRef } from "react";
import { useExpense } from "../../context/ExpenseContext";

export default function AddExpenseModalCategory({ show }) {
  const nameRef = useRef();
  const maxRef = useRef();
  const { addExpenseCategory } = useExpense();

  const handleSubmit = (e) => {
    e.preventDefault();

    addExpenseCategory({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current?.value),
    });

    show(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-300 bg-opacity-80 ">
      <div id="modal" className="flex items-center justify-center h-screen">
        <div className="flex-col justify-center p-5 bg-white rounded-lg">
          <div className="flex justify-between gap-20 mb-10 text-zinc-600">
            <h1 className="text-2xl font-bold">Add Expense Category</h1>
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
          <div className="mb-10 ">
            <label className="text-lg font-semibold text-gray-600">
              Max Amount
            </label>
            <input
              ref={maxRef}
              type="number"
              className="w-full p-2 border-2 rounded-lg "
            />
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
