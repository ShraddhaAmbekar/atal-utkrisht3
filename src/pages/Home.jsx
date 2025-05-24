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
  <div className="container other-section bg-white">
        <div className="row">
          <div className="col-md-6 col-12">
           <div className='main-img'>
              <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHk-t6OuJC399GZyY_ywCN_XidBoW8jdzbAg&s" alt="about1" />
           </div>
          </div>
          <div className="col-md-6 col-12 p-5">
              <h1>MISSION</h1>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corrupti libero quidem neque obcaecati ad distinctio natus aperiam voluptatum ex maiores unde, blanditiis molestiae quo optio? Cumque illum eius magnam facilis minima beatae quo quisquam provident consectetur alias sapiente numquam ex, commodi soluta sint ipsum voluptatum magni tempora assumenda voluptatibus officia? Exercitationem consequuntur odit tempora voluptas explicabo voluptatem eius porro?</p>
            </div>
        </div>
      </div>
        <div className="container other-section bg-white">
        <div className="row">
       
          <div className="col-md-6 col-12 order-md-0 order-1 p-5">
      
              <h1>VISION</h1>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti sequi ea harum ipsa, eaque sit dolorum ipsam voluptatibus? Ipsa voluptates ut voluptatem, quasi adipisci sunt expedita consectetur in aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro aut accusantium quas sit deleniti? Ducimus magnam eum aut voluptas? </p>
             
            
          </div>
             <div className="col-md-6 col-12">
              <div className='main-img'>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHk-t6OuJC399GZyY_ywCN_XidBoW8jdzbAg&s" alt="about1" />
          </div>
        </div></div>
      </div>
      <div className="container other-section bg-white">
        <div className="row">
          <div className="col-md-6 col-12">

            <div className='main-img'>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHk-t6OuJC399GZyY_ywCN_XidBoW8jdzbAg&s" alt="about1" />
          </div>
          </div>
          <div className="col-md-6 col-12 p-5">
           
              <h1>PRINCIPAL'S MESSAGE</h1>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit reprehenderit est facilis? Deserunt quia consectetur, culpa adipisci quos esse sapiente, laborum iure, distinctio expedita possimus quae mollitia? Iure odio nihil ullam ducimus ex officiis esse, perspiciatis repudiandae! Nulla, cum quae.</p>
             
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
