import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

import { connect } from "react-redux"

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantID={this.props.restaurantID} addReview={this.props.addReview }/>
        <Reviews restaurantID={this.props.restaurantID} reviews={this.props.reviews} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => ({reviews})

const mapDispatchToProps = dispatch => ({
  addReview: reviewData => dispatch({ type: "ADD_REVIEW", reviewData}),
  deleteReview: reviewID => dispatch({ type: "DELETE_REVIEW", id: reviewID})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
