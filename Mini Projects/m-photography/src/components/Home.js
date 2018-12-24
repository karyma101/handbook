import React from 'react';

const Home = () => {
  return ( 
    <div>
      <header className="v-header">
        <div className="fullscreen-video-wrap">
          <video autoplay="true" loop muted="true">
            <source src="./img/main.mp4" type="video/mp4"/>
          </video>
        </div>

        <div className="header-overlay"></div>

        <div className="header-content">
          <h1>M. Photography</h1>
        </div>
      </header>

      <section className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2 className="text-center">First</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste eius nobis quam eum dignissimos, illum ipsam fugiat voluptates voluptas ea veniam, voluptatum consequatur dicta ratione nostrum modi distinctio magnam!</p>
          </div>
          
          <div className="col-12 col-md-6">
            <h2 className="text-center">Second</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste eius nobis quam eum dignissimos, illum ipsam fugiat voluptates voluptas ea veniam, voluptatum consequatur dicta ratione nostrum modi distinctio magnam!</p>
          </div>
        </div>
      </section>

      {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="./img/social/facebook.png" alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="./img/social/instagram.png" alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="./img/social/linkedin.png" alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div> */}
    </div>
   )
}
 
export default Home;