import { ACTION_TYPE } from '../actions';

const initialAppState = {
  wasLogout: false,
  modal: {
    isOpen: false,
    text: '',
    onConfirm: () => {},
    onCancel: () => {},
  },
};

export const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOGOUT:
      return {
        ...state,
        wasLogout: !state.wasLogout,
      };
    default:
      return state;
  }
}
