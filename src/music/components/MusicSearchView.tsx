import React, { PureComponent } from "react";

import { Album, AlbumsResponse } from "../music.model";

import AlbumGrid from "./AlbumGrid";
import SearchForm from "./SearchForm";
import { MusicSearchContext } from '../../services';

export default class MusicSearchView extends PureComponent<{}> {
  render() {
    return (
      <>
        <div className="row">
          <div className="col">
            <MusicSearchContext.Consumer>
              {context => <SearchForm onSearch={context.onSearch} />}
            </MusicSearchContext.Consumer>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <MusicSearchContext.Consumer>
              {context => <AlbumGrid albums={context.albums} />}
            </MusicSearchContext.Consumer>
          </div>
        </div>
      </>
    );
  }
}