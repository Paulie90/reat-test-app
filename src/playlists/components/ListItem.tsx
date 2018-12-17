import React, { Component, ReactNode, MouseEvent } from "react";
import { Playlist } from "../../models/Playlist";

type Props = {
  playlist: Playlist,
  selected?: boolean,
  onSelect(item: Playlist): void,
}

export default class ListItem extends Component<Props> {
  selectHandler = () => {
    this.props.onSelect(this.props.playlist);
  }

  render(): ReactNode {
    const playlist = this.props.playlist;

    return (
      <div className={`list-group-item ${this.props.selected ? 'active' : ''}`} onClick={this.selectHandler}>
        <p>
          <span style={{
            fontWeight: 700,
            color: playlist.color
          }}>{playlist.name} </span>
          <span style={{ color: 'red' }}>{playlist.favourite ? 'Fav! ' : ''}</span>
        </p>
      </div>
    );
  }
}