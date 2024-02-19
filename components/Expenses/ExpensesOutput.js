import { View, Text, FlatList } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2024-02-12"),
  },
  {
    id: "e2",
    description: "Pizza",
    amount: 53.99,
    date: new Date("2024-02-13"),
  },
  {
    id: "e3",
    description: "Some books",
    amount: 103.99,
    date: new Date("2024-02-14"),
  },
  {
    id: "e4",
    description: "Red wine",
    amount: 13.99,
    date: new Date("2024-02-15"),
  },
];

export default function ExpensesOutput({
  expenses = DUMMY_EXPENSES,
  expensesPeriod,
}) {
  return (
    <View>
      <ExpensesSummary periodName={expensesPeriod} expenses={expenses} />
      <ExpensesList expenses={expenses}/>
    </View>
  );
}
