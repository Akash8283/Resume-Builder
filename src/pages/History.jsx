import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { MdDelete } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
function History() {
  return (
    <div>
      <h1 className="text-center my-5">Downloaded Resume History</h1>
      <Link to={'/'} className='float-end me-5' style={{marginTop:'-80px'}}><IoMdArrowRoundBack className='me-1'/>Back</Link>
      <Box component="section" className='container-fluid'>
        <div className="row">
          <div className="col-md-4">
            <Paper elevation={3} sx={{my:5,p:5,textAlign:'center',}}>
                <div className="d-flex justify-content-center align-items-center">
                  <h6>Review At: Date,Time </h6>
                  <button className='btn text-danger fs-5 mb-2'><MdDelete /></button>
                </div>
                <div className='border rounded p-3'><img width={'200px'} height={'200px'} className='img-fluid' src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2740/persistent-resource/lisbon-resume-templates.jpg?v=1652268408" alt="" /></div>
            </Paper>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default History