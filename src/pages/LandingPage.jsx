import React from 'react'
import { Link } from 'react-router-dom'
function LandingPage() {
  return (
    <div>
      {/* landing part */}
      <section style={{width:'100%',height:'100vh',backgroundImage:"url(/public/home1.png)",backgroundAttachment:'fixed',backgroundSize:'cover',backgroundPosition:'top'}} className='container-fluid row align-items-center'>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 shadow border py-5 rounded mt-5 text-center" style={{backgroundColor:'rgba(255,255,255,0.5)'}}>
           <h3>Designed to get hired.
            Your skills, your story, your next job - all in one
           </h3>
             <Link to={'/resume'} className='btn text-white mt-2' style={{backgroundColor:'purple'}}>Make Your Resume</Link>
        </div>
        <div className="col-md-4"></div>
      </div>
      </section>
      {/* tools */}
      <section className='m-5'>
        <h3 className='text-center'>Tools</h3>
        <div className='container row align-items-center'>
          <div className="col-md-6">
            <div className='my3 fw-bold'>Resume</div>
            <p >Create unlimited new resumes and easily edit them afterwards. </p>
            <div className='my3 fw-bold'>Cover Letters</div>
            <p>Easily write professional cover letters.</p>
            <div className='my3 fw-bold'>Jobs</div>
            <p>Automatically receive new and relevant job postings.</p>
            <div className='my3 fw-bold'>Applications</div>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>
          </div>
          <div className="col-md-6">
            <img className='img-fluid' src="/public/home2.png" alt="" />
          </div>
        </div>
      </section>
      {/* image */}
      <section style={{height:'500px',width:'100%',backgroundImage:'url("/public/home3.jpeg")',backgroundSize:'cover',backgroundPosition:'top',backgroundAttachment:'fixed'}}>

      </section>
      {/* testimony */}
      <section className='m-5'>
           <h3 className='text-center my-5'>Testimony</h3>
           <div className='row container align-items-center'>
            <div className="col-md-1"></div>
          <div className="col-md-5">
            <h3 className='my-5'>Trusted by professionals worldwide.</h3>
            <p className='fs-5' style={{textAlign:'justify'}}>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p className='fs-5' style={{textAlign:'justify'}}>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
            <p className='fs-5' style={{textAlign:'justify'}}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 col-12">
            <div className="row my-3">
              <div className="col-3 "><img height={'150px'} width={'100%'} src="/public/user1.jpeg" alt="user1" /></div>
              <div className="col-3 "><img height={'150px'} width={'100%'} src="/public/user2.jpeg" alt="user2" /></div>
              <div className="col-3 "><img height={'150px'} width={'100%'} src="/public/user3.jpeg" alt="user3" /></div>
              <div className="col-3 "><img height={'150px'} width={'100%'} src="/public/user4.jpeg" alt="user4" /></div>
              <div className="col-3 my-2"><img height={'150px'} width={'100%'} src="/public/user5.jpeg" alt="user5" /></div>
              <div className="col-3 my-2"><img height={'150px'} width={'100%'} src="/public/user6.jpeg" alt="user6" /></div>
              <div className="col-3 my-2"><img height={'150px'} width={'100%'} src="/public/user7.jpeg" alt="user7" /></div>
              <div className="col-3 my-2"><img height={'150px'} width={'100%'} src="/public/user8.jpeg" alt="user8" /></div>
              <div className="col-3 my-2"><img height={'150px'} width={'100%'} src="/public/user9.jpeg" alt="user9" /></div>
              <div className="col-3 my-2"><img height={'150px'} width={'100%'} src="/public/user10.jpeg" alt="user10" /></div>
              <div className="col-3 my-2"><img height={'150px'} width={'100%'} src="/public/user11.jpeg" alt="user11" /></div>
              <div className="col-3 my-2"><img height={'150px'} width={'100%'} src="/public/user12.jpeg" alt="user12" /></div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default LandingPage