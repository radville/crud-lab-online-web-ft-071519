import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: "",
    restaurantID: this.props.restaurantID
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addReview(this.state);
    this.setState({
      text: "",
      restaurantID: ""
    })
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
      restaurantID: this.props.restaurantID
    })
  }

  render() {
    return (
      <div>
        New Review
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input 
            type= "text"
            value={this.state.text}
            onChange={event => this.handleOnChange(event)}>
          </input>
          <input type="submit" />
        </form>      
      </div>
    );
  }
};

export default ReviewInput;
