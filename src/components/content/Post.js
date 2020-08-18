import React, {Component} from 'react';

class NewFeedPost extends Component {

    state = {
        response: '',
    }

    render() {
        return (
            <div className='createBox'>
                <div className='container'>
                    <div className='create'>| Create a Post  |</div>
                    <hr></hr>
                    <textarea className='post' placeholder='What are you thinking?'
                        onChange = {(event)=>{
                            let text = event.target.value;
                            console.log(text)
                            this.setState({response: text});
                            
                        }}
                    ></textarea>
                    <hr></hr>
                    <div className='uploadContainer'>
                        <button className='imageBtn'>Upload Image</button> <button className='videoBtn'>Upload Video</button>
                    </div>
                    <hr></hr>
                    <div className='postContainer'>
                        <button className='postBtn'
                            onClick = {() => {
                                console.log('clicked')
                                this.props.transferPost(this.state.response)
                                // alert('Your post went through')
                            }}
                        >Post</button>
                    </div>
                </div>
        </div>
        )
    }
}

export default NewFeedPost
