import React from 'react'
import {Link } from 'react-router-dom'

function CreateContent() {
  return (
    <div>
        <nav>
        <a>Content Generater</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Analytics</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Product Page</a>
        </nav><br/>
<h1>Type desired content in text box </h1>
        <textarea rows="15" cols="90"/>
        <h3>Add Image of the product</h3>
       <Link to="/add-image"> <button>Upload Image</button></Link>
    </div>
  )
}

export default CreateContent