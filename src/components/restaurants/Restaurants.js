import React, { Component } from 'react';
import Restaurant from "./Restaurant"

class Restaurants extends Component {
  render() {
    return(
      <ul>
        Restaurants
        {this.props.restaurants.map(restaurant => 
          <Restaurant {...restaurant} deleteRestaurant={this.props.deleteRestaurant} key={restaurant.id} restaurant={restaurant} />
        )}
      </ul>
    );
  }
};

export default Restaurants;