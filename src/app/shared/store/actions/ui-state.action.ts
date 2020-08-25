import { Action } from '@ngrx/store';

export enum DetailsPanelState {
  PANEL_OFF = '[DetailsPanelState] Off',
  QUOTE_DETAIL = '[DetailsPanelState] Show Quote Detail'
}

export enum LeftPanelState {
  PANEL_OFF = '[LeftPanelState] Off',
  CONTROLS = '[LeftPanelState] Show Controls',
  MONITOR = '[LeftPanelState] Show Monitor'
}

export enum MainPanelState {
  PANEL_OFF = '[MainPanelState] Off',
  QUOTES_TABLE = '[MainPanelState] Show Quotes Table'
}

export const enum ActionTypes {
  DETAILS_PANEL_STATE_CHANGE = '[UIPanelState] Change Details Panel State',
  LEFT_PANEL_STATE_CHANGE = '[UIPanelState] Change Left Panel State',
  MAIN_PANEL_STATE_CHANGE = '[UIPanelState] Change Main Panel State'
}

export class DetailsPanelStateChange implements Action {
  readonly type = ActionTypes.DETAILS_PANEL_STATE_CHANGE;
  constructor(public payload: DetailsPanelState) {}
}

export class LeftPanelStateChange implements Action {
  readonly type = ActionTypes.LEFT_PANEL_STATE_CHANGE;
  constructor(public payload: LeftPanelState) {}
}

export class MainPanelStateChange implements Action {
  readonly type = ActionTypes.MAIN_PANEL_STATE_CHANGE;
  constructor(public payload: MainPanelState) {}
}

export type UIPanelStateAction = DetailsPanelStateChange | LeftPanelStateChange | MainPanelStateChange;
