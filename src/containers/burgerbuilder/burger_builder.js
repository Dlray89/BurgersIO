import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuiltControls from "../../components/Burger/Build_Controls/Build_controls";
import Modal from "../../components/UI/Model/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const IngredientsPrices = {
  salad: 0.5,
  chesse: 1,
  meat: 1,
  bacon: 0.5,
};

class Burger_Builder extends Component {
  //Add state here for ingredients
  state = {
    //ingredients object
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    buy: false,
    buying: false,
  };

  updateBuy(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ buy: sum > 0 });
  }

  addINgradients = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updateCount;
    const addPrices = IngredientsPrices[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + addPrices;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updateBuy(updatedIngredients);
  };

  removeIngredients = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }

    const updateCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    updatedIngredients[type] = updateCount;
    const removePrices = IngredientsPrices[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - removePrices;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updateBuy(updatedIngredients);
  };

  buyingHandler = () => {
    this.setState({ buying: true });
  };

  buyingCancel = () => {
    this.setState({
      buying: false,
    });
  };

  buyingContinueHandler = () => {
    alert("You continue");
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients,
    };

    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    return (
      <div>
        <div>
          <Modal modalClosed={this.buyingCancel} show={this.state.buying}>
            <OrderSummary
              buyingCancel={this.buyingCancel}
              buyingContinue={this.buyingContinueHandler}
              ingredients={this.state.ingredients}
            />
          </Modal>
          <Burger ing={this.state.ingredients} />
        </div>
        <BuiltControls
          more={this.addINgradients}
          less={this.removeIngredients}
          disabled={disableInfo}
          price={this.state.totalPrice}
          buying={this.state.buy}
          ordered={this.buyingHandler}
        />
      </div>
    );
  }
}

export default Burger_Builder;
