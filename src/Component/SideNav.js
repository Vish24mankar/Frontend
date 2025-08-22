import React from "react";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: "250px", height: "100vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <span className="fs-4 fw-bold">My App</span>
      </a>
      <hr />
      <Nav className="flex-column">
        <Nav.Link href="#dashboard">🏠 Dashboard</Nav.Link>
        <Nav.Link href="#users">👥 Users</Nav.Link>
        <Nav.Link href="#products">💊 Products</Nav.Link>
        <Nav.Link href="#reports">📊 Reports</Nav.Link>
        <Nav.Link href="#settings">⚙️ Settings</Nav.Link>
      </Nav>
      <hr />
      <div className="dropdown">
        <a
          href="#profile"
          className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
          id="dropdownUser"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://via.placeholder.com/40"
            alt=""
            width="40"
            height="40"
            className="rounded-circle me-2"
          />
          <strong>User</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#profile">
              Profile
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#settings">
              Settings
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#signout">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
