import React, { Component } from "react";
import "./App.css";

import youtube from "./fanpage_images/youtube.png";
import insta from "./fanpage_images/instagram.png";
import facebook from "./fanpage_images/facebook.png";
import twitter from "./fanpage_images/twitter.png";


import Routes from "./routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }
  render() {
    return (
      <div className="App">        
        <header>
        <div className="App-header">
        {/* <video loop autoPlay className="App-header-video">
          <source src="https://media.giphy.com/media/l1J3rGigrYfx8aKqI/giphy.mp4" type='video/mp4'/>
          <source src="https://media.giphy.com/media/l1J3rGigrYfx8aKqI/giphy.mp4" type='video/ogg'/>
          Your browser does not support the video.
        </video> */}
          <nav>
            <ul className="App-nav-list">
              <li>Home</li>
              <li>About</li>
              <li>Store(coming soon)</li>
            </ul>
          </nav>
          <div>
            <h1>BURDENEDSTAR 1</h1>
            <div className="App-tagline">
              <div>
                <p>
                  Gamers don't die, they <span className="App-rage">RAGE</span>{" "}
                  quit!
                </p>
              </div>
            </div>
          </div>
          <div className="App-social-links">
            <div>
              <a href="https://www.youtube.com/channel/UCXhSilRTf8KjI-YUBQDOt6g">
                <img src={youtube} alt="youtube logo" height="65vh" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/burdenedstar1/?hl=en">
                <img src={insta} alt="instagram logo" height="60vh" />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/BurdenedStar">
                <img src={facebook} alt="facebook logo" height="65vh" />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/burdenedStar1">
                <img src={twitter} alt="twitter logo" height="60vh" />
              </a>
            </div>
          </div>
          </div>
        </header>
        <div className="App-main-container">
          {/* <img src="http://worldartsme.com/images/construction-tape-clipart-1.jpg" className="Tape" alt="tape"/> */}
          <div>
            <h2>BURDENEDSTAR1</h2>
          </div>
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
