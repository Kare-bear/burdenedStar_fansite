import React, { Component } from "react";
import "./App.css";
import { Link } from 'react-router-dom';

import youtube from "./fanpage_images/youtube.png";
import insta from "./fanpage_images/instagram.png";
import facebook from "./fanpage_images/facebook.png";
import twitter from "./fanpage_images/twitter.png";

import Routes from "./routes";

class App extends Component {
  

  render() {
    return (
      <div className="App">        
        <header>
        <div className="App-header">
          <nav>
            <ul className="App-nav-list">
              <Link to = "/"><li>Home</li></Link>
              <Link to = "/about"><li>About</li> </Link>
              <Link to = "/store"><li>Store(coming soon)</li></Link>
            </ul>
          </nav>
            <div>
              <h1>BURDENEDSTAR 1</h1>
                <div className="App-tagline">
                    <p>
                       Gamers don't die, they <span className="App-rage">RAGE</span>{" "}
                       quit!
                    </p>
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
          <Routes/>
        </div>
      </div>
    );
  }
}

export default App;
