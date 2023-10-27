import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import { Link, Outlet } from 'react-router-dom';
//

const DashboardLayout=()=> {
        return (
        //       <div>
        //              <Header />
        //           <div className="container">
           
        //    <div className="row">
        //      <div className="col-md-3">
        //        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        //        <div className="drawer-content">
        //            <Outlet></Outlet>
        //          {/* Outlet or content here */}
        //        </div>
        //        <div className="drawer-side">
        //          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        //          <ul className="menu p-4 w-100">
        //            <li>
        //              <Link to="/dahsboartlayout">My Appointments</Link>
        //            </li>
        //            {/* {isAdmin && ( */}
        //              <>
                     
        //                <li>
        //                  <Link to="/dahsboartlayout/depo" className="text-yellow-600 font-bold text-xl">
        //                  DEPO
        //                  </Link>
        //                </li>
        //                <li>
        //                  <Link to="/dahsboartlayout/stockist" className="text-yellow-600 font-bold text-xl">
        //              STOCKIST
        //                  </Link>
        //                </li>
        //                <li>
        //                  <Link to="/dahsboartlayout/allusers" className="text-yellow-600 font-bold text-xl">
        //                    All users
        //                  </Link>
        //                  </li>
        //              </>
        //            {/* )} */}
        //          </ul>
        //        </div>
        //      </div>
        //      <div className="col-md-9">
        //        {/* Main content for the dashboard */}
        //        {/* Add your content here */}
        //      </div>
        //    </div>
        //  </div>
        //       </div>

        <div>
        <Header></Header>
        <div className="container-fluid">
            <div className="row">
                <nav id="dashboard-drawer" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                <Outlet></Outlet>
                    <div className="position-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link to="/dahsboartlayout" className="nav-link">
                                    My Appointments
                                </Link>
                                
                            </li>
                            {/* {isAdmin && ( */}
                                <>
                                    <li className="nav-item">
                                        <Link to="/dahsboartlayout/depo" className="nav-link text-yellow-600 font-bold text-xl">
                                        DEPO
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/dahsboartlayout/stockist" className="nav-link text-yellow-600 font-bold text-xl">
                                        STOCKIST
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/dahsboartlayout/allusers" className="nav-link text-yellow-600 font-bold text-xl">
                                        USER
                                        </Link>
                                    </li>
                                </>
                            {/* )} */}
                        </ul>
                    </div>
                </nav>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    </div>
            );
          };


export default DashboardLayout;