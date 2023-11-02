import Balance from "./Balance";
import Button from "./Button";
import Loan from "./Loan";
import Transact from "./Transact";

function Main({
  dispatch,
  balance,
  status,
  depositAmount,
  withdrawalAmount,
  loan,
  error,
}) {
  const action =
    status === "opened"
      ? { type: "closeAccount" }
      : { type: "openAccount", payload: 500 };

  return (
    <main className="main">
      <Balance balance={balance} loan={loan} />
      {status === "opened" && (
        <>
          <Transact
            dispatch={() => dispatch({ type: "deposit" })}
            amount={depositAmount}
            amountDispatch={dispatch}
          >
            Deposit
          </Transact>

          <Transact
            dispatch={() => dispatch({ type: "withdraw" })}
            amount={withdrawalAmount}
            amountDispatch={dispatch}
            error={error}
          >
            Withdraw
          </Transact>
          <Loan
            dispatch={() => dispatch({ type: "requestLoan", payload: 5000 })}
            loan={loan}
          >
            Request Loan
          </Loan>

          {loan > 0 && (
            <Button onClick={() => dispatch({ type: "payLoan" })}>
              Pay Loan
            </Button>
          )}
        </>
      )}

      <Button onClick={() => dispatch(action)}>
        {`${status !== "opened" ? "Open" : "Close"} Account`}
      </Button>
    </main>
  );
}

export default Main;
