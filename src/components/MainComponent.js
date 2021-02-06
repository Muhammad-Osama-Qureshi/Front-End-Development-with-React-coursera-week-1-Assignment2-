import React,{Component} from 'react';
import Menu from './MenuComponents'
import DishDetail from './Dishdetail';
import {DISHES} from '../shared/dishes'
import {Promotion, PROMOTIONS} from '../shared/Promotion'
import {COMMENTS, Comments} from '../shared/Comments'
import {LEADERS, Leaders} from '../shared/Leaders'
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import {Switch, Route ,Redirect} from 'react-router-dom'
import Contact from './contact'



class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS
  
    }
  }

  
 
 
  
 

  render() {
    const Homepage =()=>{
      return(<>
      <Home dish={this.state.dishes.filter(dish=>dish.featured)[0]} 
      promotions={this.state.leaders.filter(leader=>leader.featured)[0]}
      comments={this.state.comments.filter(comment=>comment.featured)[0]}
      leaders={this.state.promotions.filter(promotion=>promotion.featured)[0]}
      
      />
      </>)
    }
    return (
      <div className="App">
        <Header />
      <Switch>
        <Route path="/home" component={Homepage} />
        <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}  />} />
        <Route exact path="/contactus" component={Contact}/>
        <Redirect to="/home" />
      </Switch>

        <Footer/>
      </div>
    );
  }
}
export default Main;