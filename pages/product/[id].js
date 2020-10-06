import {useRouter} from 'next/router'
import gql from 'graphql-tag'
import Layout from '../../components/layout/Layout'
import client from '../../apolloClient'
import ProductSingle from '../../components/products/ProductSingle'

const PRODUCT_QUERY = gql`query Product($id: ID!) {
    product(id: $id) {
    ... on VariableProduct {
      id
      name
      price
      description
      image {
        sourceUrl
      }
      galleryImages {
        nodes {
          sourceUrl
          altText
        }
      }
      variations {
        nodes {
          attributes {
            nodes {
              value
            }
          }
        }
      }
        attributes {
            nodes {
                name
            }
        }
    }
  }
}`

const ProductPage = ({ product }) => {
    const router = useRouter()
    return (
      <ProductSingle product={product} />
    )
}

ProductPage.getInitialProps = async ctx => {
    const { query: {id}} = ctx
    const { data: { product } } = await client.query({ query: PRODUCT_QUERY, variables: {id} })
    return {product}
}

export default ProductPage