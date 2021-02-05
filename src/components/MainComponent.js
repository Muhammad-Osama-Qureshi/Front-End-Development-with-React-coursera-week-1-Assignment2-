import React,{Component} from 'react';
import Menu from './MenuComponents'
import DishDetail from './Dishdetail';
import {DISHES} from '../shared/dishes'
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
  import Header from './Header'
  import Footer from './Footer'



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
        <Header />
        <Menu dishes={this.state.dishes}
        onClick={(dishId) => this.onDishSelect(dishId) }/>
        <DishDetail dish={this.state.dishes.filter(dish=>dish.id===this.state.selectedDish)[0]}/>
        <Footer/>
      </div>
    );
  }
}
export default Main;