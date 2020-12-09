import React from "react";
import BurgerIng from "./Burger_Ing/Burger_ing";
import "./Burger.css";

const Burger = (props) => {
  // transform object into an array from burger_builder file
  // Objects is a  default javascript object which has a keys methods
  // which extracts keys of a given object and turns into an array

  let new_ingredients = Object.keys(props.ing)
    .map((igKey) => {
      //transform string value into an array
      return [...Array(props.ing[igKey])].map((_, i) => {
        return <BurgerIng key={igKey + i} type={igKey} />;
      });
      //transform an array into something else and takes two args
    })
    .reduce((arr, el) => {
      //put element inside the array using concat
      return arr.concat(el);
    }, []);
  console.log(new_ingredients);
  if (new_ingredients.length === 0) {
    new_ingredients = <p>Please update Ingredients</p>;
  }

  return (
    <div className="Burger">
      <BurgerIng type="bread-top" />
      {new_ingredients}
      <BurgerIng type="bread-bottom" />
    </div>
  );
};

export default Burger;
