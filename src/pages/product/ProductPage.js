import React, { useState, useEffect } from 'react';
import PageTitle from '../../PageTitle'
import CategoriesMenu from '../../CategoriesMenu'
import firebase from '../../config/Firebase'
import Spinner from 'react-bootstrap/Spinner'

function ProductPage(props) {
  const [showModal, setShowModal] = useState("hide")
  const [isLoaded, handleLoading] = useState(false)
  const [productData, handleProductData] = useState({})
  useEffect(() => {
    const productId = props.match.params.id
    const product = () => firebase.db.collection("/productos").doc(productId)
    product().get(props.id)
    .then(querySnapshot => {handleProductData(querySnapshot.data())})
    .then(() => handleLoading(true))
    .catch(err => console.log(err))
  }, [handleLoading]);

    return (
    <div className="container product-wrapper">
        <div className="row">
          <div className="col-md-2">
            <CategoriesMenu />
          </div>      
      {
        !isLoaded && 
        <Spinner animation="grow" variant="danger" />
      }
      {
        isLoaded &&
          <div className="col-md-10">
            <PageTitle title={productData.title} />
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <em className="smallDesc">
                    {productData.sdesc}
                    </em>
                    <span className="productPrice">${productData.price}</span> <br />
                    <span className="productResume">{productData.desc}</span>
                </div>
                <div className="col-md-6">
                  <img src={productData.imglink} width="300" alt={productData.title} />
                  <button aria-label="comprar" onClick={() => setShowModal("show")} className="btn comprar-btn">Comprar</button>
                  <div className={showModal}>Gracias por su compra</div>
                </div>
              </div>
            </div>
          </div>   
      }
      </div>

      
    </div>
  )
}

export default ProductPage;
