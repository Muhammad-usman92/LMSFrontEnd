import React from "react";
import { Link } from "react-router-dom";
const DropDown = () => {
  return (
    <div class='dropdown'>
      <button
        class='dropdown-toggle dropp'
        type='button'
        id='dropdownMenuButton1'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        Users
      </button>
      <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
        <li>
          <Link class='dropdown-item' to='#'>
            All USers
          </Link>
        </li>
        <li>
          <Link class='dropdown-item' to='#'>
            Add New User
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
