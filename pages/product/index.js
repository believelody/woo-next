import {useRouter} from 'next/router'
import gql from 'graphql-tag'
import Layout from '../../components/layout/Layout'
import client from '../../apolloClient'

const PRODUCT_QUERY = gql`query Product($id: ID!) {
    product(id: $id) {
    ... on VariableProduct {
      id
      name
      price
      image {
        sourceUrl
      }
      galleryImages {
        nodes {
          sourceUrl
          altText
        }
      }
    }
  }
}`

const ProductPage = ({ product }) => {
    const router = useRouter()
    console.log(product)
    return (
        <Layout>
            Yes we can
        </Layout>
    )
}

ProductPage.getInitialProps = async ctx => {
    console.log(ctx)
    let { query: {slug}} = ctx
    const { data: { product } } = await client.query({ query: PRODUCT_QUERY, variables: {id: slug} })
    return {product}
}

export default ProductPage