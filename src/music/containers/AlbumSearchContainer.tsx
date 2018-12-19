import { connect } from "react-redux";

import { AppState } from "../../store";
import { searchAction } from "../../reducers/music";

import { SearchForm } from "../components/SearchForm";

type DispatchProps = {
  onSearch(query: string): void,
}

export const AlbumSearchContainer = connect<{}, DispatchProps, {}, AppState>(
  () => ({}),
  dispatch => ({
    onSearch: searchAction(dispatch)
  })
)(SearchForm);
