import { useState, useContext, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorageHook";

const IncomeContext = createContext();

export const UNCATEGORIZED_BUDGET_ID = "Uncategorized";

export function useExpense() {
  return useContext(IncomeContext);
}

export const ExpenseProvider = ({ children }) => {
  const [incomes, setIncomes] = useLocalStorage("incomes", []);
  const [expenseCategories, setExpenseCategories] = useLocalStorage(
    "expenseCategories",
    []
  );
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  function addExpenseCategory({ name, max }) {
    setExpenseCategories((prevExpenseCategory) => {
      return [...prevExpenseCategory, { id: uuidv4(), name, max }];
    });
  }

  function getExpenses(categoryId) {
    return expenses.filter((expense) => expense.categoryId === categoryId);
  }

  function addExpense({ description, amount, categoryId }) {
    setExpenses((prevExpenses) => {
      return [
        ...prevExpenses,
        { id: uuidv4(), description, amount, categoryId },
      ];
    });
  }

  function addIncome({ name, amount, monthlyAmount, monthCount }) {
    setIncomes((prevIncome) => {
      if (prevIncome.find((income) => income.name === name)) {
        return prevBudgets;
      }

      return [
        ...prevIncome,
        { id: uuidv4(), name, amount, monthlyAmount, monthCount },
      ];
    });
  }

  function deleteExpenseCategory(id) {
    setExpenseCategories((prevExpenseCategory) => {
      return prevExpenseCategory.filter((expense) => expense.id !== id);
    });
  }

  function deleteIncome(id) {
    setIncomes((prevBudgets) => {
      return prevBudgets.filter((budget) => budget.id !== id);
    });
  }

  function deleteExpense(id) {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== id);
    });
  }

  return (
    <IncomeContext.Provider
      value={{
        incomes,
        expenses,
        expenseCategories,
        addExpenseCategory,
        getExpenses,
        addExpense,
        addIncome,
        deleteIncome,
        deleteExpense,
        deleteExpenseCategory,
      }}
    >
      {children}
    </IncomeContext.Provider>
  );
};
