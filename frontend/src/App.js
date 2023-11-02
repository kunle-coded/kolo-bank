import React, { useReducer } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const initialState = {
  balance: 0,
  loan: 0,
  depositAmount: "",
  withdrawalAmount: "",
  error: "",
  status: "welcome",
};

function reducer(state, action) {
  switch (action.type) {
    case "open":
      return {
        ...state,
        balance: action.payload,
        status: "opened",
      };
    case "deposit":
      return {
        ...state,
        balance: state.balance + Number(state.depositAmount),
        depositAmount: "",
      };
    case "withdraw":
      const tooHigh = Number(state.withdrawalAmount) > state.balance;
      return {
        ...state,
        balance: !tooHigh
          ? state.balance - Number(state.withdrawalAmount)
          : state.balance,
        error: tooHigh ? "Invalid amount" : state.error,
        withdrawalAmount: "",
      };
    case "loan":
      return {
        ...state,
        loan: action.payload,
        balance: state.balance + action.payload,
      };
    case "pay loan":
      const valid = state.balance >= state.loan;
      return {
        ...state,
        balance: valid ? state.balance - state.loan : state.balance,
        loan: valid ? state.loan - state.loan : state.loan,
      };
    case "deposit input":
      return {
        ...state,
        depositAmount: action.payload,
      };
    case "withdrawal input":
      return {
        ...state,
        withdrawalAmount: action.payload,
        error: "",
      };
    case "close":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [
    { balance, status, depositAmount, withdrawalAmount, loan, error },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <Navbar />
      <Main
        dispatch={dispatch}
        balance={balance}
        status={status}
        depositAmount={depositAmount}
        withdrawalAmount={withdrawalAmount}
        loan={loan}
        error={error}
      />
    </div>
  );
}

export default App;
