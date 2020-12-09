import React from "react";
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
  const itemSummary = Object.keys(props.ingredients).map((igKeys) => {
    return (
      <li key={igKeys}>
        <span>{igKeys}</span>: {props.ingredients[igKeys]}
      </li>
    );
  });//

  return (
    <div>
      <h3>Your Order</h3>
      <p>Great Burger has the following items: </p>
      <ul>{itemSummary}</ul>
      <p>Continue to checkout</p>
      <Button btnType='Danger'clicked={props.buyingCancel} >Cancel</Button>
      <Button btnType='Success' clicked={props.buyingContinue}>Continue</Button>
    </div>
  );
};

export default OrderSummary;
