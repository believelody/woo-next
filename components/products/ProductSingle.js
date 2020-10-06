import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import AddToCartBtn from '../cart/AddToCartBtn'

const ProductSingle = ({product}) => {
    const [variationValue, setVariationValue] = useState("")
    const [quantity, setQuantity] = useState(0)
    
  return (
      <div className="container h-100 border p-4">
          <div className="row">
              <div className="col-6 d-flex justify-content-center">
                  <img
                      style={{ height: "auto", width: 300, margin: "0 auto" }}
                      src={product.image.sourceUrl}
                      alt={product.image.altText}
                  />
              </div>
              <div className="col-6">
                  <div className="row border-bottom">
                      <div className="col d-flex justify-content-between">
                          <h3 className="">{product.name}</h3>
                          <h3 className="">{product.price} €</h3>
                      </div>
                  </div>
                  <div className="row py-3">
                      <div className="col">
                          <label>Quantity:</label>
                          <input
                            type="number"
                            value={quantity} 
                            onChange={e => setQuantity(e.target.value >= 1 ? (+e.target.value) : 0)}
                        />
                      </div>
                      <div className="col">
                          <span className="">{product.attributes.nodes[0].name} :</span>
                          <select onChange={e => setVariationValue(e.target.value)}>
                              <option value="" selected={!variationValue} />
                              {
                                  product.variations.nodes.map(variation => (
                                    <option
                                        key={variation.attributes.nodes[0].value}
                                          selected={variationValue === variation.attributes.nodes[0].value}
                                        value={variation.attributes.nodes[0].value}>
                                            {variation.attributes.nodes[0].value}
                                    </option>
                                  ))
                              }
                          </select>
                      </div>
                  </div>
                  <div className="row p-2">
                      <div className="col d-flex justify-content-center">
                        <AddToCartBtn
                            product={product}
                            variationValue={variationValue}
                            quantity={quantity}
                            setQuantity={setQuantity}
                            setVariationValue={setVariationValue}
                        />
                      </div>
                  </div>
              </div>
          </div>
          <div className="row mt-4">
              <div className="col">
                  <ReactMarkdown source={product.description} escapeHtml={false} />
              </div>
          </div>
      </div>
  )
}

export default ProductSingle