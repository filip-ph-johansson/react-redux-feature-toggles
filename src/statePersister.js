import constants from './constants';

const persistFeatureState = (featureKey, featureState) => {
  debugger;
    let persistedState = JSON.parse(sessionStorage.getItem(constants.STORE_KEY)) || {};

    persistedState[featureKey] = featureState;

    sessionStorage.setItem(constants.STORE_KEY, JSON.stringify(persistedState));
}

const retrieveState = () => {
  return(
    JSON.parse(sessionStorage.getItem(constants.STORE_KEY))
  );
}

export default { persistFeatureState, retrieveState };
