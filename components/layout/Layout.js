import Head from 'next/head'
import { AppProvider } from '../../context/AppContext'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Modal from '../modal/Modal'
import Toast from '../toast/Toast'

const Layout = ({children}) => {

  return (
    <div>
      <Head>
        <title>We Lift UP</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/cosmo/bootstrap.min.css" />
      </Head>
      <AppProvider>
          <Header />
          {children}
          <Modal />
          <Toast />
          <Footer />
      </AppProvider>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossOrigin="anonymous"></script>
    </div>
  )
}

export default Layout
