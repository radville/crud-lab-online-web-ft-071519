import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const filteredReviews = this.props.reviews.filter(review => review.restaurantID === this.props.restaurantID);

    const renderReviews = filteredReviews.map(review => {
      return <Review {...review} deleteReview={this.props.deleteReview} key={review.id} review={review} />
    });
  
    return (
      <ul>
        Reviews
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;