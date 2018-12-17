import React, { Component } from 'react';
import styles from './App.module.css';
import { PlaylistsView } from './playlists/components/PlaylistsView';

class App extends Component {
  render() {
    return (
      <div className={`container ${styles.App}`}>
        <div className="row">
          <div className="col">
            <PlaylistsView></PlaylistsView>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
