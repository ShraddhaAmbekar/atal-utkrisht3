import React from 'react';
import './Other.css'
import { FaUserFriends, FaChalkboardTeacher, FaLaptop } from "react-icons/fa";

const About = () => {

  const statsData = [
  {
    icon: <FaUserFriends size={40} />,
    number: "275",
    label: "Student Strength",
    bgColor: "rgb(216, 245, 225)",
    color:"#000000"
  },
  {
    icon: <FaChalkboardTeacher size={40} />,
    number: "22",
    label: "Teaching Staff",
    bgColor: "rgb(206, 231, 234)",
    color:"#000000"
  },
  {
    icon: <FaLaptop size={40} />,
    number: "7",
    label: "Support Staff",
    bgColor:  "rgb(216, 245, 225)",
    color:"#000000"
  },

];
  return (
    <div className='page-size'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-12 hero">
            <img className='hero-img' src="/assets/images/about.jpg" alt="about1" />
          </div>
          <div className="col-md-6 col-12 hero hero-content text-center">
            <div>
              <h1 className=''>ABOUT US</h1>
              <p>we combine expert teaching with value-based learning to shape confident, ethical, and future-ready students , about us headline</p>

            </div>
          </div>
        </div>
      </div>

      <h1 className='text-center my-5'> Our Mission and Vision</h1>
      <div className="container-fluid my-5">
        <div className="row other-section">
          <div className="col-md-6 col-12">
            <div className='main-img'>
              <img src="/assets/images/mission.jpg" alt="about1" />
            </div>
          </div>
          <div className="col-md-6 col-12 p-4">
            <h3>Mission</h3>
       
            <p>our mission is to provide inclusive, value-based education that empowers students to thrive academically, socially, and ethically. We are committed to nurturing well-rounded individuals by integrating modern learning in science, arts, and technology with a strong foundation in cultural pride and leadership. Guided by experienced educators, we create a supportive environment that encourages critical thinking, innovation, and community spirit. Situated in the remote hills of Uttarkashi, we strive to bridge rural-urban educational gaps and prepare confident, compassionate youth ready to lead and contribute meaningfully to a changing world.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid other-section my-5">
        <div className="row">
          <div className="col-md-6 col-12 order-md-0 order-1 p-4">
            <h3>Vision</h3>
    
            <p>We envision being a beacon of transformative education in the Himalayas—empowering students to lead with integrity, learn with purpose, and honor their roots. We aim to nurture future-ready minds who thrive through knowledge, uphold values, and contribute meaningfully to their communities, bridging tradition with innovation to shape tomorrow’s changemakers. </p>


          </div>
          <div className="col-md-6 col-12">
            <div className='main-img'>
              <img src="/assets/images/vision.jpg" alt="about1" />
            </div>
          </div></div>
      </div>
      <div className="container-fluid other-section my-5">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className='main-img'>
              <img src="/assets/images/principal.jpg" alt="about1" />
            </div>
          </div>
          <div className="col-md-6 col-12 p-4 ">
           <h3>Principal's Message</h3>
     
            <p>At AUGIC Geonla, we believe every child holds a universe of potential. Our mission is to ignite curiosity, nurture values, and build confident, compassionate minds. In the lap of the Himalayas, we blend tradition with innovation to shape not just scholars—but thoughtful citizens. With teamwork, dedication, and a vision rooted in purpose, we’re preparing our students to rise, lead, and make a lasting impact on the world.</p>
          </div>
        </div>
      </div>
    <div className="stats-section">
      {statsData.map((item, index) => (
        <div
          key={index}
          className="stat-box"
          style={{ backgroundColor: item.bgColor,color: item.color}}
        >
          <div className="icon">{item.icon}</div>
          {item.number && <h2  style={{color: item.color}}>{item.number}</h2>}
          <p className='text-center'>{item.label}</p>
          
        </div>
      ))}
    </div>
     
    </div>
  )
}

export default About
