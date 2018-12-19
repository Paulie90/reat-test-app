import { Action, ActionCreator } from "redux";

export interface INCREMENT extends Action<'INCREMENT'> {
  payload: number
}

export interface DECREMENT extends Action<'DECREMENT'> {
  payload: number
}

type CounterActions = INCREMENT | DECREMENT;

export const counterReducer = (state = 0, action: CounterActions) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload
    case 'DECREMENT':
      return state - action.payload
    default: return state;
  }
}

export const increment: ActionCreator<INCREMENT> = (payload = 1) => ({
  type: 'INCREMENT',
  payload
});

export const decrement: ActionCreator<DECREMENT> = (payload = 1) => ({
  type: 'DECREMENT',
  payload
});