import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <div className='page-size'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-12 hero">
            <img className='hero-img' src="/assets/images/hero-2.jpg" alt="about1" />
          </div>
          <div className="col-md-6 col-12 hero hero-content text-center">
            <div>
              <h1><strong>Welcome to</strong> <br /> Atal Utkrist Government Inter College Genwla </h1>
              <br />
              <p>Nurturing Excellence and Integrity in Every Young Mind, Inside and Beyond the Classroom.</p>
              <button className="nevi">Contact Us</button>
            </div>
          </div>
        </div>
      </div>


      <div className='container-fluid'>
        <div className='container quote'>
          <p>Guiding Young Minds with Purpose and Pride From the classroom to the community, AUGIC Genwla fosters excellence and ethical leadership.
          </p>
        </div>
      </div>


      {/* Section 1 */}
      <div className="container other-section bg-white">
        <div className="row">
          <div className="col-md-6 col-12 img-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSDkXcp-MGFLpkTE6Mcu0hk8U-ln4oTTfhA&s" alt="about1" />
          </div>

          <div className="col-md-6 col-12">
            <h1>Himalayan Heart. National Standards. Future-Ready Minds.</h1>
            <br />
            <p>

              Atal Utkrisht Government Inter College, Genwla (Block Dunda, Uttarkashi) isn’t just a school — it’s a launchpad for dreams in the Himalayan hills.
              With CBSE-affiliated, English-medium education, smart classrooms, modern labs, and a focus on sports, arts, and digital learning, we empower rural youth to think big and lead boldly. Inspired by Shri Atal Bihari Vajpayee’s vision, we blend tradition with transformation — shaping confident, value-driven leaders for tomorrow’s Uttarakhand.</p>
          </div>
        </div>
      </div>
      <div className="container other-section bg-white">
        <div className="row">
          <div className="col-md-6 col-12 order-md-0 order-1">
            <h1>About Us</h1>
            <br />
            <p>Established in 1958 and nestled in the serene hills of Uttarkashi, Atal Utkrisht Government Inter College, Genwla stands as a proud symbol of rural educational excellence. From its roots as a high school to its upgrade as an Intermediate College in 1976, the institution has consistently empowered generations with knowledge, values, and vision.

              Today, with CBSE affiliation (since 2021), modern infrastructure, dedicated faculty, and a curriculum rich in languages, sciences, social sciences, and the arts — we nurture 271 bright young minds to rise beyond boundaries.

              Guided by the ideals of Shri Atal Bihari Vajpayee, we’re not just educating students — we’re shaping the future of Uttarakhand, one inspired learner at a time.</p>
          </div>
          <div className="col-md-6 col-12 img-container ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSDkXcp-MGFLpkTE6Mcu0hk8U-ln4oTTfhA&s" alt="about1" />
          </div>
        </div>
      </div>
      <div className="container other-section bg-white">
        <div className="row">
          <div className="col-md-6 col-12 img-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSDkXcp-MGFLpkTE6Mcu0hk8U-ln4oTTfhA&s" alt="about1" />
          </div>
          <div className="col-md-6 col-12 ">
            <h1>Why AUGIC Genwla Stands Out</h1>
            <br />
            <p>
              At Atal Utkrisht Government Inter College, Genwla, we blend tradition with innovation to shape bright futures in the heart of rural Uttarakhand. Set against the scenic backdrop of Uttarkashi, our institution is a space where values, vision, and vibrant learning come together.

              What makes us unique is our holistic approach — experienced and caring educators who mentor beyond the textbook, smart classrooms and well-equipped science labs that rival urban schools, and a strong focus on character-building, creativity, and community.

              Here, students don’t just prepare for exams — they prepare for life. With personalized attention and a nurturing environment, AUGIC Genwla empowers every student to rise, lead, and create meaningful change.</p>
          </div>
        </div>
      </div>


      <div className="container home-img2 mb-5">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatQuhLqBBnwd4ajrfXhHYWzTkJegAu16xhg&s" alt="home-page-2" />
      </div>
    </div>
  )
}

export default Home
