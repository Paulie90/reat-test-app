import React, { PureComponent, ReactNode } from "react";

import PlaylistDetails from "./PlaylistDetails";
import FilteredItems from "./FilteredItems";
import { Playlist } from "../playlists.model";

type State = {
  items: Array<Playlist>,
  selected?: Playlist | null
}

export class PlaylistsView extends PureComponent<{}, State> {
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
      selected: this.state.selected && this.state.selected.id === item.id ? null : item
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
          <FilteredItems items={this.state.items} selected={this.state.selected} onSelect={this.onSelect} />
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