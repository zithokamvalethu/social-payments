import React from 'react'
import {Link} from 'react-router-dom'

function ProductRegisteration() {
  return (
    <div>
        <nav>
            <a>Content Generater</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Analytics</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Product Page</a>
        </nav><br/>

        <h1>Do you want to register a new product</h1>
     <Link to="/product-page"><button>Yes</button></Link>   
       <Link to="/dashboard"><button>No</button></Link> 
    </div>
  )
}

export default ProductRegisteration