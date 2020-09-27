import Product from "./Product"

const Products = ({ products }) => {
  return (
      <div className="container">
          <ul className="border d-flex py-3">
            {
                products.length ?
                    products.map(product => (
                        <li className="mx-3" key={product.id}>
                            <Product product={product} />
                        </li>
                    ))
                    :
                    <p>There is no product</p>
            }
        </ul>
      </div>
  )
}

export default Products