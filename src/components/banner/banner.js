import React, { Component } from 'react';
import Darkmode from './darkmode'

class banner extends Component {
    render() {
    return (
    <div class='topBanner'>

        <h1 class='facebookName'>Facebook</h1>
        {/* <input class='searchBar' type='text' placeholder='Youll be able to look up different github projects soon' size='70'></input> */}
        
        <div class="search-container">
            <form action="/action_page.php">
                <input class='searchBar' type="text" placeholder="Youll be able to look up different github projects soon" name="search" />
            </form>
        </div>

        <div class='bannerBtn'>
            <button class='profileBtn'>Profile</button>
            <button class='homeBtn'>Home</button>
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