import constants from './constants';
import statePersister from './statePersister';

const defaultState = {
};

export default (toggles = defaultState) => {
  
  const stateToBeUsed = statePersister.retrieveState() || toggles;

  return (state = stateToBeUsed, action) => {
    switch (action.type) {
      case constants.SET_FEATURE_STATE:
        return {
          ...state,
          [action.payload.featureKey]: action.payload.featureState
        };
      default:
        return state;
    }
  };
};
