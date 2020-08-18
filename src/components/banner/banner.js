import React, { Component } from 'react';
import Darkmode from './darkmode'

class banner extends Component {
    render() {
    return (
    <div className='topBanner'>
        <h1 className='facebookName'>Facebook</h1>
        <div className="search-container">
            <form action="/action_page.php">
                <input className='searchBar' type="text" placeholder="Youll be able to look up different github projects soon" name="search" />
            </form>
        </div>

        <div className='bannerBtn'>
            <button className='profileBtn'>Profile</button>
            <button className='homeBtn'>Home</button>
            <Darkmode 
                isDarkMode={this.props.isDarkMode}  
                toggleDarkMode={this.props.toggleDarkMode} 
            />
        </div>
    </div>
    )
    }
}

export default banner;