import Link from "next/link"

const Product = ({product}) => {
  return (
      <div className="card rounded h-100">
          <div className="card-header d-flex justify-content-between">
            <h3 className="">{product.name}</h3>
            <h3 className="">{product.price}</h3>
          </div>
          <img
              style={{ height: "auto", width: 300, margin: "0 auto" }}
              src={product.image.sourceUrl}
              alt={product.image.altText}
          />
          <div className="card-body">
            <p className="card-text">
                {product.shortDescription}
            </p>
          </div>
          <div className="card-body d-flex align-items-center justify-content-between">
              <Link
                as={`/product/${product.slug}-${product.productId}`}
                href={`/product?slug=${product.id}`}
              >
                <a className="btn btn-primary px-5">View</a>
              </Link>
              <a href="#" className="card-link">Another link</a>
          </div>
      </div>
  )
}

export default Product