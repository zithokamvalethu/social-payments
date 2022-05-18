// import React from "react";

// // import { useHistory } from "react-router-dom";

// function Mediapage() {
//   // const history = useHistory();
//   // const Mediapage = () => {
//   //     history.push("/");
//   // }
//     return <div>

//   </div>;
// }

// export default Mediapage;
import React from "react";
import { useNavigate } from "react-router-dom";

const Mediapage = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>
        <b>SOCIAL MEDIA PAGE</b>
      </h1>
      <br />
      <button className="btn btn-success" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <p>
        <button
          className="btn btn-success"
          onClick={() => navigate("/dropdown")}
        >
          YES
        </button>
      </p>
      <p>
        <button
          className="btn btn-success"
          onClick={() => navigate("/dropdown")}
        >
          NO
        </button>
      </p>
    </div>
  );
};

export default Mediapage;
