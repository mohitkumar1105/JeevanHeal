import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import {Tooltip, OverlayTrigger}from 'react-bootstrap';
import {IMG01, IMG02, IMG03, IMG04, IMG05, IMG_sp_02, IMG_sp_03, IMG_sp_04, IMG_sp_05, IMG_fe_01, IMG_fe_02, IMG_fe_03, IMG_fe_04} from './img';
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper,useLightbox } from "simple-react-lightbox";
import img1 from "../../../../assets/images/feature-01.jpg";
import img2 from "../../../../assets/images/feature-02.jpg";
import img3 from "../../../../assets/images/feature-03.jpg";
import img4 from "../../../../assets/images/feature-04.jpg";
import MyComponent from "./mycomponent"

import Data from '../../../../../API/data';



const SearchList=(props)=>{
   


   
    
    // const getData = () => {
    //     fetch('https://admin.allnuud.com/api/job_list_all')
    //         .then((res) => res.json())
    //         .then((json) => setPost(json.data))
    //         .catch((e) => console.log(e))
    // }
    // useEffect(() => {
    //     getData()
    // }, [])
    


        return(
            <div>

        {Data.cardData.map((items, index) => {
          return (

                <div className="card">
                    <div className="card-body">

                        <div className="doctor-widget">

                            <div className="doc-info-left">
                            <div className="doctor-img">
                                <Link to="/patient/doctor-profile">
                                 <img src={items.img} className="img-fluid" alt="User" /> 
                                </Link>
                            </div>
                            <div className="doc-info-cont">
                                <h4 className="doc-name">
                                    <Link to="/patient/doctor-profile">
                                   {items.fullname}</Link>
                                </h4>
                                <p className="doc-speciality">{items.title}</p>
                                <h5 className="doc-department"><img src={IMG_sp_02} className="img-fluid" alt="Speciality" />{items.desc}</h5>
                                <div className="rating">
                                    <i className="fas fa-star filled"></i>
                                    <i className="fas fa-star filled"></i>
                                    <i className="fas fa-star filled"></i>
                                    <i className="fas fa-star filled"></i>
                                    <i className="fas fa-star"></i>
                                <span className="d-inline-block average-rating">{items.number}</span>
                                </div>
                                <div className="clinic-details">
                                    <p className="doc-location"><i className="fas fa-map-marker-alt"></i>{items.city}</p>
                                    <div>
                                    </div>
                                 
                                </div>
                                {/* <div className="clinic-services">
                                    <span>Dental Fillings</span>
                                    <span> Whitneing</span>
                                </div> */}
                            </div>
                            </div>
                            <div className="doc-info-right">
                            <div className="clini-infos">
                                <ul>
                                    <li><i className="far fa-thumbs-up"></i> 98%</li>
                                    <li><i className="far fa-comment"></i> 17 Feedback</li>
                                    <li><i className="fas fa-map-marker-alt"></i> Florida, USA</li>
                                    <li>
                                        <i className="far fa-money-bill-alt">
                                        </i> $300 - $1000 <OverlayTrigger overlay={
                                        <Tooltip id="tooltip-disabled">Lorem Ipsum</Tooltip>
                                        }>
                                        <span className="d-inline-block">
                                        <i className="fas fa-info-circle"></i>
                                        </span>
                                        </OverlayTrigger>
                                    </li>
                                </ul>
                            </div>
                            <div className="clinic-booking">
                                <Link to="/patient/doctor-profile" className="view-pro-btn">
                                View Profile</Link>
                                <Link to="/patient/booking" className="apt-btn">
                                Book Appointment</Link>
                            </div>
                            </div>


                        </div>

                    
                    </div>
                    

                    
                </div>
                

                );

                
         })}

               
            
            </div>
        );
    }


export default SearchList;