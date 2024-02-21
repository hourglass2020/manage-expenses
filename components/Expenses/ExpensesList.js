import { View, Text, FlatList } from "react-native";
import React from "react";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  const { item } = itemData;
  // return <ExpenseItem description={item.description} amount={item.amount} date={item.date}/>;
  return <ExpenseItem {...item}/>;
}

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}
