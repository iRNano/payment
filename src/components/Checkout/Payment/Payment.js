import React, { useState } from "react";
import PaymentHeader from "./PaymentHeader";
import CreditCard from "./paymentmethods/CreditCard";
import Tabs from "../../Tabs";
import GiftCard from "./paymentmethods/GiftCard";
import PayPal from "./paymentmethods/PayPal";

const Payment = ({
  setFormData,
  formData,
  formErrors,
  setFormErrors,
  success,
  error,
}) => {
  return (
    <div>
      <h2 className="ui header">Payment method</h2>

      <Tabs>
        <div label="Credit Card">
          <CreditCard
            setFormData={setFormData}
            formData={formData}
            setFormErrors={setFormErrors}
            formErrors={formErrors}
            success={success}
            error={error}
          />
        </div>
        <div label="Gift Card">
          <GiftCard />
        </div>
        <div label="PayPal">
          <PayPal />
        </div>
      </Tabs>
    </div>
  );
};

export default Payment;
