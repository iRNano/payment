import React, { useState } from "react";
import Products from "./Products";
import Payment from "./Payment/Payment";
import Terms from "./Terms/Terms";

const Checkout = () => {
  const [formData, setFormData] = useState({
    number: null,
    cvc: null,
    expiry: null,
    name: null,
    term: false,
  });
  const [formErrors, setFormErrors] = useState({
    number: "",
    cvc: "",
    expiry: "",
    name: "",
    term: "",
  });

  const formValid = (formErrors) => {
    let valid = true;

    Object.values(formErrors).forEach((val) => {
      console.log(val.length);
      val.length > 0 && (valid = false);
      console.log(valid);
    });

    return valid;
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (formValid(formErrors)) {
      console.log(`
      --SUBMITTING--
      Card Number: ${formData.number}
      CVC: ${formData.cvc}
      Expiry: ${formData.expiry}
      Card Holder: ${formData.name}
      Terms: ${formData.term}
      
      `);
    } else {
      console.log(`FORM INVALID  - DISPLAY ERROR MESSAGE`);
    }
  };

  return (
    <div className="ui container">
      <h1 className="ui header">Checkout</h1>
      <Products />
      <form className="ui form" onSubmit={(e) => onSubmit(e)} noValidate>
        <Payment setFormData={setFormData} formData={formData} />
        <Terms setFormData={setFormData} formData={formData} />
        <div>
          <button className="fluid ui orange button" type="submit">
            Place Order
          </button>
        </div>
      </form>
      {console.log(formData)}
    </div>
  );
};

export default Checkout;
