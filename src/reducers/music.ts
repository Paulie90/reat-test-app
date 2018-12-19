import { Action, ActionCreator, Dispatch, Reducer } from "redux";

import { Album } from "../music/music.model";
import { musicService } from "../services";

/* State */
export interface MusicState {
  results: Array<Album>;
  query: string;
  isLoading: boolean,
  isSuccess: boolean
  error?: Error;
}

const initialState: MusicState = {
  results: [],
  query: '',
  isLoading: false,
  isSuccess: false,
}

/* Actions */
interface SEARCH_START extends Action<'SEARCH_START'> {
  payload: MusicState['query']
}

interface SEARCH_FAIL extends Action<'SEARCH_FAILED'> {
  payload: Error
}

interface SEARCH_SUCCESS extends Action<'SEARCH_SUCCESS'> {
  payload: MusicState['results']
}

type MusicActions = SEARCH_START | SEARCH_FAIL | SEARCH_SUCCESS;

/* Action Creators */
const searchStart: ActionCreator<SEARCH_START> = (query: string) => ({
  type: 'SEARCH_START',
  payload: query
});

const searchFail: ActionCreator<SEARCH_FAIL> = (error: Error) => ({
  type: 'SEARCH_FAILED',
  payload: error
});

const searchSuccess: ActionCreator<SEARCH_SUCCESS> = (result: Array<Album>) => ({
  type: 'SEARCH_SUCCESS',
  payload: result
});

export const searchAction = (dispatch: Dispatch<MusicActions>) => (query: string): void => {
  dispatch(searchStart(query));

  musicService.searchAlbums(query)
    .then((result: Array<Album>) => {
      dispatch(searchSuccess(result));
    })
    .catch((e: Error) => {
      dispatch(searchFail(e));
    });
}

/* Reducer */
export const musicReducer: Reducer<MusicState, MusicActions> = (
  state: MusicState = initialState,
  action: MusicActions
) => {
  switch (action.type) {
    case 'SEARCH_START':
      return {
        ...state,
        isLoading: true,
        query: action.payload,
      }
    case 'SEARCH_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        results: action.payload
      }
    default:
      return state;
  }
}
