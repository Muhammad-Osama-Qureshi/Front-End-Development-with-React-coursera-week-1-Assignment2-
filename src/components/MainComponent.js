import React,{Component} from 'react';
import Menu from './MenuComponents'
import DishDetail from './Dishdetail';
import {DISHES} from '../shared/dishes'
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import {Switch, Route ,Redirect} from 'react-router-dom'


class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
  
    }
  }

  
 
 
  
 

  render() {
    const Homepage =()=>{
      return(<>
      <Home/>
      </>)
    }
    return (
      <div className="App">
        <Header />
      <Switch>
        <Route path="/home" component={Homepage} />
        <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}  />} />
        <Redirect to="/home" />
      </Switch>

        <Footer/>
      </div>
    );
  }
}
export default Main;