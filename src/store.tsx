import { createStore, combineReducers } from 'redux';

import { counterReducer } from './reducers/counter';
import { PlaylistState, playlistReducer } from './reducers/playlists';
import { musicReducer, MusicState } from './reducers/music';

export interface AppState {
  music: MusicState;
  playlists: PlaylistState;
  counter: number;
}

const rootReducer = combineReducers<AppState>({
  playlists: playlistReducer,
  counter: counterReducer,
  music: musicReducer,
})

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

// debug
(window as any).store = store;