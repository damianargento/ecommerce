import React, { useState } from 'react';
import PageTitle from '../../PageTitle'
import CategoriesMenu from '../../CategoriesMenu'

function ProductPage(props) {
  const [showModal, setShowModal] = useState("hide")

    return (
    <div className="container product-wrapper">
      <div className="row">
          <div className="col-md-2">
            <CategoriesMenu />
          </div>
          <div className="col-md-10">
            <PageTitle title={props.location.state.item.name} />
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <em className="smallDesc">
                    {props.location.state.item.smallDesc.autor}<br/>
                    {props.location.state.item.smallDesc.size}<br/>
                    {props.location.state.item.smallDesc.pages}<br/>
                    {props.location.state.item.smallDesc.editor}<br/>
                    {props.location.state.item.smallDesc.lang}<br/>
                    </em>
                    <span className="productPrice">${props.location.state.item.price}</span> <br />
                    <span className="productResume">{props.location.state.item.resume}</span>
                </div>
                <div className="col-md-6">
                  <img src={props.location.state.item.img} width="300" alt={props.location.state.item.name} />
                  <button aria-label="comprar" onClick={() => setShowModal("show")} className="btn comprar-btn">Comprar</button>
                  <div className={showModal}>Gracias por su compra</div>
                </div>
              </div>
            </div>
          </div>   
      </div>
    </div>
  )
}

export default ProductPage;
