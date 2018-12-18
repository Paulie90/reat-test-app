import React, { PureComponent, ReactNode, ChangeEvent } from "react";

import { Playlist } from "../playlists.model";

type State = {
  isEditing?: boolean,
  playlist: Playlist
}

type Props = {
  playlist: Playlist,
  onSave(draft: Playlist): void
}

export default class PlaylistDetails extends PureComponent<Props, State> {
  state: State = {
    playlist: this.props.playlist
  }

  static getDerivedStateFromProps(props: Props, nextState: State): Partial<Props> {
    return {
      playlist: nextState.playlist.id === props.playlist.id ? nextState.playlist : props.playlist
    }
  }

  handleFieldChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const target = event.target;
    const inputName = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      playlist: {
        ...this.state.playlist,
        [inputName]: value,
      }
    });
  }

  edit = (): void => {
    this.setState({
      isEditing: true
    });
  }

  cancel = (): void => {
    this.setState({
      isEditing: false,
      playlist: this.props.playlist
    });
  }

  save = (): void => {
    this.props.onSave(this.state.playlist);
    this.setState({
      isEditing: false,
    });
  }

  render(): ReactNode {
    const playlist = this.state.playlist;
    const isEditing = this.state.isEditing;
    const editTemplate = <div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="form-control" value={playlist.name} onChange={this.handleFieldChange} />
      </div>
      <div className="form-group">
        <label htmlFor="favourite">Favourite</label>
        <input type="checkbox" name="favourite" checked={playlist.favourite} onChange={this.handleFieldChange} />
      </div>
      <div className="form-group">
        <label htmlFor="color">Color</label>
        <input type="color" name="color" value={playlist.color} onChange={this.handleFieldChange} />
      </div>

      <button className="btn btn-danger" onClick={this.cancel}>Close</button>
      <button className="btn btn-success" onClick={this.save}>Save</button>
    </div>;

    const detailsTemplate = <div className="list-group">
      <h4>Details</h4>
      <dl>
        <dt>Name</dt>
        <dd>{playlist.name}</dd>
        <dt>Favourite</dt>
        <dd>{playlist.favourite ? 'Yes' : 'No'}</dd>
        <dt>Color</dt>
        <dd style={{
          height: '20px',
          backgroundColor: playlist.color
        }}></dd>
      </dl>

      <button className="btn btn-info" onClick={this.edit}>Edit</button>
    </div>;

    return (
      <>
        {isEditing ? editTemplate : detailsTemplate}
      </>
    );
  }
}