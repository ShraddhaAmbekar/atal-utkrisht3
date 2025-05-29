import React from 'react'

const Contact = () => {
  return (
<div className='page-size'>
  <div className="container-fluid">
  <div className="row">
    {/* Image Section */}
    <div className="col-md-6 col-12 hero">
      <img className='hero-img' src="/assets/images/contact.jpg" alt="about1" />
    </div>

    {/* Content Section */}
    <div className="col-md-6 col-12 hero hero-content text-center">
      <div>
        <h1>Contact Us</h1>
        <br />
       
      </div>
    </div>


  </div>
</div>

<div className='container-fluid'> 
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.7335788198125!2d78.299451275579!3d30.69777127460122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908eb93a9a9bab3%3A0x64d14546ceb91e6b!2sAtal%20Utkrisht%20Government%20Inter%20College%2C%20Geonla!5e0!3m2!1sen!2sin!4v1748360280090!5m2!1sen!2sin" width="100%"  height="450px" style={{border:0, margin:'50px 0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
</div>
</div>
  )
}

export default Contact
