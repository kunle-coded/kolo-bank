function Balance({ balance, loan }) {
  return (
    <div className="balance">
      <div className="main-balance">
        <p>Balance:</p>
        <span>
          <span className="currency">$</span>
          {balance}
        </span>
      </div>
      <div className="loan-balance">
        <p>Loan:</p>
        <span>
          <span className="currency">$</span>
          {loan}
        </span>
      </div>
    </div>
  );
}

export default Balance;
