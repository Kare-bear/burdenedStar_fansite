import React, { Component } from 'react';


import Banner from './Banner';
import Gallery from '../PictureGallery/pictureGallery'

class Homepage extends Component{

    render(){
        return(
        <div className='home-container'>
            <Banner/>
            <div>
                <Gallery/>
            </div>
        </div>
        )
    }
}
export default Homepage;