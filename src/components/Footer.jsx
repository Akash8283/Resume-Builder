import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function Footer() {
  return (
    <div style={{height:'300px',backgroundColor:'purple',color:'white'}} className='d-flex justify-content-center align-items-center p-5 flex-column'>
        <h1>Contact US</h1>
        <h5 className='fw-bolder'><MdAttachEmail /> resumebuilder@gmail.com</h5>
        <h5 className='fw-bolder'><FaPhoneSquareAlt /> 9987897856</h5>
        <h4>Connect with US</h4>
        <div className='d-flex justify-content-center fs-4 my-3'>
          <FaWhatsapp className='me-3'/>
          <FaInstagram className='me-3'/>
          <FaFacebook />
        </div>
        <p>Designed & Built with ❤️ using react</p>
    </div>
  )
}

export default Footer