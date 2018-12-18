import React, { PureComponent } from "react";

import { MusicSearchContext, musicService } from "../services";
import { Album } from "../music/music.model";

type State = {
  albums: Array<Album>
}

export class MusicSearchProvider extends PureComponent<{}, State> {
  state = {
    albums: []
  }

  onSearch = (query: string) => {
    musicService.searchAlbums(query).then((albums: Array<Album>) => {
      this.setState({
        albums
      })
    })
  }

  render() {
    return (
      <MusicSearchContext.Provider value={{
        onSearch: this.onSearch,
        albums: this.state.albums
      }}>
        {this.props.children}
      </MusicSearchContext.Provider>
    )
  }
}