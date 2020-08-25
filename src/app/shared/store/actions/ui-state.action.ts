import { Action } from '@ngrx/store';

export enum DetailPanelState {
  PANEL_OFF = '[DetailPanelState] Off',
  QUOTE_DETAIL = '[DetailPanelState] Show Quote Detail'
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
  DETAIL_PANEL_STATE_CHANGE = '[UIPanelState] Change Detail Panel State',
  LEFT_PANEL_STATE_CHANGE = '[UIPanelState] Change Left Panel State',
  MAIN_PANEL_STATE_CHANGE = '[UIPanelState] Change Main Panel State'
}

export class DetailPanelStateChange implements Action {
  readonly type = ActionTypes.DETAIL_PANEL_STATE_CHANGE;
  constructor(public payload: DetailPanelState) {}
}

export class LeftPanelStateChange implements Action {
  readonly type = ActionTypes.LEFT_PANEL_STATE_CHANGE;
  constructor(public payload: LeftPanelState) {}
}

export class MainPanelStateChange implements Action {
  readonly type = ActionTypes.MAIN_PANEL_STATE_CHANGE;
  constructor(public payload: MainPanelState) {}
}

export type UIPanelStateAction = DetailPanelStateChange | LeftPanelStateChange | MainPanelStateChange;
