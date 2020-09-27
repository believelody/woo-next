import React from 'react'
import Layout from '../components/layout/Layout'
import gql from "graphql-tag"
import fetch from "isomorphic-unfetch"
import clientConfig from '../client-config/config'
import Products from '../components/products/Products'
import "../style.css"
import client from '../apolloClient'

const PRODUCTS_QUERY = gql`query{
  products(first: 20) {
    nodes {
      ... on VariableProduct {
        name
        price
        productId
        shortDescription
        stockQuantity
        id
        slug
        image {
          altText
          sourceUrl
        }
      }
    }
  }
}`

const IndexPage = ({products}) => {
  return (
    <Layout>
      <Products products={products} />
    </Layout>
  )
}

IndexPage.getInitialProps = async () => {
  // const res = await fetch(`${clientConfig.siteUrl}/products`)
  // const products = await res.json()
  const {data: {products}} = await client.query({ query: PRODUCTS_QUERY })
  // console.log(products)
  return { products: products.nodes }
}

export default IndexPage
