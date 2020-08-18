import React, { Component } from 'react';
import Post from './Post';
import NewsFeed from './NewsFeed';
import icon1 from './images/react.png';
import icon2 from './images/node.jpg';
import icon3 from './images/js.png';
import icon4 from './images/html.png';
import icon5 from './images/css.png';
import icon6 from './images/git.png';
import icon7 from './images/terminal.png';
import icon8 from './images/uiux.png';

class content extends Component {
    render() {
    return (
        <div className='contentContainer'>

            <div className='ContentRightColumn'>
                <Post 
                transferPost = {this.props.transferPost}
                />

                <NewsFeed 
                    content={this.props.content}
                    magicalFunction = {this.props.magicalFunction}
                />
            </div>
        
            <div className='ContentLeftColumn'>
                <div className='introBox'>
                    <div className='container'>
                        <div className='intro'> | Intro |</div>
                        <hr></hr>
                        <p className='bio'>Self-motivated developer with a passion for product design. With a keen 
                        eye for details, proven experience, imagination and who sees solutions and challenges 
                        where others see problems. I am also an out of the box thinker, a disciplined and 
                        devoted worker and an individual that is good at sticking to deadlines. </p>
                        <hr></hr>
                        <p className='studied'>Studied at <a href='https://www.digitalcrafts.com/atlanta-campus.html'><i>Digital Crafts</i></a></p>
                        <p className='city'>Current city <a className='city' href='https://www.google.com/maps/place/Atlanta,+GA/@33.7676338,-84.5606888,11z/data=!3m1!4b1!4m5!3m4!1s0x88f5045d6993098d:0x66fede2f990b630b!8m2!3d33.7489954!4d-84.3879824'><i>Atlanta</i></a></p>
                        <p className='hometown'>HomeTown <a className='hometown' href='https://www.google.com/maps/place/New+York,+NY/@40.6971494,-74.2598655,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728'><i>New York</i></a></p>
                    </div>
                </div>



                <div className= 'skillsBox'>
                    <div className='container'>
                        <div className='skills'>| Skills |</div>
                        <hr></hr>
                        <div className='skillsIconContainer'>
                            <img className='icon1' src={icon1} alt='react logo'width='200' height='200'/>
                            <img className='icon2' src={icon2} alt='node logo' width='200' height='200'/>
                        </div>
                    </div>
                </div>



                <div className='badgeBox'>
                    <div className='container'>
                        <div className='badges'>| Badges |</div>
                        <hr></hr>

                        <div className='badgeIconContainer'>
                        <img className='icon3' src={icon3} alt='javascript icon' width='125' height='125' />
                        <img className='icon4' src={icon4} alt='html icon' width='125' height='125' />
                        <img className='icon5' src={icon5} alt='css icon' width='125' height='125' />
                        <img className='icon6' src={icon6} alt='git logo'width='100' height='100'/>
                        <img className='icon7' src={icon7} alt='terminal logo' width='100' height='100'/>
                        <img className='icon8' src={icon8} alt='uiux logo' width='130' height='80'/>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        )
    }
}

export default content;