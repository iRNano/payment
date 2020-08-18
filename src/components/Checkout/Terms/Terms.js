import React, { Fragment } from "react";
import Modal from "../../../components/Modal";

const Terms = ({ setFormData, formData }) => {
  const toggle = (prevValue) => {
    setFormData({ ...formData, term: !formData.term });
  };

  return (
    <Fragment>
      <div className="field">
        <div className="ui checkbox">
          <input
            type="checkbox"
            name="term"
            onChange={(formData) => toggle(!formData.term)}
          ></input>
          <label>
            I agree with the <Modal />
          </label>
        </div>
      </div>
    </Fragment>
  );
};

export default Terms;
