import React, { Component } from 'react';
import './App.css';
import Banner from './components/banner/banner.js';
import Header from './components/header/header.js';
import Content from './components/content/content';
import projectOne from './components/content/images/ProjectOne.png';
import projectTwo from './components/content/images/ProjectTwo.png';

function createNewsFeed(date, body, comments, likes) {
  return {
    date,
    body,
    comments,
    likes
  };
}
class App extends Component {
  state = {
    isDarkMode: false,
    index: null,
    feeds: [
      createNewsFeed('Tue Feb 04 2020', 'Welcome to my portfolio page. Before you go on, this page is best viewed on a  screen width of 1500px or a 13inch MacBook Pro. Feel free to explore around by writing on my portfolio wall, liking, commenting, and even try out dark-mode in the settings. Have fun! :)', [], 0),
      createNewsFeed('Tue Feb 04 2020', 'There’s something always being added to this page like new features and projects, so you might see a few glitches here and there lol', [], 0),
      createNewsFeed('Tue Feb 04 2020', 'Click on the image bellow to view projects', [], 0),
      createNewsFeed('Tue Feb 04 2020', <a href=" https://luisabad3210.github.io/twitter-project/"><img alt='Twitter project' src={projectOne} width='100%' height='220%' /></a>, [], 0),
      createNewsFeed('Tue Feb 04 2020', <a className='projectTwo' href="https://luisabad3210.github.io/calculator-app/"><img alt='Calculator project' src={projectTwo} width='50%' height='50%' /></a>, [], 0),

    ],
  }
  toggleDarkMode = () => {
    const isDarkMode = this.state.isDarkMode;
    this.setState({isDarkMode: !isDarkMode})
  }
  render() {
    return (
      <div style={{...this.state.isDarkMode ? styles.darkMode : null, ...styles.body}}>
        <div> 
          <Banner 
            isDarkMode={this.state.isDarkMode}
            toggleDarkMode={this.toggleDarkMode}
          />

          <Header />

          <Content 
            // newPost={this.state.newPost}
            content={this.state.feeds}
            transferPost = {(text) => {
              let add = createNewsFeed(new Date().toDateString(), text,[], 0);
              let x = this.state.feeds;
              x.unshift(add);
              this.setState({feeds: x})
            }}

            magicalFunction = {(feed) => {
              let current = feed.likes;
              current === 0 ? feed.likes = 1 : feed.likes = 0;
              this.setState({x: feed.likes})
            }}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  // body: {
  //   height: "100vh",
  // },
  darkMode: {
    'backgroundColor': "#595963",
  }
}

export default App;
