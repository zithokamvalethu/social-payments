import React from 'react'
import {Link} from 'react-router-dom'

function ContentGenerate() {
  return (
    <div>
        <nav>
        <a>Content Generater</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Analytics</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Product Page</a>
        </nav><br/>

        <button>Generate Content With Content Generate</button><br />
        <p> add image of the product</p>
     <Link to="/add-image"><button>Yes</button></Link>
  <Link to="/schedule-content"><button>No</button></Link> 

 



    </div>
  )
}

export default ContentGenerate