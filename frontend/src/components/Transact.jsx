import Button from "./Button";
import Error from "./Error";

function Transact({ dispatch, amountDispatch, amount, error, children }) {
  const inputType =
    children === "Deposit" ? "deposit input" : "withdrawal input";

  return (
    <section className="transact-section">
      {error && <Error>{error}</Error>}
      <div className="transact">
        <Button onClick={dispatch}>{children}</Button>
        <div className="transact-input">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) =>
              amountDispatch({ type: inputType, payload: e.target.value })
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Transact;
