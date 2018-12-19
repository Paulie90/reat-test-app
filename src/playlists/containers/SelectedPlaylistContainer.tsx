import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { AppState } from "../../store";
import { Playlist } from "../playlists.model";
import { getSelectedPlaylist, updatePlaylist } from "../../reducers/playlists";

import PlaylistDetails from "../components/PlaylistDetails";

type StateProps = {
  playlist?: Playlist,
}

type DispatchProps = {
  onSave(draft: Playlist): void
}

const connectSelectedPlaylist = connect<StateProps, DispatchProps, {}, AppState>(
  state => ({
    playlist: getSelectedPlaylist(state)
  }),
  dispatch => bindActionCreators({
    onSave: updatePlaylist
  }, dispatch)
);

export const SelectedPlaylistContainer = connectSelectedPlaylist(
  (props: {
    playlist?: Playlist,
    onSave(draft: Playlist): void
  }) => {
    return props.playlist ?
      (
        <PlaylistDetails onSave={props.onSave}
          playlist={props.playlist} />
      ) :
      (
        <p>Please select the playlist</p>
      )
  }
);