import * as fromActions from '../actions/quotes.action';
import { FamousQuote } from '@sharedModels/famous-quote.model';

// Set up the state
export interface AppStateState {
  mainPanel: any;
  detailPanel: any;
}

export const initialState: AppStateState = {
  mainPanel: null,
  detailPanel: null
};

// Change the state with a reducer
export function reducer(state = initialState, action: fromActions.QuotesAction): AppStateState {
  switch (action.type) {
    default:
      return state;
  }
}

// Get at smaller slices of state quickly
export const getMainPanel = (state: AppStateState) => state.mainPanel;
export const getDetailPanel = (state: AppStateState) => state.detailPanel;
