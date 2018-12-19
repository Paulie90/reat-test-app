import React, { PureComponent } from "react";

import { Album } from "../music.model";

import AlbumCard from "./AlbumCard";

type Props = {
  albums: Array<Album>
}

export const AlbumGrid = (props: Props) => {
  const albumNodes = props.albums.map(album => <AlbumCard album={album} key={album.id} />);

  return (
    <div className="card-group">
      {albumNodes}
    </div>
  );
}