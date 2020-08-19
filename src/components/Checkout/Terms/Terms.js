import React, { Fragment } from "react";
import Modal from "../../../components/Modal";

const Terms = ({ setFormData, formData, formErrors, setFormErrors }) => {
  const toggle = (prevValue) => {
    // setFormErrors({
    //   ...formErrors,
    //   term:
    //     !prevValue === false
    //       ? "Please Accept Terms & Conditions before proceeding"
    //       : "",
    // });
    setFormData({ ...formData, term: !formData.term });
  };

  return (
    <Fragment>
      <div className="field">
        <div className="ui checkbox">
          <input
            type="checkbox"
            name="term"
            onChange={(formData) => toggle(formData.term)}
          ></input>
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
