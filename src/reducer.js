import constants from './constants';

const initialState = {
};

export default (toggles = initialState) => {
  return (state = toggles, action) => {
    switch (action.type) {
      case constants.SET_FEATURE_STATE:
        return {
          ...state,
          [action.payload.featureKey]: action.payload.state
        };
      default:
        return state;
    }
  };
};
