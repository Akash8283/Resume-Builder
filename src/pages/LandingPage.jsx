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
      <section>
        <h3 className='text-center'>Tools</h3>
      </section>
      {/* image */}
      {/* testimony */}
    </div>
    
  )
}

export default LandingPage