import React from 'react';
import PageTitle from '../PageTitle'

class ProductPage extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
       displayModal: "hide",
       name: "Typography Sketchbooks",
       smallDesc: {
          autor: "Steven Heller",
          size: "Tapa blanda, 24.4 x 18.6 cm",
          pages: "368 páginas",
          editor: "Princeton Architectural Press",
          lang: "Inglés"},
       price: 4900,
       img:"https://www.paragrafica.com.ar/images/stories/virtuemart/product/97816168904215.jpg",
       resume: "Producto de una selección realizada por quien ha sido reconocido como el más conocedor y bien conectado comentarista de diseño gráfico, Steven Heller, este trabajo incursiona en la mente de los diseñadores que crean los tipos de letra y logotipos, mostrándonos sus cuadernos privados de bocetos. Está alfabéticamente organizado por el apellido de los diferentes diseñadores elegidos, revelando cómo casi 120 de los líderes mundiales de diseño y tipógrafía se esfuerzan continuamente para encontrar nuevas y emocionantes formas de comunicación a través de las letras y las palabras, y ofrece una visión fascinante de su trabajo. Dirigido a todos aquellos que utilizan el tipo, ya sea a mano o en la pantalla, este compendio revelador hace hincapié en la importancia de la buena tipografía en momentos en que los hábitos de lectura están cambiando, y celebra un oficio que ha perdurado durante siglos."
     } 
  }
  render() {
    let showModal = () => {
      this.setState({displayModal: "show"})
    }
    return (
    <div className="container">
      <div className="row RegisterWrapper">
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
            <PageTitle title={this.state.name} />
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <em className="smallDesc">
                    {this.state.smallDesc.autor}<br/>
                    {this.state.smallDesc.size}<br/>
                    {this.state.smallDesc.pages}<br/>
                    {this.state.smallDesc.editor}<br/>
                    {this.state.smallDesc.lang}<br/>
                    </em>
                    <span className="productPrice">${this.state.price}</span> <br />
                    <span className="productResume">{this.state.resume}</span>
                </div>
                <div className="col-md-6">
                  <img src={this.state.img} width="300" alt={this.state.name} />
                  <button aria-label="comprar" onClick={showModal} class="btn comprar-btn">Comprar</button>
                  <div className={this.state.displayModal}>Gracias por su compra</div>
                </div>
              </div>
            </div>
          </div>   
      </div>
    </div>
  )}
}

export default ProductPage;
