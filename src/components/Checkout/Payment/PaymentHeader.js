import React from "react";

const PaymentHeader = ({ setActive }) => {
  return (
    <div className="buttons">
      <button className="ui button" onClick={() => setActive("cc")}>
        Credit Card
      </button>

      <button className="ui button" onClick={() => setActive("gc")}>
        Gift Card
      </button>

      <button className="ui button" id="pp" onClick={() => setActive("pp")}>
        PayPal
      </button>
    </div>
  );
};

export default PaymentHeader;
