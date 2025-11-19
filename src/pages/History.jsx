import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { MdDelete } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { getHistoryApi, removeHistoryApi } from '../services/allApii';

function History() {
  const [allHistory,setAllHistory] = useState([])

  console.log(allHistory);
  
  useEffect(()=>{
    getHistory()
  },[])
  
  const getHistory = async ()=>{
    try{
      const result = await getHistoryApi()
    console.log(result);
    if (result.status == 200) {
      setAllHistory(result.data)
    }
    }
    catch(err){
        console.log(err)
    }
  }
  const deleteHistory = async (id)=>{
    try{
      await removeHistoryApi(id)
      getHistory()
    }
    catch(err){
      console.log(err);
      
    }
  }
  return (
    <div>
      <h1 className="text-center my-5">Downloaded Resume History</h1>
      <Link to={'/'} className='float-end me-5' style={{marginTop:'-80px'}}><IoMdArrowRoundBack className='me-1'/>Back</Link>
      <Box component="section" className='container-fluid'>
        <div className="row">
          {
            allHistory.length>0?
            allHistory?.map(item=>(
              <div key={item?.id} className="col-md-4">
            <Paper elevation={3} sx={{my:5,p:5,textAlign:'center',}}>
                <div className="d-flex justify-content-center align-items-center">
                  <h6>Review At: {item?.timeStamp}</h6>
                  <button onClick={()=>deleteHistory(item?.id)} className='btn text-danger fs-5 mb-2'><MdDelete /></button>
                </div>
                <div className='border rounded p-3'><img width={'200px'} height={'200px'} className='img-fluid' src={item?.resumeImg} alt="" /></div>
            </Paper>
          </div>
            ))
            :
            <p>No resumes are downloaded yet</p>
          }
        </div>
      </Box>
    </div>
  )
}

export default History