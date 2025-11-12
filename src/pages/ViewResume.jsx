import React, { useEffect, useState } from 'react'
import Preview from '../components/Preview'
import { Link, useParams } from 'react-router-dom'
import { addHistoryApi,getResumeApi } from '../services/AllApi'
import { FaFileDownload } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Edit from '../components/Edit';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

function ViewResume() {
  const {id}  = useParams()
  console.log(id)

  const [resume,setResume] = useState({})
  useEffect(()=>{
    getResumeDetails()
  },[])

  const getResumeDetails = async ()=>{
    const result =   await getResumeApi(id)
    console.log(result);
    if (result.status==200) {
      setResume(result.data)
    }
  }
  const handleDownloadResume = async ()=>{
    //create pdf document
    const doc = new jsPDF();
    const preview = document.getElementById("preview")
    //screenshot of preview
    const canvas = await html2canvas(preview,{scale:2})
    // console.log(canvas);
    //convert to img
    const resumeImg = canvas.toDataURL("image/png")
    // console.log(resumeImg);
    //add screenshot to pdf
    const pageWidth = doc.internal.pageSize.getWidth()
    // const imgHeight = doc.internal.pageSize.getHeight() 

    const imgWidth = pageWidth - 40
    const imgHeight = canvas.height*imgWidth/canvas.width
    doc.addImage(resumeImg,'PNG',0,0,imgWidth,imgHeight)
    //download pdf
    doc.save(`resume.pdf`)
    //local time data = new Date
    const localtimedata = new Date()
    // console.log(localtimedata)
    const timeStamp = `${localtimedata.toLocaleDateString()},${localtimedata.toLocaleTimeString()}`
    console.log(timeStamp);
    try{
      await addHistoryApi({timeStamp,resumeImg})
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <>
    <div className='row container'>
            <div className='col-3'></div>
            <div className='col-md-7 col-12'>
              <div style={{marginLeft:"80px"}} className="d-flex justify-content-center align-items-center mt-5">
                  <button onClick={handleDownloadResume} className='btn fs-4 text-primary ms-5'> <FaFileDownload/></button>
                  <Edit resumeDetails={resume} setResumeDetails={setResume}/>
                  <Link to={'/history'} className='btn fs-4 text-primary'> <FaHistory/></Link>
                  <Link to={'/resume'} className='btn fs-3 text-success'> <FaBackward/></Link>
              </div>
                <div id='preview'><Preview resumeDetails={resume}/></div>
            </div>

    </div>

    </>
  )
}

export default ViewResume