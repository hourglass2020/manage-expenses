import { View, Text } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/Expenses/ExpensesOutput'

export default function RecentExpenses() {
  return (
    <ExpensesOutput expensesPeriod={"Recent"}/>
    )
}