import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Fuguitos", amount: -20 },
    { id: 2, text: "Salary", amount: 500 },
    { id: 3, text: "Books", amount: -14.99 },
    { id: 4, text: "Camara", amount: -150 },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
