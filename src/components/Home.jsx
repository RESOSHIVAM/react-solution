import React from "react";
import vg from "../assets/vg.jpg";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Codite</h1>
          <p>Solution to all your problems.</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            adipisci excepturi neque ratione eos nulla pariatur beatae aperiam
            nam ab!
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            obcaecati nobis qui nesciunt temporibus doloremque. Quod non impedit
            obcaecati dignissimos sapiente voluptatum quae perspiciatis enim, ab
            nulla quam, quidem ad.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div className="brand-container">
          <div className="brands-header">
            <h1 className="brands-title">Brands</h1>
          </div>

          <article className="brand-icons">
            <div className="brand-icon" style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div className="brand-icon" style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div className="brand-icon" style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div className="brand-icon" style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
