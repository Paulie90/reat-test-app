import React from "react";

import { PlaylistsListContainer } from "../containers/PlaylistsListContainer";
import { SelectedPlaylistContainer } from "../containers/SelectedPlaylistContainer";

export const PlaylistsView = () => {
  return (
    <div className="row">
      <div className="col">
        <PlaylistsListContainer />
      </div>
      <div className="col">
        <SelectedPlaylistContainer />
      </div>
    </div>
  )
};