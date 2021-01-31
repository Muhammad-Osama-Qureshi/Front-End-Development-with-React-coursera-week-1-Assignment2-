import React, { Component } from "react";
import {
  Card,
  CardImg,

  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
 
  renderComments() {
    const commentcard = this.props.dish.comments.map((comment) => {
      return (
        <div>
          <div key={comment.id}>{comment.comment}</div>
          <br />
          <div>
            --{comment.author},{comment.date}
          </div>
          <br />
        
         </div>
      );
    });

    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardBody>
            <CardTitle>Comments</CardTitle>
            <CardText>{commentcard}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  render() {
    const dishcard = (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg
            width="100%"
            src={this.props.dish.image}
            alt={this.props.dish.name}
          />
          <CardBody>
            <CardTitle>{this.props.dish.name}</CardTitle>
            <CardText>{this.props.dish.description} </CardText>
          </CardBody>
        </Card>
      </div>
    );

    return (
      <div className="container">
        <div className="row">
          {dishcard}
          {this.renderComments()}
        </div>
      </div>
    );
  }
}

export default DishDetail;