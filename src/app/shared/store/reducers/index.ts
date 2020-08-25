import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromQuotes from './quotes.reducer';
import * as fromUIState from './ui-state.reducer';
import * as fromSelectorFunctions from './selector-functions';

// Structure the state you will track here
export interface ApplicationState {
  uiState: fromUIState.UIState;
  quotesState: fromQuotes.QuotesState;
}

// Create a map of the reducers to pass to the store
export const applicationReducers: ActionReducerMap<ApplicationState> = {
  uiState: fromUIState.reducer,
  quotesState: fromQuotes.reducer
};

// Create and name a feature selector
export const getApplicationState = createFeatureSelector<ApplicationState>('application-state');

// Create other selectors
// Usually you'll start with some chunk of state and then apply a function to refine it further
// It's helpful to add comments to organize your selectors, since you might end up with many of them

// UI State
export const getUIState = createSelector(getApplicationState, (state: ApplicationState) => state.uiState);
export const getDetailPanelState = createSelector(getUIState, fromUIState.getDetailPanel);
export const getLeftPanelState = createSelector(getUIState, fromUIState.getLeftPanel);
export const getMainPanelState = createSelector(getUIState, fromUIState.getMainPanel);

// Quotes State
export const getQuotesState = createSelector(getApplicationState, (state: ApplicationState) => state.quotesState);
export const getQuotesData = createSelector(getQuotesState, fromQuotes.getQuotesData);
export const getQuotesError = createSelector(getQuotesState, fromQuotes.getRecentErrorMessage);

// Create helper functions to cleanly manipulate data in selectors
export const isQuotes404Error = createSelector(getQuotesError, fromSelectorFunctions.is404error);
