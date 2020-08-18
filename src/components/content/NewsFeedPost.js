import React, {Component} from 'react';

class NewsFeedPost extends Component {

    state = {
        isCommenting: false,
    }

    render() {
        return (
            <div className='postBox'>
                <div className='container'>
                    <div><i>Luis Abad</i> created a post</div>
                    <div>{this.props.feed.date}</div>
                    <hr></hr>
                    <div>{this.props.feed.body}</div>
                    <hr></hr>
                    <div>
                        {this.props.feed.likes}
                            {/* likes button */}
                        <button
                            className='likeButton'
                            onClick = {() => {
                            this.props.magicalFunction(this.props.feed, this.props.index)}}
                        >Likes</button>

                        {this.props.feed.comment}
                            {/* comment button */}
                        <button
                            className='commentButton'
                            onClick ={() => {
                                let x = this.state.isCommenting;
                                this.setState({isCommenting: !x});
                            }}
                        >Comment</button>

                        <hr></hr>
                        {this.state.isCommenting &&  <div><input type='text' placeholder='Write a comment'></input></div>}

                    </div> 
                </div>
            </div>
        )
    }
}

export default NewsFeedPost;



