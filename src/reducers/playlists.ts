import { Reducer, Action, ActionCreator } from "redux";

import { Playlist } from "../playlists/playlists.model";
import { AppState } from "../store";

export interface PlaylistState {
  items: Array<Playlist>,
  selected?: Playlist['id'],
  isEditMode: boolean
}

const initState: PlaylistState = {
  isEditMode: false,
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
}

interface PLAYLIST_SELECT extends Action<'PLAYLIST_SELECT'> {
  payload: Playlist['id'];
}

interface PLAYLIST_UPDATE extends Action<'PLAYLIST_UPDATE'> {
  payload: Playlist;
}

type PlaylistActions = PLAYLIST_SELECT | PLAYLIST_UPDATE;

export const playlistReducer: Reducer<PlaylistState, PlaylistActions> = (
  state: PlaylistState = initState,
  action: PlaylistActions
) => {
  switch (action.type) {
    case 'PLAYLIST_SELECT':
      return {
        ...state,
        selected: action.payload
      }
    case 'PLAYLIST_UPDATE':
      return {
        ...state,
        items: state.items.map(item => item.id === action.payload.id ? action.payload : item)
      }
    default:
      return state;
  }
}

export const selectPlaylist: ActionCreator<PLAYLIST_SELECT> = (payload: number) => ({
  type: 'PLAYLIST_SELECT',
  payload
});

export const updatePlaylist: ActionCreator<PLAYLIST_UPDATE> = (payload: Playlist) => ({
  type: 'PLAYLIST_UPDATE',
  payload
});

(window as any).selectPlaylist = selectPlaylist;
(window as any).updatePlaylist = updatePlaylist;

/**
 * SELECTORS
 */

export const getSelectedPlaylist = (state: AppState) =>
  state.playlists.items.find(item => item.id === state.playlists.selected)
