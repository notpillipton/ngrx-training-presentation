import * as fromActions from '../actions/quotes.action';
import { FamousQuote } from '@sharedModels/famous-quote.model';

// Set up the state
export interface QuotesState {
  quotesData: FamousQuote[];
  selectedQuote: FamousQuote;
  recentErrorMessage: string;
}

export const initialState: QuotesState = {
  quotesData: null,
  selectedQuote: null,
  recentErrorMessage: ''
};

// Change the state with a reducer
export function reducer(state = initialState, action: fromActions.QuotesAction): QuotesState {
  switch (action.type) {
    case fromActions.ActionTypes.QUOTES_SUCCESS: {
      return {
        ...state,
        quotesData: action.payload,
        recentErrorMessage: ''
      };
    }
    case fromActions.ActionTypes.QUOTES_FAIL: {
      return {
        ...state,
        recentErrorMessage: action.payload
      };
    }
    case fromActions.ActionTypes.SELECT_QUOTE_BY_ID: {
      return {
        ...state,
        selectedQuote: state.quotesData[action.payload]
      };
    }
    default:
      return state;
  }
}

// Create functions that help you get at smaller slices of state quickly
export const getQuotesData = (state: QuotesState) => state.quotesData;
export const getSelectedQuote = (state: QuotesState) => state.selectedQuote;
export const getRecentErrorMessage = (state: QuotesState) => state.recentErrorMessage;
