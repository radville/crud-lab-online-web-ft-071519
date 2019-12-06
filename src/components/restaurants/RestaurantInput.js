import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ""
    })
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        New Restaurant
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input 
            type= "text"
            value={this.state.text}
            onChange={event => this.handleOnChange(event)}
          >
          </input>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
