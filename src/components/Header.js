import { React,Component } from 'react';
import { Navbar, NavbarBrand,Jumbotron } from 'reactstrap';
class Header extends Component{
    
    render(){
return(
    <>
<Navbar dark >
          <div className="container">
            <NavbarBrand href="/">Bon Soir Eliot!! </NavbarBrand>
            </div>
        </Navbar>
<Jumbotron>
    <div className="container">
        <div className="row row-header">
            <div className="col-12 col-sm-6">
                <h1>
                    Restuarant Con FuSion
                </h1>
                <p>We make Good And Tasty Food For you that you'll ever Ate!</p>
            </div>
        </div>
    </div>
</Jumbotron>
    </>
)
    }
}

export default Header