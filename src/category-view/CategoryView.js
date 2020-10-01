import React from 'react';
// import PageTitle from '../PageTitle'

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
          isLoaded: false,
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
    if(this.props.selected === "category"){
    return (
    <div className="container category-view">
      <div className="row">
          <div className="col-md-2">
            Componente de Categorias - WIP
            <br />
            Diseño grafico
            <br />
            Artes plasticas
            <br />
            Moda
          </div>
          <div className="col-md-10">
            {/* Como esta pagina va a ser general para el home y a modo de test no creo que haga falta ponerle titulo */}
            {/* <PageTitle /> */}
          <div className="container">
            <div className="row">
              {this.state.items.map(
                (item) => 
              <div className="col-md-3" key={item.sku}>
                <img src={item.img} alt={`${item.name} cover`} width="100%"/>
                <p className="productName">{item.name}</p>
                <p className="productPrice">${item.price}</p>
                <button className="btn">Ver Detalle</button>
              </div>
              )}
            </div>
          </div>
          </div>
        </div>
      </div>
  )}
  else return null
}
}

export default CategoryView;