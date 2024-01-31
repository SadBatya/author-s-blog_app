import { ACTION_TYPE } from '../actions';

const initialPostState = {
  id: '',
  title: '',
  imageUrl: '',
  content: '',
  publisheAt: '',
  comment: [],
};

export const postReducer = (state = initialPostState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_POST_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
