import React, { useState, useEffect } from 'react';
import PageTitle from '../../PageTitle'
import {Link} from 'react-router-dom'
import CategoriesMenu from '../../CategoriesMenu'
import {Container, Row, Col, Spinner} from 'react-bootstrap'
import firebase from '../../config/Firebase'

function CategoryView (props) {
  const [items, setItems] = useState([])
  const [isLoaded, handleLoading] = useState(false)
  const style = {
    productName:{ 
      fontSize: "18px",
      fontWeight:"bold"
    }
  }
  useEffect(() => {
    firebase.db.collection("/productos").get()
    .then(querySnapshot => {setItems(querySnapshot.docs)})
    .then(() => handleLoading(true))
    .catch(err => console.log(err))
  }, [handleLoading, items]);


    return (
    <Container>
      <Row>
          <Col md={2}>
           <CategoriesMenu />
          </Col>
          <Col md={10}>
          <PageTitle title={props.match.params.name ? props.match.params.name : "Ultimos Productos"}/> 
          <Container>
            <Row>
            { !isLoaded &&
             <Spinner animation="grow" variant="danger" />
            }
              {
                isLoaded &&
                items.map(
                (item) =>
              <Col md={3} key={item.id}>
                <div className="productImage">
                  <img src={item.data().imglink} alt={`${item.data().title} cover`} width="100%"/>
                </div>
                <p style={style.productName}>{item.data().title}</p>
                <p className="productPrice">${item.data().price}</p>
                <Link to={`/product/${item.id}`}><button className="btn">Ver Detalle</button></Link>
              </Col>
              )}
             </Row> 
          </Container>
          </Col>
        </Row>
      </Container>
  )
}
export default CategoryView;