import React from 'react'
import { Link } from 'react-router-dom'
function LandingPage() {
  return (
    <div>
      {/* landing part */}
      <section style={{width:'100%',height:'100vh',backgroundImage:"url('http://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')",backgroundAttachment:'fixed',backgroundSize:'cover',backgroundPosition:'top'}} className='container-fluid row align-items-center'>
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
            <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="" />
          </div>
        </div>
      </section>
      {/* image */}
      <section style={{height:'500px',width:'100%',backgroundImage:'url("https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg")',backgroundSize:'cover',backgroundPosition:'top',backgroundAttachment:'fixed'}}>

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
              <div className="col-3 "><img height={'150px'} width={'100%'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefdAYZ6uy2rn4ODl9zSL1KwCAhiEPo9Xm-g&s" alt="" /></div>
              <div className="col-3 "><img height={'150px'} width={'100%'} src="https://img.freepik.com/free-photo/designer-working-3d-model_23-2149371896.jpg?semt=ais_hybrid&w=740&q=80" alt="" /></div>
              <div className="col-3 "><img height={'150px'} width={'100%'} src="https://img.freepik.com/free-photo/cheerful-guy-enjoying-outdoor-coffee-break_1262-20005.jpg?semt=ais_hybrid&w=740&q=80" alt="" /></div>
              <div className="col-3 "><img height={'150px'} width={'100%'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHa-KJ-5CHqlzCizT29X2IKzUKJJWcL0EqQ&s" alt="" /></div>
              <div className="col-3 my-2"><img height={'150px'} width={'100%'} src="https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg" alt="" /></div>
              <div className="col-3 my-2"><img height={'150px'} width={'100%'} src="https://img.freepik.com/free-photo/portrait-smiling-young-man_1268-21877.jpg?semt=ais_hybrid&w=740&q=80" alt="" /></div>
              <div className="col-3 my-2"><img height={'150px'} width={'100%'} src="https://cdn.create.vista.com/api/media/small/20030237/stock-photo-cheerful-young-man-over-white" alt="" /></div>
              <div className="col-3 my-2"><img height={'150px'} width={'100%'} src="https://st.depositphotos.com/2309453/3449/i/450/depositphotos_34490345-stock-photo-confident-casual-unshaven-young-man.jpg" alt="" /></div>
              <div className="col-3 my-2"><img height={'150px'} width={'100%'} src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
              <div className="col-3 my-2"><img height={'150px'} width={'100%'} src="https://img.freepik.com/free-photo/african-american-man-working-laptop-man-with-beard-sitting-cafe-drink-tea_1157-48485.jpg" alt="" /></div>
              <div className="col-3 my-2"><img height={'150px'} width={'100%'} src="https://toppng.com/uploads/preview/stock-person-png-stock-photo-man-11563049686zqeb9zmqjd.png" alt="" /></div>
              <div className="col-3 my-2"><img height={'150px'} width={'100%'} src="https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?semt=ais_hybrid&w=740&q=80" alt="" /></div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default LandingPage