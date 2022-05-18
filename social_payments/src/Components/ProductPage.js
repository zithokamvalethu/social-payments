import React from 'react'
import {Link} from 'react-router-dom'

function ProductPage() {
  return (
    <div>
<nav>
            <a>Content Generater</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Analytics</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Product Page</a>
        </nav><br/>
<div>

        Name Of The Product: <input type="text"/><br/>
        price Of The Product: <input type="text"/><br/>
        Picture Of The Product: <input type="file"/><br/>
        <span>
      Do You Want To Share This To Social Media?
        </span>
       <Link to="/content-generate"><button>Yes</button></Link> 
        <Link to="/dashboard"><button>No</button></Link>
</div>

    </div>
  )
}

export default ProductPage;