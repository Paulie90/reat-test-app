import React from "react";

import { AlbumSearchContainer } from "../containers/AlbumSearchContainer";
import { AlbumGridContainer } from "../containers/AlbumGridContainer";

export const MusicSearchView = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <AlbumSearchContainer />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <AlbumGridContainer />
        </div>
      </div>
    </>
  );
}