import React, { PureComponent } from "react";

import { Album } from "../music.model";

import AlbumCard from "./AlbumCard";

type Props = {
  albums: Array<Album>
}

type State = {

}

export default class AlbumGrid extends PureComponent<Props, State> {
  render() {
    const albumNodes = this.props.albums.map(album => <AlbumCard album={album} key={album.id} />);

    return (
      <div className="card-group">
        {albumNodes}
      </div>
    );
  }
}