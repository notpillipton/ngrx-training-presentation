import * as fromActions from '../actions/ui-state.action';

// Set up the state
export interface UIState {
  detailPanel: fromActions.DetailPanelState;
  leftPanel: fromActions.LeftPanelState;
  mainPanel: fromActions.MainPanelState;
}

export const initialState: UIState = {
  detailPanel: fromActions.DetailPanelState.PANEL_OFF,
  leftPanel: fromActions.LeftPanelState.CONTROLS,
  mainPanel: fromActions.MainPanelState.PANEL_OFF
};

// Change the state with a reducer
export function reducer(state = initialState, action: fromActions.UIPanelStateAction): UIState {
  switch (action.type) {
    case fromActions.ActionTypes.DETAIL_PANEL_STATE_CHANGE: {
      return {
        ...state,
        detailPanel: action.payload
      };
    }
    case fromActions.ActionTypes.LEFT_PANEL_STATE_CHANGE: {
      return {
        ...state,
        leftPanel: action.payload
      };
    }
    case fromActions.ActionTypes.MAIN_PANEL_STATE_CHANGE: {
      return {
        ...state,
        mainPanel: action.payload
      };
    }
    default:
      return state;
  }
}

// Create functions that help you get at smaller slices of state quickly
export const getDetailPanel = (state: UIState) => state.detailPanel;
export const getLeftPanel = (state: UIState) => state.leftPanel;
export const getMainPanel = (state: UIState) => state.mainPanel;
