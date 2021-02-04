import React from 'react';

import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
  



   function  RenderDish({dish}) {
        if (dish != null)
            return(
             
                
                <Card >
                   
                    <CardImg  width="100%"  src={dish.image} alt={dish.name} />
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

    function RenderComments({dish}) {
        let comments = null;
        let commentsElement = null
        if (dish) {
            comments = dish ? dish.comments : null;
            commentsElement = comments.map(x => {
                return (
                    <li key={x.id}>
                        <p>{x.comment}</p>
                        <p>{"-- " + x.author + ", " + new Date(x.date).toLocaleDateString("en-US")}</p>
                    </li>
                )
            })
        }
        return (
   
                  comments
                
            ? <>
                <h2>      Comments</h2>
                <ul class="list-unstyled">
                    {commentsElement}
                </ul>
            </>
            : <div></div>
        
         
        )
    }

    const DishDetail = (props)=>{
        return (
            <div className="container">
        <div className="row">
        <div  className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>
                    </div>
                    <div  className="col-12 col-md-5 m-1"> 
                  <RenderComments dish={props.dish} />
</div>
                    </div>
                    </div>
               
            
            
        );
    };


export default DishDetail;