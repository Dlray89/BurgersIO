import React from "react";
import BuildControl from "./Build_control/BuildControl";
import "./Build_controls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return ( 
    <div className="BuildControls">
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.more(ctrl.type)}
          removed={() => props.less(ctrl.type)}
          disable={props.disabled[ctrl.type]}
        />
      ))}
      <button 
      disabled={!props.buying} 
      className="OrderButton"
      onClick={props.ordered}
      >
        Order Now
      </button>
    </div>
  );
};

export default BuildControls;
