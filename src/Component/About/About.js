import React, { Component } from 'react';
import Swiper from 'react-id-swiper';


//temporary picture placeholders... will create database to store pictures..or pull from instgram..or elsewhere
import smile from '../../fanpage_images/smile.png';
import banner from '../../fanpage_images/youtube_banner-1.jpg';
import green from '../../fanpage_images/greenScreen.jpg';
import scream from '../../fanpage_images/vrscream.jpg';
import doggo from '../../fanpage_images/zeus.jpg';

export default class About extends Component{

        

    render(){       
        const params = {
            effect: 'coverflow',
            loop: true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            },
            pagination: {
                el: '.swiper-pagination'
            },        
            navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev'
                    }
          };
  

        return(
            <div>
                <div className="about-main-container">
                    <h1>ABOUT ME</h1>
                    <article>
                    Lorem ipsum dolor amet iPhone beard irony skateboard humblebrag plaid. Keytar scenester umami, farm-to-table roof party direct trade wayfarers pug tilde XOXO polaroid cardigan fingerstache kinfolk cray. XOXO selfies helvetica etsy skateboard keytar health goth meggings put a bird on it seitan irony live-edge mumblecore. Vaporware put a bird on it unicorn raw denim listicle, neutra plaid af prism four loko sartorial distillery kogi fingerstache. Pour-over glossier heirloom, 3 wolf moon viral tofu tattooed fam meggings everyday carry bushwick tbh blog Lorem ipsum dolor amet iPhone beard irony skateboard humblebrag plaid. Keytar scenester umami, farm-to-table roof party direct trade wayfarers pug tilde XOXO polaroid cardigan fingerstache kinfolk cray. XOXO selfies helvetica etsy skateboard keytar health goth meggings put a bird on it seitan irony live-edge mumblecore. Vaporware put a bird on it unicorn raw denim listicle, neutra plaid af prism four loko sartorial distillery kogi fingerstache. Pour-over glossier heirloom, 3 wolf moon viral tofu tattooed fam meggings everyday carry bushwick tbh blog shoreditch four dollar toast.
                    </article>                    
                    <article>
                    Fam succulents direct trade vexillologist. Iceland farm-to-table pinterest aesthetic bitters schlitz salvia vinyl knausgaard kogi mustache flexitarian everyday carry. Portland snackwave raw denim, jean shorts yuccie put a bird on it sartorial listicle health goth vinyl pabst. Lumbersexual pinterest gluten-free fingerstache activated charcoal artisan. Pitchfork VHS narwhal, beard salvia cardigan cronut neutra PBRB blog stumptown. Blue bottle af la croix fingerstache man bun semiotics brunch bushwick mumblecore.Fam succulents direct trade vexillologist. Iceland farm-to-table pinterest aesthetic bitters schlitz salvia vinyl knausgaard kogi mustache flexitarian everyday carry. Portland snackwave raw denim, jean shorts yuccie put a bird on it sartorial listicle health goth vinyl pabst. Lumbersexual pinterest gluten-free fingerstache activated charcoal artisan. Pitchfork VHS narwhal, beard salvia cardigan cronut neutra PBRB blog stumptown. Blue bottle af la croix fingerstache man bun semiotics brunch bushwick mumblecore.
                    </article>
                    <article>
                    Butcher austin man braid four loko before they sold out disrupt pug occupy try-hard vegan master cleanse actually crucifix hashtag selfies. Migas ennui slow-carb art party, letterpress retro dreamcatcher truffaut before they sold out distillery hot chicken tbh man braid chillwave. Taiyaki farm-to-table polaroid, lumbersexual man bun godard whatever kinfolk gentrify. Hoodie hammock selvage affogato man braid etsy sustainable bitters lo-fi iceland stumptown art party gochujang disrupt vegan. Snackwave pop-up meh, distillery chartreuse everyday carry tilde heirloom vape truffaut cloud bread waistcoat whatever. Glossier flexitarian you probably haven't heard of them biodiesel tumeric copper mug farm-to-table blog succulents. Aesthetic hammock thundercats master cleanse, echo park meggings coloring book.
                    </article>
                    <p>just adding to commit</p>
                </div>
                <div>
                    <h3>PICTURE GALLERY</h3>
                    <Swiper {...params} className="swiper-container">
                        <div><img src={smile} alt="smiles" height="auto" /></div>
                        <div><img src={banner} alt="banner" height="50vh" /></div>
                        <div><img src={green} alt="green" height="50vh" /></div>
                        <div><img src={scream} alt="scream" height="95vh" /></div>
                        <div><img src={doggo} alt="doggo" height="50vh" /></div>
                    </Swiper>

                </div>
            </div>
        );
    }
}

