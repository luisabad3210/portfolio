import React, { Component } from 'react';



class header extends Component {
    render() {
    return (
    <div className='headerContainer'>
        <div class='backgroundImg'>
            <div class='profilePic'></div>
            <div class='name'>Luis Abad</div>
            <div class='headerBtn'>
                <button id='contactBtn'>Contact</button>
                <button id='subscibeBtn'>Subscribe</button>

                    {/* ------- contact pop up ----------- */}
                    
                <div id="myModal" class="modal">
                    {/* <!-- Modal content --> */}
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <div>Contact Information: <br></br></div>
                        <p>Phone: 678-643-8317<br></br>Email: Luisabad3210@gmail.com</p>
                    </div>
                </div>

                    {/* ------- subscribe pop up ----------- */}

                <div id='myModal-2' class='modal-2'>
                    {/* <!-- Modal content --> */}
                    <div class='modal-2-content'>
                        <span class='close-2'>&times;</span>
                        <div>Subscribtion Coming Soon <br></br></div>
                        <p>You'll be able to recieve notifications when ever a new project is uploaded</p>
                    </div>
                </div>
                
            </div>
        </div>



        <div class='mediaBanner'>
            <div class='mediaContainer'>
                <a class ='linkedin' href='https://www.linkedin.com/in/luis-abad-a00180183/'>LinkedIn</a>
                <a class ='facebook' href='https://www.facebook.com/luis.abad.10690203'>Facebook</a>
                <a class ='instagram' href='https://www.instagram.com/___urbanlife___/'>Instagram</a>
                <a class ='twitter' href='https://twitter.com/___urbanlife___'>Twitter</a>
            </div>
        </div>
    </div>
    )
    }
}

export default header;
