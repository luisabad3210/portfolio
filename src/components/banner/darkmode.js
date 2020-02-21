import React, { Component } from 'react';

class Darkmode extends Component {

    render() {
        return (
            <div class='dropdown'>
                <button class='settingBtn'>Settings</button>
                <div class='dropdown-content'>
                    <div class='darkmode-Name'>Dark Mode:</div>
                    <label class="switch">
                        <input 
                            checked={this.props.isDarkMode}
                            onChange={this.props.toggleDarkMode}
                            type="checkbox" 
                        />
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
        );
    }
}


export default Darkmode