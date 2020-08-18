import React, { Component } from 'react';



class header extends Component {
    render() {

    const openContactModal = () => {
        let modal = document.getElementById("ContactModal");
        modal.style.display = "block";
    }

    const closeContactModal = () => {
        let modal = document.getElementById("ContactModal");
        modal.style.display = "none";
    }


    const openSubModal = () => {
        let modal = document.getElementById("subscribeModal");
        modal.style.display = "block";
    }

    const closeSubModal = () => {
        let modal = document.getElementById("subscribeModal");
        modal.style.display = "none";
    }
    
    return (
    <div className='headerContainer'>
        <div className='backgroundImg'>
            <div className='profilePic'></div>
            <div className='name'>Luis Abad</div>
            <div className='headerBtn'>
                <button id='contactBtn' onClick={()=>{openContactModal()}}>Contact</button>
                <button id='subscibeBtn' onClick={()=>{openSubModal()}}>Subscribe</button>

                    {/* ------- contact pop up ----------- */}
                    
                <div id="ContactModal" className="modal">
                    {/* <!-- Modal content --> */}
                    <div className="modal-content">
                        <span className="close" onClick={()=>{closeContactModal()}}>&times;</span>
                        <div>Contact Information: <br></br></div>
                        <p>Phone: 678-365-6548<br></br>Email: Luisabad3210@gmail.com</p>
                    </div>
                </div>

                    {/* ------- subscribe pop up ----------- */}

                <div id='subscribeModal' className='modal-2'>
                    {/* <!-- Modal content --> */}
                    <div className='modal-2-content'>
                        <span className='close-2' onClick={()=>{closeSubModal()}}>&times;</span>
                        <div>Subscribtion Coming Soon <br></br></div>
                        <p>You'll be able to recieve notifications when ever a new project is uploaded</p>
                    </div>
                </div>
                
            </div>
        </div>



        <div className='mediaBanner'>
            <div className='mediaContainer'>
                <a className ='linkedin' href='https://www.linkedin.com/in/luis-abad-a00180183/'>LinkedIn</a>
                <a className ='facebook' href='https://www.facebook.com/luis.abad.10690203'>Facebook</a>
                <a className ='instagram' href='https://www.instagram.com/___urbanlife___/'>Instagram</a>
                <a className ='twitter' href='https://twitter.com/___urbanlife___'>Twitter</a>
            </div>
        </div>
    </div>
    )
    }
}

export default header;
