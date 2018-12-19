import { connect } from 'react-redux';

import { AppState } from '../../store';
import { Playlist } from '../playlists.model';
import { selectPlaylist, getSelectedPlaylist } from '../../reducers/playlists';

import FilteredItems from '../components/FilteredItems';

type StateProps = {
  items: Array<Playlist>,
  selected?: Playlist
}

type DispatchProps = {
  onSelect(item: Playlist): void,
}

const connectPlaylists = connect<StateProps, DispatchProps, {}, AppState>(
  state => ({
    items: state.playlists.items,
    selected: getSelectedPlaylist(state)
  }),
  dispatch => ({
    onSelect(playlist: Playlist) {
      // debugger
    // const selectedItem = store.getState().playlists.selected;

      dispatch(selectPlaylist(playlist.id));
    }
  })
);

export const PlaylistsListContainer = connectPlaylists(FilteredItems);