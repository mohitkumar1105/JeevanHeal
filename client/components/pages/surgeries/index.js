import React, { useState, useEffect } from "react";


// import { drslider } from "./image.jsx"

import Header from '../../header';
import Footer from '../../footer';
import Slidersearchdr from './slidersearchdr';
import { CAT01,CAT02,CAT03,CAT04,CAT05} from './img';
import Clinic  from './clinic';






// import "aos/dist/aos.css";


const LabTest = (props) => {

	return (


		<>
			<Header {...props} />

			<Slidersearchdr></Slidersearchdr>
			
			{/*  Content */}

            <div className="row">
          <div className="container">
          <h2> We are experts in Surgical solutions for 50+ ailments.</h2>
    
          </div>
            <div className="col-md-6">
            <br></br>
         
              {/* <img src={drslider} className="img-fluid dr-img" alt="" /> */}
                <div className="search-area1">
                <h2 className="text-center">
            
              </h2>
              </div>
              <div className="container">
          {/* <h3 className="mt-4">      Popular Surgeries</h3> */}
          <Clinic></Clinic>
			  <Clinic></Clinic>
          </div>
			


            </div>



            <div className="col-md-6 search-doctor">
              <div className="search-area">
                <h2 className="text-center">
                  {/* Search Doctor, Make an Appointment */}
                  Book your consultation today
                </h2>
                <form className="search-input">
                  <div className="row">
                   
                    <div className="col-12 col-md-12">
                      <div className="form-group">
                      
                        <select className="form-select form-control">
                          <option>Bangalore</option>
                          <option>Delhi NCR</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-12">
                      <div className="form-group">
                       
                        <select className="form-select form-control">
                          <option> Select Ailment* </option>
                          <option> Knee Replacement</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-12">
                      <div className="form-group">
                       
                        <select className="form-select form-control">
                          <option>Surgen</option>
                          <option>Cardiologist</option>
                          <option>Gynacologist</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-12">
                      <div className="form-group">
                       
                        <input
                          type="text"
                          className="form-control"
                          defaultValue
						  value='' placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-12">
                      <div className="form-group">
                       
                        <input
                          type="text"
                          className="form-control"
                          defaultValue 
						  value='' placeholder="Contact No."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button
                      type="submit"
                      className="btn btn-primary search-btn submit-btn"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
		  {/* Clinic and Specialities */}


		  <section className="section section-category">
          <div className="container">
            <div className="section-header text-center">
              <h2>Our Departments</h2>
           
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT01} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>General Surgery</h4>
                  

                    <span>9 ailments</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT02} alt="" />
                  </div>Proctology

                  <div className="category-content">
                    <h4>Proctology</h4>
                    <span>5 ailments</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT03} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Ophthamology</h4>
                    <span>4 ailments</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT04} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Urology</h4>
                    <span>4 ailments</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT05} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Cosmetic</h4>
                    <span>6 ailments</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT01} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Urology</h4>
                    <span>16 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT04} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Cardiologist</h4>
                    <span>18 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT03} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Neurology</h4>
                    <span>22 Doctors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



		  

		  

			<Footer {...props} />
		</>


	);
}

export default LabTest;