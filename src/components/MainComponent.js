import React,{Component} from 'react';
import Menu from './MenuComponents'
import DishDetail from './Dishdetail';
import {DISHES} from '../shared/dishes'
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
import { Navbar, NavbarBrand } from 'reactstrap';


class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      selectedDish:null
    }
  }

  
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }
  
 
  
  renderDish(dish) {
    if (dish != null)
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>
        );
}

  render() {
    return (
      <div className="App">
        <Navbar dark color="dark" margin="ml auto" justify="space-evenly">
          <div className="container">
            <NavbarBrand href="/">Bon Soir Eliot!! </NavbarBrand>
            </div>
        </Navbar>
        <Menu dishes={this.state.dishes}
        onClick={(dishId) => this.onDishSelect(dishId) }/>
        <DishDetail dish={this.state.dishes.filter(dish=>dish.id===this.state.selectedDish)[0]}/>
      </div>
    );
  }
}
export default Main;