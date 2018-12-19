import { connect } from "react-redux";

import { AppState } from "../../store";
import { Album } from "../music.model";

import { AlbumGrid } from "../components/AlbumGrid";

type StateProps = {
  albums: Array<Album>
}

export const AlbumGridContainer = connect<StateProps, {}, {}, AppState>(
  (state: AppState) => ({
    albums: state.music.results
  }),
)(AlbumGrid);