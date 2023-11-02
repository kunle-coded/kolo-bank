import Button from "./Button";

function Loan({ dispatch, loan, children }) {
  return (
    <section className="transact-section">
      <div className="loan">
        <Button disable={loan > 0 ? true : false} onClick={dispatch}>
          {children}
        </Button>
        <div className="loan-input">
          <p>
            <span className="currency">$</span>
            {loan > 0 ? "0" : "5000"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Loan;
