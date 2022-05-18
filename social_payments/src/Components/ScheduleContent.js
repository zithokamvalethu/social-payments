import React from 'react'

function ScheduleContent() {
  return (
    <div>
        <nav>
        <a>Content Generater</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Analytics</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Product Page</a>
        </nav><br/>

        <h1>Input desired time of publishing content</h1>
        <button>Publish Instantly</button><br/>

        <input type="datetime-local"/>
        <button>Publish Content</button>
    </div>
  )
}

export default ScheduleContent