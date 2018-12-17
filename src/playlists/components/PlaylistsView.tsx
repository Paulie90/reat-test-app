import React, { Component, ReactNode, Props } from "react";

import ItemsList from "./ItemsList";
import PlaylistDetails from "./PlaylistDetails";
import { Playlist } from "../../models/Playlist";

type State = {
  items: Array<Playlist>,
  selected?: Playlist
}

export class PlaylistsView extends Component<{}, State> {
  state: State = {
    items: [
      {
        id: 1,
        name: 'My playlist',
        favourite: false,
        color: '#ffff00'
      },
      {
        id: 2,
        name: 'COśtam',
        favourite: true,
        color: '#00ff00'
      },
      {
        id: 3,
        name: 'QWEASD',
        favourite: false,
        color: '#999999'
      },
      {
        id: 4,
        name: 'test',
        favourite: false,
        color: '#00ffff'
      },
    ],
  };

  onSelect = (item: Playlist): void => {
    this.setState({
      selected: item
    });
  }

  onSave = (draft: Playlist) => {
    this.setState((prevState: State) => {
      return {
        items: prevState.items.map(item => item.id === draft.id ? draft : item)
      }
    })
  }

  render(): ReactNode {
    return (
      <div className="row">
        <div className="col">
          <ItemsList items={this.state.items} selected={this.state.selected} onSelected={this.onSelect} />
        </div>
        <div className="col">
          {this.state.selected ?
            (
              <PlaylistDetails playlist={this.state.selected} onSave={this.onSave} />
            ) :
            (
              <h3>Please select the playlist</h3>
            )}
        </div>
      </div>
    )
  }
}