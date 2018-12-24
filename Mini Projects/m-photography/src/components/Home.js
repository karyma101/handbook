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

      <section class="main">
        <p>Hello World</p>
      </section>
    </div>
   )
}
 
export default Home;