import React from 'react';
import DishDetailes from './DishDetailes';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardImg,CardImgOverlay,CardBody,CardTitle,CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';




function Menu (props){
  
    const menu=props.dishes.map(dish =>{
        return (
          <div className="col-12 col-md-5 mt-1">
              <Card>
                <Link to={`/menu/${dish.id}`} >
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardTitle>{dish.name}</CardTitle>
                </Link>
            </Card>
          </div>
        );
    });
    return (
        <div className="container">
          <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Menu</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                  <h3>Menu</h3>
                  <hr />
              </div>                
          </div>
          <div className="row">
                {menu}
          </div>
        </div>
      );
    
}
export default Menu;


