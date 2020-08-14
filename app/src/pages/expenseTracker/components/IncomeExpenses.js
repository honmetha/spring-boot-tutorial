import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./IncomeExpenses.css"

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="inc-exp-money inc-exp-plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="inc-exp-money inc-exp-minus">-${expense}</p>
      </div>
    </div>
  );
};
