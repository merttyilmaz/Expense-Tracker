import Head from "next/head";
import { useExpense } from "../context/ExpenseContext";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

export default function FinancialForecast() {
  const { expenseCategories, getExpenses, incomes } = useExpense();

  const expenseDataCalculation = () => {
    const labels = expenseCategories?.map((category) => category.name);
    const data = expenseCategories?.map((category) => {
      const amount = getExpenses(category.id).reduce(
        (total, expense) => total + expense.amount,
        0
      );
      return amount;
    });

    return {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: ["#4b77a9", "#5f255f", "#d21243", "#B27200"],
          borderColor: "#fff",
        },
      ],
    };
  };

  const incomeDataCalculation = () => {
    const labels = incomes?.map((income) => income.name);
    const data = incomes?.map((income) => {
      if (income.monthCount !== 0) {
        return income.monthCount * income.monthlyAmount;
      } else return income.amount;
    });

    return {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: ["#d21243", "#4b77a9", "#5f255f", "#B27200"],
          borderColor: "#fff",
        },
      ],
    };
  };

  return (
    <>
      <Head>
        <title>Financial Forecast</title>
        <meta name="description" content="Financial Forecast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-3 sm:p-10 ">
        <div className="flex flex-col max-w-screen-xl gap-10 p-8 mx-auto my-10 bg-white rounded-lg">
          <div className="flex flex-col items-center justify-center md:flex-row sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-center">Expenses</h1>
              <Doughnut
                typeof="pie"
                data={expenseDataCalculation()}
                style={{ width: "350px", margin: "0 auto" }}
              />
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-center">Incomes</h1>
              <Doughnut
                typeof="pie"
                data={incomeDataCalculation()}
                style={{ width: "350px", margin: "0 auto" }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
