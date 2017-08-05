import React, { Component } from 'react';
import { Howl } from 'howler';
import Menu from './Menu';
import Parallax from './Parallax';
import Content from './Content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      song: null,
      togglePlay: true,
      play: 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/navbuttons/menu_music_stop.png',
    };
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount() {
    this.initMusic();
  }

  initMusic() {
    if (window.innerWidth > 430) {
      const song = new Howl({
        src: ['https://s3-us-west-1.amazonaws.com/hugodolportfolio/audio/backgroundSong.mp3'],
        loop: true,
        volume: 0.5,
        html5: true,
      });
      this.setState({ song });
      song.once('load', () => song.play());
    }
  }

  handlePlay() {
    this.state.togglePlay
      ? this.state.song.stop()
      : this.state.song.play();

    this.state.togglePlay
      ? this.setState({ play: 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/navbuttons/menu_music_play.png' })
      : this.setState({ play: 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/navbuttons/menu_music_stop.png' });

    this.setState({ togglePlay: !this.state.togglePlay });
  }

  render() {
    return (
      <div className="top">
        <Menu
          handlePlay={this.handlePlay}
          playUrl={this.state.play}
        />
        <Parallax />
        <Content />
      </div>
    );
  }
}

export default App;
