import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  updateExpense: (id, { description, amount, date }) => {},
  deleteExpense: (id) => {},
});

function expensesReducers(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);

    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;

    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(
    expensesReducers,
    DUMMY_EXPENSES
  );

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({
      type: "UPDATE",
      payload: {
        id,
        data: expenseData,
      },
    });
  };

  const value = {
    addExpense,
    deleteExpense,
    updateExpense,
    expenses: expensesState,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;

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
  {
    id: "e11",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2024-02-12"),
  },
  {
    id: "e21",
    description: "Pizza",
    amount: 53.99,
    date: new Date("2024-02-13"),
  },
  {
    id: "e31",
    description: "Some books",
    amount: 103.99,
    date: new Date("2024-02-14"),
  },
  {
    id: "e12",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2024-02-12"),
  },
  {
    id: "e22",
    description: "Pizza",
    amount: 53.99,
    date: new Date("2024-02-13"),
  },
  {
    id: "e32",
    description: "Some books",
    amount: 103.99,
    date: new Date("2024-02-14"),
  },
];
