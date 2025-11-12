import React, { useState,useRef } from 'react'
import { MdEditDocument } from "react-icons/md";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { HiMiniXMark } from "react-icons/hi2";
import { updateResumeApi } from '../services/allApi';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '1px solid #000000ff',
  boxShadow: 24,
  p: 4,
};

function Edit({resumeDetails,setResumeDetails}) {
    const [open,setOpen] = useState(false)
    const skillRef = useRef()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addSkill = (skill)=>{
     if (resumeDetails.userSkills.includes(skill)) {
      alert("The given skill is already added, please add another!")
      skillRef.current.value = ""
     }
     else if(!skill.trim()){
      alert("Please fill the Field")
     }
     else{
      setResumeDetails({...resumeDetails,userSkills:[...resumeDetails.userSkills,skill]})
      //to clear add akill
      skillRef.current.value = ""
     }
    }
    const removeSkil = (skill)=>{
    setResumeDetails({...resumeDetails,userSkills:resumeDetails.userSkills.filter(item=>item!=skill)})
    }
    const handleUpdateResume = async()=>{
      const {id,username,jobTitle,location} = resumeDetails
      if (!username && !jobTitle && !location) {
        alert("Please fill the form Completely...")
      }
      else{
        //api
        console.log("Api call")
        try{
          const result = await updateResumeApi(id,resumeDetails)
          console.log(result)
          if (result.status==200) {
            alert("Resume Updated Successfully!!!")
            handleClose()
          }
        }catch(err){
          console.log(err)
        }
      }
    }


  return (
    <div>
        <button onClick={handleOpen} className='btn fs-3 text-warning'> <MdEditDocument/></button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Personal Detalis */}
            <div>
                <h3>Personal Details</h3>
                   <div className='row p-3'>
                            <TextField value={resumeDetails.username} onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
                            <TextField value={resumeDetails.jobTitle} onChange={e=>setResumeDetails({...resumeDetails,jobTitle:e.target.value})} id="standard-basic-job" label="Job Title" variant="standard" />
                            <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic-location" label="Location" variant="standard" />
                    </div>
            </div>
            {/* Contact Details */}
             <div>
                        <h3>Contact Details</h3>
                        <div className='row p-3'>
                            <TextField value={resumeDetails.email} onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})} id="standard-basic-email" label="Email" variant="standard" />
                            <TextField value={resumeDetails.mobile} onChange={e=>setResumeDetails({...resumeDetails,mobile:e.target.value})} id="standard-basic-number" label="Phone Number" variant="standard" />
                            <TextField value={resumeDetails.github} onChange={e=>setResumeDetails({...resumeDetails,github:e.target.value})} id="standard-basic-git" label="Github Profile Link" variant="standard" />
                            <TextField value={resumeDetails.linkedin} onChange={e=>setResumeDetails({...resumeDetails,linkedin:e.target.value})} id="standard-basic-linkedin" label="Linkedin" variant="standard" />
                            <TextField value={resumeDetails.portfolio} onChange={e=>setResumeDetails({...resumeDetails,portfolio:e.target.value})} id="standard-basic-portfolio" label="Portfolio link" variant="standard" />
                        </div>
            </div>
            {/* Educational Details */}
            <div>
                        <h3>Education Details</h3>
                        <div className='row p-3'>
                            <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic-course" label="Course Name" variant="standard" />
                            <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic-college" label="College Name" variant="standard" />
                            <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic-university" label="University" variant="standard" />
                            <TextField value={resumeDetails.passoutYear} onChange={e=>setResumeDetails({...resumeDetails,passoutYear:e.target.value})} id="standard-basic-passout" label="Year of Passout" variant="standard" />
                        </div>
            </div>
            {/* Professional Details */}
             <div>
                        <h3></h3>
                        <div className='row p-3'>
                            <TextField value={resumeDetails.jobType} onChange={e=>setResumeDetails({...resumeDetails,jobType:e.target.value})} id="standard-basic-job" label="Job or Internship" variant="standard" />
                            <TextField value={resumeDetails.company} onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})} id="standard-basic-company" label="Company Name" variant="standard" />
                            <TextField value={resumeDetails.clocation} onChange={e=>setResumeDetails({...resumeDetails,clocation:e.target.value})} id="standard-basic-company-location" label="Company Location" variant="standard" />
                            <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic-duration" label="Duration" variant="standard" />
                        </div>
            </div>
            {/* skills */}
            <div>
            <h3>Skills</h3>
            <div className="d-flex align-items-center justify-content-between p-3">
              <input ref={skillRef} placeholder='Add Skills' className='form-control' type="text" />
              <Button onClick={()=>addSkill(skillRef.current.value.trim().replace(/\s+/g, ' ').toUpperCase())} className='ms-3' variant='text'>ADD</Button>
            </div>
            <h5>Added Skills :</h5>
            <div className='d-flex flex-wrap justify-content-between my-3'>
              {
                resumeDetails.userSkills?.length>0?
                  resumeDetails.userSkills?.map((skill,index)=>(
                    <Button key={index} variant='contained' className='m-1'>{skill}<HiMiniXMark onClick={()=>removeSkil(skill)} className='ms-2'/></Button>
                  ))
                :
                <p>No Skills Added</p>
              }
            </div>
          </div>
            {/* summary */}
            <div>
                        <h3>Summary</h3>
                        <div className='p-3 row'>
                          <TextField onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})} id="standard-basic-summary" label="wtite a short summary of yourself" variant="standard" multiline rows={8} defaultValue={'Passionate and detail-oriented MERN Stack Developer with a strong foundation in building dynamic, responsive, and scalable web applications. Skilled in MongoDB, Express.js, React.js, and Node.js, with experience in both frontend and backend development. Adept at creating RESTful APIs, integrating third-party services, and implementing secure authentication systems. Demonstrates excellent problem-solving skills, clean code practices, and teamwork in agile environments. Enthusiastic about learning emerging technologies and delivering high-quality user experiences.'}/>
                        </div>
            </div>
            {/* button update */}
            <div>
              <button onClick={handleUpdateResume} className='btn btn-warning'>Update</button>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit