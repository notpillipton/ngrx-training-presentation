import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromQuotes from './quotes.reducer';
import * as fromAppState from './app-state.reducer';
import * as fromSelectorFunctions from './selector-functions';

// Structure the state you will track here
export interface ApplicationState {
  appStateState: fromAppState.AppStateState;
  quotesState: fromQuotes.QuotesState;
}

// Create a map of the reducers to pass to the store
export const ApplicationReducers: ActionReducerMap<ApplicationState> = {
  appStateState: fromAppState.reducer,
  quotesState: fromQuotes.reducer
};

// Create and name a feature selector
export const getApplicationState = createFeatureSelector<ApplicationState>('application-state');

// Create other selectors
// Usually you'll start with some chunk of state and then apply a function to refine it further
// It's helpful to add comments to organize your selectors, since you might end up with many of them

// App State State
export const getAppState = createSelector(getApplicationState, (state: ApplicationState) => state.appStateState);
export const getDetailPanelState = createSelector(getAppState, fromAppState.getDetailPanel);
export const getMainPanelState = createSelector(getAppState, fromAppState.getMainPanel);

// Quotes State
export const getQuotesState = createSelector(getApplicationState, (state: ApplicationState) => state.quotesState);
export const getQuotesData = createSelector(getQuotesState, fromQuotes.getQuotesData);
export const getQuotesError = createSelector(getQuotesState, fromQuotes.getRecentErrorMessage);
export const isQuotes404Error = createSelector(getQuotesError, fromSelectorFunctions.is404error);
