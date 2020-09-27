import Head from 'next/head'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const Layout = ({children}) => {
  return (
    <div>
        <Head>
            <title>We Lift UP</title>
              <link rel="stylesheet" href="https://bootswatch.com/4/cosmo/bootstrap.min.css"/>
        </Head>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout
