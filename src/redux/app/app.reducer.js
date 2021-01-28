import { AppTypes } from './app.types';

const INITIAL_STATE = {
  dialog: {
    type: null,
    data: null,
  },
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppTypes.DIALOG_OPEN:
      return {
        ...state,
        dialog: { type: action.payload.type, data: action.payload.data },
      };

    case AppTypes.DIALOG_CLOSE:
      return {
        ...state,
        dialog: INITIAL_STATE.dialog,
      };

    default:
      return state;
  }
};

export default appReducer;
