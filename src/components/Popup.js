import React from "react";
import { Icon, Popup, Image } from "semantic-ui-react";
import Cleave from "cleave.js/react";
import cvv from "../assets/cvv.png";

const PopUp = () => (
  <Popup
    trigger={
      <span>
        <i className="question circle outline icon"></i>
      </span>
    }
    content={
      <div>
        <p>
          CVV number is printed on the signature panel on the back of the card.
        </p>
        <Image src={cvv}></Image>
      </div>
    }
    basic
  />
);

export default PopUp;
