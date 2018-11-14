import React, { Component } from 'react';
import './App.css';

import youtube from './fanpage_images/youtube.png';
import insta from './fanpage_images/instagram.png';
import facebook from './fanpage_images/facebook.png';
import twitter from './fanpage_images/twitter.png';
import Routes from './routes';

class App extends Component {
      constructor(props){
        super(props);
        
        this.state = {
          // videoURL: 'https://www.videvo.net/videvo_files/converted/2013_10/preview/Background_08.mov70423.webm'
        }
      }
  render() {
    return (
      <div className="App">
      {/* <video id="background-video" loop autoPlay>
          <source src={this.state.videoURL} type='video/mp4'/>
          <source src={this.state.videoURL} type='video/ogg'/>
          Your browser does not support the video.
          </video> */}
        <header className="App-header">

          
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
                <div><p>Gamers don't die, they <span className="App-rage">RAGE</span> quit!</p></div>                
              </div>
          </div>
          <div className="App-social-links">
            <div><a href="https://www.youtube.com/channel/UCXhSilRTf8KjI-YUBQDOt6g"><img src={youtube} alt="youtube logo" height="65vh"/></a></div>
            <div><a href="https://www.instagram.com/burdenedstar1/?hl=en"><img src={insta} alt="instagram logo" height="60vh"/></a></div>
            <div><a href="https://www.facebook.com/BurdenedStar"><img src={facebook} alt="facebook logo" height="65vh"/></a></div>
            <div><a href="https://twitter.com/burdenedStar1"><img src={twitter} alt="twitter logo" height="60vh"/></a></div>
          </div>
        </header>
        <div>
        <img src="http://worldartsme.com/images/construction-tape-clipart-1.jpg" className="Tape" alt="tape"/>
          <h1>BURDENEDSTAR 1</h1>
          <h2>Fan Page</h2>
          <h3>***UNDER CONSTRUCTION***</h3>
          <Routes/>
        </div>
      </div>
    );
  }
}

export default App;
