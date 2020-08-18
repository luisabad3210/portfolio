import React, { Component } from 'react';

class Darkmode extends Component {

    render() {
        return (
            <div className='dropdown'>
                <button className='settingBtn'>Settings</button>
                <div className='dropdown-content'>
                    <div className='darkmode-Name'>Dark Mode:</div>
                    <label className="switch">
                        <input 
                            checked={this.props.isDarkMode}
                            onChange={this.props.toggleDarkMode}
                            type="checkbox" 
                        />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        );
    }
}


export default Darkmode