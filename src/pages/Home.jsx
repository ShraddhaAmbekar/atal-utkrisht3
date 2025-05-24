import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-12 hero">
             <img className='hero-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHk-t6OuJC399GZyY_ywCN_XidBoW8jdzbAg&s" alt="about1" />
          </div>
          <div className="col-md-6 col-12 hero hero-content text-center">
            <div>
              <h1>The Best School <br /> for Students</h1>
              <br />
              <p>Welcome to Atal Utkrist</p>
              <button className="nevi">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

 
      <div className='container-fluid '>
        <div className='container quote'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eos. Maiores quam tempore voluptates dicta <br /> temporibus debitis, doloremque deserunt eaque!</p>
        </div>
      </div>


  {/* Section 1 */}
<div className="container my-5">
    <div className="row align-items-center my-5">
    <div className="col-md-6 mb-3 mb-md-0">
      <img
        className="img-fluid img-con"
        src="https://t3.ftcdn.net/jpg/03/30/09/98/360_F_330099838_43eEyvA61UQ6ijDcA3uuQgEjiBihvzJp.jpg"
        alt="info1"
      />
    </div>
    <div className="col-md-6">
      <div className="info-content">
        <h2>Lorem ipsum dolor sit.</h2>
        <h5 className="quote-text">
          Lorem ipsum d Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam placeat error rerum nobis perspiciatis eos atque quibusdam veritatis inventore velit. Explicabo id rem ex, maxime ratione quam nesciunt earum temporibus..
        </h5>
      </div>
    </div>
  </div>
</div>

  {/* Section 2 - image right on desktop */}
  <div className="container my-5" >
  <div className="row align-items-center">
    <div className="col-md-6 order-md-2 mb-3 mb-md-0">
      <img
        className="img-fluid img-con"
        src="https://t3.ftcdn.net/jpg/03/30/09/98/360_F_330099838_43eEyvA61UQ6ijDcA3uuQgEjiBihvzJp.jpg"
        alt="info2"
      />
    </div>
    <div className="col-md-6 order-md-1 my-5">
      <div className="info-content">
        <h2>About Us</h2>
        <h5 className="quote-text">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque error sit ullam sapiente aliquid quis quas eligendi unde, harum dolorem explicabo recusandae facilis reprehenderit expedita cum. Itaque impedit nemo magnam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, hic.
        </h5>
      </div>
    </div>
  </div>
  </div>

  {/* Section 3 */}
  <div className="container my-5">
  <div className="row align-items-center my-4">
    <div className="col-md-6 mb-3 mb-md-0">
      <img
        className="img-fluid img-con"
        src="https://t3.ftcdn.net/jpg/03/30/09/98/360_F_330099838_43eEyvA61UQ6ijDcA3uuQgEjiBihvzJp.jpg"
        alt="info3"
      />
    </div>
    <div className="col-md-6">
      <div className="info-content">
        <h2>Lorem ipsum dolor sit amet consectetur,</h2>
        <h5 className="quote-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur eius voluptas asperiores laborum quam nulla animi, enim delectus, corporis dolores sint, veritatis ipsam nobis ab. Ipsa quibusdam libero porro alias. At quo aspernatur totam necessitatibus nemo quos eos consequuntur ullam?
        </h5>
      </div>
    </div>
  </div>
</div>


      <div className="container home-img2 py-5">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatQuhLqBBnwd4ajrfXhHYWzTkJegAu16xhg&s" alt="home-page-2" />
      </div>
    </div>
  )
}

export default Home
