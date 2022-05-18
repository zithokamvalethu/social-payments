import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <nav>
            <a>Content Generater</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Analytics</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Product Page</a>
        </nav><br/>

<form>
    <input type="text" placeholder='Username'/> <br/>
    <input type="text" placeholder='Password'/><br/>
   <Link to="/product-page"> <button>Log In</button> </Link>
</form>

    </div>
  )
}

export default Home