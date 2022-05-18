import React from 'react'
import {Link} from 'react-router-dom'

function AddImage() {
  return (
    <div>
        <nav>
            <a>Content Generater</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Analytics</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Product Page</a>
        </nav><br/>

        <h2>Upload Of The Product</h2>
        <input type="file"/>
       <Link to="/schedule-content"><button>Publish</button></Link> 
    </div>
  )
}

export default AddImage