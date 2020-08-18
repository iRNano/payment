import React, { useState } from "react";
import Cleave from "cleave.js/react";
import cvv from "../../../../assets/cvv.png";
import Popup from "../../../../components/Popup";
import { Input } from "semantic-ui-react";

const CreditCard = ({ setFormData, formData }) => {
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="ui container">
      <div className="two fields">
        <div className="required field">
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
        </div>
        <div className="required two wide field">
          <label>CVV/CVC</label>
          <div className="ui icon input">
            <Cleave
              name="cvc"
              options={{ blocks: [3], numericOnly: true }}
              onChange={onChange}
            />
            <Popup />
          </div>
        </div>
      </div>
      <div className="required field">
        <label>Valid thru (mm/yy)</label>
        <div className="two wide field">
          <Cleave
            name="expiry"
            placeholder="MM/YY"
            options={{ date: true, datePattern: ["m", "y"] }}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="required field">
        <label>Cardholder's name</label>
        <input type="text" onChange={onChange} name="name"></input>
      </div>
    </div>
  );
};

export default CreditCard;
