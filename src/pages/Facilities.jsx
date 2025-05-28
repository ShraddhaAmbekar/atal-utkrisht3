import React from 'react'

const Facilities = () => {
  return (
   <div className="page-size">
     <div className="container-fluid">
      <div className="row">
        {/* Image Section */}
        <div className="col-md-6 col-12 hero">
          <img className='hero-img' src="/assets/images/facility.jpg" alt="about1" />
        </div>

        {/* Content Section */}
        <div className="col-md-6 col-12 hero hero-content text-center">
          <div>
            <h1>Facilities</h1>
            <br />
            <p> Our campus is designed to ignite inquiry, nurture imagination, and strengthen self-belief in every learner.</p>
          </div>
        </div>
      </div>
    </div>

    
      <div className="container-fluid other-section my-5">
        <div className="row">
          <div className="col-md-6 col-12 order-md-0 order-1 p-5">
            <h3>Laboratory</h3>
       
            <p>Our science laboratories are dynamic learning zones where theory meets hands-on discovery. Fully equipped for Physics, Chemistry, and Biology, these labs ignite curiosity, encourage experimentation, and help students develop scientific thinking through real-world application. </p>
          </div>
          <div className="col-md-6 col-12">
            <div className='main-img'>
              <img src="/assets/images/laboratory.jpg" alt="about1" />
            </div>
          </div></div>
      </div>
      <div className="container-fluid other-section my-5">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className='main-img'>
              <img src="/assets/images/library.jpg" alt="about1" />
            </div>
          </div>
          <div className="col-md-6 col-12  p-5">
            <h3>Library</h3>
         
            <p>Our library is a gateway to imagination and insight — stocked with diverse books, reference materials, and resources that support academic success and a lifelong love for reading. It’s a quiet haven where students explore, discover, and grow beyond textbooks.</p>
          </div>
        </div>
      </div>
    <div className="container-fluid my-5">
        <div className="row other-section">
         
          <div className="col-md-6 col-12  order-md-0 order-1  p-5">
            <h3>Classrooms</h3>
        
            <p>Classrooms at AUGIC Geonla are more than just learning spaces — they are hubs of innovation and interaction. Equipped with smart technology and designed for engagement, each classroom empowers students to think critically, ask questions, and participate actively in their education.</p>
          </div>

           <div className="col-md-6 col-12">
            <div className='main-img'>
              <img src="/assets/images/classroom.jpg" alt="about1" />
            </div>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Facilities
