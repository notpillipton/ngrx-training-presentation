import * as fromActions from '../actions/ui-state.action';

// Set up the state
export interface UIState {
  detailsPanel: fromActions.DetailsPanelState;
  leftPanel: fromActions.LeftPanelState;
  mainPanel: fromActions.MainPanelState;
}

export const initialState: UIState = {
  detailsPanel: fromActions.DetailsPanelState.PANEL_OFF,
  leftPanel: fromActions.LeftPanelState.CONTROLS,
  mainPanel: fromActions.MainPanelState.PANEL_OFF
};

// Change the state with a reducer
export function reducer(state = initialState, action: fromActions.UIPanelStateAction): UIState {
  switch (action.type) {
    case fromActions.ActionTypes.DETAILS_PANEL_STATE_CHANGE: {
      return {
        ...state,
        detailsPanel: action.payload
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
export const getDetailsPanel = (state: UIState) => state.detailsPanel;
export const getLeftPanel = (state: UIState) => state.leftPanel;
export const getMainPanel = (state: UIState) => state.mainPanel;
