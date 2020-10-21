import React from 'react';
import PageTitle from '../../PageTitle'
import {Link} from 'react-router-dom'
import CategoriesMenu from '../../CategoriesMenu'
import {Container, Row, Col} from 'react-bootstrap'
class CategoryView extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
       error: null,
       isLoaded: false,
       items: []
         }
  }
  componentDidMount() {
    fetch('http://www.damianargento.com/React.js-utn/Ecommerce/fake-api-response.json')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result,
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
        console.log(error)
      }
    )
  }
  render() {
    if(this.state.isLoaded === false) {
    return(
      <div className="container category-view">
      <div className="row">
          <div className="col-md-2">
           <CategoriesMenu />
          </div>
          <div className="col-md-10">
    <div>Loading...</div>
    </div>
        </div>
      </div>) 
    }
    else {
    return (
    <Container>
      <Row>
          <Col md={2}>
           <CategoriesMenu />
          </Col>
          <Col md={10}>
          <PageTitle title={this.props.match.params.name ? this.props.match.params.name : "Ultimos Productos"}/> 
          <Container>
            <Row>
            {/* Esta pagina llevara el titulo de la categoria seleccionada. */}
              {this.state.items.map(
                (item) =>

              <Col md={3} key={item.sku}>
                <div className="productImage">
                  <img src={item.img} alt={`${item.name} cover`} width="100%"/>
                </div>
                <p className="productName">{item.name}</p>
                <p className="productPrice">${item.price}</p>
                <Link to={{pathname:'/product', state:{item}}} ><button className="btn">Ver Detalle</button></Link>
              </Col>
              )}
             </Row> 
          </Container>
          </Col>
        </Row>
      </Container>
  )
}}
}

export default CategoryView;