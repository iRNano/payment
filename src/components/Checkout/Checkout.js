import React, { useState } from "react";
import Products from "./Products";
import Payment from "./Payment/Payment";
import Terms from "./Terms/Terms";
import { getDerivedStateFromProps } from "cleave.js/react";

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

  const [isSuccess, setIsSucess] = useState(null);

  let success = isSuccess === true ? "success" : "";
  let error = isSuccess === false ? "error" : "";

  //Check if form is valid

  const formValid = (formErrors, formData) => {
    let valid = true;

    //Check form errors objects
    Object.values(formErrors).forEach((val) => {
      val.length > 0 && (valid = false);
    });
    //check form data if has values
    Object.values(formData).forEach((val) => {
      val == null && (valid = false);
    });

    return valid;
  };

  //On submit form
  const onSubmit = (e) => {
    e.preventDefault();

    if (formValid(formErrors, formData)) {
      setIsSucess(true);
      console.log(`
      --SUBMITTING--
      Card Number: ${formData.number}
      CVC: ${formData.cvc}
      Expiry: ${formData.expiry}
      Card Holder: ${formData.name}
      Terms: ${formData.term}
      
      `);
      console.log(isSuccess);
    } else {
      setIsSucess(false);
      console.log(`FORM INVALID  - DISPLAY ERROR MESSAGE`);
      console.log(isSuccess);
    }
  };

  return (
    <div className="ui container">
      <h1 className="ui header">Checkout</h1>
      <Products />
      <form
        className={`ui form ${success} ${error}`}
        onSubmit={(e) => onSubmit(e)}
        noValidate
      >
        <Payment
          setFormData={setFormData}
          formData={formData}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          success={success}
          error={error}
        />
        <Terms
          setFormData={setFormData}
          formData={formData}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          success={success}
          error={error}
        />
        <div>
          {isSuccess ? (
            <div className={`ui ${success} message  `}>
              <div className="header">Success</div>
              <p>Thank you for your purchase! Order has been placed.</p>
            </div>
          ) : null}
          {isSuccess === false ? (
            <div className={`ui ${error} message  `}>
              <div className="header">Error Encountered</div>

              <p>Please check your inputs.</p>
            </div>
          ) : null}

          <button className="fluid ui orange button" type="submit">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
