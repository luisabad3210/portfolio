import React, {Component} from 'react';

class NewFeedPost extends Component {

    state = {
        response: '',
    }

    render() {
        return (
            <div class='createBox'>
                <div class='container'>
                    <div class='create'>| Create a Post  |</div>
                    <hr></hr>
                    <textarea class='post' placeholder='What are you thinking?'
                        onChange = {(event)=>{
                            let text = event.target.value;
                            console.log(text)
                            this.setState({response: text});
                            
                        }}
                    ></textarea>
                    <hr></hr>
                    <div class='uploadContainer'>
                        <button class='imageBtn'>Upload Image</button> <button class='videoBtn'>Upload Video</button>
                    </div>
                    <hr></hr>
                    <div class='postContainer'>
                        <button class='postBtn'
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
