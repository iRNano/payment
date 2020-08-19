import React, { useState, useRef, useEffect } from "react";
import Cleave from "cleave.js/react";
import cvv from "../../../../assets/cvv.png";
import CvvPopup from "../../../../components/Popup";
import { Input, Popup, Icon } from "semantic-ui-react";
import "./CreditCard.css";

const CreditCard = ({ setFormData, formData, formErrors, setFormErrors }) => {
  // const cvvPopup = useRef(null);

  // useEffect(() => {});

  const mouseOverHandler = () => {
    console.log("mouseover!");
  };
  const onChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    let nameRegex = /^[a-zA-Z ]*$/;

    switch (name) {
      case "number":
        setFormErrors({
          ...formErrors,
          number:
            value.length < 18 || value === "" ? "Invalid Card Number" : "",
        });
        break;
      case "cvc":
        setFormErrors({
          ...formErrors,
          cvc:
            value.length > 3 || value === "" ? "maximum of three integers" : "",
        });
        break;
      case "expiry":
        setFormErrors({
          ...formErrors,
          expiry:
            value.length !== 5 || value === "" ? "Invalid Date Format" : "",
        });
        break;
      case "name":
        console.log(nameRegex.test(value));
        setFormErrors({
          ...formErrors,
          name:
            !nameRegex.test(value) || value.length < 3 ? "Invalid name" : "",
        });

        break;
      default:
        break;
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="ui container">
      <div className="two fields">
        {/* ///Card number} */}
        <div
          className={`required field ${
            formErrors.number.length > 0 ? "error" : ""
          }`}
        >
          <label>Card number</label>
          <div className="ui icon input">
            <Cleave
              name="number"
              placeholder="Enter your credit card number"
              options={{ blocks: [4, 4, 4, 4], numericOnly: true }}
              onChange={onChange}
            />
            <i className="credit card outline icon"></i>
          </div>
          {formErrors.number.length > 0 && (
            <span className="errorMessage">{formErrors.number}</span>
          )}
        </div>

        {/* CVC */}
        <div
          className={`required two wide field ${
            formErrors.cvc.length > 0 ? "error" : ""
          }`}
        >
          <label>CVV/CVC</label>
          <div className="ui icon input">
            <Cleave
              name="cvc"
              options={{ blocks: [3], numericOnly: true }}
              onChange={onChange}
            />

            <Popup
              trigger={
                <i
                  className="question circle outline icon"
                  onMouseOver={mouseOverHandler}
                ></i>
              }
              content="test"
            />
            <i
              // ref="cvvPopup"
              className="question circle outline icon"
              onMouseOver={mouseOverHandler}
            ></i>
            {/* <CvvPopup /> */}
          </div>

          {formErrors.cvc.length > 0 && (
            <span className="errorMessage">{formErrors.cvc}</span>
          )}
        </div>
      </div>

      {/* Expiry */}
      <div
        className={`required field ${
          formErrors.expiry.length > 0 ? "error" : ""
        }`}
      >
        <label>Valid thru (mm/yy)</label>
        <div className="two wide field">
          <Cleave
            name="expiry"
            placeholder="MM/YY"
            options={{ date: true, datePattern: ["m", "y"] }}
            onChange={onChange}
          />
        </div>
        {formErrors.expiry.length > 0 && (
          <span className="errorMessage">{formErrors.expiry}</span>
        )}
      </div>

      {/* Name */}
      <div
        className={`required field ${
          formErrors.name.length > 0 ? "error" : ""
        }`}
      >
        <label>Cardholder's name</label>
        <input type="text" onChange={onChange} name="name"></input>
        {formErrors.name.length > 0 && (
          <span className="errorMessage">{formErrors.name}</span>
        )}
      </div>
    </div>
  );
};

export default CreditCard;
