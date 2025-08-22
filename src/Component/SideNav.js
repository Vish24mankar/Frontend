import React, { useState } from "react";
import { FaTachometerAlt, FaUserMd, FaUsers, FaMoneyBill, FaCog } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";  
import "./Sidebar.css"; 

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="sidebar bg-white shadow-sm">
      <div className="sidebar-header p-3">
        <h4 className="text-success fs-5">Hospital Management</h4>
      </div>
      <ul className="list-unstyled sidebar-menu">
        <li>
          <a href="#" className="sidebar-link active">
            <MdDashboard className="me-2" /> Dashboard
          </a>
        </li>
         <li>
           <a href="#" className="sidebar-link">
              <FaCalendarAlt className="me-2" /> Appointment List
          </a>
        </li>

        <li>
  <details className="w-100">
    <summary className="sidebar-link">
      <FaUsers className="me-2" /> Patient
    </summary>
    <ul className="submenu list-unstyled ps-4">
      <li><a href="#">Add Patient</a></li>
      <li><a href="#">IPD/OPD Patient</a></li>
      <li><a href="#">Manage Patients</a></li>
    </ul>
  </details>
</li>


        <li>
          <button
            className="sidebar-link w-100"
            onClick={() => toggleMenu("doctors")}
          >
            <FaUserMd className="me-2" /> Doctors / Nurses
          </button>
          {openMenu === "doctors" && (
            <ul className="submenu list-unstyled ps-4">
              <li><a href="#">Add Doctor / Nurses</a></li>
              <li><a href="#">Doctors / Nurses</a></li>
            </ul>
          )}
        </li>
        
          <li>
            <button 
            className="sidebar-link w-100"
            onClick={() => toggleMenu("finance")}
            >
             <FaUserMd className="me-2" /> Finance
            </button>
            {openMenu === "finance" && (
                <ul className="submenu list-unstyled ps-4">
                  <li><a href="#">Income</a></li>
                  <li><a href="#">Expense</a></li>
                  <li><a href="#">Invoice List</a></li>
                  <li><a href="#">Invoice Details</a></li>
              </ul>)}
          </li>
          <li>
            <details className="w-100">
                  <summary className="sidebar-link">
                <FaUsers className="me-2" /> Misc Pages
            </summary>
            <ul className="submenu list-unstyled ps-4">
              <li><a href="#">Bed Group</a></li>
              <li><a href="#">Bed Allotment</a></li>
              <li><a href="#">Department</a></li>
              <li><a href="#">Death Report</a></li>
            </ul>
            </details>

          </li>
        <li>
          <a href="#" className="sidebar-link">
            <FaMoneyBill className="me-2" /> User Profile
          </a>
        </li>
        <li>
          <a href="#" className="sidebar-link">
            <FaCog className="me-2" /> Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
