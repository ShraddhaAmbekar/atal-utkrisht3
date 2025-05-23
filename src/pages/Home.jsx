import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <div>

<div className="container-fluid">
  <div className="row">
    {/* Image Section */}
    <div className="col-md-6 col-12 hero hero-img"></div>

    {/* Content Section */}
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


         <div className="container information">
        <div >
          <img className="img-con"
            src="https://t3.ftcdn.net/jpg/03/30/09/98/360_F_330099838_43eEyvA61UQ6ijDcA3uuQgEjiBihvzJp.jpg"
            alt="info1"
          />
        </div>
        <div className='info-content'>
          <h2>Lorem ipsum dolor sit.
          </h2><h5 className='quote-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique cum non repellat ab ipsum necessitatibus dolore ratione, architecto est incidunt eius! Earum necessitatibus iure a deserunt porro distinctio! Amet aut quo rerum illum quaerat velit praesentium maiores? Sunt, ipsam. Quaerat!
          </h5>
        </div>

        <div className="order-0 order-md-1">
          <img className="img-con"
            src="https://t3.ftcdn.net/jpg/03/30/09/98/360_F_330099838_43eEyvA61UQ6ijDcA3uuQgEjiBihvzJp.jpg" alt='info2'
          />
        </div>
        <div className='order-0 oder-md-1'>
          <div className='info-content'>
            <h2>About Us</h2>
            <h5 className='quote-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem deserunt nulla reiciendis, porro ex sunt reprehenderit nostrum, tenetur quam vitae necessitatibus totam praesentium minima qui recusandae dolorem numquam, ullam nisi in eius aut? Debitis neus? Pariatur asperiores dicta iusto dignissimos, vitae officiis voluptas, non commodi debitis mollitia beatae id labore rem? Consectetur quasi incidunt saepe accusamus, em reprehenderit voluptatem eos quis dicta, necessitatibus pariatur doloribus! Expedita aspernatur consequatur magni culpa natus eius tempora totam atque vitae?


            </h5>
          </div>
        </div>
        <div className="order-md-1">
          <img
            src="https://t3.ftcdn.net/jpg/03/30/09/98/360_F_330099838_43eEyvA61UQ6ijDcA3uuQgEjiBihvzJp.jpg"
            alt="info3"
          />
        </div>
        <div className='info-content order-md-1'>
          <h2>Lorem ipsum dolor sit amet consectetur,

          </h2><h5 className='quote-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, iure. Eligendi est quas necessitatibus temporibus ex quia amet atque. Pariatur iure, nihil dolorem at eaque non  aspernatur laudantium maxime soluta. Officiis esse tenetur quisquam, consectetur maxime pariatur est? Iure iste provident neque, illum voluptate, cumque fuga, qui perspiciatis alias eum porro ducimus asperiores quae omnis nihil corrupti. Cupiditate eaque quisquam accusamus, iure quos tempore provident repudiandae sapiente, voluptate quibusdam voluptatem ex nostrum adipisci quod, nobis ratione quaerat asperiores. Autem et excepturi voluptates quod animi!</h5>
        </div>

      </div>

       <div className="container home-img2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatQuhLqBBnwd4ajrfXhHYWzTkJegAu16xhg&s" alt="home-page-2" />
       </div>
    </div>
  )
}

export default Home
