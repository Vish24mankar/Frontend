import React from 'react'

function Dashboard() {
  return (
    <div className='container'>
        <div class="container-fluid">
  <div class="row align-items-center justify-content-between">
    
    {/* <!-- Left: Page Title & Description --> */}
    <div class="col-12 col-md-6 mb-3 mb-md-0">
      <h3 class="nk-block-title page-title">Dashboard</h3>
      <p class="text-muted mb-0">
        Welcome to DashLite Pharmacy Dashboard Template.
      </p>
    </div>

    {/* <!-- Right: Tools Section --> */}
    <div class="col-12 col-md-6 text-md-end">
      <div class="d-flex flex-wrap justify-content-md-end align-items-center gap-2">
        
        {/* <!-- Dropdown --> */}
        <div class="dropdown">
          <button 
            class="btn btn-white btn-dim btn-outline-light dropdown-toggle" 
            type="button" 
            data-bs-toggle="dropdown" 
            aria-expanded="false">
            <em class="d-none d-sm-inline icon ni ni-calender-date"></em>
            <span><span class="d-none d-md-inline">Last</span> 30 Days</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Last 30 Days</a></li>
            <li><a class="dropdown-item" href="#">Last 6 Months</a></li>
            <li><a class="dropdown-item" href="#">Last 1 Year</a></li>
          </ul>
        </div>

        {/* <!-- Reports Button --> */}
        <a href="#" class="btn btn-primary d-flex align-items-center">
          <em class="icon ni ni-reports me-1"></em>
          <span>Reports</span>
        </a>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Dashboard;
