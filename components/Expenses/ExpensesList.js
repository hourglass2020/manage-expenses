import { View, Text, FlatList } from "react-native";
import React from "react";

function renderExpenseItem(itemData) {
  const { item } = itemData;
  return <Text>{item.description}</Text>;
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
