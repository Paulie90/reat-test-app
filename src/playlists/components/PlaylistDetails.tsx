import React, { Component, ReactNode, ChangeEvent } from "react";

import { Playlist } from "../../models/Playlist";

type State = {
  playlist: Playlist
}

export default class PlaylistDetails extends Component<{}, State> {
  state: State = {
    playlist: {
      id: 1,
      name: 'My playlist',
      favourite: true,
      colour: '#00ff00'
    }
  }

  handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState(
      {
        playlist: {
          ...this.state.playlist,
          name: event.target.value
        }
      }
    )
  }

  render(): ReactNode {
    const playlist = this.state.playlist;

    return (
      <>
        <div className="list-group">
          <h4>Details</h4>
          <dl>
            <dt>Name</dt>
            <dd>{playlist.name}</dd>
            <dt>Favourite</dt>
            <dd>{playlist.favourite ? 'Yes' : 'No'}</dd>
            <dt>Colour</dt>
            <dd style={
              {
                backgroundColor: playlist.colour
              }
            }></dd>
          </dl>
        </div>
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className="form-control" value={playlist.name} onChange={this.handleNameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="favourite">Favourite</label>
            <input type="checkbox" name="favourite" />
          </div>
          <div className="form-group">
            <label htmlFor="colour">Colour</label>
            <input type="color" name="colour" />
          </div>
        </div>
      </>
    );
  }
}