// import React from 'react'
// import { useHistory } from "react-router-dom";

// function Home() {

//        const history = useHistory();
//        const Mediapage = () => {
//          history.push("/Mediapage");
//        };
//   return (
//     <div className="home-container">
//       <div className="home-body">
//         <h1>
//                   <b>TO UPLOAD CONTENT WITH EXISTING PRODUCT</b>

//               </h1>

//               <br />
//               <p>post to social media</p>
//               <input type="button">YES</input>
//               <input type="button">NO</input>
//       </div>
//     </div>
//   );
// }

// export default Home

import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Go to upload content with existing product:</p>
      <hr />

      <p>
        <button onClick={() => navigate("/dashboard")}>NO</button>
      </p>

      <p>
        <button onClick={() => navigate("/media")}>YES</button>
      </p>

      <p>
        {/* <input
          type="button"
          //   onChange={(e) => {
          //     if (e.target.value === "media") {
          //       navigate("/media");
          //     }
          //   }}
          placeholder="type yes to go to media page"
        ></input> */}
      </p>
    </div>
  );
};

export default Home;
