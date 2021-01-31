import React,{Component} from 'react';
import Menu from './components/MenuComponents'
import {DISHES} from './shared/dishes'
import { Navbar, NavbarBrand } from 'reactstrap';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="dark" margin="ml auto" justify="space-evenly">
          <div className="container">
            <NavbarBrand href="/">Bon Soir Eliot!! </NavbarBrand>
            </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}
export default App;