import React, { PureComponent } from "react";

import styles from './AlbumCard.module.scss';
import { Album } from "../music.model";

type Props = {
  album: Album;
}

type State = {

}

export default class AlbumCard extends PureComponent<Props, State> {
  render() {
    const album = this.props.album;

    return (
      <div className={`card ${styles.card}`}>
        <img src={album.images[0] ? album.images[0].url : ''} alt="" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">
            {album.name}
          </h5>
        </div>
      </div>
    );
  }
}