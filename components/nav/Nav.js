import Link from "next/link"
import CartNav from "../cart/CartNav"

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link href="/">
              <a className="nav-link">WooNext</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Categories</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">My Account</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">About</a>
            </Link>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Separated link</a>
            </div>
          </li> */}
        </ul>
        <div className="bg-light nav-item float-right">
          <Link as="/cart" href="/cart">
            <a className="nav-link">
              <CartNav />
            </a>
          </Link>
        </div>
        {/* <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form> */}
      </div>
    </nav>
  )
}

export default Nav
