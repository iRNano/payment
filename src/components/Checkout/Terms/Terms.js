import React, { Fragment } from "react";
import Modal from "../../../components/Modal";

const Terms = ({ setFormData, formData, formErrors, setFormErrors }) => {
  const toggle = (e) => {
    setFormData({ ...formData, term: !formData.term });
    console.log(formData.term);
    setFormErrors({
      ...formErrors,
      term:
        formData.term === false
          ? ""
          : "Please Accept Terms & Conditions before proceeding",
    });
  };

  return (
    <Fragment>
      <div className="field">
        <div className="ui checkbox">
          <input type="checkbox" name="term" onChange={toggle}></input>
          <label>
            I agree with the <Modal />
          </label>
          {formErrors.term.length > 0 && (
            <span className="errorMessage">{formErrors.term}</span>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Terms;
