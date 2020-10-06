import Link from "next/link"
import ReactMarkdown from "react-markdown"

const ProductItem = ({product}) => {
  return (
      <div className="card rounded h-100">
          <div className="card-header d-flex justify-content-between">
            <h3 className="">{product.name}</h3>
            <h3 className="">{product.price} €</h3>
          </div>
          <img
              style={{ height: "auto", width: 300, margin: "0 auto" }}
              src={product.image.sourceUrl}
              alt={product.image.altText}
          />
          <div className="card-body">
            <div className="card-text">
              <ReactMarkdown source={product.shortDescription} escapeHtml={false} />
            </div>
          </div>
          <div className="card-body d-flex align-items-center justify-content-between">
              <Link
                as={`/product/${product.id}`}
                href={`/product/[id]`}
              >
                <a className="btn btn-primary px-5">View</a>
              </Link>
              <button className="btn btn-success">Add to Cart</button>
          </div>
      </div>
  )
}

export default ProductItem