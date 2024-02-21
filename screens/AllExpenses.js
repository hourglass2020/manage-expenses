import { View, Text } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

export default function AllExpenses() {
  const { expenses } = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expensesPeriod={"Total"}
      expenses={expenses}
      fallbackText={"No Expenses yet"}
    />
  );
}
