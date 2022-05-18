import React from "react";
import { Link } from "react-router-dom";
function Existingproduct() {
  return (
    <div>
      <label for="touch">
        <span>EXISTING PRODUCTS</span>
      </label>
      <input type="checkbox" id="touch" />

      <ul class="slide">
        <li>
          <Link to="/media">Lorem Ipsum</Link>
        </li>
        <li>
          <Link to="/media">Lorem Ipsum</Link>
        </li>
        <li>
          <Link to="/media">Lorem Ipsum</Link>
        </li>
        <li>
          <Link to="/media">Lorem Ipsum</Link>
        </li>
      </ul>
    </div>
  );
}

export default Existingproduct;
